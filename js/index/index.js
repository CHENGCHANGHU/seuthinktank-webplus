$(function () {

    // loadSideContent('TT1SideCardBox', activityObjects);
    // loadMainContent('mediaPublishedMainCardBox', mediaPublished);
    // loadMainContent('reportMainCardBox', thinkTankReprort);


    console.log($('.side-card').length);
    for (var i = 0; i < $('.side-card').length; i++) {
        if (i % 3 != 2) {
            $('.side-card').eq(i).css("border-bottom", "solid rgba(208, 240, 212, 0.774) 1px");
        }

        if (i % 3 == 0) {
            $('.side-card').eq(i).css("margin-top", 0);
        }
    }

    console.log("w1imgNumber a length:" + $("#w1imgNumber").children().length);
    console.log(":" + $(".number .nomal").length);

    console.log($(".scholar-card").length);
    for (var i = 6; i < $(".scholar-card").length; i++) {
        $(".scholar-card").eq(i).css("margin-top", "20px");
    }

    for (var i = 0; i < $(".coo-card").length; i++) {
        if (i % 2 == 1)
            $(".coo-card").eq(i).css("margin-left", "16px");
    }

    for (var i = 2; i < $(".coo-card").length; i++) {
        $(".coo-card").eq(i).css("margin-top", "40px");
    }

    // loadSideContent('TT2SideCardBox', theoryResearch);
    // loadMainContent('silkRoadMainCardBox', silkroad);
    // loadMainContent('internationalMainCardBox', mediaPublished);

    // loadSideContent('TT3SideCardBox', activityObjects);
    // loadMainContent('regionalEconomyMainCardBox', mediaPublished);
    // loadMainContent('AIMainCardBox', mediaPublished);

    // loadSideContent('TT4SideCardBox', activityObjects);
    // loadMainContent('cyberspaceMainCardBox', mediaPublished);
    // loadMainContent('globalCureMainCardBox', mediaPublished);

    // loadSideContent('TT5SideCardBox', activityObjects);
    // loadMainContent('worldEconomyMainCardBox', mediaPublished);
    // loadMainContent('ITMainCardBox', mediaPublished);

    // loadScholar('leftCardBox', scholar);
    // loadScholar('rightCardBox', scholar);

    // loadPartners('partnerLabelBox1', partners);
    // loadPartners('partnerLabelBox2', partners);
    // loadPartners('partnerLabelBox3', partners);

    console.log($('.activities-box').outerHeight());

    // $('.thinktank-1-container').eq(0).css('height', $('.activities-box').outerHeight() + 'px');
    // $('.thinktank-2-container').eq(0).css('height', $('.activities-box').outerHeight() + 'px');
    // $('.thinktank-3-container').eq(0).css('height', $('.activities-box').outerHeight() + 'px');
    // $('.thinktank-4-container').eq(0).css('height', $('.activities-box').outerHeight() + 'px');
    // $('.thinktank-5-container').eq(0).css('height', $('.activities-box').outerHeight() + 'px');


    var sideCadrBoxHeight = $('.side-card-box').outerHeight();
    var mainCardBoxHeight = $('.main-card-box').outerHeight();

    // $('.media-published-box .main-card').eq(1).css('margin-top',
    //     sideCadrBoxHeight - mainCardBoxHeight + 'px');
    // $('.report-box .main-card').eq(1).css('margin-top',
    //     sideCadrBoxHeight - mainCardBoxHeight + 'px');

    $('.main-card:nth-child(2n)').css('margin-top',
        sideCadrBoxHeight - mainCardBoxHeight + 'px');

    // $('.coo-card').eq(1).css('margin-top',
    //     $('.expert-scholar-box').outerHeight() - $('.cooperation-exchange-box').outerHeight() + 'px');

    console.log('---------' + $('.coo-title').css('top'));
    // $('.coo-detail').css('top', 25 + parseInt($('.coo-title').css('top').split('px')[0]) + 'px');

    function loadSideContent(id, objects) {
        for (var i = 0; i < objects.length; i++) {
            $('#' + id).append('<div class="side-card">' +
                '<span class="side-img-box"><img src="' + objects[i].src + '" /></span>' +
                '<span class="side-title-box">' +
                '<a href="' + objects[i].href + '">' + objects[i].title + '</a></span>' +
                '<span class="mess-box">' +
                '<span class="side-author">' + objects[i].author + '</span> ·' +
                '<span class="side-time">' + objects[i].time + '</span></span></div>');
        }
    }

    function loadMainContent(id, objects) {
        for (var i = 0; i < objects.length; i++) {
            $('#' + id).append('<div class="main-card">' +
                '<span class="main-img-box"><img src="' + objects[i].src + '" /></span>' +
                '<span class="main-label-box">' +
                '<span class="label">权力游戏</span>' +
                '<span class="label">欧洲政治</span></span>' +
                '<span class="main-title-box">' +
                '<a href="' + objects[i].href + '">' + objects[i].title + '</a></span>' +
                '<span class="main-mess-box">' +
                '<span class="main-src">' + objects[i].mainSrc + '</span> ·' +
                '<span class="main-time">' + objects[i].time + '</span></span></div>');
        }
    }

    function loadScholar(id, objects) {
        for (var i = 0; i < objects.length; i++) {
            $('#' + id).append('<div class="scholar-card">' +
                '<span class="scholar-img"><img src="' + objects[i].src + '" /></span>' +
                '<span class="scholar-name"><a href="#">' + objects[i].name + '</a></span></div>');
        }
    }

    function loadPartners(id, objects) {
        for (var j = 0; j < 5; j++) {
            for (var i = 0; i < objects.length; i++) {
                $('#' + id).append('<span class="partner-label"><a href="#">' + objects[i].name + '</a></span>');
            }
        }
    }
});