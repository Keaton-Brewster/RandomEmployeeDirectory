import { useState, useEffect } from 'react';

// Taking in as args, a duplicate of the imutable array of users, and the sort state for determining how to sort the array of users
const useSort = (users, sort) => {
    // Setting local state for the ease of returning a value from this hook
    const [sortedUsers, setSortedUsers] = useState([]);

    useEffect(() => {

        if (sort.name === 'default' && sort.dob === 'default') {
            // if we are in default, we don't want to apply any sorting to the users list
            setSortedUsers(undefined)
        }
        // Then we just else if the rest of the possibilities and return the accordingly sorted array of users
        else if (sort.name === 'up' && sort.dob === 'default') {
            setSortedUsers(users.sort((a, b) => {
                if (a.name.last < b.name.last) { return 1; }
                return -1
            }))
        } else if (sort.name === 'down' && sort.dob === 'default') {
            setSortedUsers(users.sort((a, b) => {
                if (a.name.last < b.name.last) { return -1; }
                return 1
            }))
        } else if (sort.dob === 'up' && sort.name === 'default') {
            console.log('dob up')
            setSortedUsers(users.sort((a, b) => {
                if (a.dob.date < b.dob.date) { return -1; }
                return 1
            }))
        } else if (sort.dob === 'down' && sort.name === 'default') {
            console.log('dob down')
            setSortedUsers(users.sort((a, b) => {
                if (a.dob.date < b.dob.date) { return 1; }
                return -1
            }))
        }
    }, [sort, setSortedUsers, users])

    return sortedUsers
}


export default useSort;
