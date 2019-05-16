new Vue({
    el:'#vue_div',
    data:{
        key_words:[
            '中国经济',
            '美国美联储',
            '全球经济',
            '吸引外资',
            '外商投资'
        ],
        article_font_size:{
            'font_size_big':false,
            'font_size_small':false,
            'font_size_normal':true
        },
        right_title_list:[
            {title:'东南大学事情111',time:'2019-03-29',img_src:"./imgs/article_content/news1.jpg"},
            {title:'东南大学事情222222',time:'2019-03-29',img_src:"imgs/article_content/news2.jpg"},
            {title:'东南大学事情33333333',time:'2019-03-29',img_src:"imgs/article_content/news3.jpg"},
            {title:'东南大学事情44444444',time:'2019-03-29',img_src:"imgs/article_content/news4.jpg"},
            {title:'东南大学事情55555555',time:'2019-03-29',img_src:"imgs/article_content/news7.jpg"}
        ],
        right_author_name:[
            {name:"程泰宁",img_src:"./imgs/article_content/scholar.jpg"},
            {name:"YannLeCun",img_src:"./imgs/article_content/scholar1.jpg"},
            {name:"YannLeCun",img_src:"./imgs/article_content/scholar2.jpg"},
            {name:"YannLeCun",img_src:"./imgs/article_content/scholar3.jpg"},
            {name:"程泰宁",img_src:"./imgs/article_content/scholar.jpg"},
            {name:"YannLeCun",img_src:"./imgs/article_content/scholar1.jpg"},
            {name:"YannLeCun",img_src:"./imgs/article_content/scholar2.jpg"},
        ],
        share:[
            {pic_src:"imgs/article_content/qq.png",color:"#f06466"},
            {pic_src:"imgs/article_content/qq-z.png",color:"#6ba2d6"},
            {pic_src:"imgs/article_content/sina.png",color:"#f2bc3a"},
            {pic_src:"imgs/article_content/wechat.png",color:"#8cc53f"}
        ],
        recoment_title_author:[
            {title:"韩国载198人高铁全部脱轨14人受伤",time:"2018-12-08"},
            {title:"高雄4小时连发两枪击事件 19辆车街头互撞",time:"2017-01-21"},
            {title:"郝龙斌宣布参选国民党主席：不忍党一天天走下坡",time:"2017-01-07"},
            {title:"今年最佳扣篮，可能属于这名16岁男孩",time:"2016-11-23"},
        ],
        recoment_title_content:[
            {title:"禁止来台宣扬“一国两制”，蔡英文又筑新墙",time:"2019-04-17 17:13",img_src:"imgs/article_content/news1.jpg"},
            {title:"搬砖的安全帽不如领导？应急管理部回应",time:"2019-04-17 17:13",img_src:"imgs/article_content/news2.jpg"},
            {title:"偷摸国宝惹众怒 她回应：是熊猫宝宝越狱成功兼碰瓷",time:"2019-04-17 17:13",img_src:"imgs/article_content/news3.jpg"},
            {title:"用种地攒的钱“发烧”天文 这个农民好酷",time:"2019-04-17 17:13",img_src:"imgs/article_content/news4.jpg"},
            {title:"“马背上建校”的石河子大学，如今同层换教室要走8分钟",time:"2019-04-17 17:13",img_src:"imgs/article_content/news7.jpg"},
        ]
    },
    methods:{
        font_big:function (event) {
            console.log("test----------")
            this.article_font_size={'font_size_big':true,'font_size_small':false, 'font_size_normal':false}
        },
        font_small:function (event) {
            this.article_font_size={'font_size_big':false,'font_size_small':true, 'font_size_normal':false}
        },
        font_normal:function (event) {
            this.article_font_size={'font_size_big':false,'font_size_small':false, 'font_size_normal':true}
        }
    }
});
// window.onload=
//     function(){
//             var oDiv = document.getElementById("fixPara"),
//
//             H = 0,
//             Y = oDiv
//         // while (Y) {
//         //     H += Y.offsetTop;
//         //     Y = Y.offsetParent;
//         // }
//             nav_box_height = document.getElementById("nav_box").offsetHeight;
//             console.log(nav_box_height)
//             H = Y.parentElement.offsetHeight - Y.offsetHeight+nav_box_height;
//         window.onscroll = function()
//         {
//             var s = document.body.scrollTop || document.documentElement.scrollTop;
//             if(s>H) {
//                 padding_left = $('#right_article').css('paddingLeft');
//                 width = $('#right_article').css('width');
//                 style_str = "position:fixed;top:0;width:"+width+";padding_left:"+padding_left;
//                 oDiv.style = style_str;
//             } else {
//                 oDiv.style = "height:auto"
//             }
//         }
//     }
