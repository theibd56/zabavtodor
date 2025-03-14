import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener("DOMContentLoaded", function () {
    const mainSlider = new Swiper('#js-main-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 600,
        loop: true,
        autoplay: {
            delay: 10000,
        },
        pagination: {
            el: '.js-promo-slider .swiper-pagination',
            clickable: true,
        }
    });
});