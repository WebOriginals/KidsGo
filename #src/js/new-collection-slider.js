var swiper = new Swiper('.new-collection-container', {
    // Enable lazy loading
    lazy: true,
    navigation: {
        nextEl: '.new-collection-button-next',
        prevEl: '.new-collection-button-prev',
    },
    pagination: {
        el: '.new-collection-pagination',
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
       280: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        // when window width is >= 640px
        990: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        2500: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }

});