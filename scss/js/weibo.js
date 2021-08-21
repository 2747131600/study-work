$(function () {
    $(".bd-center-nav").on("mouseenter mouseleave", "span", function () {
        $(this).toggleClass("enter");
    });
    $(".bd-center-nav").on("click","span",function(){
        $(this).addClass("activeed");
        $(this).parent().siblings().children().removeClass("activeed");
    })

})
