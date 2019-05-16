// window.onload = function () {
//
//     var logoBox = document.getElementsByClassName("logo_box")[0];
//     var logo = document.getElementsByClassName("logo")[0];
//
//     console.log(window.getComputedStyle(logoBox).height);
//     console.log(window.getComputedStyle(logo).height);
//     console.log(logo.clientHeight);
//     console.log(logo.offsetHeight);
//     // logo.setAttribute("margin-top", (window.getComputedStyle(logoBox).height - window.getComputedStyle(logo).height) / 2 + "px");
//     logo.style.marginTop = (Dis2Num(window.getComputedStyle(logoBox).height) - logo.offsetHeight) / 2 + "px";
//     // console.log((window.getComputedStyle(logoBox).height - logo.offsetHeight) / 2);
//
// }
//
// function Dis2Num(dis) {
//     return dis.split("px")[0];
// }

$(function(){
    $(".logo_box").css("margin-top", (80 - $(".nav_container").offsetHeight) / 2 + "px");

    console.log($(".content_phrase").length);
    var boxWidth = $(".content_phrase_box").get(0).offsetWidth;
    // console.log(boxWidth);
    var itemWidth = $(".content_phrase").get(0).offsetWidth;
    // console.log(itemWidth);
    var mr = (boxWidth - itemWidth * 9) / 8;
    // console.log(mr);
    for (var i = 0; i < $(".content_phrase").length - 1; i++) {
        // console.log(i);
        $(".content_phrase:nth-child(" + (i + 1) + ")").css("margin-right", mr + "px");
    }

    console.log($(".search_box").get(0).offsetWidth);
    console.log($(".search_btn_box").get(0).offsetWidth);
    console.log($(".search_btn").get(0).offsetWidth);
    $(".search_text").css("width",
        $(".search_box").get(0).offsetWidth - $(".search_btn_box").get(0).offsetWidth + "px");
});