if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
    $(".available").click(function () {
        var elem = this;
        var block = $(elem).closest('.point-shop');
        var items = $(block).find('.available-body');
        $(items).toggleClass("available-body-active");
        $(elem).toggleClass("open");
    });
}