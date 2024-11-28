import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

registerBlockType('wp-fse-demo-plugin/hello-world', {
    title: 'Hello World!',
    description: 'Hello Gutenberg!',
    icon: 'smiley',
    category: 'common',
    attributes: {
        content: {
            type: 'string',
            source: 'html',
        },
    },
    edit: ({ attributes, setAttributes }) => {
        const { content } = attributes;

        const onChangeContent = (newContent) => {
            setAttributes({ content: newContent });
        };

        return (
            <RichText 
            tagName="h2"
            value={content}
            key="editable"
            onChange={onChangeContent}
            placeholder="Enter text here!"
            />
        )
    },
    save: ({ attributes }) => {
        const { content } = attributes;

        return (
            <h2>{content}</h2>
        )
    }
})