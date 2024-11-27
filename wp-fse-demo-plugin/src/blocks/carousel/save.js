import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export const Save = ({ attributes }) => {
    const blockProps = useBlockProps.save();

    const {
        slidesPerView = 3,
        spaceBetween = 0,
        loop = true,
        autoplay = false,
        autoplayDelay = 3000,
        speed = 300,
        effect = 'slide',
        fadeTransitionDuration = 700,
        navigation = true,
        pagination = true,
        breakpoints = {}
    } = attributes;

    const smallestBreakpoint = Object.keys(breakpoints).sort((a, b) => Number(a) - Number(b))[0];
    const defaultSlidesPerView = breakpoints[smallestBreakpoint]?.slidesPerView ?? slidesPerView;
    const defaultSpaceBetween = breakpoints[smallestBreakpoint]?.spaceBetween ?? spaceBetween;

    return (
    <div {...blockProps}>
        <div
            className="swiper"
            data-slides-per-view={defaultSlidesPerView}
            data-space-between={defaultSpaceBetween}
            data-loop={loop.toString()}
            data-autoplay={autoplay.toString()}
            data-autoplay-delay={autoplayDelay}
            data-speed={speed}
            data-effect={effect}
            data-fade-duration={effect === 'fade' ? fadeTransitionDuration : undefined}
            data-navigation={navigation.toString()}
            data-pagination={pagination.toString()}
            data-breakpoints={JSON.stringify(breakpoints)}
            data-zoom-effect={attributes.zoomEffect.toString()}
            data-zoom-scale={attributes.zoomScale}
            data-zoom-duration={attributes.zoomDuration}
        >
            <div className="swiper-wrapper">
                <InnerBlocks.Content />
            </div>
            {navigation && (
                <>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </>
            )}
            {pagination && <div className="swiper-pagination"></div>}
            </div>
        </div>
    );
};
