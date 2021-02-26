/* RESPONSIVE MENU */
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const headerTopInner = document.querySelector('.header__top-inner');
const headerContactsSocial = document.querySelector('.header__contacts-social');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--active');
  headerContactsSocial.classList.toggle('show');
});

/* REVIEWS TEXT */
const expand = (e) => {
  e.classList.toggle('expanded')
  e.previousElementSibling.classList.toggle('expanded')
}

/* SLIDER */
const slider = new Swiper('.slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.reviews__next',
    prevEl: '.reviews__prev',
  },
  breakpoints: {
    577:{
      spaceBetween: 20,
      slidesPerView: 2
    },
    900:{
      spaceBetween: 20,
      slidesPerView: 3
    }
  }
});
