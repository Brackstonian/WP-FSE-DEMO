import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import Edit from './edit';
import Save from './save';

registerBlockType('wp-fse-demo-plugin/carousel-slide', {
    title: 'Carousel Slide',
    icon: 'slides',
    category: 'design',
    parent: ['wp-fse-demo-plugin/carousel'],
    edit: Edit,
    save: Save,
});
