$(document).ready(function () {
  $(".skills-carousel").slick({
    arrows: true,
    centerPadding: "0px",
    dots: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          // slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          // slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  });
});
