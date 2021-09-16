const DisplayUser = () => {

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
                    return <tr value={usr.id} >
                        <td> {usr.id}</td>
                        <td> {usr.name}</td>
                        <td> {usr.number}</td>
                    </tr>
                })}

            </tbody>



        </table>
    </div>)
}

export default DisplayUser;