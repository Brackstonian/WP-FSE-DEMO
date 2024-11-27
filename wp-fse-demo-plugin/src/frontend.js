document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.wp-block-wp-fse-demo-plugin-carousel')) {
        import('./blocks/carousel/swiper-frontend')
        .then((module) => {
            module.default();
        })
    }
});
