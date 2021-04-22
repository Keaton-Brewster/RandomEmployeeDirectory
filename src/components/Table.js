import {useState, useEffect} from 'react'
import API from "../utils/API"
import TableHeader from "./TableHeader"
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
        <table className="table">
            <TableHeader />
            <TableBody users={users}/>
        </table>
    );
}

export default Table;
