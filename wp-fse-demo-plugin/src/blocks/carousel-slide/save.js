import { InnerBlocks } from '@wordpress/block-editor';

const Save = ({ className }) => {
    return (
        <div className={`${className} swiper-slide`}>
            <InnerBlocks.Content />
        </div>
    );
};

export default Save;