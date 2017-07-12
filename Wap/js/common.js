/**
 * Created by admin on 2017-07-12 18:47.
 */
$(function(){
    $(".two-menu a,.red-menu a").click(function(){
        $(this).parent().parent().find('a').removeClass('cur');
        $(this).addClass('cur');
        var index = $(this).attr('data-index');
        $(this).parent().parent().parent().siblings().find('.news-box').hide();
        $(this).parent().parent().parent().siblings().find('.news-box:eq(' + index + ')').show();
    })

    $(function(){
        $('.slideshow .bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            auto: true,
            pager: true
        });

    });
})

//返回顶端
$(window).scroll(function () {
    var scrolltop = $(this).scrollTop();
    if (scrolltop >= 200) {
        $("#elevator_item #elevator").show();
    } else {
        $("#elevator_item #elevator").hide();
    }
});
$("#elevator").click(function () {
    $("html,body").animate({scrollTop: 0}, 500);
});