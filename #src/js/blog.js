var swiper = new Swiper('.blog-internal-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: '.blog-internal-pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 2,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    navigation: {
        nextEl: '.blog-internal--next',
        prevEl: '.blog-internal--prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.3,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1.7,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
});