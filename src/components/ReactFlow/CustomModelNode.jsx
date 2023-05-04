import {useCallback, useState} from 'react';
import { Handle, Position } from 'reactflow';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const handleStyle = { left: 10 };

export const CustomModelNode = ({data}) => {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    const objectTypes = [
        "Entity",
        "Value object"
    ];

    const [properties, setProperties] = useState([]);
    const [customActions, setCustomActions] = useState([]);

    const propertyTypes = [
        { name: "String", value : "string" },
        { name: "Text", value : "text" },
        { name: "Rich Text*", value : "richtext" },
        { name: "Slug", value : "slug" },
        { name: "Color picker", value : "colorpicker" },
        { name: "Password", value : "password" },
        { name: "Email", value : "email" },
        { name: "Integer", value : "integer" },
        { name: "Floating point", value : "floatingpoint" },
        { name: "Boolean", value : "boolean" },
        { name: "Link", value : "link" },
        { name: "Date", value : "date" },
        { name: "DateTime", value : "datetime" },
        { name: "Date (timestamp)", value : "date_timestamp" },
        { name: "DateTime (timestamp)", value : "datetime_timestamp" },
        { name: "Time*", value : "time" },
        { name: "Time (timestamp)", value : "time_timestamp" },
        { name: "Time/Sec", value : "timesec" },
        { name: "Select list", value : "selectlist" },
        { name: "File*", value : "file" },
        { name: "Image*", value : "image" },
        { name: "Pass through", value : "passthrough" },
        { name: "None", value : "none" },
    ];

    const addEmptyProperty = () => {
        setProperties([...properties, {
            name: '',
            type: '',
            description: '',
            isRequired: false,
            isNullable: false,
            isExcdeField: false,
            isl10nModeExlude: false,
        }]);
    }

    const addEmptyAction = () => {
        setCustomActions([...customActions, {
            name: ''
        }]);
    }

    return (
        <div className="custom-model-node">
            <div className="drag-handle"></div>
            <div className="custom-model-node__header">
                <input type="text" name="nodeTitle" placeholder="Node title"/>
            </div>
            <h5 className="text-primary">Domain object settings</h5>
            <div>
                <label htmlFor="objectType">Object type</label>
                <select name="objectType" id="objectType" className="nodrag" >
                    {objectTypes.map((objectType, index) => <option key={index} value={objectType}>{objectType}</option>)}
                </select>
            </div>
            <div className="d-flex justify-content-between">
                <label htmlFor="isAggregateRoot">Is aggregate root:</label>
                <input type="checkbox" id="isAggregateRoot" name="isAggregateRoot" className="nodrag" />
            </div>
            <div className="d-flex justify-content-between">
                <label htmlFor="enableSorting">Enable sorting</label>
                <input type="checkbox" id="enableSorting" name="enableSorting" className="nodrag" />
            </div>
            <div className="d-flex justify-content-between">
                <label htmlFor="addDeletedField">Add deleted field</label>
                <input type="checkbox" id="addDeletedField" name="addDeletedField" className="nodrag" />
            </div>
            <div className="d-flex justify-content-between">
                <label htmlFor="addHiddenField">Add hidden field</label>
                <input type="checkbox" id="addHiddenField" name="addHiddenField" className="nodrag" />
            </div>
            <div className="d-flex justify-content-between">
                <label htmlFor="addStarttimeEndtimeFields">Add starttime/endtime fields</label>
                <input type="checkbox" id="addStarttimeEndtimeFields" name="addStarttimeEndtimeFields" className="nodrag" />
            </div>
            <div className="d-flex justify-content-between">
                <label htmlFor="enableCategorization">Enable categorization</label>
                <input type="checkbox" id="enableCategorization" name="enableCategorization" className="nodrag" />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea rows="3" id="description" name="description" onChange={onChange} className="nodrag" placeholder="Description"/>
            </div>
            <div>
                <label htmlFor="mapToExistingTable">Map to existing table:</label>
                <input type="text" id="mapToExistingTable" name="mapToExistingTable" onChange={onChange} className="nodrag" />
            </div>
            <div>
                <label htmlFor="extendExistingModelClass">Extend existing model class:</label>
                <input type="text" id="extendExistingModelClass" name="extendExistingModelClass" onChange={onChange} className="nodrag" placeholder="\Fully\Qualified\Classname"/>
            </div>
            <h5 className="text-primary">Default actions</h5>
            <div className="d-flex justify-content-between">
                <label htmlFor="actionIndex">index</label>
                <input type="checkbox" id="actionIndex" name="actionIndex" className="nodrag" />
            </div>
            <div className="d-flex justify-content-between">
                <label htmlFor="actionList">list</label>
                <input type="checkbox" id="actionList" name="actionList" className="nodrag" />
            </div>
            <div className="d-flex justify-content-between">
                <label htmlFor="actionShow">show</label>
                <input type="checkbox" id="actionShow" name="actionShow" className="nodrag" />
            </div>
            <div className="d-flex justify-content-between">
                <label htmlFor="actionNewCreate">new / create</label>
                <input type="checkbox" id="actionNewCreate" name="actionNewCreate" className="nodrag" />
            </div>
            <div className="d-flex justify-content-between">
                <label htmlFor="actionEditUpdate">edit / update</label>
                <input type="checkbox" id="actionEditUpdate" name="actionEditUpdate" className="nodrag" />
            </div>
            <div className="d-flex justify-content-between">
                <label htmlFor="actionDelete">actionDelete</label>
                <input type="checkbox" id="isAggregateRoot" name="isAggregateRoot" className="nodrag" />
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <h5 className="text-primary">Custom actions</h5>
                <button className="btn btn-success btn-sm mb-2 mt-2"
                        title="Add action"
                        onClick={addEmptyAction}
                ><FontAwesomeIcon className="font-awesome-icon" icon="fa-solid fa-plus" /></button>
            </div>
            {
                customActions.map((action) => {
                    return (
                        <div className="custom-model-node__action-wrapper">
                            <input type="text" name="actionName" placeholder="Action name" />
                        </div>
                    )
                })
            }
            <div className="d-flex justify-content-between align-items-center">
                <h5 className="text-primary">Properties</h5>
                <button className="btn btn-success mb-2 mt-2 btn-sm" title="Add property"
                        onClick={addEmptyProperty}
                >
                    <FontAwesomeIcon className="font-awesome-icon" icon="fa-solid fa-plus" />
                </button>
            </div>
            {
                properties.map((property) => {
                    return (
                        <div className="custom-model-node__property-wrapper">
                            <div className="d-flex justify-content-between">
                                <input type="text" name="propertyName" placeholder="Property name" />
                            </div>
                            <select name="propertyType" id="propertyType" className="nodrag" >
                                {propertyTypes.map((propertyType, index) => <option key={index} value={propertyType.value}>{propertyType.name}</option>)}
                            </select>
                            <input type="text" name="propertyDescription" placeholder="Property description" />
                            <div className="d-flex justify-content-between">
                                <label htmlFor="isRequired">is required?</label>
                                <input type="checkbox" id="isRequired" name="isRequired" className="nodrag" />
                            </div>
                            <div className="d-flex justify-content-between">
                                <label htmlFor="isNullable">is nullable?</label>
                                <input type="checkbox" id="isNullable" name="isNullable" className="nodrag" />
                            </div>
                            <div className="d-flex justify-content-between">
                                <label htmlFor="isExcdeField">is exclude field?</label>
                                <input type="checkbox" id="isExcdeField" name="isExcdeField" className="nodrag" />
                            </div>
                            <div className="d-flex justify-content-between">
                                <label htmlFor="isl10nModeExlude">is l10n_mode = exclude</label>
                                <input type="checkbox" id="isl10nModeExlude" name="isl10nModeExlude" className="nodrag" />
                            </div>
                            <hr />
                        </div>
                    )
                })
            }
            <div className="d-flex justify-content-between align-items-center">
                <h5 className="text-primary">Relations</h5>
                <button className="btn btn-success mb-2 mt-2 btn-sm" title="Add relation" disabled>
                    <FontAwesomeIcon className="font-awesome-icon" icon="fa-solid fa-plus" />
                </button>
            </div>
        </div>
    );
}
