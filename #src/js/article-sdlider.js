if( $( '.article-container' ).length ) {
    var article = new Swiper('.article-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        preloadImages: false,
        lazy: true,
        pagination: {
            el: '.article-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.article-button-next',
            prevEl: '.article-button-prev',
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
}