$(function () {
    loadNewsContent('News1Box', NewsObjects);
    loadNewsContent('News2Box', NewsObjects);
    loadNewsContent('News3Box', NewsObjects);

    function loadNewsContent(id, objects) {
        for (var i = 0; i < objects.length; i++) {
            $('#' + id).append('<div class="news_li">' +
                '<span class="news_img_box"><a href="'+objects[i].href+'" target="_blank"><img src="'+objects[i].src+'"></a></span>'+
                '<span class="news_title_box">'+
                '<a href="'+objects[i].href+'" target="_blank">'+objects[i].title+'</a></span>'+
                '<span class="news_article_box"><p>'+objects[i].mess+'</p></span>'+
                '<span class="news_card_box">' +
                '<span class="card_source">'+objects[i].source+'</span>·' +
                '<span class="card_author">'+objects[i].author  +'</span>·' +
                '<span class="card_time">'+objects[i].time+'</span></span></div>');
        }
    }
});