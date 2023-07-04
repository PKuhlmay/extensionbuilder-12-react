import {Fragment, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const ExtensionPropertiesAccordion = (props) => {
    const [extensionProperties, setExtensionProperties] = useState(props.properties);


    // let extensionTargetTYPO3Version;

    const categoryOptions = [
        "Frontend plugins",
        "Backend modules",
        "Miscellaneous",
        "Backend",
        "Frontend",
        "Service",
        "Templates",
        "Distribution",
        "Examples",
        "Documentation"
    ];

    const stateOptions = [
        "alpha",
        "beta",
        "stable",
        "experimental",
        "test",
    ];

    const targetTYPO3Versions = [
        "12.4",
        "13.0"
    ];

    const updateExtensionPropertiesHandler = (field, value) => {
        if (field.startsWith('emConf.')) {
            const emConfField = field.split('.')[1];
            setExtensionProperties(prevProps => ({
                ...prevProps,
                emConf: {
                    ...prevProps.emConf,
                    [emConfField]: value
                }
            }));
        } else {
            setExtensionProperties(prevProps => ({
                ...prevProps,
                [field]: value
            }));
        }
        props.updateExtensionPropertiesHandler(field, value);
    }

    // Change the depends on textarea depending on the target TYPO3 version
    // const updateDependsOnHandler = (e) => {
    const handleTargetTYPO3VersionChange = (e) => {
        const selectedVersion = e.target.value;

        // Split the current content of extensionDependsOn into lines
        let lines = extensionProperties.emConf.dependsOn.split('\n');

        // If the initial content is an empty string, initialize lines as an empty array
        if (lines.length === 1 && lines[0] === '') {
            lines = [];
        }

        // Variable to track if a line with TYPO3 was found
        let typo3LineFound = false;

        // Iterate through each line and update the line that contains TYPO3
        const updatedLines = lines.map(line => {
            if (line.trim().startsWith('typo3')) {
                typo3LineFound = true;
                // Here you can add logic to set the value based on the selected version
                if (selectedVersion === '12.4') {
                    return 'typo3 => 12.4.0-12.4.99';
                } else if (selectedVersion === '13.0') {
                    return 'typo3 => 13.0.0-13.0.99';
                }
            }
            return line; // If the line does not contain TYPO3, return it unchanged
        });

        // If no line with TYPO3 was found, add a new one
        if (!typo3LineFound) {
            const newTypo3Line = selectedVersion === '12.4' ? 'typo3 => 12.4.0-12.4.99' : 'typo3 => 13.0.0-13.0.99';
            updatedLines.push(newTypo3Line);
        }

        // Combine the updated lines back into a string
        const updatedDependsOnValue = updatedLines.join('\n');

        // Update the value of extensionDependsOn
        updateExtensionPropertiesHandler('emConf.dependsOn', updatedDependsOnValue);

        // Also update the value of extensionTargetTYPO3Versions
        updateExtensionPropertiesHandler('emConf.targetVersion', selectedVersion);
    };


    return (
        <Fragment>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title" id="heading-panel-properties">
                        <a href="#" data-bs-toggle="collapse" data-bs-target="#panel-properties" aria-expanded="true" aria-controls="panel-properties">
                            <span className="caret"></span>
                            <strong>Extension Properties</strong>
                        </a>
                    </h3>
                </div>
                <div id="panel-properties" className="accordion-collapse collapse show" aria-labelledby="heading-panel-properties"
                     data-bs-parent="#accordion-left-panel">
                    <div className="panel-body">
                        <div className="mb-2">
                            <label htmlFor="extensionName"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-signature" /></span>Extension Name</label>
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Extension Name"
                                aria-label="Extension Name"
                                aria-describedby="basic-addon1"
                                value={extensionProperties.name}
                                onChange={(e) => {
                                    updateExtensionPropertiesHandler('name', e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="extensionVendorName"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-signature" /></span>Vendor Name</label>
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Vendor Name"
                                aria-label="Vendor Name"
                                aria-describedby="basic-addon1"
                                value={extensionProperties.emConf.vendorName}
                                onChange={(e) => {
                                    updateExtensionPropertiesHandler('vendorName', e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="extensionKey"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-key" /></span>Extension key</label>
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Extension key"
                                aria-label="Extension key"
                                aria-describedby="basic-addon1"
                                value={extensionProperties.extensionKey}
                                onChange={(e) => {
                                    updateExtensionPropertiesHandler('extensionKey', e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-question" /></span>Extension Description</label>
                            <textarea
                                type="text"
                                className="form-control form-control-sm"
                                id="exampleFormControlTextarea1"
                                placeholder="Please enter the description for this extension"
                                value={extensionProperties.description}
                                onChange={(e) => {
                                    updateExtensionPropertiesHandler('description', e.target.value);
                                }}
                                rows="5" />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="extensionCategory"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-tag" /></span>Category</label>
                            <select
                                className="form-select"
                                aria-label="Category"
                                onChange={(e) => {
                                    updateExtensionPropertiesHandler('emConf.category', e.target.value);
                                }}
                            >
                                <option>Please choose the category</option>
                                {
                                    categoryOptions.map((category, index) => {
                                        return (
                                            <option key={index} value={category}>{category}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="extensionVersion"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-code-branch" /></span>Extension Version</label>
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Extension Version"
                                aria-label="Extension Version"
                                aria-describedby="basic-addon1"
                                value={extensionProperties.emConf.version}
                                onChange={(e) => {
                                    updateExtensionPropertiesHandler('emConf.version', e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="extensionState"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-question" /></span>State</label>
                            <select
                                className="form-select"
                                aria-label="State"
                                onChange={(e) => {
                                    updateExtensionPropertiesHandler('emConf.state', e.target.value);
                                }}
                            >
                                <option>Please choose the state</option>
                                {
                                    stateOptions.map((state, index) => {
                                        return (
                                            <option key={index} value={state}>{state}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <div className="form-check form-switch mb-2">
                            <label className="form-check-label" htmlFor="extensionDisableVersioning">Disable versioning</label>
                            <input className="form-check-input" type="checkbox" role="switch" id="extensionDisableVersioning"
                                   onChange={(e) => {
                                       updateExtensionPropertiesHandler('emConf.disableVersioning', e.target.checked);
                                   }}
                            />
                        </div>
                        <div className="form-check form-switch mb-2">
                            <label className="form-check-label" htmlFor="extensionDisableLocalization">Disable localization</label>
                            <input className="form-check-input" type="checkbox" role="switch" id="extensionDisableLocalization"
                                   onChange={(e) => {
                                       updateExtensionPropertiesHandler('emConf.disableLocalization', e.target.checked);
                                   }}
                            />
                        </div>
                        <div className="form-check form-switch mb-2">
                            <label className="form-check-label" htmlFor="extensionGenerateDocumentation">Generate documentation</label>
                            <input className="form-check-input" type="checkbox" role="switch" id="extensionGenerateDocumentation"
                                   onChange={(e) => {
                                       updateExtensionPropertiesHandler('emConf.generateDocumentationTemplate', e.target.checked);
                                   }}
                            />
                        </div>
                        <div className="form-check form-switch mb-2">
                            <label className="form-check-label" htmlFor="extensionGenerateGitRepository">Generate git repository</label>
                            <input className="form-check-input" type="checkbox" role="switch" id="extensionGenerateGitRepository"
                                   onChange={(e) => {
                                       updateExtensionPropertiesHandler('emConf.generateEmptyGitRepository', e.target.checked);
                                   }}
                            />
                        </div>
                        <div className="form-check form-switch mb-2">
                            <label className="form-check-label" htmlFor="extensionGenerateEditorconfig">Generate editorconfig</label>
                            <input className="form-check-input" type="checkbox" role="switch" id="extensionGenerateEditorconfig"
                                   onChange={(e) => {
                                       updateExtensionPropertiesHandler('emConf.generateEditorConfig', e.target.checked);
                                   }}
                            />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="extensionSourceLanguageXliffFiles"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-question" /></span>Source language for xliff files</label>
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Source language for xliff files"
                                aria-label="Source language for xliff files"
                                aria-describedby="basic-addon1"
                                value={extensionProperties.extensionSourceLanguageXliffFiles}
                                onChange={(e) => {
                                    updateExtensionPropertiesHandler('emConf.sourceLanguage', e.target.value);
                                }}
                            />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="extensionTargetTYPO3Versions"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-question" /></span>Target TYPO3 versions</label>
                            <select
                                defaultChecked={extensionProperties.extensionTargetTYPO3Versions}
                                className="form-select" aria-label="Default select example"
                                aria-label="Default select example"
                                onChange={handleTargetTYPO3VersionChange}
                            >
                                <option>Please choose the TYPO3 version </option>
                                {
                                    targetTYPO3Versions.map((targetTYPO3Version, index) => {
                                        return (
                                            <option key={index} value={targetTYPO3Version}>{targetTYPO3Version}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="exampleFormControlTextarea1"
                                className="form-label">
                                <span className="me-2"><FontAwesomeIcon icon="fa-solid fa-question" /></span>
                                Depends on
                            </label>
                            <textarea
                                type="text"
                                className="form-control form-control-sm"
                                id="exampleFormControlTextarea1"
                                placeholder="typo3 => 12.4.0"
                                value={extensionProperties.emConf.dependsOn}
                                onChange={(e) => {
                                    updateExtensionPropertiesHandler('emConf.dependsOn', e.target.value);
                                }}
                                rows="5" />
                        </div>
                    </div>
                </div>
    {/*            <pre>
                    {JSON.stringify(extensionProperties, null, 2)}
                </pre>*/}
            </div>
        </Fragment>
    )
}
