if( $( '.description__color' ).length ) {
    $('.description__imgs-item').click(function(evet) {
        var elem = this;
        var body = $(elem).closest('.description__color');
        var text_raplase = $(body).find('.description__colorItem');

        event.preventDefault();
        var dataColor = $(this).attr('data-color');
        $(text_raplase).html(dataColor);
    });
}
