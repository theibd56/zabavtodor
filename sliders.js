import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener("DOMContentLoaded", function () {
    const mainSlider = new Swiper('.js-main-slider .swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 600,
        loop: true,
        autoplay: {
            delay: 10000,
        },
        navigation: {
            prevEl: '.js-main-slider .prev',
            nextEl: '.js-main-slider .next'
        }
    });
});