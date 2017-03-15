$(function(){
  $(".b-header-slider").slick({
    prevArrow: '<img src="assets/img/slide-arrow-left.svg" class="arrow-right">',
    nextArrow: '<img src="assets/img/slide-arrow-right.svg" class="arrow-left">',
    dots:true,
    speed:900,
    fade:true,
    easing:'easeInOut'
  });
  $(".b-detail-brands-slider").slick({
    prevArrow: '<img src="assets/img/left-small.svg" class="arrow-right">',
    nextArrow: '<img src="assets/img/right-small.svg" class="arrow-left">',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1

  });
  $(".close-ico").click(function(){
    $(".header__nav").toggleClass("active");
    $(".close-ico").toggleClass("active");
  });
  $(".bck-to-top").click(function(){
    $("html, body").animate({"scrollTop":0},500);
  });
  // $('.b-header-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  //   $(".b-header-slider__item__circle").velocity("reverse");
  //   $(".slick-active").find('.b-header-slider__item__circle').velocity({"scale": ["1.58", "8"]}, 2200,"easeInOutCubic").velocity("reverse");
  //
  // });
  var atyab= $(".b-header-slider__item.atyab"),
      yasmina= $(".b-header-slider__item.yasmina"),
      alati= $(".b-header-slider__item.alati"),
      warrini= $(".b-header-slider__item.warrini"),
      mazyun= $(".b-header-slider__item.mazyun"),
      mashaheeri= $(".b-header-slider__item.mashaheeri"),

      atyab_circle = $(".b-header-slider__item.atyab .b-header-slider__item__circle"),
      yasmina_circle = $(".b-header-slider__item.yasmina .b-header-slider__item__circle"),
      alati_circle = $(".b-header-slider__item.alati .b-header-slider__item__circle"),
      warrini_circle = $(".b-header-slider__item.warrini .b-header-slider__item__circle"),
      mazyun_circle = $(".b-header-slider__item.mazyun .b-header-slider__item__circle"),
      mashaheeri_circle = $(".b-header-slider__item.mashaheeri .b-header-slider__item__circle");


      $(".b-header-slider").on("beforeChange", function(event, slick, currentSlide, nextSlide){
        var _this = $(".b-header-slider__item")[currentSlide];
        var _next = $(".b-header-slider__item")[nextSlide];


        if (currentSlide < nextSlide || currentSlide == 6){ // forward
          if (currentSlide == 0){
            $(_this).find(".b-header-slider__item__circle").velocity({translateZ:0, rotateZ: '+=360deg', delay:400}, 3000, ['220','26']);
            $(_next).find(".b-header-slider__item__circle").velocity({translateZ:0, scale:'2.4', delay:400}, 3000, ['220','26']); //yasmina anim
          } else if (currentSlide == 1){
            $(_this).find(".b-header-slider__item__circle").velocity({translateZ:0, scale:'4', delay:400}, 3000, ['220','26']); // yasmina final
            $(_next).find(".b-header-slider__item__circle").velocity({translateZ:0,scale:'1.4',translateX:"10%", rotateZ: '+=30deg', delay:400}, 3000, ['220','26']);
            // rotateZ(412deg) translateX(50%) translateY(-29%) scale(4.4)
          } else if (currentSlide == 2){
            $(_this).find(".b-header-slider__item__circle").velocity({translateZ:0, scale:'4', delay:400}, 3000, ['220','30']); // yasmina final
            $(_next).find(".b-header-slider__item__circle").velocity({translateZ:0,scale:'1.4',translateX:"10%", rotateZ: '+=30deg', delay:400}, 3000,['220','30'] );
          } else if (currentSlide == 3){
            $(_this).find(".b-header-slider__item__circle").velocity({translateZ:0, scale:'4', delay:400}, 3000, ['220','26']); // yasmina final
            $(_next).find(".b-header-slider__item__circle").velocity({translateZ:0,scale:'1.4',translateX:"10%", rotateZ: '+=30deg', delay:400}, 3000, ['220','26']);
          } else if (currentSlide == 4){
            $(_this).find(".b-header-slider__item__circle").velocity({translateZ:0, scale:'4', delay:400}, 3000, ['220','26']); // yasmina final
            $(_next).find(".b-header-slider__item__circle").velocity({translateZ:0,scale:'1.4',translateX:"10%", rotateZ: '+=30deg', delay:400}, 3000, ['220','26']);
          } else if (currentSlide == 5){
            $(_this).find(".b-header-slider__item__circle").velocity({translateZ:0, scale:'4', delay:400}, 3000, ['220','26']); // yasmina final
            $(_next).find(".b-header-slider__item__circle").velocity({translateZ:0,scale:'1.4',translateX:"10%", rotateZ: '+=30deg', delay:400}, 3000, ['220','26']);
          }


        } else { // backward

          if (currentSlide == 0){

          } else if (currentSlide == 1){

          } else if (currentSlide == 2){

          } else if (currentSlide == 3){

          } else if (currentSlide == 4){

          } else if (currentSlide == 5){

          }
          $(_this).find(".b-header-slider__item__circle").velocity({translateZ:0, rotateZ: '+=30deg', delay:400}, 3000, ['220','26']);
          $(_next).find(".b-header-slider__item__circle").velocity({translateZ:0, translateX:"-10%"}, 2600, ['220','26']);
          // $(_next).find(".b-header-slider__item__circle").velocity({translateZ:0, rotateZ: '+=360deg'}, 2600, 'easeInOutExpo');
        }
      });
      setTimeout(function(){
        $(".b-header-slider__item__circle").velocity({translateZ:0, rotateZ: ['+=360deg', '52deg']}, 2500, 'easeInOutExpo');
      },1400);
});
