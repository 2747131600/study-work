$(function () {
    $(".tuwen-right ul li").hover(function () {
        $(this).addClass("tuwen-right-hover").siblings(this).removeClass("tuwen-right-hover");
        var index = $(this).index();
        $(".tuwen-left img").eq(index).show().siblings(".tuwen-left img").hide();
    });
    $(".new-left-nav span").hover(function () {
        $(this).addClass("new-left-nav-hover").siblings(this).removeClass("new-left-nav-hover");
        var index = $(this).index();
        $(this).parent().siblings().children().eq(index).show().siblings().hide();
    });
    $(".govopen-nav button").hover(function () {
        var index = $(this).index();
        $(this).parent().siblings().children().eq(index).show().siblings().hide();
    });
    $(".friendlink-nav span").hover(function () {
        $(this).addClass("friendlink-nav-hover").siblings().removeClass("friendlink-nav-hover");
        var index = $(this).index();
        index = index - 1;
        $(".friendlink-bd div").eq(index).show().siblings().hide();
    })
});
