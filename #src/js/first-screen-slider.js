if( $( '.first-screen-container' ).length ) {
    var firstScreen = new Swiper('.first-screen-container', {
        lazy: true,
        navigation: {
            nextEl: '.first-screen-button-next',
            prevEl: '.first-screen-button-prev',
        },
        pagination: {
            el: '.first-screen-pagination',
            clickable: true,
        }
    });
}
