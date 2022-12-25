$(function () {
  $('.top-slider__items').slick({
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
    effects: 'fade rotateY(-100deg)',
  },
})

var mixer = mixitup('.design__content', {
  animation: {
    duration: 500,
    effects: 'fade rotateY(-100deg)',
  },
})

$(function () {
  $('.star').rateYo({
    starWidth: '15px',
    normalFill: '#ccccce',
    ratedFill: '#ffc35b',
    fullStar: true,
  })
})
