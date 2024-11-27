import {
    CheckboxControl,
    RadioControl,
    TextControl,
    ToggleControl,
    SelectControl,
    PanelBody,
} from '@wordpress/components';
import {
    RichText,
    InspectorControls,
    useBlockProps,
} from '@wordpress/block-editor';

const Edit = ({ attributes, setAttributes }) => {
    const blockProps = useBlockProps();
    const {
        content,
        checkboxField,
        radioField,
        toggleField,
        selectField,
    } = attributes;

    function onChangeContent(newContent) {
        setAttributes({ content: newContent });
    }

    function onChangeCheckboxField(newValue) {
        setAttributes({ checkboxField: newValue });
    }

    function onChangeRadioField(newValue) {
        setAttributes({ radioField: newValue });
    }

    function onChangeToggleField(newValue) {
        setAttributes({ toggleField: newValue });
    }

    function onChangeSelectField(newValue) {
        setAttributes({ selectField: newValue });
    }

    return (
        <>
            {/* Sidebar Controls */}
            <InspectorControls>
                <PanelBody title={'Settings'}>
                    <CheckboxControl
                        heading="Checkbox Field"
                        label="Tick Me"
                        help="Additional help text"
                        checked={checkboxField}
                        onChange={onChangeCheckboxField}
                    />

                    <RadioControl
                        label="Radio Field"
                        selected={radioField}
                        help="Additional help text"
                        options={[
                            { label: 'Yes', value: 'yes' },
                            { label: 'No', value: 'no' },
                        ]}
                        onChange={onChangeRadioField}
                    />

                    <TextControl
                        label="Text Field"
                        help="Additional help text"
                        value={content}
                        onChange={onChangeContent}
                    />

                    <ToggleControl
                        label="Toggle Field"
                        help="Additional help text"
                        checked={toggleField}
                        onChange={onChangeToggleField}
                    />

                    <SelectControl
                        label="Select Control"
                        help="Additional help text"
                        value={selectField}
                        options={[
                            { value: 'a', label: 'Option A' },
                            { value: 'b', label: 'Option B' },
                            { value: 'c', label: 'Option C' },
                        ]}
                        onChange={onChangeSelectField}
                    />
                </PanelBody>
            </InspectorControls>

            {/* Live Preview */}
            <div {...blockProps}>
                <h2>Inspector Control Fields</h2>
                <ul>
                    <li>
                        Checkbox Field:{' '}
                        {checkboxField ? 'Checked' : 'Unchecked'}
                    </li>
                    <li>Radio Field: {radioField}</li>
                    <li>
                        Text Field:{<RichText
                            key="editable"
                            onChange={onChangeContent}
                            value={content}
                        />}
                    </li>
                    <li>
                        Toggle Field: {toggleField ? 'Enabled' : 'Disabled'}
                    </li>
                    <li>Select Field: {selectField}</li>
                </ul>
            </div>
        </>
    );
};

export default Edit;
