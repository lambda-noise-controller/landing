let hamburgerButton = document.querySelector('.hamburger-button');
// let nav = document.querySelector('header nav');
// let apple = document.querySelector('header img');

hamburgerButton.addEventListener('click', openHamburger);

function openHamburger() {
  console.log('test2');
  let tabletMenu = document.querySelector('.navigation');
  tabletMenu.classList.toggle('hamburger-closed');
}

console.log('test1');
