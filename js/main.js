$(function () {
  function backToTop() {
    let button = $('.back-top')

    $(window).on('scroll', () => {
      if ($(this).scrollTop() >= 50) {
        button.fadeIn()
      } else {
        button.fadeOut()
      }
    })

    button.on('click', (e) => {
      e.preventDefault()
      $('html').animate({ scrollTop: 0 }, 1000)
    })
  }

  backToTop()

  $('.question__title').on('click', function () {
    if ($('.question').hasClass('one-open')) {
      $('.question__title').not($(this)).removeClass('active')
      $('.question__text').not($(this).next()).slideUp(300)
    }
    $(this).toggleClass('active').next().slideToggle(300)
  })

  $('.footer__hidden').on('click', function () {
    $(this).next().slideToggle()
    $(this).toggleClass('footer-top__title--active')
  })

  $('.menu__button').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active')
  })

  $('.blog-page__slider').slick({
    infinite: false,
    draggable: false,
  })

  $('.related__items').slick({
    infinite: true,
    draggable: false,
    slidesToShow: 3,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1101,
        settings: {
          slidesToShow: 2,
          draggable: true,
          autoplay: true,
          autoplaySpeed: 750,
        },
      },
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 1,
          draggable: true,
        },
      },
    ],
  })

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault()
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active')
    $(this).addClass('product-tabs__top-item--active')

    $('.product-tabs__content-item').removeClass(
      'product-tabs__content-item--active'
    )
    $($(this).attr('href')).addClass('product-tabs__content-item--active')
  })

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
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          draggable: true,
          autoplay: true,
          autoplaySpeed: 750,
        },
      },
    ],
  })

  $('.shop__filters-btn').on('click', function () {
    $('.shop__filters').slideToggle()
  })

  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass(
      'shop-content__filter-btn--active'
    )
    $(this).addClass('shop-content__filter-btn--active')
  })

  $('.button-list').on('click', function () {
    $('.products-item').addClass('products-item--list')
    $('.shop-content__inner').addClass('shop-content__nogrid')
  })

  $('.button-grid').on('click', function () {
    $('.products-item').removeClass('products-item--list')
    $('.shop-content__inner').removeClass('shop-content__nogrid')
  })

  $('.select-style,.product-info__num').styler({
    locale: 'ru',
  })

  $('.star,.related__star').rateYo({
    starWidth: '15px',
    normalFill: '#eeeeee',
    ratedFill: '#ffaaa6',
    fullStar: true,
    starSvg:
      '<svg width="18px" height="16px" viewBox="0 0 24 24" fill="none"xmlns="http://www.w3.org/2000/svg"><g id="style=fill"><g id="star"><path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd"d="M14.4012 3.17499C13.8719 2.11134 13.0447 1.32715 11.9987 1.32715C10.9539 1.32715 10.1241 2.11 9.58985 3.17284L7.82915 6.69424L7.82642 6.69975C7.77359 6.8076 7.64731 6.9611 7.45702 7.10219C7.26737 7.2428 7.0834 7.31975 6.96547 7.34005L6.96441 7.34023L3.77705 7.86979C2.62694 8.06147 1.66106 8.62118 1.34801 9.6015C1.03519 10.5811 1.49663 11.597 2.31964 12.42L4.79964 14.9C4.89724 14.9976 5.0066 15.1815 5.07518 15.4211C5.14334 15.6592 5.1491 15.8751 5.11856 16.0137L5.11813 16.0156L4.40928 19.0806C4.11373 20.3578 4.21624 21.6259 5.12539 22.2893C6.03398 22.9522 7.27361 22.6647 8.40273 21.9946L11.3871 20.2279L11.389 20.2268C11.5232 20.1494 11.7443 20.0896 12.0037 20.0896C12.265 20.0896 12.4816 20.1502 12.6076 20.2249L15.5979 21.995C16.7284 22.6628 17.9695 22.9555 18.878 22.2932C19.7878 21.6299 19.8854 20.3595 19.5908 19.0812L18.8818 16.0156L18.8814 16.0137C18.8508 15.8751 18.8566 15.6592 18.9248 15.4211C18.9933 15.1815 19.1027 14.9976 19.2003 14.9L21.6785 12.4218L21.6795 12.4208C22.5077 11.5978 22.9706 10.5811 22.6552 9.60014C22.3403 8.62044 21.3726 8.06141 20.2233 7.86985L17.0333 7.33985" fill="#  " /></g></g></svg>',
  })

  $('.star-shop').rateYo({
    starWidth: '18px',
    spacing: '13px',
    normalFill: '#eeeeee',
    ratedFill: '#ffaaa6',
    fullStar: true,
    starSvg:
      '<svg width="18px" height="16px" viewBox="0 0 24 24" fill="none"xmlns="http://www.w3.org/2000/svg"><g id="style=fill"><g id="star"><path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd"d="M14.4012 3.17499C13.8719 2.11134 13.0447 1.32715 11.9987 1.32715C10.9539 1.32715 10.1241 2.11 9.58985 3.17284L7.82915 6.69424L7.82642 6.69975C7.77359 6.8076 7.64731 6.9611 7.45702 7.10219C7.26737 7.2428 7.0834 7.31975 6.96547 7.34005L6.96441 7.34023L3.77705 7.86979C2.62694 8.06147 1.66106 8.62118 1.34801 9.6015C1.03519 10.5811 1.49663 11.597 2.31964 12.42L4.79964 14.9C4.89724 14.9976 5.0066 15.1815 5.07518 15.4211C5.14334 15.6592 5.1491 15.8751 5.11856 16.0137L5.11813 16.0156L4.40928 19.0806C4.11373 20.3578 4.21624 21.6259 5.12539 22.2893C6.03398 22.9522 7.27361 22.6647 8.40273 21.9946L11.3871 20.2279L11.389 20.2268C11.5232 20.1494 11.7443 20.0896 12.0037 20.0896C12.265 20.0896 12.4816 20.1502 12.6076 20.2249L15.5979 21.995C16.7284 22.6628 17.9695 22.9555 18.878 22.2932C19.7878 21.6299 19.8854 20.3595 19.5908 19.0812L18.8818 16.0156L18.8814 16.0137C18.8508 15.8751 18.8566 15.6592 18.9248 15.4211C18.9933 15.1815 19.1027 14.9976 19.2003 14.9L21.6785 12.4218L21.6795 12.4208C22.5077 11.5978 22.9706 10.5811 22.6552 9.60014C22.3403 8.62044 21.3726 8.06141 20.2233 7.86985L17.0333 7.33985" fill="#  " /></g></g></svg>',
  })

  $('.shop-recent__star').rateYo({
    starWidth: '10px',
    spacing: '3px',
    normalFill: '#eeeeee',
    ratedFill: '#ffaaa6',
    fullStar: true,
    starSvg:
      '<svg width="18px" height="16px" viewBox="0 0 24 24" fill="none"xmlns="http://www.w3.org/2000/svg"><g id="style=fill"><g id="star"><path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd"d="M14.4012 3.17499C13.8719 2.11134 13.0447 1.32715 11.9987 1.32715C10.9539 1.32715 10.1241 2.11 9.58985 3.17284L7.82915 6.69424L7.82642 6.69975C7.77359 6.8076 7.64731 6.9611 7.45702 7.10219C7.26737 7.2428 7.0834 7.31975 6.96547 7.34005L6.96441 7.34023L3.77705 7.86979C2.62694 8.06147 1.66106 8.62118 1.34801 9.6015C1.03519 10.5811 1.49663 11.597 2.31964 12.42L4.79964 14.9C4.89724 14.9976 5.0066 15.1815 5.07518 15.4211C5.14334 15.6592 5.1491 15.8751 5.11856 16.0137L5.11813 16.0156L4.40928 19.0806C4.11373 20.3578 4.21624 21.6259 5.12539 22.2893C6.03398 22.9522 7.27361 22.6647 8.40273 21.9946L11.3871 20.2279L11.389 20.2268C11.5232 20.1494 11.7443 20.0896 12.0037 20.0896C12.265 20.0896 12.4816 20.1502 12.6076 20.2249L15.5979 21.995C16.7284 22.6628 17.9695 22.9555 18.878 22.2932C19.7878 21.6299 19.8854 20.3595 19.5908 19.0812L18.8818 16.0156L18.8814 16.0137C18.8508 15.8751 18.8566 15.6592 18.9248 15.4211C18.9933 15.1815 19.1027 14.9976 19.2003 14.9L21.6785 12.4218L21.6795 12.4208C22.5077 11.5978 22.9706 10.5811 22.6552 9.60014C22.3403 8.62044 21.3726 8.06141 20.2233 7.86985L17.0333 7.33985" fill="#  " /></g></g></svg>',
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
    autoplaySpeed: 1000,
  })

  var containerEl = document.querySelector('.products')
  var containerEl2 = document.querySelector('.design')
  let config = {
    controls: {
      scope: 'local',
    },
    animation: {
      duration: 500,
      effects: 'fade rotateY(-100deg)',
    },
  }
  var mixer1 = mixitup(containerEl, config)
  var mixer2 = mixitup(containerEl2, config)

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
