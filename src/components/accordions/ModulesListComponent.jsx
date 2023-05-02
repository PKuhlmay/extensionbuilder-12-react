import {Fragment} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {SingleModuleComponent} from "../SingleComponents/SingleModuleComponent";


export const ModulesListComponent = (props) => {
    return (
        <Fragment>
            <ul>
                {
                    props.modules.map((module, index) => {
                        return (
                            <Fragment key={index}>
                                <SingleModuleComponent
                                    module={module}
                                    index={index}
                                    updateModuleHandler={props.updateModuleHandler}
                                />
                            </Fragment>
                        )
                    })
                }
            </ul>
            <button
                className="btn btn-success"
                onClick={props.addModulesHandler}>
                <FontAwesomeIcon className="me-1" icon="fa-solid fa-plus" />
                Add new module
            </button>
        </Fragment>
    )
}
