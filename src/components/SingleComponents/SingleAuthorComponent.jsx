import {Fragment, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const SingleAuthorComponent = (props) => {

    const [authorName, setAuthorName] = useState(props.author.name);
    const [authorRole, setAuthorRole] = useState(props.author.role);
    const [authorEmail, setAuthorEmail] = useState(props.author.email);
    const [authorCompany, setAuthorCompany] = useState(props.author.company);

    const updateAuthorHandler = (field, value) => {
        switch (field) {
            case 'name':
                setAuthorName(value);
                break;
            case 'role':
                setAuthorRole(value);
                break;
            case 'email':
                setAuthorEmail(value);
                break;
            case 'company':
                setAuthorCompany(value);
                break;
        }

        props.updateAuthorHandler(authorName, authorRole, authorEmail, authorCompany);
    }

    const roles = [
        'Developer',
        'Project Manager',
        'Designer',
        'Tester',
        'Documentation Writer',
        'Reviewer',
        'Support',
        'Translator',
        'Security',
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
                                value={props.author.role}
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
                                value={props.author.email}
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
                                value={props.author.company}
                                onChange={(e) => {
                                    updateAuthorHandler('company', e.target.value);
                                }}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
}
