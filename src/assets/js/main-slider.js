new Swiper(".main-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      575: {
        navigation: {
          nextEl: ".main-slider-pagination-arrow--next",
          prevEl: ".main-slider-pagination-arrow--prev",
        },
      },
    }
});
