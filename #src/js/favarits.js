if( $( '.popular-products__favorites' ).length ) {
    $(".popular-products__favorites").click(function () {
        var elem = this;
        var normal = $(elem).find('.ic-favorites');
        var active = $(elem).find('.ic-favorites-active');

        $(normal).toggleClass('invis');
        $(active).toggleClass('vis');
    });
}









