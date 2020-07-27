$(function () {
  $(".mini-menu").click(function () {
    if ($(".home-item ul").css("display") == "none") {
      $(".home-item ul").slideDown();
    } else {
      $(".home-item ul").slideUp();
    }
  });

  $(".works-menu").click(function () {
    if ($(".works-item ul").css("display") == "none") {
      $(".works-item ul").slideDown();
    } else {
      $(".works-item ul").slideUp();
    }
  });

  $(".about-slider").slick({
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
