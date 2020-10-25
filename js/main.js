$(function(){
    $('.slider__photo').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        variableWidth: true,
    });
    $('.header__menu-btn').on('click', function(){
        $('.header__menu ul').slideToggle();
      });
  });