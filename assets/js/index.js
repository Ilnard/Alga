const teamSwiper = new Swiper('.team-swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  rewind: true,
  navigation: {
    nextEl: '.team-swiper-button-next',
    prevEl: '.team-swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    400: {
      slidesPerView: 2
    },
    640: {
      slidesPerView: 3
    },
    1400: {
      slidesPerView: 4
    },
  }
});
const reportsSwiper = new Swiper('.reports-swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  rewind: true,
  navigation: {
    nextEl: '.reports-swiper-button-next',
    prevEl: '.reports-swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 2
    },
    960: {
      slidesPerView: 3
    },
    1280: {
      slidesPerView: 4
    },
    1600: {
      slidesPerView: 5
    },
  }
});