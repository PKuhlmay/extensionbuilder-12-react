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
                <div className="mb-3">
                    <label htmlFor="inputGroupSelect01"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-puzzle-piece" /></span>Plugin Name</label>
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
                <div className="mb-3">
                    <label htmlFor="inputGroupSelect01"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-key" /></span>Plugin key</label>
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
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-key" /></span>Description</label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder="Please insert a description"
                        value={pluginDescription}
                        onChange={(e) => {
                            updatePluginHandler('description', e.target.value);
                        }}
                        rows="5" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-key" /></span>Cachable controller actions</label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder="Blog => list, show"
                        value={pluginControllerActionsCachable}
                        onChange={(e) => {
                            updatePluginHandler('controllerActionsCachable', e.target.value);
                        }}
                        rows="5" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-key" /></span>Non cachable controller actions</label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder="Blog => edit, update, delete"
                        value={pluginControllerActionsNonCachable}
                        onChange={(e) => {
                            updatePluginHandler('controllerActionsNonCachable', e.target.value);
                        }}
                        rows="5" />
                </div>
            </div>
        </Fragment>
    );
};
