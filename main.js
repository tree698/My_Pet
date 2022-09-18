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
// const home = document.querySelector('#home');
// const about = document.querySelector('#about');
// const skills = document.querySelector('#skills');
// const gallery = document.querySelector('#gallery');
// const testimonials = document.querySelector('#testimonials');
// const contact = document.querySelector('#contact');

navBarMenu.addEventListener('click', (event) => {
  const target = event.target.dataset.link;
  document
    .querySelector(`#${target}`)
    .scrollIntoView({ behavior: 'smooth', block: 'center' });

  // target.scrollIntoView({ behavior: 'smooth', block: 'center' });

  // switch (target) {
  //   case home:
  //     home.scrollIntoView({ behavior: 'smooth', block: 'center' });
  //     break;
  //   case about:
  //     about.scrollIntoView({ behavior: 'smooth', block: 'center' });
  //     break;
  //   case skills:
  //     skills.scrollIntoView({ behavior: 'smooth', block: 'center' });
  //     break;
  //   case gallery:
  //     gallery.scrollIntoView({ behavior: 'smooth', block: 'center' });
  //     break;
  //   case testimonials:
  //     testimonials.scrollIntoView({ behavior: 'smooth', block: 'center' });
  //     break;
  //   case contact:
  //     contact.scrollIntoView({ behavior: 'smooth', block: 'center' });
  //     break;
  //   default:
  //     home.scrollIntoView({ behavior: 'smooth', block: 'center' });
  // }
});

// toggle menu bars
const navBarMenuBar = document.querySelector('.navBar__menu-bar');

navBarMenuBar.addEventListener('click', () => {
  navBarMenu.classList.toggle('hide');
});
