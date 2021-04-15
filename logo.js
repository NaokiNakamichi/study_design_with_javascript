
function Horizon(tmp) {
    winW = $(window).width() * 2;
    spped = 2000;
    $(tmp).animate({
        width: winW
    }, spped);
  }

$(window).scroll(function(){
    line = "#horizon1"
    var top = $(line).offset().top; // ターゲットの位置取得
    var position = top - $(window).height();  // 発火させたい位置
    if ($(window).scrollTop() > position) {
        for (let i = 1; i < 12; i++) {
            line = "#horizon" + i
            Horizon(line)
          }
      }
    

    
  })
