import { useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    const {
        content,
        checkboxField,
        radioField,
        toggleField,
        selectField,
    } = attributes;
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
            <h2>Inspector Control Fields</h2>
            <ul>
                    <li>Checkbox Field: {checkboxField ? 'Checked' : 'Unchecked'}</li>
                    <li>Radio Field: {radioField}</li>
                    <li>Text Field: {content}</li>
                    <li>Toggle Field: {toggleField ? 'Enabled' : 'Disabled'}</li>
                    <li>Select Field: {selectField}</li>
            </ul>
        </div>
    );
};

export default Save;