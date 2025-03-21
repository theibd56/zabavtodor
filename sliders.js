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

    const resourcesSlider = new Swiper('.js-resources-slider .swiper', {
        slidesPerView: 4,
        spaceBetween: 15,
        speed: 600,
        loop: true,
        autoplay: {
            delay: 10000,
        },
        navigation: {
            prevEl: '.js-resources-slider .prev',
            nextEl: '.js-resources-slider .next'
        },
        breakpoints: {
            992: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            300: {
                slidesPerView: 1,
                spaceBetween: 15,
            }
        }
    });
});