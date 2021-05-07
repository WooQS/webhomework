var img_list = ["img/DH_hover.png", "img/DH_static.png", "img/druid_hover.png", "img/druid_static.png", "img/hunter_hover.png", "img/hunter_static.png", "img/mage_hover.png", "img/mage_static.png", "img/paladin_hover.png", "img/paladin_static.png", "img/priest_hover.png", "img/priest_static.png", "img/rogue_hover.png", "img/rogue_static.png", "img/shaman_hover.png", "img/shaman_static.png", "img/warlock_hover.png", "img/warlock_static.png", "img/warrior_hover.png", "img/warrior_static.png"],
    main_img_list = ["img/DH.jpg", "img/druid.jpg", "img/hunter.jpg", "img/mage.jpg", "img/paladin.jpg", "img/priest.jpg", "img/rogue.jpg", "img/shaman.jpg", "img/warlock.jpg", "img/warrior.jpg", ],
    enlarge, data, blank = false,
    picture = true,
    num_data = 3;

var btn_picture = document.getElementById('picture'),
    btn_data = document.getElementById('data'),
    btn_blank = document.getElementById('blank'),
    page_picture = document.getElementById('page-picture'),
    page_data = document.getElementById('page-data'),
    page_blank = document.getElementById('page-blank');

var heros = document.getElementsByClassName('hero'),
    page_main = document.getElementById('main'),
    img_main = document.getElementById('img_main'),
    bg = Array.from(page_main.parentNode.children).filter((child) => child !== page_main);

var list = document.getElementById('list'),
    del = document.getElementsByClassName('del'),
    add = document.getElementById('add');

window.onload = function() {
    function change_page(btn1, page1, btn2, page2, btn, page, color) {
        page1.style.transition = 'opacity 0.5s';
        page1.style.opacity = '0';
        page1.style.zIndex = '-1';
        btn1.style.backgroundColor = "#f2f2f2";
        btn1.style.borderColor = 'gray';

        page2.style.transition = 'opacity 0.5s';
        page2.style.opacity = '0';
        page2.style.zIndex = '-1';
        btn2.style.backgroundColor = "#f2f2f2";
        btn2.style.borderColor = 'gray';

        page.style.transition = 'opacity 1s';
        page.style.opacity = '1';
        page.style.zIndex = '1';
        btn.style.backgroundColor = color;
        btn.style.borderColor = color;
    }

    btn_picture.onmouseover = function() {
        this.style.borderColor = 'rgb(121,27,28)';
    };
    btn_picture.onmouseout = function() {
        if (!picture) {
            this.style.borderColor = 'gray';
        }
    };
    btn_picture.onclick = function() {
        change_page(btn_data, page_data, btn_blank, page_blank, btn_picture, page_picture, 'rgb(121,27,28)');
        picture = true, blank = false, data = false;
    };

    btn_data.onmouseover = function() {
        this.style.borderColor = 'rgb(46,54,111)';
    };
    btn_data.onmouseout = function() {
        if (!data) {
            this.style.borderColor = 'gray';
        }
    };
    btn_data.onclick = function() {
        for (var j in bg) {
            bg[j].style.filter = 'none';
        }
        page_main.style.zIndex = '-1';
        page_main.style.opacity = '0';
        change_page(btn_picture, page_picture, btn_blank, page_blank, btn_data, page_data, 'rgb(46,54,111)');
        data = true, picture = false, blank = false, enlarge = false;
    };

    btn_blank.onmouseover = function() {
        this.style.borderColor = 'rgb(41,78,68)';
    };
    btn_blank.onmouseout = function() {
        if (!blank) {
            this.style.borderColor = 'gray';
        }
    };
    btn_blank.onclick = function() {
        for (var j in bg) {
            bg[j].style.filter = 'none';
        }
        page_main.style.zIndex = '-1';
        page_main.style.opacity = '0';
        change_page(btn_picture, page_picture, btn_data, page_data, btn_blank, page_blank, 'rgb(41,78,68)');
        blank = true, picture = false, data = false, enlarge = false;
    };

    for (var i in heros) {
        heros[i].onmouseover = function() {
            if (!enlarge) {
                this.src = img_list[this.id * 2];
            }
        };
        heros[i].onmouseout = function() {
            if (!enlarge) {
                this.src = img_list[this.id * 2 + 1];
            }
        };
        heros[i].onclick = function(e) {
            if (!enlarge) {
                e.stopPropagation();
                img_main.src = main_img_list[this.id];
                this.src = img_list[this.id * 2 + 1];
                for (var j in bg) {
                    bg[j].style.filter = 'blur(3px)';
                }
                page_main.style.transition = 'opacity 2s';
                page_main.style.opacity = '1';
                page_main.style.transition = 'z-index 0.1s';
                page_main.style.zIndex = '1';
                enlarge = true;
            }
        };
    }
    page_picture.onclick = function() {
        if (enlarge) {
            page_main.style.opacity = '0';
            page_main.style.zIndex = '-1';
            for (var j in bg) {
                bg[j].style.filter = 'none';
            }
            enlarge = false;
        }
    };

    add.onmouseover = function() {
        this.style.borderColor = 'rgb(41,78,68)';
    };
    add.onmouseout = function() {
        this.style.borderColor = 'gray';
    };

    function add_del_event(del) {
        del.onmouseover = function() {
            this.style.backgroundColor = 'rgb(121,27,28)';
        };
        del.onmouseout = function() {
            this.style.backgroundColor = 'rgb(46,54,111)';
        };
        del.onclick = function() {
            this.parentNode.remove();
            num_data--;
            var i = 1,
                order = document.getElementsByClassName('order');
            for (var j in order) {
                order[j].innerHTML = i++;
            }
        };
    }

    add.onclick = function() {
        if (num_data < 10) {
            var item = document.createElement('div');
            item.classList.add('item');
            var order = document.createElement('div');
            order.classList.add('order');
            order.innerHTML = ++num_data;
            item.appendChild(order);
            var content = document.createElement('div');
            content.classList.add('content');
            item.appendChild(content);
            var del = document.createElement('div');
            del.classList.add('del');
            del.innerHTML = "Delete";
            item.appendChild(del);
            list.appendChild(item);
            add_del_event(del);
        } else {
            alert("Limit exceeded");
        }
    };

    for (var i in del) {
        add_del_event(del[i]);
    }

};