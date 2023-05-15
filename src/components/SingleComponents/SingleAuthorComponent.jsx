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
            <div className="mb-3">
                <label htmlFor="inputGroupSelect01"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-user" /></span>Author</label>
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
            <div className="mb-3">
                <label htmlFor="role"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-user-tag" /></span>Role</label>
                <select
                    className="form-select"
                    aria-label="Role"
                    id="role"
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
            <div className="mb-3">
                <label htmlFor="inputGroupSelect01"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-envelope" /></span>E-Mail</label>
                <input
                    type="text"
                    id="email"
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
            <div className="mb-3">
                <label htmlFor="inputGroupSelect01"><span className="me-2"><FontAwesomeIcon icon="fa-solid fa-building" /></span>Company</label>
                <input
                    type="text"
                    id="company"
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
