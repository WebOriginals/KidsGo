if( $( '.slider-little-container' ).length ) {
    var sliderLlittle = new Swiper('.slider-little-container', {
        slidesPerView: 1,
        spaceBetween: 15,
        loop:true,
        slideToClickedSlide:true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            767: {
                direction: 'horizontal',
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },

            1280: {
                direction: 'vertical',
                slidesPerView: 4,
            },
        }
    });

    if(window.screen.width>=767) {
        var sliderLarge = new Swiper('.slider-large-container', {
            thumbs: {
                swiper: sliderLlittle
            }
        });
    } else {
        var sliderLarge = new Swiper('.slider-large-container', {
            pagination: {
                el: '.slider-large-pagination',
                clickable: true,
            },
        });
    }
};


