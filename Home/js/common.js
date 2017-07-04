/**
 * Created by admin on 2017-07-04 09:14.
 */
var timer=null;
var i=0;
$(function(){
    $(".flash .con ul .wrap").mouseover(function(){
        clearInterval(timer);
    });
    $(".flash .con ul .wrap").click(function(){
        $(this).stop().animate({width:"990px"},300).siblings().stop().animate({width:"46px"},300)
    });
    $(".flash .con ul .wrap").mouseout(function(){
        timer=setInterval("startMove()",2000)
    });

})
function startMove(){
    i++;
    if(i>$(".flash .con ul .wrap").length-1){i=0}
    $(".flash .con ul .wrap").stop().eq(i).animate({width:"990px"},300).siblings().stop().animate({width:"46px"},300)
};

timer=setInterval("startMove()",3000)

$(document).ready(function(){

    $('.parkPic').bxSlider({
        slideWidth: 290,
        minSlides: 2,
        maxSlides: 4,
        slideMargin: 10,
        pager:false,
        auto:true,
        controls:true
    });
    $('.slideshow-bxslider').bxSlider({
        slideWidth: 700,
        slideHeight: 466,
        mode: 'fade',
        captions: true,
        pager:true
    });
    var flashvars={
        p:2,
        c:0,
        i:'http://www.ckplayer.com/static/images/cqdw.jpg'
    };
    var video=['http://img.ksbbs.com/asset/Mon_1605/0ec8cc80112a2d6.mp4->video/mp4'];
    var support=['all'];
    CKobject.embedHTML5('player','ckplayer_a1',510,320,video,flashvars,support);

//    新闻中心
    $("#newsCenterTab a").mouseover(function(){
        $("#newsCenterTab a").removeClass('cur');
        $(this).addClass('cur');
        var index = $(this).attr('data-index');
        $('#newsCenter .box').hide();
        $('#newsCenter .box:eq('+index+')').show();

    })
    $(".column-tabf a").click(function(){
        $(this).parent().parent().find('a').removeClass('cur');
        $(this).addClass('cur');
        var index = $(this).attr('data-index');
        $(this).parent().parent().siblings().find('.box').hide();
        $(this).parent().parent().siblings().find('.box:eq('+index+')').show();
    })
//返回顶端
    $(window).scroll(function(){
        var scrolltop=$(this).scrollTop();
        if(scrolltop>=200){
            $("#elevator_item #elevator").show();
        }else{
            $("#elevator_item #elevator").hide();
        }
    });
    $("#elevator").click(function(){
        $("html,body").animate({scrollTop: 0}, 500);
    });
    $(".qr").hover(function(){
        $(".qr-popup").show();
    },function(){
        $(".qr-popup").hide();
    });

});

