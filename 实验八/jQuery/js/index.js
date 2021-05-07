var img_list = ["img/DH_hover.png", "img/DH_static.png", "img/druid_hover.png", "img/druid_static.png", "img/hunter_hover.png", "img/hunter_static.png", "img/mage_hover.png", "img/mage_static.png", "img/paladin_hover.png", "img/paladin_static.png", "img/priest_hover.png", "img/priest_static.png", "img/rogue_hover.png", "img/rogue_static.png", "img/shaman_hover.png", "img/shaman_static.png", "img/warlock_hover.png", "img/warlock_static.png", "img/warrior_hover.png", "img/warrior_static.png"];
var main_img_list = ["img/DH.jpg", "img/druid.jpg", "img/hunter.jpg", "img/mage.jpg", "img/paladin.jpg", "img/priest.jpg", "img/rogue.jpg", "img/shaman.jpg", "img/warlock.jpg", "img/warrior.jpg", ]
var enlarge, data, blank = false;
var picture = true;
var num_data = 3;

$(document).ready(function() {
    $("button.picture").on("mouseover mouseout click", function(event) {
        if (event.type == "mouseover") {
            $(this).css("borderColor", "rgb(121,27,28)");
        } else if (event.type == "mouseout" && !picture) {
            $(this).css("borderColor", "gray");
        } else if (event.type == "click") {
            $("div.page-data").slideUp(200, function() {
                $("button.data").css("background-color", "#f2f2f2");
                $("button.data").css("border-color", "gray");
                $("div.page-blank").slideUp(200, function() {
                    $("button.blank").css("background-color", "#f2f2f2");;
                    $("button.blank").css("border-color", "gray");
                    $("div.page-picture").slideDown(500);
                    $("button.picture").css("backgroundColor", 'rgb(121,27,28)');
                    $("button.picture").css("borderColor", "rgb(121,27,28)");
                });
            });
            picture = true, data = false, blank = false;
        }
    });
    $("button.data").on("mouseover mouseout click", function(event) {
        if (event.type == "mouseover") {
            $(this).css("borderColor", "rgb(46,54,111)");
        } else if (event.type == "mouseout" && !data) {
            $(this).css("borderColor", "gray");
        } else if (event.type == "click") {
            $("div.main").fadeOut(200, function() {
                $("div.main").siblings().css("filter", "none");
                $("div.page-picture").slideUp(200, function() {
                    $("button.picture").css("background-color", "#f2f2f2");
                    $("button.picture").css("border-color", "gray");
                    $("div.page-blank").slideUp(200, function() {
                        $("button.blank").css("background-color", "#f2f2f2");
                        $("button.blank").css("border-color", "gray");
                        $("div.page-data").slideDown(500);
                        $("div.page-data").css("display", "flex");
                        $("button.data").css("backgroundColor", 'rgb(46,54,111)');
                        $("button.data").css("borderColor", "rgb(46,54,111)");
                    });
                });
            })
            data = true, picture = false, blank = false, enlarge = false;
        }
    });
    $("button.blank").on("mouseover mouseout click", function(event) {
        if (event.type == "mouseover") {
            $(this).css("borderColor", "rgb(41,78,68)");
        } else if (event.type == "mouseout" && !blank) {
            $(this).css("borderColor", "gray");
        } else if (event.type == "click") {
            $("div.main").fadeOut(200, function() {
                $("div.main").siblings().css("filter", "none");
                $("div.page-picture").slideUp(200, function() {
                    $("button.picture").css("background-color", "#f2f2f2");
                    $("button.picture").css("border-color", "gray");
                    $("div.page-data").slideUp(200, function() {
                        $("button.data").css("background-color", "#f2f2f2");
                        $("button.data").css("border-color", "gray");
                        $("div.page-blank").slideDown(500);
                        $("button.blank").css("backgroundColor", 'rgb(41,78,68)');
                        $("button.blank").css("borderColor", "rgb(41,78,68)");
                    });
                });
            });
            blank = true, picture = false, data = false, enlarge = false;
        }
    });

    $("img").on("mouseover mouseout click", function(event) {
        if (!enlarge) {
            if (event.type == "mouseover") {
                $(this).attr("src", img_list[$(this).attr("id") * 2]);
            } else if (event.type == "mouseout") {
                $(this).attr("src", img_list[$(this).attr("id") * 2 + 1]);
            } else if (event.type == "click") {
                event.stopPropagation();
                $("img#main").attr("src", main_img_list[$(this).attr("id")]);
                $("div.main").siblings().css("filter", "blur(3px)");
                $(this).attr("src", img_list[$(this).attr("id") * 2 + 1]);
                $("div.main").fadeIn(500);
                enlarge = true;
            }
        }
    })
    $("div.page-picture").click(function() {
        if (enlarge) {
            $("div.main").fadeOut(500);
            $("div.main").siblings().css("filter", "none");
            enlarge = false;
        }
    });

    $("button.add").on("mouseover mouseout click", function() {
        if (event.type == "mouseover") {
            $(this).css("borderColor", "rgb(41,78,68)");
        } else if (event.type == "mouseout") {
            $(this).css("borderColor", "gray");
        } else if (event.type == "click") {
            if (num_data < 10) {
                var item = $('<div></div>');
                item.attr("class", "item");
                var order = $('<div></div>');
                order.attr("class", "order");
                order.appendTo(item);
                order.html(++num_data);
                var content = $('<div></div>');
                content.attr("class", "content");
                content.appendTo(item);
                var del = $('<div></div>');
                del.attr("class", "del");
                del.html("Delete");
                del.appendTo(item);
                $("div.list").append(item);
            } else {
                alert("Limit exceeded");
            }
        }
    });
    $("div").on("mouseover mouseout click", ".del", function() {
        if (event.type == "mouseover") {
            $(this).css("backgroundColor", "rgb(121,27,28)");
        } else if (event.type == "mouseout") {
            $(this).css("backgroundColor", "rgb(46,54,111)");
        } else if (event.type == "click") {
            $(this).parent().remove();
            num_data--;
            var i = 1;
            $("div.item").each(function() {
                $(this).children(".order").html(i++);
            });
        }
    });
});