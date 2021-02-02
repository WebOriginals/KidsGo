var swiper = new Swiper('.similar-products-container', {
    slidesPerView: 4,
    spaceBetween: 10,
    preloadImages: false,
    lazy: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1.6,
            spaceBetween: 20
        },
        // when window width is >= 640px
        767: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    }
});