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
                                    <ExtensionPropertiesComponent/>
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

                    <pre>
                        {JSON.stringify(authors, null, 2)}
                    </pre>
                    <hr />
                    <pre>
                        {JSON.stringify(plugins, null, 2)}
                    </pre>
                    <hr />
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
