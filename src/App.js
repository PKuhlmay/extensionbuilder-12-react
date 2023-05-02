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
    // TODO remove this dummy data
    const [authors, setAuthors] = useState([]);

    const addNewAuthorHandler = (author) => {
        setAuthors((prevAuthors) => {
            return [...prevAuthors, author];
        });
    }

    const updateAuthorHandler = (authorName, authorRole, authorEmail, authorCompany) => {
        console.log("updatedAuthor", authorName, authorRole, authorEmail, authorCompany);
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
                                    <ModulesListComponent/>
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
                                    <PluginsListComponent/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8 text-start" id="right-column">
                    <div>
                        Hier wird der Inhalt der rechten Spalte stehen
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
