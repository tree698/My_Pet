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

// Arrow up button
const arrowUpBtn = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUpBtn.classList.add('visible');
  } else {
    arrowUpBtn.classList.remove('visible');
  }
});

arrowUpBtn.addEventListener('click', () => {
  scrollIntoView('#home');
});

// toggle menu bars
const navBarMenuBar = document.querySelector('.navBar__menu-bar');

navBarMenuBar.addEventListener('click', () => {
  navBarMenu.classList.toggle('hide');
});

// Filter images
const galleryCategories = document.querySelector('.gallery__categories');
const galleryContainer = document.querySelector('.gallery__container');
const gallery = document.querySelectorAll('.gallery');

galleryCategories.addEventListener('click', (e) => {
  const filter = e.target.dataset.name || e.target.parentNode.dataset.name;
  if (filter == null) {
    return;
  }

  addActive(galleryCategories, filter);
  galleryContainer.classList.add('anim-out');

  setTimeout(() => {
    gallery.forEach((g) => {
      if (filter === 'all' || g.dataset.name === filter) {
        g.classList.remove('hide');
      } else {
        g.classList.add('hide');
      }
    });
    galleryContainer.classList.remove('anim-out');
  }, 300);
});

// navbar button state
navBarMenu.addEventListener('click', (e) => {
  const target = e.target.dataset.link;
  addActive(navBarMenu, target);
});

function addActive(element, dataName) {
  for (const child of element.children) {
    (child.dataset.name || child.dataset.link) === dataName
      ? child.classList.add('active')
      : child.classList.remove('active');
  }
}

// const allBtn = document.querySelector('.category__btn.all');
// const babyBtn = document.querySelector('.category__btn.baby');
// const growBtn = document.querySelector('.category__btn.grow');
// const adultBtn = document.querySelector('.category__btn.adult');

// allBtn.addEventListener('click', () => {
//   displayAll(galleryContainer);
//   addActive(galleryCategories, 'all');
// });
// babyBtn.addEventListener('click', () => {
//   filterImages(galleryContainer, 'baby');
//   addActive(galleryCategories, 'baby');
// });
// growBtn.addEventListener('click', () => {
//   filterImages(galleryContainer, 'grow');
//   addActive(galleryCategories, 'grow');
// });
// adultBtn.addEventListener('click', () => {
//   filterImages(galleryContainer, 'adult');
//   addActive(galleryCategories, 'adult');
// });

// function filterImages(element, dataName) {
//   for (const child of element.children) {
//     child.dataset.name !== dataName
//       ? child.classList.add('hide')
//       : child.classList.remove('hide');
//   }
// }

// function displayAll(element) {
//   for (const child of element.children) {
//     child.classList.remove('hide');
//   }
// }
