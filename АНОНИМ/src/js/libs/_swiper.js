
import Swiper, { Navigation, Pagination, EffectCards, Autoplay } from 'swiper';

export const initSwiper = () => {

  // banner slider
  const swiper1 = new Swiper ('.banner__slider', {
    modules: [Navigation, Pagination, Autoplay],
    grabCursor: true,
    autoplay: true,
    simulateTouch: true,
    loop:true,
  });
  
  // gallery slider
  const swiper2 = new Swiper ('.gallery__slider', {
    modules: [Navigation, Pagination, EffectCards],
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

  //swiper-popup
  const swiper3 = new Swiper(".vacancies__slider", {
    modules: [Navigation, Pagination, EffectCards, Autoplay],
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

  const swiper4 = new Swiper(".mySwiper", {
    modules: [Navigation, Pagination, EffectCards, Autoplay],
    slidesPerView: 5,
    spaceBetween: 5,
    loop: true,
    autoplay: true,

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

  // Слайдер для страницы история завода
  const swiper5 = new Swiper(".news__slider__container", {
    modules: [Navigation, Pagination, Autoplay],
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
}