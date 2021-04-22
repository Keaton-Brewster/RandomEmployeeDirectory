const TableBody = ({users}) => {
    return (
        <tbody>
            {users.map((user, i) => {
                return (
                    <tr key={i}>
                        <th><img src={user.picture.medium} alt=""></img></th>
                        <th>{user.name.first} {user.name.last}</th>
                        <th>{user.cell}</th>
                        <th>{user.email}</th>
                        <th>{user.dob.date}</th>
                    </tr>
                )
            })}
        </tbody>
    )
}

export default TableBody;

