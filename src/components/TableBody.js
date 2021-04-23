// this is just the component that takes in the user state from the table component, and displays the users accordinly
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
                        <th>{new Date(user.dob.date).toString().substr(4, 11)}</th>
                    </tr>
                )
            })}
        </tbody>
    )
}

export default TableBody;

