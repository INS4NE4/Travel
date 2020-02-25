// NAVIGATION MENU
const navbarToggler = document.querySelector(".toggler");
const navbarLinks = document.getElementById('menu');
navbarToggler.addEventListener('click', navbarTogglerClick);

function navbarTogglerClick () {
    navbarToggler.classList.toggle("open-toggler");
    navbarLinks.classList.toggle("open");
}
// Login Open Form
const loginToggler = document.getElementById('login_toggler');
const loginContainer = document.getElementById('login_container');
loginToggler.addEventListener('click', loginTogglerClick);

function loginTogglerClick () {
    loginContainer.classList.toggle("login_container");
}
// Login Form Close
const loginTogglerClose = document.getElementById('login_close_toggler');
const loginContainerClose = document.getElementById('login_container');
loginTogglerClose.addEventListener('click', loginTogglerCloseClick);

function loginTogglerCloseClick () {
    loginContainerClose.classList.toggle("login_container");
}
// Slider
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });