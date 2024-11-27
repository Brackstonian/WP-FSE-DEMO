import { InnerBlocks } from '@wordpress/block-editor';

const Edit = ({ className}) => {
    return (
        <div className={`${className} swiper-slide`}>
            <InnerBlocks
                allowedBlocks={true}
                template={[
                    ['core/paragraph', { placeholder: 'Add content to your slide...' }],
                ]}
                templateLock={false}
            />
        </div>
    );
};

export default Edit;
