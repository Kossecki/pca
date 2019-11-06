// mobile 'menu' button
let element = document.getElementById('mobile');

element.onclick = function () {
    list.classList.toggle('visible');
}

// desktop language switcher
let langsOptions = document.getElementById("langs-switcher_options");
let active = document.getElementById("active");

active.onclick = () => {
    langsOptions.classList.toggle('visible');
}
