$(document).ready(function () {

  var trainingSlider = new Swiper('.training-slider__container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 60,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.training-slider__button--next',
      prevEl: '.training-slider__button--prev',
    },
  });


});