import { useState} from 'react'
import DisplayUser from './userDetails';

let USERS = [{ name: "sumit", number: "6789", id: '1' }, { name: "Yogi", number: "67810", id: '2' }]

const Displaydata = () => {

    const [user, setUser] = useState(null)
    const [users, setUsers] = useState(USERS)

    const handleClick = (e) => {
        setUser(e)
    }

    const handleSubmit = (e) => {
        setUsers(
            users.map((user) => { return user.id == e.id ? e : user }))
    }

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

                {users.map((usr) => {
                    return <tr key={usr.id} onClick={() => handleClick(usr)}>
                        <td> {usr.id}</td>
                        <td> {usr.name}</td>
                        <td> {usr.number}</td>
                    </tr>
                })}
            </tbody>
        </table>

        {user && <DisplayUser users={user} handleSubmit={handleSubmit} />}
    </div>)
}

export default Displaydata;