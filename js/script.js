$(function () {
  $(".mini-menu").click(function () {
    if ($("nav ul").css("display") == "none") {
      $("nav ul").slideDown();
    } else {
      $("nav ul").slideUp();
    }
  });

  $(".about-slider").slick({
    arrows: false,
    dots: true,
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
