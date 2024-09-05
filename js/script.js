$(function(){
    var interval = 3000;
    var duration = 1000;
    var timer;

    // タイマーで定期的にスライド
    timer = setInterval(slideTimer, interval);

    function slideTimer() {
        // アニメーションで左にスライド
        $(".appeal__slide").animate({"left": `-=334px`}, duration, function() {
            // アニメーション終了後に最初の画像を末尾に移動
            $(".appeal__slide img:first").appendTo(".appeal__slide");
            // その後、left位置をリセット
            $(".appeal__slide").css("left", 0);
        });
    }

    $(".faq__btn").click(function(){
        $(this).parent().parent().children(".faq__answer").slideToggle(400);
        $(this).parent().toggleClass("show")
        $(this).parent().children().toggleClass("show")
        $(this).children().toggleClass("show")
    });
});
