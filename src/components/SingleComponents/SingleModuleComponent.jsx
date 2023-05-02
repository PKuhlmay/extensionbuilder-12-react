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
            <table className="single-module-component mb-4">
                <tbody>

                <tr>
                        <td>
                            <FontAwesomeIcon className="me-1" icon="fa-solid fa-users"/>
                            <label className="me-2" htmlFor="name">Name</label>
                        </td>
                        <td className="single-input-field">
                            <input
                                className="block me-2"
                                type="text"
                                name="name"
                                value={moduleName}
                                onChange={(e) => {
                                    updateModuleHandler('name', e.target.value);
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FontAwesomeIcon className="me-1" icon="fa-solid fa-flask"/>
                            <label className="me-2" htmlFor="key">Key</label>
                        </td>
                        <td>
                            <input
                                className="block"
                                type="text"
                                name="key"
                                value={moduleKey}
                                onChange={(e) => {
                                    updateModuleHandler('key', e.target.value);
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FontAwesomeIcon className="me-1" icon="fa-solid fa-envelope"/>
                            <label className="me-2" htmlFor="description">Description</label></td>
                        <td>
                            <textarea
                                className="block"
                                type="text"
                                name="description"
                                value={moduleDescription}
                                onChange={(e) => {
                                    updateModuleHandler('description', e.target.value);
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FontAwesomeIcon className="me-1" icon="fa-solid fa-building"/>
                            <label htmlFor="tabLabel" className="me-2">Tab Label</label>
                        </td>
                        <td>
                            <input
                                className="block"
                                type="text"
                                name="tabLabel"
                                value={moduleTabLabel}
                                onChange={(e) => {
                                    updateModuleHandler('tabLabel', e.target.value);
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FontAwesomeIcon className="me-1" icon="fa-solid fa-building"/>
                            <label htmlFor="mainModule" className="me-2">Main Module</label>
                        </td>
                        <td>
                            <select
                                className="block me-2"
                                name="mainModule"
                                value={moduleMainModule}
                                onChange={(e) => {
                                    updateModuleHandler('mainModule', e.target.value);
                                }}>
                                {
                                    mainModules.map((module, index) => {
                                        return (
                                            <option
                                                key={index}
                                                value={module}
                                            >
                                                {module}
                                            </option>
                                        )
                                    })
                                }
                            </select>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FontAwesomeIcon className="me-1" icon="fa-solid fa-building"/>
                            <label htmlFor="controllerActionsCachable" className="me-2">Controller Actions</label>
                        </td>
                        <td>
                            <input
                                className="block"
                                type="text"
                                name="controllerActionsCachable"
                                value={moduleControllerActionsCachable}
                                onChange={(e) => {
                                    updateModuleHandler('controllerActionsCachable', e.target.value);
                                }}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    );
};
