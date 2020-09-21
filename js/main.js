$(document).ready(function () {
  $(".download__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    infinite: true,
  });
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    center: true,
    items: 4,
    loop: true,
    margin: 10,
    touchDrag: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      900: {
        items: 4,
      },
    },
  });
});

var opener = document.querySelector(".menu__button");
var menu = document.querySelector(".header__head_nav");

function clickHandler(event) {
  console.log("Opener was clicked");
  menu.classList.toggle("is-active");
}

opener.addEventListener("click", clickHandler);


