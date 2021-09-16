import { useState, useEffect } from 'react'

const DisplayUser = ({ users, handleSubmit }) => {

    const [form, setformValue] = useState({ ...users });

    useEffect(() => {
        setformValue(users);
    }, [users])
    return (<div>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>number</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{users.id}</td>
                    <td>
                        <input type='text' value={form.name} onChange={(e) => setformValue({ ...form, name: e.target.value })}/>
                    </td>
                    <td>
                        <input type='text' value={form.number} onChange={(e) => setformValue({ ...form, number: e.target.value })}/>
                    </td>
                </tr>
            </tbody>
        </table>
        <button onClick={() => handleSubmit(form)} >Edit form</button>
    </div>)
}

export default DisplayUser;