$(function(){
  $(".b-header-slider").slick({
    prevArrow: '<img src="assets/img/slide-arrow-left.svg" class="arrow-right">',
    nextArrow: '<img src="assets/img/slide-arrow-right.svg" class="arrow-left">',
    dots:true,
    speed:2000,
    fade:true,
    easing:'easeInOut',
    responsive: [{
      breakpoint:1024,
      settings: {
        fade:false,
        speed:400
      }
    }]
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


      // $(".b-header-slider").on("beforeChange", function(event, slick, currentSlide, nextSlide){
      //   var _this = $(".b-header-slider__item")[currentSlide];
      //   var _next = $(".b-header-slider__item")[nextSlide];
      //   console.log("current slide: " + currentSlide);
      //
      // });

      $(".slick-arrow.arrow-right").click(function(){
        console.log("right");
        if (!$(".slick-active .mask-circle").hasClass("velocity-animating")){
          $(".slick-active .mask-circle").velocity({translateZ:0, rotateZ:["-=360deg", '0deg']}, 2000, 'easeInOutQuint');
        }
      });
      $(".slick-arrow.arrow-left").click(function(){
        console.log("left");
        if (!$(".slick-active .mask-circle").hasClass("velocity-animating")){
          $(".slick-active .mask-circle").velocity({translateZ:0, rotateZ:["+=360deg", '0deg']}, 2000, 'easeInOutQuint');
        }

      });
      // setTimeout(function(){
        $(".atyab .mask-circle").velocity({translateZ:0, rotateZ:["+=360deg", '0deg']}, 2500, 'easeInOutExpo');
      // },400);
});
