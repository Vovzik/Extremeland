//slider

$('.section__images-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<button type="button" class="slick-btn slick-right"></button>',
  prevArrow: '<button type="button" class="slick-btn slick-left"></button>',
});



const slider = document.querySelector('.projects__slider');


let swiper = new Swiper(slider, {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 800,
  centeredSlides: true,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0, // Поворот слайда в градусах
    stretch: 140, // Растянуть пространство между слайдами (в пикселях)
    depth:  140, // Смещение глубины в пикселях (слайды переводятся по оси Z)
    modifier: 5, // Эффект мультиплеера
    slideShadows : true, // Включает тени слайдов
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },


  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      effect: 'slide',
    },

    1294: {
      slidesPerView: 1,
      spaceBetween: 0,
      effect: 'coverflow',
    },
  
  }

});


