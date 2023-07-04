import {ExtensionPropertiesAccordion} from "../accordions/ExtensionPropertiesAccordion";
import {AuthorsListAccordion} from "../accordions/AuthorsListAccordion";
import {PluginsListAccordion} from "../accordions/PluginsListAccordion";
import {ModulesListAccordion} from "../accordions/ModulesListAccordion";

export const LeftContentComponent = (props) => {
    return (
        <div className="panel-group" id="accordion-left-panel">
            <ExtensionPropertiesAccordion
                extensionProperties={props.extensionProperties}
                updateExtensionPropertiesHandler={props.updateExtensionPropertiesHandler}
            />
            <AuthorsListAccordion
                authors={props.authors}
                addAuthorsHandler={props.addNewAuthorHandler}
                updateAuthorHandler={props.updateAuthorHandler}
                removeAuthorHandler={props.removeAuthorHandler}
                moveAuthor={props.moveAuthor}
            />
            <PluginsListAccordion
                plugins={props.plugins}
                addPluginsHandler={props.addNewPluginHandler}
                updatePluginHandler={props.updatePluginHandler}
                removePluginHandler={props.removePluginHandler}
                movePlugin={props.movePlugin}
            />
            <ModulesListAccordion
                modules={props.modules}
                addModulesHandler={props.addNewModuleHandler}
                updateModuleHandler={props.updateModuleHandler}
                removeModuleHandler={props.removeModuleHandler}
                moveModule={props.moveModule}
            />
        </div>
    )
}
