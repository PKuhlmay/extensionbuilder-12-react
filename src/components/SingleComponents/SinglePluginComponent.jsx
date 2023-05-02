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
            <div className="mb-5">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon="fa-solid fa-signature" /></span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Plugin Name"
                        aria-label="Plugin Name"
                        aria-describedby="basic-addon1"
                        value={pluginName}
                        onChange={(e) => {
                            updatePluginHandler('name', e.target.value);
                        }}
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon="fa-solid fa-key" /></span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Plugin key"
                        aria-label="Plugin key"
                        aria-describedby="basic-addon1"
                        value={pluginKey}
                        onChange={(e) => {
                            updatePluginHandler('key', e.target.value);
                        }}
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon="fa-solid fa-question" /></span>
                    <textarea
                        type="text"
                        rows="4"
                        className="form-control"
                        placeholder="Description"
                        aria-label="Description"
                        aria-describedby="basic-addon1"
                        value={pluginDescription}
                        onChange={(e) => {
                            updatePluginHandler('description', e.target.value);
                        }}
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon="fa-solid fa-question" /></span>
                    <textarea
                        type="text"
                        rows="4"
                        className="form-control"
                        placeholder="Cachable controller actions"
                        aria-label="Cachable controller actions"
                        aria-describedby="basic-addon1"
                        value={pluginControllerActionsCachable}
                        onChange={(e) => {
                            updatePluginHandler('controllerActionsCachable', e.target.value);
                        }}
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon="fa-solid fa-question" /></span>
                    <textarea
                        type="text"
                        rows="4"
                        className="form-control"
                        placeholder="Non cachable controller actions"
                        aria-label="Non cachable controller actions"
                        aria-describedby="basic-addon1"
                        value={pluginControllerActionsNonCachable}
                        onChange={(e) => {
                            updatePluginHandler('controllerActionsNonCachable', e.target.value);
                        }}
                    />
                </div>
            </div>
        </Fragment>
    );
};
