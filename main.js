const navBarMenu = document.querySelector('.navBar__menu');
const navBarMenuBar = document.querySelector('.navBar__menu-bar');

navBarMenuBar.addEventListener('click', () => {
  navBarMenu.classList.toggle('hide');
});
