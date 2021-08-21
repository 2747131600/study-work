$(function () {
    $(".nav-click").click(function () {
        $(".search-nav-2-container").slideToggle();
    });
    $(".search-nav-3 ul li a").hover(function(){
        $(this).addClass("search-nav-3-hover").parent("li").siblings("li").children("a").removeClass("search-nav-3-hover");
    })
})