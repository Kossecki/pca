// mobile 'menu' button
let element = document.getElementById('mobile');
let list = document.getElementById('list');

element.onclick = function () {
    list.classList.toggle('visible');
}

// desktop language switcher
let langsOptions = document.getElementById("langs-switcher_options");
let active = document.getElementById("active");

active.onclick = () => {
    langsOptions.classList.toggle('visible');
}

window.onclick = function(event) {
    // close the deskop language switcher if the user clicks outside of it
    if (!event.target.matches(".default-lang")) {
        langsOptions.classList.remove('visible');
    }

    // close mobile menu on clicks outside of it
    this.console.log(event.target)
    if (!event.target.matches(".accordion")) {
        list.classList.remove('visible');
    }
}