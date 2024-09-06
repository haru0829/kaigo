$(function () {
    var interval = 3000;
    var duration = 1000;
    var timer;

    var currentX = 0;
    var slideWidth = 950;
    var transitionDuration = 500; // アニメーションの時間（ミリ秒）

    // 次へボタン
    $(".example__nextBtn").click(function () {
        $(this).toggleClass("none");
        $(".example__prevBtn").toggleClass("none");

        // スライドアニメーションを設定
        currentX -= slideWidth;
        $(".example__list").css({
            "transition": `transform ${transitionDuration}ms ease`,
            "transform": `translateX(${currentX}px)`
        });

    });

    // 前へボタン
    $(".example__prevBtn").click(function () {
        $(this).toggleClass("none");
        $(".example__nextBtn").toggleClass("none");
        currentX += slideWidth;
        $(".example__list").css({
            "transition": `transform ${transitionDuration}ms ease`,
            "transform": `translateX(${currentX}px)`
        });

    });

    // ナビゲーションをクリック
    $("a[href*='#']:not([href='#'])").click(function (event) {
        // デフォルトのリンク動作を防ぐ
        event.preventDefault();

        // 移動先のコンテンツの位置を取得
        var target = $($(this).attr("href")).offset().top;

        // 70px減らす
        target -= 70;

        // コンテンツへスクロール
        $("html, body").animate({ scrollTop: target }, 500);
    });




    // タイマーで定期的にスライド
    timer = setInterval(slideTimer, interval);

    function slideTimer() {
        // アニメーションで左にスライド
        $(".appeal__slide").animate({ "left": `-=334px` }, duration, function () {
            // アニメーション終了後に最初の画像を末尾に移動
            $(".appeal__slide img:first").appendTo(".appeal__slide");
            // その後、left位置をリセット
            $(".appeal__slide").css("left", 0);
        });
    }

    $(".faq__btn").click(function () {
        $(this).parent().parent().children(".faq__answer").slideToggle(400);
        $(this).parent().toggleClass("show")
        $(this).parent().children().toggleClass("show")
        $(this).children().toggleClass("show")
    });
});
