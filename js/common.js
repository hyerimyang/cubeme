$(document).ready(function(){
  /* Top Button */
  var btn = $('#top-btn');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 800);
  });


  // 모바일 햄버거 메뉴바
  $(".m_menubar").click(function(){
    $('.m_menu_wrap').animate({"right":"0"},300)
    $('.m_menu_fixed').css({"display":"block"})
  });
  $(".m_menu_close").click(function(){
    $('.m_menu_wrap').animate({"right":"-80%"},300)
    $('.m_menu_fixed').css({"display":"none"})
  });

  // sub menu
  $(".menu1,.sub_menu_wrap").mouseenter(function(){
    $(".sub_menu_wrap").show();
  });
  $(".menu1,.sub_menu_wrap").mouseleave(function(){
    $(".sub_menu_wrap").hide();
  })

  // search info
  $(".search").click(function(){
    $(".search_info").css({"display":"block"})
  })
  $(".close_btn").click(function(){
    $(".search_info").css({"display":"none"})
  })

  // header scrolltop
  nump = 0;
  
  $(window).scroll(function(){
    sctop = $(window).scrollTop()
    responsive = $(window).width()

    if(sctop > 100 && responsive > 1024) {
      nump = 0;
      $('.menu_top').css({"display":"none"})
      $('.header').css({
        "height" : "70px",
        "background-color" : "rgba(255,255,255,0.8)",
        "padding-top" : "0px",
        "box-shadow" : "0 1px 3px rgb(0 0 0 / 12%)"
      })
      $('.logo>a>img').attr("src", "images/common/logo-cubeme-symbol2.svg")
      $('.logo').css({"width" : "35px"})

    }else if(sctop < 100  && responsive > 1024) {
      $('.menu_top').css({"display" : "block"})
      $('.header').css({
        "height" : "100px",
        "background-color" : "rgba(255,255,255)",
        "padding-top" : "20px",
        "box-shadow" : "none"
      })
      $('.logo>a>img').attr("src", "images/common/logo.png")
      $('.logo').css({"width" : "120px"})

    }else if(sctop >= 100 && responsive <= 1024){
      $('.menu_top').css({"display":"none"})
      $('.header').css({
        "height" : "60px",
        "background-color" : "rgba(255,255,255,0.8)",
      })
      $('.logo>a>img').attr("src", "images/common/logo-cubeme-symbol2.svg")
      $('.logo').css({"width" : "35px"})

    } else if(sctop <= 100 && responsive <= 1024) {
      $('.menu_top').css({"display":"none"})
      $('.header').css({
        "background-color" : "rgba(255,255,255)"
      })
      $('.logo>a>img').attr("src", "images/common/logo.png")
      $('.logo').css({"width" : "100px"})
    }
  })
 

}) 

 