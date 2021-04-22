import { useContext, useState, useEffect } from 'react';
import { Context } from '../state_managment/GlobalState';
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

