import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SingleModuleComponent = (props) => {
    const [moduleName, setModuleName] = useState(props.module.name);
    const [moduleKey, setModuleKey] = useState(props.module.key);
    const [moduleDescription, setModuleDescription] = useState(props.module.description);
    const [moduleTabLabel, setModuleTabLabel] = useState(props.module.tabLabel);
    const [moduleMainModule, setModuleMainModule] = useState(props.module.mainModule);
    const [moduleControllerActionsCachable, setModuleControllerActionsCachable] = useState(props.module.controllerActionsCachable);

    const updateFunctions = {
        name: setModuleName,
        key: setModuleKey,
        description: setModuleDescription,
        tabLabel: setModuleTabLabel,
        mainModule: setModuleMainModule,
        controllerActionsCachable: setModuleControllerActionsCachable,
    };

    const updateModuleHandler = (field, value) => {
        if (updateFunctions[field]) {
            updateFunctions[field](value);

            const updatedValues = {
                name: moduleName,
                key: moduleKey,
                description: moduleDescription,
                tabLabel: moduleTabLabel,
                mainModule: moduleMainModule,
                controllerActionsCachable: moduleControllerActionsCachable,
                [field]: value,
            };

            props.updateModuleHandler(
                props.index,
                updatedValues.name,
                updatedValues.key,
                updatedValues.description,
                updatedValues.tabLabel,
                updatedValues.mainModule,
                updatedValues.controllerActionsCachable
            );
        } else {
            console.log("No field found");
        }
    };

    const mainModules = [
        "web",
        "site",
        "file",
        "user",
        "tools",
        "system",
        "help"
    ];

    return (
        <Fragment>
            <div className="mb-5">
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Module Name"
                        aria-label="Module Name"
                        aria-describedby="basic-addon1"
                        value={moduleName}
                        onChange={(e) => {
                            updateModuleHandler('name', e.target.value);
                        }}
                    />
                    <label htmlFor="inputGroupSelect01"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-signature" /></span>Module Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Module key"
                        aria-label="Module key"
                        aria-describedby="basic-addon1"
                        value={moduleKey}
                        onChange={(e) => {
                            updateModuleHandler('email', e.target.value);
                        }}
                    />
                    <label htmlFor="inputGroupSelect01"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-key" /></span>Module key</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea
                        rows="3"
                        type="text"
                        className="form-control"
                        placeholder="Module Description"
                        aria-label="Module Description"
                        aria-describedby="basic-addon1"
                        value={moduleDescription}
                        onChange={(e) => {
                            updateModuleHandler('company', e.target.value);
                        }}
                    />
                    <label htmlFor="inputGroupSelect01"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-signature" /></span>Module Description</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Module tab label"
                        aria-label="Module tab label"
                        aria-describedby="basic-addon1"
                        value={moduleTabLabel}
                        onChange={(e) => {
                            updateModuleHandler('tabLabel', e.target.value);
                        }}
                    />
                    <label htmlFor="inputGroupSelect01"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-signature" /></span>Module tab label</label>
                </div>
                <div className="form-floating mb-3">
                    <select
                        className="form-select"
                        aria-label="Role"
                        onChange={(e) => {
                            updateModuleHandler('role', e.target.value);
                        }}
                    >
                        <option>Please choose the main module</option>
                        {
                            mainModules.map((module, index) => {
                                return (
                                    <option key={index} value={module}>{module}</option>
                                )
                            })
                        }
                    </select>
                    <label htmlFor="inputGroupSelect01"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-signature" /></span>Main Module</label>
                </div>

                <div className="form-floating mb-3">
                    <textarea
                        rows="3"
                        type="text"
                        className="form-control"
                        placeholder="Cachable controller actions"
                        aria-label="Cachable controller actions"
                        aria-describedby="basic-addon1"
                        value={moduleControllerActionsCachable}
                        onChange={(e) => {
                            updateModuleHandler('controllerActionsCachable', e.target.value);
                        }}
                    />
                <label htmlFor="inputGroupSelect01"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-signature" /></span>Cachable controller actions</label>
                </div>
            </div>
        </Fragment>
    );
};
