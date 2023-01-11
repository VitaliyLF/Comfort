$(function () {
  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,

  })
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
  })

  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass(
      'shop-content__filter-btn--active'
    )
    $(this).addClass('shop-content__filter-btn--active')
  })

  $('.button-list').on('click', function () {
    $('.products-item').addClass('products-item--list')
  })

  $('.button-grid').on('click', function () {
    $('.products-item').removeClass('products-item--list')
  })

  $('.select-style,.product-info__num').styler({
    locale: 'en',
  })

  $('.star').rateYo({
    starWidth: '15px',
    normalFill: '#ccccce',
    ratedFill: '#ffc35b',
    fullStar: true,
  })

  $('.star-shop').rateYo({
    starWidth: '18px',
    spacing: '13px',
    normalFill: '#ccccce',
    ratedFill: '#ffcc00',
    fullStar: true,
  })

  $('.shop-recent__star').rateYo({
    starWidth: '10px',
    spacing: '3px',
    normalFill: '#ccccce',
    ratedFill: '#ffcc00',
    fullStar: true,
  })

  $('.filter-price__input').ionRangeSlider({
    type: 'double',
    onStart: function (data) {
      $('.filter-price__from').text(data.from)
      $('.filter-price__to').text(data.to)
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from)
      $('.filter-price__to').text(data.to)
    },
  })

  $('.top-slider__items').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 750,
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

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date())
    var seconds = Math.floor((t / 1000) % 60)
    var minutes = Math.floor((t / 1000 / 60) % 60)
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24)
    var days = Math.floor(t / (1000 * 60 * 60 * 24))
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    }
  }

  function initializeClock(id, endtime) {
    var clock = document.querySelector('.sale__timer')
    var daysSpan = clock.querySelector('.sale__days')
    var hoursSpan = clock.querySelector('.sale__hours')
    var minutesSpan = clock.querySelector('.sale__minutes')
    var secondsSpan = clock.querySelector('.sale__seconds')

    function updateClock() {
      var t = getTimeRemaining(endtime)

      daysSpan.innerHTML = t.days
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2)
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2)
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2)

      if (t.total <= 0) {
        clearInterval(timeinterval)
      }
    }

    updateClock()
    var timeinterval = setInterval(updateClock, 1000)
  }

  var deadline = $('.sale__timer').attr('data-time')
  initializeClock('sale__timer', deadline)
})
