if(document.querySelector('.about-media__container')) {
    new Swiper(".about-media__container", {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
    
        navigation: {
            nextEl: ".media-pagination-arrow--next",
            prevEl: ".media-pagination-arrow--prev",
        },
    
        breakpoints: {
            992: {
                slidesPerView: 3,
            },
    
            500: {
                slidesPerView: 2,
                spaceBetween: 22,
            }
        }
    });
}