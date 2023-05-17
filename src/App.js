import './App.scss';
import {useEffect, useState} from "react";
import {LeftContentComponent} from "./components/views/LeftContentComponent";
import {RightContentComponent} from "./components/views/RightContentComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const initialNodes = [];
const initialEdges = [];

function App() {
    // Zustand für das Ein- und Ausklappen der linken Spalte
    const [isLeftColumnVisible, setLeftColumnVisible] = useState(true);

    // Funktion zum Umschalten der Sichtbarkeit der linken Spalte
    const toggleLeftColumn = () => {
        setLeftColumnVisible(!isLeftColumnVisible);
    }

    const [extensionProperties, setExtensionProperties] = useState(
        {
            extensionName: '',
            extensionVendorName: '',
            extensionKey: '',
            extensionDescription: '',
            extensionCategory: '',
            extensionVersion: '',
            extensionState: '',
            extensionSourceLanguageXliffFiles: 'en',
            extensionTargetTYPO3Versions: '12.4',
            extensionDependsOn: '',
            extensionDisableVersioning: false,
            extensionDisableLocalization: false,
            extensionGenerateDocumentation: false,
            extensionGenerateGitRepository: false,
            extensionGenerateEditorconfig: false,
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
    }

    useEffect(() => {
        const leftColumn = document.getElementById('left-column');
        if (leftColumn) {
            leftColumn.style.opacity = isLeftColumnVisible ? '1' : '0';
        }
    }, [isLeftColumnVisible]);

    return (
        <div className="App container-fluid">
            <button
                id="btn-sidebar-collapse"
                type="button"
                className={`btn btn-primary position-fixed ${isLeftColumnVisible ? 'expanded' : 'collapsed'}`}
                onClick={toggleLeftColumn}
            >
                {isLeftColumnVisible && <FontAwesomeIcon className="p-0 m-0" icon="fa-solid fa-arrow-left" />}
                {!isLeftColumnVisible && <FontAwesomeIcon className="p-0 m-0" icon="fa-solid fa-arrow-right" />}
            </button>
            <div className="collapse" id="collapseExample">
                <div className="card card-body">
                    Some placeholder content for the collapse component. This panel is hidden by default but revealed
                    when the user activates the relevant trigger.
                </div>
            </div>
            <div className="row">
                <div id="left-column" className="no-padding full-height">
                    <div className="p-1">
                        <LeftContentComponent
                            extensionProperties={extensionProperties}
                            authors={authors}
                            plugins={plugins}
                            modules={modules}
                            addNewAuthorHandler={addNewAuthorHandler}
                            addNewModuleHandler={addNewModuleHandler}
                            addNewPluginHandler={addNewPluginHandler}
                            updateExtensionPropertiesHandler={updateExtensionPropertiesHandler}
                            updateAuthorHandler={updateAuthorHandler}
                            updateModuleHandler={updateModuleHandler}
                            updatePluginHandler={updatePluginHandler}
                        />
                    </div>
                </div>
                <div style={{left: isLeftColumnVisible ? '400px' : '0', width: isLeftColumnVisible ? 'calc(100vw - 400px)' : '100vw'}} id="right-column" className="no-padding full-height">
                    <div >
                        <RightContentComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
