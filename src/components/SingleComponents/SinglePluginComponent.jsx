import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SinglePluginComponent = (props) => {
    const [pluginName, setPluginName] = useState(props.plugin.name);
    const [pluginKey, setPluginKey] = useState(props.plugin.key);
    const [pluginDescription, setPluginDescription] = useState(props.plugin.description);
    const [pluginControllerActionsCachable, setPluginControllerActionsCachable] = useState(props.plugin.controllerActionsCachable);
    const [pluginControllerActionsNonCachable, setPluginControllerActionsNonCachable] = useState(props.plugin.controllerActionsNonCachable);

    const updateFunctions = {
        name: setPluginName,
        key: setPluginKey,
        description: setPluginDescription,
        controllerActionsCachable: setPluginControllerActionsCachable,
        controllerActionsNonCachable: setPluginControllerActionsNonCachable,
    };

    const updatePluginHandler = (field, value) => {
        if (updateFunctions[field]) {
            updateFunctions[field](value);

            const updatedValues = {
                name: pluginName,
                key: pluginKey,
                description: pluginDescription,
                controllerActionsCachable: pluginControllerActionsCachable,
                controllerActionsNonCachable: pluginControllerActionsNonCachable,
                [field]: value,
            };

            props.updatePluginHandler(
                props.index,
                updatedValues.name,
                updatedValues.key,
                updatedValues.description,
                updatedValues.controllerActionsCachable,
                updatedValues.controllerActionsNonCachable,
            );
        } else {
            console.log("No field found");
        }
    };

    return (
        <Fragment>
            <table className="single-plugin-component mb-4">
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
                                value={pluginName}
                                onChange={(e) => {
                                    updatePluginHandler('name', e.target.value);
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
                                value={pluginKey}
                                onChange={(e) => {
                                    updatePluginHandler('key', e.target.value);
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
                                value={pluginDescription}
                                onChange={(e) => {
                                    updatePluginHandler('description', e.target.value);
                                }}
                            />
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
                                value={pluginControllerActionsCachable}
                                onChange={(e) => {
                                    updatePluginHandler('controllerActionsCachable', e.target.value);
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FontAwesomeIcon className="me-1" icon="fa-solid fa-building"/>
                            <label htmlFor="controllerActionsNonCachable" className="me-2">Non cachable Controller Actions</label>
                        </td>
                        <td>
                            <input
                                className="block"
                                type="text"
                                name="controllerActionsNonCachable"
                                value={pluginControllerActionsNonCachable}
                                onChange={(e) => {
                                    updatePluginHandler('controllerActionsNonCachable', e.target.value);
                                }}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    );
};
