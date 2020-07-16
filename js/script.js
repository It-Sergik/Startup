$(function () {
  $(".mini-menu").click(function () {
    if ($("nav ul").css("display") == "none") {
      $("nav ul").slideDown();
    } else {
      $("nav ul").slideUp();
    }
  });

  $(".about-slider").slick({
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: false,
          centerMode: true,
          centerPedding: "50px",
        },
      },
    ],
  });
});
