"use strict";

import Swiper, {Navigation, Pagination, Autoplay, EffectFade} from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

export function initSwiperSlider(container, options) {
    const containerEL = document.querySelector(container);
    if (containerEL) {
        const swiper = new Swiper(container, {
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            loop: true,
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            ...options
        });
    }
}