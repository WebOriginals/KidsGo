if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
    $(".available").click(function () {
        parameters = {
            duration: 2000,
        }
        var elem = this;
        var block = $(elem).closest('.point-shop');
        var items = $(block).find('.available-body');
        $(items).slideToggle(parameters);
        $(elem).toggleClass("open");
    });
}