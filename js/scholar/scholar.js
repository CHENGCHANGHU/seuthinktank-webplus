$(function () {
    console.log($(".logo_box").eq(0).outerHeight());
    console.log($(".navitem_box").eq(0).outerWidth());
    $(".logo_box").eq(0).css("margin-top",
        ($(".topnav_container").eq(0).outerHeight() - $(".logo_box").eq(0).outerHeight()) / 2 + "px");


    var navItem_widthes = 0;
    for (var i = 0; i < $(".navitem").length; i++) {
        navItem_widthes += $(".navitem").eq(i).outerWidth();
    }

    $(".navitem_box").eq(0).css("width",
        ($(".topnav_container").eq(0).outerWidth() - $(".logo_box").eq(0).outerWidth()) + "px");

    console.log($(".topnav_container").eq(0).outerWidth() - $(".logo_box").eq(0).outerWidth());
    console.log(navItem_widthes);
    $(".navitem").css("margin", "0 " +
        ($(".navitem_box").eq(0).outerWidth() - navItem_widthes) / 22 + "px");


    console.log('window).height():' + $(window).height());
    console.log("$('.nax-box').eq(0).height():" + $('.nax-box').eq(0).outerHeight());
    console.log("$('.scolars').eq(0).height():" + $('.scolars').eq(0).outerHeight());
    console.log("$('.copyright').eq(0).height():" + $('.copyright').eq(0).outerHeight());

    if ($(window).height() > $('.nax-box').eq(0).outerHeight() + $('.scolars').eq(0).outerHeight() + $('.copyright').eq(0).outerHeight()) {
        $('.scolars').eq(0).css('height', $(window).height() - 60 - $('.nax-box').eq(0).outerHeight() - $('.copyright').eq(0).outerHeight() + 'px');
    }

    // for (i = 0; i < 20; i++) {

    //     $(".scolars_container").append(
    //         "<div class=\"scolar_card\">" +
    //         "<div class=\"img_box\">" +
    //         "<img src=\"./imgs/index/scholar" + ((i % 3) + 1) + ".jpg\" /></div>" +
    //         "+<div class=\"breifintro_box\">" +
    //         "<span class=\"name\">程泰宁</span>" +
    //         "<span class=\"position\">东南大学教授</span>" +
    //         "<span class=\"introduction\">建筑学家，中国工程院院士，东南大学教授，东南大学建筑理论与设计中心主任 [1] ，中国联合工程公司总建筑师</span>" +
    //         "</div></div>"
    //     );
    // }

});