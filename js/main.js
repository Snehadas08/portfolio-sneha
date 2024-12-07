(function () {
    const header = document.querySelector(".navbar");
    const about = document.querySelector(".about-me");
    // const toggleClass = "is-sticky";
    let aboutTop = about.offsetTop;
    console.log(aboutTop);
    window.addEventListener("scroll", function () {
      if (window.pageYOffset >= aboutTop) {
        header.classList.add("navbar-sticky");
      } else {
        header.classList.remove("navbar-sticky");
      }
    });
  })();
  
  $(document).ready(function () {
    // scroll to inner sections of a page.
    (function () {
      $(".scrollTo").click(function () {
        // this is a getter variable.
        // We're getting the current value of the href attribute of each element with a class "scrollTo".
        var getElem = $(this).attr("href");
        // This is a variable containing an integer value.
        var targetDistance = 100;
        // Checking If the element exists on the page or not.
        if ($(getElem).length) {
          // getting the top offset of the targetted element.
          var getOffset = $(getElem).offset().top;
          // Now We can animate to our desired section using the html element.
          $("html").animate(
            {
              scrollTop: getOffset - targetDistance,
            },
            100
          );
        }
        // returning false performs three tasks when called:
        // event.preventDefault();
        // event.stopPropagation();
        // Stops callback execution and returns immediately when called.
        return false;
      });
      
    })();
  
    $("#vt2").verticalTimeline({
      startLeft: false,
      arrows: false,
    });
    $("#vt3").verticalTimeline({
      startLeft: false,
      arrows: false,
    });
  });
  
  (function () {
    // dynamically added the back to top button.
    $('body').append('<a href="#" class="back-to-top">Back to Top</a>');
    var amountScrolled = window.outerHeight;
    $(window).scroll(function () {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('slow');
        } else {
            $('a.back-to-top').fadeOut('slow');
        }
    });
    $('a.back-to-top').click(function () {
        $('html').animate({ scrollTop: 0 }, 100);
        return false;
    });
})();
