$(function () {
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

  $(function () {
    $('.star').rateYo({
      starWidth: '15px',
      normalFill: '#ccccce',
      ratedFill: '#ffc35b',
      fullStar: true,
    })
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
