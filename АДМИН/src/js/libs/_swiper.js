
import Swiper, { Navigation, Pagination, EffectCards, Autoplay } from 'swiper';

export const initSwiper = () => {
  // banner slider
  let swiper1 = new Swiper ('.banner__slider', {
    modules: [ Navigation, Pagination, Autoplay ],
    grabCursor: true,
    autoplay: true,
    simulateTouch: true,
    loop:true,
  });

  // gallery slider
  const swiper2 = new Swiper ('.gallery__slider', {
    modules: [Navigation, Pagination, EffectCards, Autoplay],
    effect: 'cards',
    autoplay: true,
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

  // Слайдер для страницы история завода
  const swiper4 = new Swiper(".mySwiper", {
    modules: [Navigation],
    spaceBetween: 5,
    loop: true,
    autoplay:true,
    slidesPerView: 3,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // freeMode: true,

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

  // Слайдер для страницы над новостями
  const swiper9 = new Swiper(".news__slider__container", {
    modules: [Pagination, Autoplay],
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

  //swiper-Первого шаблона
  const swiper5 = new Swiper(".first__tamplate__slider", {
    modules: [Navigation, Pagination, EffectCards],
    effect: 'cards',
    EffectCards: {
      rotate: true,
      slideShadows: false,
      transformEl: '.first__tamplate__slider-slide'
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

  //swiper-Второго шаблона
  const swiper6 = new Swiper(".second__pattern__slider", {
    modules: [Navigation, Pagination, EffectCards],
    effect: 'cards',
    EffectCards: {
      rotate: true,
      slideShadows: false,
      transformEl: '.second__pattern__slider-slide'
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

  //swiper-Тререго шаблона
  const swiper7 = new Swiper(".third__pattern__slider", {
    modules: [Navigation, Pagination, EffectCards],
    effect: 'cards',
    EffectCards: {
      rotate: true,
      slideShadows: false,
      transformEl: '.third__pattern__slider-slide'
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

  //swiper-Четвертого шаблона
  const swiper8 = new Swiper(".four__pattern__slider", {
    modules: [Navigation, Pagination, EffectCards],
    effect: 'cards',
    EffectCards: {
      rotate: true,
      slideShadows: false,
      transformEl: '.four__pattern__slider-slide'
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
}