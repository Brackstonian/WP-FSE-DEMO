import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade, EffectCube, EffectCoverflow, EffectFlip } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
export default function swiperInit() {
    if (!Swiper) {
        console.error('Swiper is not loaded');
        return;
    }

    const swipers = document.querySelectorAll('.swiper');
    console.log('Found', swipers.length, 'swiper elements');

    swipers.forEach((swiperEl, index) => {
        if (!(swiperEl instanceof Element)) {
            console.error('Invalid Swiper element:', swiperEl);
            return;
        }

        const effect = swiperEl.getAttribute('data-effect') || 'slide';
        const modules = [];

        // Add modules to the array based on conditions
        modules.push(Navigation, Pagination, Autoplay); // Add default modules
        if (effect === 'fade') modules.push(EffectFade);
        if (effect === 'cube') modules.push(EffectCube);
        if (effect === 'coverflow') modules.push(EffectCoverflow);
        if (effect === 'flip') modules.push(EffectFlip);

        // Parse options from attributes
        const swiperOptions = {
            modules: modules,
            slidesPerView: parseInt(swiperEl.getAttribute('data-slides-per-view')) || 1,
            spaceBetween: parseInt(swiperEl.getAttribute('data-space-between')) || 0,
            effect: effect,
            loop: swiperEl.getAttribute('data-loop') === 'true',
            navigation: swiperEl.getAttribute('data-navigation') === 'true' ? {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            } : false,
            pagination: swiperEl.getAttribute('data-pagination') === 'true' ? {
                el: '.swiper-pagination',
                clickable: true,
            } : false,
            autoplay: swiperEl.getAttribute('data-autoplay') === 'true' ? {
                delay: parseInt(swiperEl.getAttribute('data-autoplay-delay')) || 3000,
            } : false,
        };

        console.log('Initializing Swiper with options:', swiperOptions);

        try {
            // Validate the swiper element structure
            const wrapper = swiperEl.querySelector('.swiper-wrapper');
            if (!wrapper) throw new Error('No .swiper-wrapper found in Swiper element');

            const slides = wrapper.querySelectorAll('.swiper-slide');
            if (!slides.length) throw new Error('No .swiper-slide elements found in Swiper');

            // Initialize Swiper
            setTimeout(() => {
                new Swiper(swiperEl, swiperOptions);
                console.log('Swiper', index + 1, 'initialized successfully');
            }, 0);
        } catch (error) {
            console.error('Error initializing Swiper', index + 1 + ':', error);
        }
    });
};