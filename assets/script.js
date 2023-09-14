// search event
document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active')
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active')
}


// navbar variables
const nav = document.querySelector('.navbar');
const bars = document.querySelector('#bars');
const cart = document.querySelector('.fa-shopping-cart');
const shoppingCart = document.querySelector('.cart-box');


// nav  function
const navToggle = function () {
  nav.classList.toggle('active');
  bars.classList.toggle('active');
}

// shopping-cart toggle function
const cartToggle = function () { 
  shoppingCart.classList.toggle('active') 
}

// add event on cart-toggle-btn
cart.addEventListener('click', function () {

  // If the navbar-nav has an "active" class, it will be "removed".
  if (nav.classList.contains('active')) navToggle();
  cartToggle();

});

// add event on nav-toggle-btn
bars.addEventListener('click', function () {

  // If the shopping-cart has an "active" class, it will be "removed".
  if (shoppingCart.classList.contains('active')) cartToggle();
  navToggle();

});


// Initialize Swiper
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var swiper = new Swiper(".Events-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop:true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  breakpoints: {
      640: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      },
  },
});
