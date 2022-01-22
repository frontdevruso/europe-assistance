if (document.querySelector('.m-slider')) {
    new Swiper(".m-slider", {
        slidesPerView: 2,
        spaceBetween: 2,
        slidesPerGroup: 2,
    
        navigation: {
            nextEl: ".m-slider-pagination-arrow--next",
            prevEl: ".m-slider-pagination-arrow--prev",
        },
    
        breakpoints: {
            575: {
                navigation: {
                    nextEl: ".m-slider-pagination-arrow--next",
                    prevEl: ".m-slider-pagination-arrow--prev",
                },
    
                loop: true,
                centeredSlides: true,
                slidesPerView: "auto",
                spaceBetween: 2,
                slidesPerGroup: 1,
            }
        }
    });
  }