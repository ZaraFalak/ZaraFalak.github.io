const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu__nav');
const menuLogo = document.querySelector('.menu__logo');
const navItems = document.querySelectorAll('.nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuLogo.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuLogo.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    showMenu = false;
  }
}