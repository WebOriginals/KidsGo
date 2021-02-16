
$( ".favorites-btn" ).on( 'click', function() {
    var elem = this;
    var block = $(elem).closest(".favorites-btn-block");
    $(block).find(".favorites-btn").toggleClass("d-none");
    $(block).find(".favorites-btn-text").html($(elem).data('text'));
});






