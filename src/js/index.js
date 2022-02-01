"use strict";

import {preventDefault, setCurrentYear} from "./modules/helpers";
import {initSwiperSlider} from './modules/slider';

document.addEventListener('DOMContentLoaded', () => {
    preventDefault();

    initSwiperSlider('.testimonials_slider', {
        slidesPerView: 1,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        }
    })
    setCurrentYear();
})