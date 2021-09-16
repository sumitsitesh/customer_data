import { useState } from 'react'
import DisplayUser from './userDetails';

let users = [{ name: "sumit", number: "6789", id: '1' }, { name: "Yogi", number: "67810", id: '2' }]

const Displaydata = () => {

    // const [user,setUser] = useState(users)
    const handlesubmit = (e) =>{
        <DisplayUser props={}/>
        const value = e.target.value
console.log("open customer details",value);
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
                    return <tr value={usr.id} onClick={handlesubmit}>
                        <td> {usr.id}</td>
                        <td> {usr.name}</td>
                        <td> {usr.number}</td>
                    </tr>
                })}

            </tbody>



        </table>
    </div>)
}

export default Displaydata;