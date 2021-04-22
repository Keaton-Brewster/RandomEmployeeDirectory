import { useEffect, useState } from 'react';

const useSearch = (users, searchValue) => {
    const [searchedUsers, setSearchedUsers] = useState('');

    useEffect(() => {
        if (searchValue === undefined) return

        const results = users.filter(user => {
            const searchCredentials = user.name.first.toLowerCase() + user.name.last.toLowerCase() + user.email.toLowerCase();
            return searchCredentials.includes(searchValue.toLowerCase())
        })
        setSearchedUsers(results)
    }, [users, searchValue])


    return (
        searchedUsers
    );
}

export default useSearch;