import { useContext, useEffect, useState } from 'react'
import API from "../utils/API"
import TableHeader from "./TableHeader"
import TableBody from './TableBody';
import { Context } from '../state_managment/GlobalState';
import SearchBar from './SearchBar';
import useSearch from '../utils/useSearch';

const Table = () => {
    const [state, dispatch] = useContext(Context);
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState(undefined);

    // Initially calling the api to set the root state of the users
    useEffect(
        () => {
            API.getUsers()
                .then(res => {
                    console.log(res.data.results)
                    dispatch({ type: 'set-users', payload: res.data.results });
                })
                .catch(err => console.log(err));
        }, [dispatch]);

    // using local state within the table to feed the users to the table body. 
    useEffect(() => {
        setUsers(state.users)
    }, [state])


    // Set up a way to search through the list of 
    let searchedUsers = useSearch(state.users, search)
    const handleInputChange = event => {
        setSearch(event.target.value);
    };
    // wait for any changes to the searchedUsers value and update the users being fed to the Table body accordingly
    useEffect(() => {
        if (!searchedUsers) return;

        setUsers(searchedUsers)
    }, [searchedUsers])

    return (
        <div className="px-5 mx-5">
            <SearchBar handleInputChange={handleInputChange}/>
            <table className="table table-striped">
                <TableHeader />
                <TableBody users={users}/>
            </table>
        </div>
    );
}

export default Table;
