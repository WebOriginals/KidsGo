$(".payment-method").click(function () {
    var elem = this;
    var block = $(elem).next('.body-payment-method');
    $(block).slideToggle(parameters);
    $(elem).toggleClass("open");
});