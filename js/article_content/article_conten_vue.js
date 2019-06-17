window.onload=
    function(){
            var oDiv = document.getElementById("fixPara"),
            H = 0,
            Y = oDiv
        // while (Y) {
        //     H += Y.offsetTop;
        //     Y = Y.offsetParent;
        // }
            nav_box_height = document.getElementById("nav_box").offsetHeight;
            console.log(nav_box_height)
            H = Y.parentElement.offsetHeight - Y.offsetHeight+nav_box_height;
        window.onscroll = function()
        {
            var s = document.body.scrollTop || document.documentElement.scrollTop;
            if(s>H) {
                padding_left = $('#right_article').css('paddingLeft');
                width = $('#right_article').css('width');
                style_str = "position:fixed;top:0;width:"+width+";padding_left:"+padding_left;
                oDiv.style = style_str;
            } else {
                oDiv.style = "height:auto"
            }
        }
    }
