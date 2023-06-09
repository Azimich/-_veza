
import Swiper, { Navigation, Pagination, EffectCards, Autoplay } from 'swiper';

export const initSwiper = () => {

  // banner slider
  const swiper1 = new Swiper ('.banner__slider', {
    modules: [Navigation, Pagination],
    grabCursor: true,
    autoplay: {
      delay: 5000,
    },
    simulateTouch: true,
    loop:true,
  });

  // Слайдер для страницы редактирование моей страницы
  const swiper2 = new Swiper(".changeproduction__swiper__container", {
    modules: [Pagination, Autoplay, Navigation],
    loop: true,
    autoplay: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
  
  // gallery slider
  const swiper3 = new Swiper ('.gallery__slider', {
    modules: [Navigation, Pagination, EffectCards, Autoplay],
    effect: 'cards',
    EffectCards: {
      rotate: true,
      slideShadows: false,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',

      clickable: true,
      dynamicBullets: true,
    },

    simulateTouch: true,
    loop:true,
  });

  // Слайдер для страницы история завода
  const swiper9 = new Swiper(".news__slider__container", {
    modules: [Navigation, Pagination, Autoplay ],
    loop: true,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });

  //swiper-popup
  const swiper5 = new Swiper(".vacancies__slider", {

    modules: [Navigation, Pagination, EffectCards],
    effect: 'cards',
    EffectCards: {
      rotate: true,
      slideShadows: false,
      transformEl: '.banner__slider-slide'
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',

      clickable: true,
      dynamicBullets: true,
    },

    simulateTouch: true,
    loop:true,
  });

  const swiper6 = new Swiper(".mySwiper", {
    modules: [Navigation, Pagination, EffectCards],
    slidesPerView: 5,
    spaceBetween: 5,
    loop: true,
    autoplay: {
      delay: 5000,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 5,
      },
    },
  });
}