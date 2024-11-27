import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';

registerBlockType('wp-fse-demo-plugin/inspector-controls', {
    title: 'Inspector Controls',
    description: 'Inspector controls example!',
    icon: 'smiley',
    category: 'common',
    attributes: {
		content: {
			type: 'string',
			default: 'Edit this text in the editor!'
		},
		checkboxField: {
			type: 'boolean',
			default: true,
		},
		radioField: {
			type: 'string',
			default: 'yes',
		},
		toggleField: {
			type: 'boolean',
			default: true,
		},
		selectField: {
			type: 'string',
			default: 'a',
		},
	},
    edit: Edit,
    save: Save,
});
