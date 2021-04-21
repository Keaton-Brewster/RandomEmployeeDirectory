import { useState } from 'react';
import { useAsync } from 'react-async';
import axios from 'axios';

const fetchPerson = async () => {
    const response = await fetch("https://randomuser.me/api/?results=50");
    if (!response.ok) throw new Error(response.status);
    return response.json();
  };

const TableBody = () => {
    const [usersState, setUsers] = useState([]);
    // const { data, error } = useFetch("https://randomuser.me/api/?results=50", {
    //     headers: { accept: "application/json" }
    // })
    const {data, error} = useAsync({promiseFn: fetchPerson});
    if (error) return error.message;

    console.log(data);
    const users = data.data.results;

    return users.length > 0 ?
        <tbody>
            {users.map(user => {
                // console.log(user)
                return (
                    <tr key={user.id.value}>
                        <th><img src={user.picture.medium} alt=""></img></th>
                        <th>{user.name.title} {user.name.first} {user.name.last}</th>
                        <th>{user.cell}</th>
                        <th>{user.email}</th>
                        <th>{user.dob}</th>
                    </tr>
                )
            })}
        </tbody> :
        <p>Please Reload</p>


    // function getRandomUsers() {
    //     return new Promise((resolve, reject) => {
    //         axios.get("https://randomuser.me/api/?results=50")
    //             .then(response => {
    //                 if (response) {
    //                     const users = response.data.results
    //                     setUsers(users);
    //                     resolve(users)
    //                 }
    //             })
    //             .catch(error => reject(error))
    //     })
    // }

    // return await getRandomUsers().then(users => {
    //     return (
    //         users.length > 0 ?
    //             <tbody>
    //                 {users.map(user => {
    //                     console.log(user)
    //                     return (
    //                         <tr key={user.id.value}>
    //                             <th><img src={user.picture.medium} alt=""></img></th>
    //                             <th>{user.name.title} {user.name.first} {user.name.last}</th>
    //                             <th>{user.cell}</th>
    //                             <th>{user.email}</th>
    //                             <th>{user.dob}</th>
    //                         </tr>
    //                     )
    //                 })}
    //             </tbody> :
    //             <p>Please Reload</p>
    //     );
    // })
    // return (
    //     users.length > 0 ?
    //         <tbody>
    //             {users.map(user => {
    //                 console.log(user)
    //                 return (
    //                     <tr>
    //                         <th><img src={user.picture.medium} alt=""></img></th>
    //                         <th>{user.name.title} {user.name.first} {user.name.last}</th>
    //                         <th>{user.cell}</th>
    //                         <th>{user.email}</th>
    //                         <th>{user.dob}</th>
    //                     </tr>
    //                 )
    //             })}
    //         </tbody> :
    //         <p>Please Reload</p>
    // );
}

export default TableBody;

