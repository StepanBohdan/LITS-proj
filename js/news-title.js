$(document).ready(function(){
    $(".belgian-news").mouseenter(function(){
        $("h4#news-title").css("color", "#ffcd3f");
        $("p.news-data").css("color", "#fff");
    });
    $(".belgian-news").mouseleave(function(){
        $("h4#news-title").css("color", "#525252");
        $("p.news-data").css("color", "#525252");
    });
});