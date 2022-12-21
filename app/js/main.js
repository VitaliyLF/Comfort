$(function () {
  $('.top-slider__content').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1500,
  })
})

var mixer = mixitup('.products__content', {
  animation: {
    duration: 500,
    nudge: true,
    effects: 'fade translateZ(-100px)',
  },
})
