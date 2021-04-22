import { useState, useEffect } from "react"
import API from "../utils/API"

const TableBody = () => {
    const [users, setUsers] = useState([]);

    useEffect(
        () => {
            API.getUsers()
                .then(res => {
                    setUsers(res.data.results);
                })
                .catch(err => console.log(err));
        }, []);

    return (
        <tbody>
            {users.map((user, i) => {
                return (
                    <tr key={i}>
                        <th><img src={user.picture.medium} alt=""></img></th>
                        <th>{user.name.title} {user.name.first} {user.name.last}</th>
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

