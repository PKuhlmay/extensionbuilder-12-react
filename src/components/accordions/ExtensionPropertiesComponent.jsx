import {Fragment, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const ExtensionPropertiesComponent = (props) => {
    const [extensionName, setExtensionName] = useState(props.extensionProperties.extensionName);
    const [extensionVendorName, setExtensionVendorName] = useState(props.extensionProperties.extensionVendorName);
    const [exensionKey, setExensionKey] = useState(props.extensionProperties.extensionKey);
    const [extensionDescription, setExtensionDescription] = useState(props.extensionProperties.extensionDescription);
    const [extensionCategory, setExtensionCategory] = useState(props.extensionProperties.extensionCategory);
    const [extensionVersion, setExtensionVersion] = useState(props.extensionProperties.extensionVersion);
    const [extensionState, setExtensionState] = useState(props.extensionProperties.extensionState);
    const [extensionSourceLanguageXliffFiles, setExtensionSourceLanguageXliffFiles] = useState(props.extensionProperties.extensionSourceLanguageXliffFiles);
    const [extensionTargetTYPO3Versions, setExtensionTargetTYPO3Versions] = useState(props.extensionProperties.extensionTargetTYPO3Versions);
    const [extensionDependsOn, setExtensionDependsOn] = useState(props.extensionProperties.extensionDependsOn);
    const [extensionDisableVersioning, setExtensionDisableVersioning] = useState(props.extensionProperties.extensionDisableVersioning);
    const [extensionDisableLocalization, setExtensionDisableLocalization] = useState(props.extensionProperties.extensionDisableLocalization);
    const [extensionGenerateDocumentation, setExtensionGenerateDocumentation] = useState(props.extensionProperties.extensionGenerateDocumentation);
    const [extensionGenerateGitRepository, setExtensionGenerateGitRepository] = useState(props.extensionProperties.extensionGenerateGitRepository);
    const [extensionGenerateEditorconfig, setExtensionGenerateEditorconfig] = useState(props.extensionProperties.extensionGenerateEditorconfig);

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
        "12.4"
    ];

    const updateFunctions = {
        extensionName: setExtensionName,
        extensionVendorName: setExtensionVendorName,
        extensionKey: setExensionKey,
        extensionDescription: setExtensionDescription,
        extensionCategory: setExtensionCategory,
        extensionVersion: setExtensionVersion,
        extensionState: setExtensionState,
        extensionSourceLanguageXliffFiles: setExtensionSourceLanguageXliffFiles,
        extensionTargetTYPO3Versions: setExtensionTargetTYPO3Versions,
        extensionDependsOn: setExtensionDependsOn,
        extensionDisableVersioning: setExtensionDisableVersioning,
        extensionDisableLocalization: setExtensionDisableLocalization,
        extensionGenerateDocumentation: setExtensionGenerateDocumentation,
        extensionGenerateGitRepository: setExtensionGenerateGitRepository,
        extensionGenerateEditorconfig: setExtensionGenerateEditorconfig,
    };

    const updateExtensionPropertiesHandler = (field, value) => {
        if (updateFunctions[field]) {
            updateFunctions[field](value);

            const updatedValues = {
                extensionName: extensionName,
                extensionVendorName: extensionVendorName,
                extensionKey: exensionKey,
                extensionDescription: extensionDescription,
                extensionCategory: extensionCategory,
                extensionVersion: extensionVersion,
                extensionState: extensionState,
                extensionSourceLanguageXliffFiles: extensionSourceLanguageXliffFiles,
                extensionTargetTYPO3Versions: extensionTargetTYPO3Versions,
                extensionDependsOn: extensionDependsOn,
                extensionDisableVersioning: extensionDisableVersioning,
                extensionDisableLocalization: extensionDisableLocalization,
                extensionGenerateDocumentation: extensionGenerateDocumentation,
                extensionGenerateGitRepository: extensionGenerateGitRepository,
                extensionGenerateEditorconfig: extensionGenerateEditorconfig,
                [field]: value,
            };

            props.updateExtensionPropertiesHandler(
                updatedValues.extensionName,
                updatedValues.extensionVendorName,
                updatedValues.extensionKey,
                updatedValues.extensionDescription,
                updatedValues.extensionCategory,
                updatedValues.extensionVersion,
                updatedValues.extensionState,
                updatedValues.extensionSourceLanguageXliffFiles,
                updatedValues.extensionTargetTYPO3Versions,
                updatedValues.extensionDependsOn,
                updatedValues.extensionDisableVersioning,
                updatedValues.extensionDisableLocalization,
                updatedValues.extensionGenerateDocumentation,
                updatedValues.extensionGenerateGitRepository,
                updatedValues.extensionGenerateEditorconfig,
            );
        } else {
            console.log("No field found");
            console.log(field);
            console.log("------");
        }
    }

    return (
        <Fragment>
            <div className="form-floating mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Extension Name"
                    aria-label="Extension Name"
                    aria-describedby="basic-addon1"
                    value={extensionName}
                    onChange={(e) => {
                        updateExtensionPropertiesHandler('extensionName', e.target.value);
                    }}
                />
                <label htmlFor="extensionName"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-signature" /></span>Extension Name</label>
            </div>
            <div className="form-floating mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Vendor Name"
                    aria-label="Vendor Name"
                    aria-describedby="basic-addon1"
                    value={extensionVendorName}
                    onChange={(e) => {
                        updateExtensionPropertiesHandler('extensionVendorName', e.target.value);
                    }}
                />
                <label htmlFor="extensionVendorName"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-signature" /></span>Vendor Name</label>
            </div>
            <div className="form-floating mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Extension key"
                    aria-label="Extension key"
                    aria-describedby="basic-addon1"
                    value={exensionKey}
                    onChange={(e) => {
                        updateExtensionPropertiesHandler('extensionKey', e.target.value);
                    }}
                />
                <label htmlFor="extensionKey"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-key" /></span>Extension key</label>
            </div>
            <div className="form-floating mb-3">
                <textarea
                    className="form-control"
                    style={{ height: '100px' }}
                    aria-label="With textarea"
                    placeholder="Extension Description"
                    value={extensionDescription}
                    onChange={(e) => {
                        updateExtensionPropertiesHandler('extensionDescription', e.target.value);
                    }}
                >
                    {extensionDescription}
                </textarea>
                <label htmlFor="extensionDescription"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-question" /></span>Extension Description</label>
            </div>
            <div className="form-floating mb-3">
                <select
                    className="form-select"
                    aria-label="Category"
                    onChange={(e) => {
                        updateExtensionPropertiesHandler('extensionCategory', e.target.value);
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
                <label htmlFor="extensionCategory"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-tag" /></span>Category</label>
            </div>
            <div className="form-floating mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Extension Version"
                    aria-label="Extension Version"
                    aria-describedby="basic-addon1"
                    value={extensionVersion}
                    onChange={(e) => {
                        updateExtensionPropertiesHandler('extensionVersion', e.target.value);
                    }}
                />
                <label htmlFor="extensionVersion"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-code-branch" /></span>Extension Version</label>
            </div>
            <div className="form-floating mb-3">
                <select
                    className="form-select"
                    aria-label="State"
                    onChange={(e) => {
                        updateExtensionPropertiesHandler('extensionState', e.target.value);
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
                <label htmlFor="extensionState"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-question" /></span>State</label>
            </div>

            <div className="form-check form-switch mb-2">
                <input className="form-check-input" type="checkbox" role="switch" id="extensionDisableVersioning"
                    onChange={(e) => {
                        updateExtensionPropertiesHandler('extensionDisableVersioning', e.target.checked);
                    }}
                />
                <label className="form-check-label" htmlFor="extensionDisableVersioning">Disable versioning</label>
            </div>
            <div className="form-check form-switch mb-2">
                <input className="form-check-input" type="checkbox" role="switch" id="extensionDisableLocalization"
                    onChange={(e) => {
                        updateExtensionPropertiesHandler('extensionDisableLocalization', e.target.checked);
                    }}
                />
                <label className="form-check-label" htmlFor="extensionDisableLocalization">Disable localization</label>
            </div>
            <div className="form-check form-switch mb-2">
                <input className="form-check-input" type="checkbox" role="switch" id="extensionGenerateDocumentation"
                    onChange={(e) => {
                        updateExtensionPropertiesHandler('extensionGenerateDocumentation', e.target.checked);
                    }}
                />
                <label className="form-check-label" htmlFor="extensionGenerateDocumentation">Generate documentation</label>
            </div>
            <div className="form-check form-switch mb-2">
                <input className="form-check-input" type="checkbox" role="switch" id="extensionGenerateGitRepository"
                    onChange={(e) => {
                        updateExtensionPropertiesHandler('extensionGenerateGitRepository', e.target.checked);
                    }}
                />
                <label className="form-check-label" htmlFor="extensionGenerateGitRepository">Generate git repository</label>
            </div>
            <div className="form-check form-switch mb-3">
                <input className="form-check-input" type="checkbox" role="switch" id="extensionGenerateEditorconfig"
                    onChange={(e) => {
                        updateExtensionPropertiesHandler('extensionGenerateEditorconfig', e.target.checked);
                    }}
                />
                <label className="form-check-label" htmlFor="extensionGenerateEditorconfig">Generate editorconfig</label>
            </div>

            <div className="form-floating mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Source language for xliff files"
                    aria-label="Source language for xliff files"
                    aria-describedby="basic-addon1"
                    value={extensionSourceLanguageXliffFiles}
                    onChange={(e) => {
                        updateExtensionPropertiesHandler('extensionSourceLanguageXliffFiles', e.target.value);
                    }}
                />
                <label htmlFor="extensionSourceLanguageXliffFiles"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-question" /></span>Source language for xliff files</label>
            </div>

            <div className="form-floating mb-3">
                <select
                    defaultChecked={extensionTargetTYPO3Versions}
                    className="form-select" aria-label="Default select example"
                    onChange={(e) => {
                        updateExtensionPropertiesHandler('extensionTargetTYPO3Versions', e.target.value);
                    }}
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
                <label htmlFor="extensionTargetTYPO3Versions"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-question" /></span>Target TYPO3 versions</label>
            </div>
            <div className="form-floating mb-3">
                <textarea
                    className="form-control"
                    style={{ height: '100px' }}
                    aria-label="With textarea"
                    placeholder="Depends on"
                    value={extensionDependsOn}
                    onChange={(e) => {
                        updateExtensionPropertiesHandler('extensionDependsOn', e.target.value);
                    }}
                >
                    {extensionDependsOn}
                </textarea>
                <label htmlFor="extensionDependsOn"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-question" /></span>Depends on</label>
            </div>
        </Fragment>
    )
}
