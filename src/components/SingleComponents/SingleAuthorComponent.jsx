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
        <Fragment>
            <table className="single-author-component mb-4">
                <tbody>

                <tr>
                        <td>
                            <FontAwesomeIcon className="me-1" icon="fa-solid fa-users"/>
                            <label className="me-2" htmlFor="name">Name</label>
                        </td>
                        <td className="single-input-field">
                            <input
                                className="block me-2"
                                type="text"
                                name="name"
                                value={authorName}
                                onChange={(e) => {
                                    updateAuthorHandler('name', e.target.value);
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FontAwesomeIcon className="me-1" icon="fa-solid fa-flask"/>
                            <label className="me-2" htmlFor="role">Role</label>
                        </td>
                        <td>
                            <select
                                className="block me-2"
                                name="role"
                                value={authorRole}
                                onChange={(e) => {
                                    updateAuthorHandler('role', e.target.value);
                                }}>
                                {
                                    roles.map((role, index) => {
                                        return (
                                            <option
                                                key={index}
                                                value={role}
                                            >
                                                {role}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FontAwesomeIcon className="me-1" icon="fa-solid fa-envelope"/>
                            <label className="me-2" htmlFor="email">Email</label></td>
                        <td>
                            <input
                                className="block"
                                type="text"
                                name="email"
                                value={authorEmail}
                                onChange={(e) => {
                                    updateAuthorHandler('email', e.target.value);
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FontAwesomeIcon className="me-1" icon="fa-solid fa-building"/>
                            <label
                                htmlFor="company"
                                className="me-2"
                            >
                                Company
                            </label>
                        </td>
                        <td>
                            <input
                                className="block"
                                type="text"
                                name="company"
                                value={authorCompany}
                                onChange={(e) => {
                                    updateAuthorHandler('company', e.target.value);
                                }}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    );
};
