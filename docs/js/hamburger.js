$(function(){
    $(".btn-gnav").on("click", function(){
        // ハンバーガーメニューの位置を設定
        let vw = $(window).width();
        var rightVal = 0;
        
        if($(this).hasClass("open")) {
            // 位置を移動させメニューを開いた状態にする
            rightVal = vw * -0.75;
            // メニューを開いたら次回クリック時は閉じた状態になるよう設定
            $(this).removeClass("open");
        } else {
            // メニューを開いたら次回クリック時は閉じた状態になるよう設定
            $(this).addClass("open");
        }

        $("#gnav").stop().animate({
            right: rightVal
        }, 200);
    });
});