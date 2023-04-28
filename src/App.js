import logo from './logo.svg';
import './App.css';
import {FormWrapperComponent} from "./components/forms/FormWrapperComponent";
import {ExtensionPropertiesComponent} from "./components/accordions/ExtensionPropertiesComponent";
import {ModulesListComponent} from "./components/accordions/ModulesListComponent";
import {AuthorsListComponent} from "./components/accordions/AuthorsListComponent";
import {PluginsListComponent} from "./components/accordions/PluginsListComponent";

function App() {
    return (
        <div className="App">
            <div className="column" id="left-column">
                <div className="row">
                    <AuthorsListComponent />
                    <ExtensionPropertiesComponent />
                    <ModulesListComponent />
                    <PluginsListComponent />
                    <FormWrapperComponent />
                </div>
            </div>
            <div className="column" id="right-column">
                <div className="row">
                    <div>
                        Hier wird der Inhalt der rechten Spalte stehen
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
