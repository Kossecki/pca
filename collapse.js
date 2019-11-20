const switcher = document.querySelector('.default-lang');
const mobile = document.querySelector('.accordion');
const toggleState = function (elem, one, two) {
    document.querySelector(elem).setAttribute('data-state', document.querySelector(elem).getAttribute('data-state') === one ? two : one);
};
mobile.onclick = function (e) {
  toggleState('.menu-box-list', 'open', 'closed');
  e.preventDefault();
};

function closeMobileMenu() {
    document.querySelector('.menu-box-list').setAttribute('data-state', 'closed');
}

// close the menu on a click on the first child of the menu-item 
let mobile_menu_items = document.getElementsByClassName("menu-item");
for (let i=0; i<mobile_menu_items.length; i++) {
    mobile_menu_items[i].childNodes[0].onclick = function (e) {
        closeMobileMenu();
    }
}

switcher.onclick = function (e) {
  toggleState('.langs-switcher-options', 'closed', 'open');
  e.preventDefault();
};

/**
 * recursively search if any of the parent's classes matches 'className' for argument 'elem'
 */
function parentHasClass(elem, className) {
  let e = elem;
  while (e.parentElement != null) {
    if (e.className == className) {
      return true;
    }
    e = e.parentElement;
  }
  return false;
}

window.onclick = function(event) {
  // close mobile menu on clicks outside of it
  if (!parentHasClass(event.target, 'navbar-menu-box')) {
    closeMobileMenu();
  } 

  // close the deskop language switcher if the user clicks outside of it
  if (!parentHasClass(event.target, 'langs-switcher')) {
    document.querySelector('.langs-switcher-options').setAttribute('data-state', 'closed');
  }
}
