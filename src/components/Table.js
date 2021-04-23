import { useContext, useEffect, useState } from 'react'
import { faSortDown, faSortUp, faSort } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../state_managment/GlobalState';
import TableHeader from "./TableHeader"
import TableBody from './TableBody';
import SearchBar from './SearchBar';
import useSearch from '../utils/useSearch';
import useSort from '../utils/useSort';
import API from "../utils/API"

const Table = () => {
    // Using context to store the root list of user data, so that we always have an immutable source to fall back on
    const [state, dispatch] = useContext(Context);
    // Then setting up the component state for users, this is what we will use to render the users data
    const [users, setUsers] = useState([]);
    // State variables for the value of the search box
    const [search, setSearch] = useState(undefined);
    // State variable for the sort buttons
    const [sort, setSort] = useState({
        name: 'default',
        dob: 'default'
    });
    // Initially calling the api to set the root state of the users
    useEffect(() => {
        API.getUsers()
            .then(res => {
                dispatch({ type: 'set-users', payload: res.data.results });
            })
            .catch(err => console.log(err));
    }, [dispatch]);
    // Then seting the local state for rendering
    useEffect(() => {
        setUsers(state.users)
    }, [state])

    // setting up a variable to control the icons displayed next to the column you are sorting by
    const sortTypes = {
        up: faSortUp,
        down: faSortDown,
        default: faSort,
    }

    // Function that handles the state of the search box. 
    const handleInputChange = event => {
        setSearch(event.target.value);
    };

    // Function that handles the toggling of the column sorting
    const onSortChange = (type) => {
        let nextSort;
        // Check first to see which value the user is sorting for and then if/else to set the value of the sort icon/state
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

    // setting up the user sets we are going to listen to in our useEffects to display the data you want! 
    // These are both custom hooks
    let searchedUsers = useSearch([...state.users], search)
    let sortedUsers = useSort([...state.users], sort)

    // This useEffect handles filtering the array of users based on your search input 
    // Note that is sets sort to {all: default} so that no weird state issues happen (searching and filtering at the same time)
    useEffect(() => {
        if (!searchedUsers) return;
        setSort({
            name: 'default',
            dob: 'default'
        })
        setUsers(searchedUsers)
    }, [searchedUsers])

    // This useEffect handles the sorting of the users array based on the sort state
    // Note when both sort values are 'default' sortedUsers comes back undefined, and we fall back on our GlobalState to restore the list to normal
    useEffect(() => {
        if (sortedUsers === undefined) {
            setUsers(state.users);
            return;
        } else {
            setUsers(sortedUsers)
        };
    }, [sortedUsers, state.users])


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
