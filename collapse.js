const switcher = document.querySelector('.default-lang');
const mobile = document.querySelector('.accordion');
const toggleState = function (elem, one, two) {
    document.querySelector(elem).setAttribute('data-state', document.querySelector(elem).getAttribute('data-state') === one ? two : one);
};
mobile.onclick = function (e) {
  toggleState('.menu-box-list', 'open', 'closed');
  e.preventDefault();
};

switcher.onclick = function (e) {
  toggleState('.langs-switcher-options', 'closed', 'open');
  e.preventDefault();
};