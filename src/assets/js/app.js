// slider initialization
new Swiper('.swiper-container', {
  spaceBetween: window.innerWidth > 768 ? 40 : 15,

  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },

    1024: {
      slidesPerView: 2.5,
    },
  },
});
