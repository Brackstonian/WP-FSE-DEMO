import { __ } from '@wordpress/i18n';
import {
    InspectorControls,
    InnerBlocks,
    useBlockProps,
} from '@wordpress/block-editor';
import {
    PanelBody,
    RangeControl,
    ToggleControl,
    TextControl,
} from '@wordpress/components';
import './style.css';

export const Edit = (props) => {
    const blockProps = useBlockProps();
    const { attributes = {}, setAttributes } = props;
    const { breakpoints, ...otherAttributes } = attributes;

    const updateBreakpoint = (breakpoint, key, value) => {
        const newBreakpoints = { ...breakpoints };
        newBreakpoints[breakpoint] = {
            ...newBreakpoints[breakpoint],
            [key]: value,
        };
        setAttributes({ breakpoints: newBreakpoints });
    };

    const {
        loop = true,
        autoplay = false,
        autoplayDelay = 3000,
        fadeTransitionDuration = 300,
        speed = 300,
        effect = 'slide',
        step = 700,
        navigation = true,
        pagination = true,
    } = attributes;

    return (
        <>
            <div {...blockProps}>
                <InspectorControls>
                    <PanelBody title={__('Swiper Settings', 'text-domain')}>
                        <ToggleControl
                            label={__('Loop', 'text-domain')}
                            checked={loop}
                            onChange={(value) => setAttributes({ loop: value })}
                        />
                        <ToggleControl
                            label={__('Autoplay', 'text-domain')}
                            checked={autoplay}
                            onChange={(value) =>
                                setAttributes({ autoplay: value })
                            }
                        />
                        {autoplay && (
                            <RangeControl
                                label={__('Autoplay Delay (ms)', 'text-domain')}
                                value={autoplayDelay}
                                onChange={(value) =>
                                    setAttributes({ autoplayDelay: value })
                                }
                                min={1}
                                max={10000}
                                step={500}
                            />
                        )}
                        <RangeControl
                            label={__('Speed (ms)', 'text-domain')}
                            value={speed}
                            onChange={(value) =>
                                setAttributes({ speed: value })
                            }
                            min={100}
                            max={5000}
                            step={100}
                        />
                        <TextControl
                            label={__('Effect', 'text-domain')}
                            value={effect}
                            onChange={(value) =>
                                setAttributes({ effect: value })
                            }
                            help={__(
                                'e.g., "slide", "fade", "cube", "coverflow", "flip"',
                                'text-domain'
                            )}
                        />
                        {effect === 'fade' && (
                            <RangeControl
                                label={__(
                                    'Fade Transition Duration (ms)',
                                    'text-domain'
                                )}
                                value={fadeTransitionDuration}
                                onChange={(value) =>
                                    setAttributes({
                                        fadeTransitionDuration: value,
                                    })
                                }
                                min={100}
                                max={2000}
                                step={100}
                            />
                        )}
                        <ToggleControl
                            label={__('Enable Zoom Effect', 'text-domain')}
                            checked={attributes.zoomEffect}
                            onChange={(value) =>
                                setAttributes({ zoomEffect: value })
                            }
                        />
                        {attributes.zoomEffect && (
                            <>
                                <RangeControl
                                    label={__('Zoom Scale', 'text-domain')}
                                    value={attributes.zoomScale}
                                    onChange={(value) =>
                                        setAttributes({ zoomScale: value })
                                    }
                                    min={1}
                                    max={1.5}
                                    step={0.1}
                                />
                                <RangeControl
                                    label={__(
                                        'Zoom Duration (ms)',
                                        'text-domain'
                                    )}
                                    value={attributes.zoomDuration}
                                    onChange={(value) =>
                                        setAttributes({ zoomDuration: value })
                                    }
                                    min={1000}
                                    max={10000}
                                    step={500}
                                />
                            </>
                        )}
                        <ToggleControl
                            label={__('Navigation', 'text-domain')}
                            checked={navigation}
                            onChange={(value) =>
                                setAttributes({ navigation: value })
                            }
                        />
                        <ToggleControl
                            label={__('Pagination', 'text-domain')}
                            checked={pagination}
                            onChange={(value) =>
                                setAttributes({ pagination: value })
                            }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__('Breakpoint Settings', 'text-domain')}
                        initialOpen={false}
                    >
                        {Object.keys(breakpoints).map((breakpoint) => (
                            <div key={breakpoint}>
                                <h3>
                                    {__(
                                        `Breakpoint ${breakpoint}px`,
                                        'text-domain'
                                    )}
                                </h3>
                                <RangeControl
                                    label={__('Slides Per View', 'text-domain')}
                                    value={
                                        breakpoints[breakpoint].slidesPerView
                                    }
                                    onChange={(value) =>
                                        updateBreakpoint(
                                            breakpoint,
                                            'slidesPerView',
                                            value
                                        )
                                    }
                                    min={1}
                                    max={10}
                                    step={0.1}
                                />
                                <RangeControl
                                    label={__('Space Between', 'text-domain')}
                                    value={breakpoints[breakpoint].spaceBetween}
                                    onChange={(value) =>
                                        updateBreakpoint(
                                            breakpoint,
                                            'spaceBetween',
                                            value
                                        )
                                    }
                                    min={0}
                                    max={100}
                                />
                            </div>
                        ))}
                    </PanelBody>
                </InspectorControls>
                
                <div className={`swiper editor-swiper`}>
                    <div className="swiper-wrapper">
                        <InnerBlocks
                            allowedBlocks={[
                                'wp-fse-demo-plugin/carousel-slide',
                            ]}
                            template={[
                                ['wp-fse-demo-plugin/carousel-slide'],
                                ['wp-fse-demo-plugin/carousel-slide'],
                                ['wp-fse-demo-plugin/carousel-slide'],
                            ]}
                            orientation="horizontal"
                            __experimentalCaptureToolbars={true}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
