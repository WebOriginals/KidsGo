if( $( '.password-img' ).length ) {
    $(".password-img").mousedown(function () {
        var elem = this;
        var pas = $(elem).next('.wrapper-field-input');
        $(pas).attr('type', 'text');
    });
    $(".password-img").mouseout(function () {
        var elem = this;
        var pas = $(elem).next('.wrapper-field-input');
        $(pas).attr('type', 'password');
    });
}





