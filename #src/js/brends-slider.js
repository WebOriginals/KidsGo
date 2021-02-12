if( $( '.brends-container' ).length ) {
    var brends = new Swiper('.brends-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        preloadImages: false,
        lazy: true,
        pagination: {
            el: '.brends-pagination',
            clickable: true,
        },

        breakpoints: {
            // when window width is >= 320px
            280: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            // when window width is >= 480px
            320: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            // when window width is >= 640px
            767: {
                slidesPerView: 6,
                spaceBetween: 20
            }
        }
    });
}