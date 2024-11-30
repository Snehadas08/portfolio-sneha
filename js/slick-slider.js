$(document).ready(function(){
    $('.slick-carousel').slick({
      arrows: true,
      centerPadding: "0px",
      dots: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      pauseOnHover: false,
      infinite: true,
        responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      }, {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }]
    });
  });