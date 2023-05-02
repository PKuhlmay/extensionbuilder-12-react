import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SingleAuthorComponent = (props) => {
    const [authorName, setAuthorName] = useState(props.author.name);
    const [authorRole, setAuthorRole] = useState(props.author.role);
    const [authorEmail, setAuthorEmail] = useState(props.author.email);
    const [authorCompany, setAuthorCompany] = useState(props.author.company);

    const updateFunctions = {
        name: setAuthorName,
        role: setAuthorRole,
        email: setAuthorEmail,
        company: setAuthorCompany,
    };

    const updateAuthorHandler = (field, value) => {
        if (updateFunctions[field]) {
            updateFunctions[field](value);

            const updatedValues = {
                name: authorName,
                role: authorRole,
                email: authorEmail,
                company: authorCompany,
                [field]: value,
            };

            props.updateAuthorHandler(
                props.index,
                updatedValues.name,
                updatedValues.role,
                updatedValues.email,
                updatedValues.company
            );
        } else {
            console.log("No field found");
        }
    };

    const roles = [
        "Developer",
        "Project Manager",
        "Designer",
        "Tester",
        "Documentation Writer",
        "Reviewer",
        "Support",
        "Translator",
        "Security",
    ];

    return (
        <div className="mb-5">
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon="fa-solid fa-signature" /></span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Author Name"
                    aria-label="Author Name"
                    aria-describedby="basic-addon1"
                    value={authorName}
                    onChange={(e) => {
                        updateAuthorHandler('name', e.target.value);
                    }}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon="fa-solid fa-flask" /></span>
                <select
                    className="form-select"
                    aria-label="Role"
                    onChange={(e) => {
                        updateAuthorHandler('role', e.target.value);
                    }}
                >
                    <option>Please choose the role</option>
                    {
                        roles.map((role, index) => {
                            return (
                                <option key={index} value={role}>{role}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon="fa-solid fa-envelope" /></span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Author E-Mail"
                    aria-label="Author E-Mail"
                    aria-describedby="basic-addon1"
                    value={authorEmail}
                    onChange={(e) => {
                        updateAuthorHandler('email', e.target.value);
                    }}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon="fa-solid fa-building" /></span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Company"
                    aria-label="Company"
                    aria-describedby="basic-addon1"
                    value={authorCompany}
                    onChange={(e) => {
                        updateAuthorHandler('company', e.target.value);
                    }}
                />
            </div>
        </div>
    );
};
