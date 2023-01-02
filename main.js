const  menuEmail = document.querySelector('.navbar-email');
const desktopMENU = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toogleDesktopMenu);

function toogleDesktopMenu () {
  desktopMENU.classList.toggle("inactive");
}