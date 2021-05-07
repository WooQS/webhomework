var time = new Date();
var p9 = document.createElement("li");
var liList = document.querySelectorAll('li');
for (i = 0; i < liList.length; i++) {
    var item = liList[i];
    item.addEventListener('click', showMsg);
}
var parent = document.querySelector("ul");
var child = liList[7];
var exist = true;
document.getElementById("p1").onclick = function() {
    this.style.color = "red";
};
liList[1].onclick = function() {
    document.querySelector("h1").innerHTML = time.getFullYear() + "-" + time.getMonth() + "-" + time.getDate();
};
liList[2].onclick = function() {
    this.classList.add("fn-active");
};
liList[3].onclick = function() {
    if (exist) {
        parent.removeChild(child);
        exist = false;
    }
};
liList[4].onclick = function() {
    window.open("https://www.taobao.com/");
};
liList[5].onclick = function() {
    parent.appendChild(p9);
    p9.innerHTML = "p9";
    var liList = document.querySelectorAll('li');
    for (i = 0; i < liList.length; i++) {
        var item = liList[i];
        item.addEventListener('click', showMsg);
    }
};

function showMsg(e) {
    var item = e.target;
    alert(item.innerHTML);
}
liList[6].onclick = function() {
    document.querySelector(".m-box").style.width = screen.availWidth;
};