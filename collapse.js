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

// close the deskop language switcher if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches(".default-lang")) {
        langsOptions.classList.remove('visible');
    }
}