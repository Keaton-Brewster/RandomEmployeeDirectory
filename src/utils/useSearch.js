import {
    useEffect,
    useState
} from 'react';

// Accepting a duplicate of the imutable users array, and the search state for running the filter params on the array of users
const useSearch = (users, searchValue) => {
    // Of course, setting local state, as you do with hooks
    const [searchedUsers, setSearchedUsers] = useState('');

    useEffect(() => {
        // Imediately, if the searchvalue is anything less than one character, there is no point in filtering the array
        if (searchValue === undefined) {
            setSearchedUsers(undefined)
        }
        // Simple filter by name
        else {
            const results = users.filter(user => {
                const searchCredentials = user.name.first.toLowerCase() + user.name.last.toLowerCase();
                return searchCredentials.includes(searchValue.toLowerCase())
            })
            setSearchedUsers(results)
        }
    }, [users, searchValue])

    return searchedUsers
}

export default useSearch;