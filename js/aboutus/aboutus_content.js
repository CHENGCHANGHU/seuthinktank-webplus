$(window).bind("load", function() {
    var headHeight =0;
    var footerHeight = 0;
    var contentHeight = 0;
    var taller=0;
    positionFooter();
    function positionFooter() {
        /*获得导航栏的高度*/
        headHeight=$(".nav-container").height();
        console.log("head 高度数")
        console.log(headHeight)
        /*获得版权栏的高度*/
        footerHeight = $(".copyright").height();
        console.log("foot 高度数")
        console.log(footerHeight)
        /*
            scrollTop() 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离
        */
        contentHeight=(window.innerHeight-headHeight-footerHeight-30)+"px";
        console.log("window.innerHeight高度数")
        console.log(window.innerHeight)
        window.innerHeight
        console.log("content 高度数")
        console.log(contentHeight)
        taller=$(document.body).height();
        console.log("taller 高度数")
        console.log(taller)
        /*window.alert(taller)*/
        //如果页面内容高度小于屏幕高度，div#footer将绝对定位到屏幕底部，否则div#footer保留它的正常静态定位
        if(($(document.body).height()) <window.innerHeight-30) {
            console.log("嘟嘟嘟")
            $(".content").css("height", contentHeight);
        }
       /* $(".content").css("height", contentHeight);*/
    }
    $(window).scroll(positionFooter).resize(positionFooter);
});