$(function(){
    $(".weblink").hover(function(){
        $(this).children().toggle();
    });
    $(".newsplus-nav ul li").hover(function(){
        $(this).addClass("newsplus-nav-hover").siblings().removeClass("newsplus-nav-hover");
        $(this).find("h3").addClass("newsplus-nav-hover").parents("li").siblings().find("h3").removeClass("newsplus-nav-hover");
        var index =$(this).index();
        $(".newsplus-bd ul").eq(index).show(600).siblings().hide();
    })
})