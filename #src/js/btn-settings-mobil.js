if( $( '.btn-settings' ).length ) {
    $(".btn-settings").click(function () {

        $('.wrapper-sidebar').addClass("settings-open");
        $('.btn-close-sitings').addClass("btn-close-sitings-open");
        $('body').addClass('no-scroll');
    });
    $(".btn-close-sitings").click(function () {

        $('.btn-close-sitings').removeClass("btn-close-sitings-open");
        $('.wrapper-sidebar').removeClass("settings-open");
        $('body').removeClass('no-scroll');
    });
}