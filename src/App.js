import logo from './logo.svg';
import './App.scss';
import {FormWrapperComponent} from "./components/forms/FormWrapperComponent";
import {ExtensionPropertiesComponent} from "./components/accordions/ExtensionPropertiesComponent";
import {ModulesListComponent} from "./components/accordions/ModulesListComponent";
import {AuthorsListComponent} from "./components/accordions/AuthorsListComponent";
import {PluginsListComponent} from "./components/accordions/PluginsListComponent";
import {Fragment, useState} from "react";
import {SingleAuthorComponent} from "./components/SingleComponents/SingleAuthorComponent";

function App() {
    const [extensionProperties, setExtensionProperties] = useState(
        {
            extensionName: '',
            extensionVendorName: '',
            extensionKey: '',
            extensionDescription: '',
            extensionCategory: '',
            extensionVersion: '',
            extensionState: 'a',
            extensionSourceLanguageXliffFiles: 'en',
            extensionTargetTYPO3Versions: '12.4',
            extensionDependsOn: '',
            extensionDisableVersioning: false,
            extensionDisableLocalization: false,
            extensionGenerateDocumentation: true,
            extensionGenerateGitRepository: true,
            extensionGenerateEditorconfig: true,
        }
    );
    const [authors, setAuthors] = useState([]);
    const [plugins, setPlugins] = useState([]);
    const [modules, setModules] = useState([]);

    const defaultAuthor = {
        name: '',
        role: '',
        email: '',
        company: '',
    }

    const defaultModule = {
        name: '',
        key: '',
        description: '',
        tabLabel: '',
        mainModule: '',
        controllerActionsCachable: ''
    }

    const defaultPlugin = {
        name: '',
        key: '',
        description: '',
        controllerActionsCachable: '',
        controllerActionsNonCachable: '',
    }

    const addNewAuthorHandler = () => {
        setAuthors((prevAuthors) => {
            return [...prevAuthors, defaultAuthor];
        });
    }

    const addNewModuleHandler = () => {
        setModules((prevModules) => {
            return [...prevModules, defaultModule];
        });
    }

    const addNewPluginHandler = () => {
        setPlugins((prevPlugins) => {
            return [...prevPlugins, defaultPlugin];
        });
    }

    const updateExtensionPropertiesHandler = (
        extensionName,
        extensionVendorName,
        extensionKey,
        extensionDescription,
        extensionCategory,
        extensionVersion,
        extensionState,
        extensionSourceLanguageXliffFiles,
        extensionTargetTYPO3Versions,
        extensionDependsOn,
        extensionDisableVersioning,
        extensionDisableLocalization,
        extensionGenerateDocumentation,
        extensionGenerateGitRepository,
        extensionGenerateEditorconfig
    ) => {
       setExtensionProperties({
            extensionName: extensionName,
            extensionVendorName: extensionVendorName,
            extensionKey: extensionKey,
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
       })
    }

    const updateAuthorHandler = (authorIndex, authorName, authorRole, authorEmail, authorCompany) => {
        setAuthors((prevAuthors) => {
            const updatedAuthors = [...prevAuthors];
            updatedAuthors[authorIndex] = {
                name: authorName,
                role: authorRole,
                email: authorEmail,
                company: authorCompany,
            };
            return updatedAuthors;
        });
        console.log("Autor aktualisiert", authorIndex, authorName, authorRole, authorEmail, authorCompany);
    }

    const updateModuleHandler = (moduleIndex, moduleName, moduleKey, moduleDescription, moduleTabLabel, moduleMainModule, moduleControllerActionsCachable) => {
        setModules((prevModules) => {
            const updatedModule = [...prevModules];
            updatedModule[moduleIndex] = {
                name: moduleName,
                key: moduleKey,
                description: moduleDescription,
                tabLabel: moduleTabLabel,
                mainModule: moduleMainModule,
                controllerActionsCachable: moduleControllerActionsCachable,
            };
            return updatedModule;
        });
        console.log("Modul aktualisiert", moduleIndex, moduleName, moduleKey, moduleDescription, moduleTabLabel, moduleMainModule, moduleControllerActionsCachable);
    }

    const updatePluginHandler = (pluginIndex, pluginName, pluginKey, pluginDescription, pluginControllerActionsCachable, pluginControllerActionsNonCachable) => {
        setPlugins((prevPlugins) => {
            const updatedPlugin = [...prevPlugins];
            updatedPlugin[pluginIndex] = {
                name: pluginName,
                key: pluginKey,
                description: pluginDescription,
                controllerActionsCachable: pluginControllerActionsCachable,
                controllerActionsNonCachable: pluginControllerActionsNonCachable,
            };
            return updatedPlugin;
        });
        console.log("Plugin aktualisiert", pluginIndex, pluginName, pluginKey, pluginDescription, pluginControllerActionsCachable, pluginControllerActionsNonCachable);
    }

    return (
        <div className="App container-fluid">
            <div className="row">
                <div className="col-4 text-start" id="left-column">
                    <div className="accordion" id="accordionExtensionProperties">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingAccordionExtensionProperties">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseAccordionExtensionProperties" aria-expanded="true" aria-controls="collapseOne">
                                    Extension Properties
                                </button>
                            </h2>
                            <div id="collapseAccordionExtensionProperties" className="accordion-collapse collapse"
                                 aria-labelledby="headingAccordionExtensionProperties"
                                 data-bs-parent="#accordionExtensionProperties">
                                <div className="accordion-body">
                                    <ExtensionPropertiesComponent
                                        extensionProperties={extensionProperties}
                                        updateExtensionPropertiesHandler={updateExtensionPropertiesHandler}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion" id="accordionAuthors">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingAccordionAuthors">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseAccordionAuthors" aria-expanded="true" aria-controls="collapseAccordionAuthors">
                                    Authors
                                </button>
                            </h2>
                            <div id="collapseAccordionAuthors" className="accordion-collapse collapse"
                                 aria-labelledby="headingAccordionAuthors"
                                 data-bs-parent="#accordionAuthors">
                                <div className="accordion-body">
                                    <AuthorsListComponent
                                        authors={authors}
                                        addAuthorsHandler={addNewAuthorHandler}
                                        updateAuthorHandler={updateAuthorHandler}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion" id="accordionPlugins">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingAccordionPlugins">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseAccordionPlugins" aria-expanded="true" aria-controls="collapseAccordionPlugins">
                                    Plugins
                                </button>
                            </h2>
                            <div id="collapseAccordionPlugins" className="accordion-collapse collapse"
                                 aria-labelledby="headingAccordionPlugins"
                                 data-bs-parent="#accordionPlugins">
                                <div className="accordion-body">
                                    <PluginsListComponent
                                        plugins={plugins}
                                        addPluginsHandler={addNewPluginHandler}
                                        updatePluginHandler={updatePluginHandler}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordionModules">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingAccordionModules">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseAccordionModules" aria-expanded="true" aria-controls="collapseAccordionModules">
                                    Modules
                                </button>
                            </h2>
                            <div id="collapseAccordionModules" className="accordion-collapse collapse"
                                 aria-labelledby="headingAccordionModules"
                                 data-bs-parent="#accordionModules">
                                <div className="accordion-body">
                                    <ModulesListComponent
                                        modules={modules}
                                        addModulesHandler={addNewModuleHandler}
                                        updateModuleHandler={updateModuleHandler}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8 text-start" id="right-column">

                    <h4>Extension Properties</h4>
                    <pre>
                        {JSON.stringify(extensionProperties, null, 2)}
                    </pre>
                    <hr />
                    <h4>Authors</h4>
                    <pre>
                        {JSON.stringify(authors, null, 2)}
                    </pre>
                    <hr />
                    <h4>Plugins</h4>
                    <pre>
                        {JSON.stringify(plugins, null, 2)}
                    </pre>
                    <hr />
                    <h4>Modules</h4>
                    <pre>
                        {JSON.stringify(modules, null, 2)}
                    </pre>
                    <hr />
                </div>
            </div>
        </div>
    );
}

export default App;
