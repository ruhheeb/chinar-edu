$(document).ready(function () {
  // Main training Video
  var videoButton = $('.video__button');
  var closeButton = $('.video__close-button');
  videoButton.on('click', openVideo);
  closeButton.on('click', closeVideo);

  function openVideo(event) {
    event.preventDefault();
    var videoTraining = $('.video__wrap');
    $(videoTraining).addClass('video__wrap--visible');
  };

  function closeVideo(event) {
    event.preventDefault();
    var videoTraining = $('.video__wrap');
    $(videoTraining).removeClass('video__wrap--visible');
  };

  $(document).keyup(function (event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
      closeVideo(event);
    }
  });

  // Mobile menu
  var mobileButton = $('.menu-button');
  var closeButton = $('.mobile-menu__close');
  mobileButton.on('click', openMobileMenu);
  closeButton.on('click', closeMobileMenu);

  $(document).keyup(function (event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
      closeMobileMenu(event);
    }
  });

  function openMobileMenu(event) {
    var mobileMenu = $('.navbar__mobile-menu');
    mobileMenu.addClass('navbar__mobile-menu--visible');
  };

  function closeMobileMenu(event) {
    event.preventDefault();
    var mobileMenu = $('.navbar__mobile-menu');
    mobileMenu.removeClass('navbar__mobile-menu--visible');
  };

  // Training Slider
  var trainingSlider = new Swiper('.training-slider__container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 340,
      depth: 300,
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