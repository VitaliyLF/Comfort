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
    queueLimit: 5,
    easing: 'ease-in-out',
    duration: 500,
    effects: 'rotateY(-50deg) fade',
    perspectiveDistance: '2000px',
  },
})
