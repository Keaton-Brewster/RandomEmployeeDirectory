import {useState, useEffect} from 'react'
import { Table as BootstrapTable } from 'react-bootstrap';
import API from "../utils/API"
import TableBody from './TableBody';

const Table = () => {
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
        <BootstrapTable striped bordered hover>
            <thead>
                <tr>
                    <th>Photo<span></span></th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
            </thead>
            <TableBody users={users}/>
        </BootstrapTable>
    );
}

export default Table;
