let hamburgerAbout = document.querySelector('.hamburger-about');
let hamburgerHome = document.querySelector('.hamburger-home');
// let nav = document.querySelector('header nav');
// let apple = document.querySelector('header img');

hamburgerAbout.addEventListener('click', openHamburger);
hamburgerHome.addEventListener('click', openHamburger);

function openHamburger() {
  console.log('test2');
  hamburgerAbout.classList.toggle('hamburger-open');
  hamburgerHome.classList.toggle('hamburger-open');
}

console.log('test1');
