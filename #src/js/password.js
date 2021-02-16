if( $( '.password-img' ).length ) {
    $(".password-img").mousedown(function () {
        var elem = this;
        var body = $(elem).closest('.password');
        var img = $( body).find('.password-img');
        var input = $( body).find('.wrapper-field-input');
        var imgOpen = $( body).find('.password-img-open');

        $(img).css("display", "none");
        $(imgOpen).css("display", "block");
        $(input).attr('type', 'text');

    });
    $(".password-img-open").mouseout(function () {
        var elem = this;
        var body = $(elem).closest('.password');
        var img = $( body).find('.password-img');
        var input = $( body).find('.wrapper-field-input');
        var imgOpen = $( body).find('.password-img-open');

        $(img).css("display", "block");
        $(imgOpen).css("display", "none");
        $(input).attr('type', 'password');
    });
}





