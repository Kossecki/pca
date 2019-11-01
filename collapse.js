let element = document.getElementById('mobile');
let list = document.getElementById('list');


element.onclick = function () {
    list.classList.toggle('visible');
}

let items = document.getElementsByClassName("menu-item");
for (var i = 0; i < items.length; i++) {
    items[i].onclick = function () {
        list.classList.remove('visible');
    }
}



let langsOptions = document.getElementById("langs-switcher_options");
let active = document.getElementById("active");

active.onclick = () => {
    langsOptions.classList.add('visible');
let langs = document.getElementsByClassName("navbar-list-item-lang");
for (var i = 0; i < langs.length; i++) {
    langs[i].onclick = function () {
        langsOptions.classList.remove('visible');
    }
}
}
