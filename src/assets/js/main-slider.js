new Swiper(".main-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,

    navigation: {
        nextEl: ".main-slider-pagination-arrow--next",
        prevEl: ".main-slider-pagination-arrow--prev",
      },
});
