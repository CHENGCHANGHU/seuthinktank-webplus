$(function () {
    console.log($(".top-title-box").eq(0).outerHeight());
    console.log($(".logo-box").eq(0).outerHeight());
    console.log(($(".top-title-box").eq(0).outerHeight() - $(".logo-box").eq(0).outerHeight()) / 2);
    $(".logo-box").eq(0).css('margin-top',
        (Math.ceil($(".top-title-box").eq(0).outerHeight() - $(".logo-box").eq(0).outerHeight()) / 2) + 'px');

    $(".bottom-link-box ul li a").css("font-size", "10pt");

});