import { registerBlockType } from '@wordpress/blocks';
import { Edit } from './edit';
import { Save } from './save';

registerBlockType('wp-fse-demo-plugin/carousel', {
    title: 'Carousel',
    description: 'A swiper.js Carousel',
    icon: 'images-alt2',
    category: 'media',
    "supports": {
        "align": ["full", "wide"]
    },
    attributes: {
        fadeTransitionDuration: {
            type: 'number',
            default: 300,
        },
        zoomEffect: {
            type: 'boolean',
            default: false,
        },
        zoomScale: {
            type: 'number',
            default: 1,
        },
        zoomDuration: {
            type: 'number',
            default: 5000,
        },
        loop: {
            type: 'boolean',
            default: true,
        },
        autoplay: {
            type: 'boolean',
            default: false,
        },
        autoplayDelay: {
            type: 'number',
            default: 3000,
        },
        speed: {
            type: 'number',
            default: 300,
        },
        effect: {
            type: 'string',
            default: 'slide',
        },
        navigation: {
            type: 'boolean',
            default: true,
        },
        pagination: {
            type: 'boolean',
            default: true,
        },
        breakpoints: {
            type: 'object',
            default: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            },
        },
    },
    edit: Edit,
    save: Save,
});
