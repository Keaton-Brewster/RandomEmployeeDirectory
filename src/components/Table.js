import { useContext, useEffect, useState } from 'react'
import API from "../utils/API"
import TableHeader from "./TableHeader"
import TableBody from './TableBody';
import { Context } from '../state_managment/GlobalState';
import SearchBar from './SearchBar';
import useSearch from '../utils/useSearch';
import { faSortDown, faSortUp, faSort } from '@fortawesome/free-solid-svg-icons'
import useSort from '../utils/useSort';

const Table = () => {
    const [state, dispatch] = useContext(Context);
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState(undefined);
    const [sort, setSort] = useState({
        name: 'default',
        dob: 'default'
    });

    // Initially calling the api to set the root state of the users
    useEffect(
        () => {
            API.getUsers()
                .then(res => {
                    dispatch({ type: 'set-users', payload: res.data.results });
                })
                .catch(err => console.log(err));
        }, [dispatch]);

    // using local state within the table to feed the users to the table body. 
    useEffect(() => {
        setUsers(state.users)
    }, [state])

    //  need an effect, and hook to handle the change of state for filtering results alphabetically, or by DOB
    const sortTypes = {
        up: {
            icon: faSortUp,
            fn: (a, b) => a.net_worth - b.net_worth
        },
        down: {
            icon: faSortDown,
            fn: (a, b) => b.net_worth - a.net_worth
        },
        default: {
            icon: faSort,
            fn: (a, b) => a
        }
    }

    const handleInputChange = event => {
        setSearch(event.target.value);
    };

    const onSortChange = (type) => {
        let nextSort;

        switch (type) {
            case 'name':
                if (sort.name === 'down') nextSort = 'up';
                else if (sort.name === 'up') nextSort = 'default';
                else if (sort.name === 'default') nextSort = 'down';
                setSort({
                    name: nextSort,
                    dob: 'default'
                });
                break;
            case 'dob':
                if (sort.dob === 'down') nextSort = 'up';
                else if (sort.dob === 'up') nextSort = 'default';
                else if (sort.dob === 'default') nextSort = 'down';
                setSort({
                    name: 'default',
                    dob: nextSort
                });
                break;
            default:
                throw new Error("unexpected Error in onSortChange() switch case. Table.js 87");
        }
    }

    // Set up a way to search through the list of 
    let searchedUsers = useSearch(state.users, search)
    let sortedUsers = useSort(sort)

    // wait for any changes to the searchedUsers value and update the users being fed to the Table body accordingly
    useEffect(() => {
        if (!searchedUsers) return;
        setSort({
            name: 'default',
            dob: 'default'
        })
        setUsers(searchedUsers)
    }, [searchedUsers])


    useEffect(() => {
        if (sortedUsers === undefined) {
            setUsers(state.users);
            return;
        }

        setUsers(sortedUsers);
    }, [sort, sortedUsers, state.users])

    return (
        <div className="px-5 mx-5">
            <SearchBar handleInputChange={handleInputChange} />
            <table className="table table-striped">
                <TableHeader sort={sort} onSortChange={onSortChange} sortTypes={sortTypes} />
                <TableBody sort={sort} users={users} />
            </table>
        </div>
    );
}

export default Table;
