'use strict';

// Change color of navBar
const navBar = document.querySelector('#navBar');
const navBarHeight = navBar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > navBarHeight) {
    navBar.classList.add('navBar--dark');
  } else {
    navBar.classList.remove('navBar--dark');
  }
});

// Scroll to section
const navBarMenu = document.querySelector('.navBar__menu');

navBarMenu.addEventListener('click', (event) => {
  const target = event.target.dataset.link;
  if (target == null) {
    return;
  }
  scrollIntoView(`#${target}`);
});

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

function scrollIntoView(selector) {
  document
    .querySelector(selector)
    .scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Transparent Home
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  // const opacity = `${1 - Math.floor(window.scrollY / 100) / 10}`;
  // home.style.opacity = opacity;
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// toggle menu bars
const navBarMenuBar = document.querySelector('.navBar__menu-bar');

navBarMenuBar.addEventListener('click', () => {
  navBarMenu.classList.toggle('hide');
});
