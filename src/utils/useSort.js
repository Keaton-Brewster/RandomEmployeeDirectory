import { useState, useEffect, useContext } from 'react';
import { Context } from '../state_managment/GlobalState'

const useSort = (sort) => {
    const [state, dispatch] = useContext(Context);
    const [sortedUsers, setSortedUsers] = useState([]);

    useEffect(() => {
        if (sort.name === 'default' && sort.dob === 'default') {
            console.log('default all')
            setSortedUsers(undefined)
        };
        if (sort.name === 'up') {
            setSortedUsers(state.users.sort((a, b)=> {
                if(a.name.last < b.name.last) { return 1; }
                if(a.name.last > b.name.last) { return -1; }
                return 0;
            }))
        }
        if (sort.name === 'down') {
            setSortedUsers(state.users.sort((a, b)=> {
                if(a.name.last < b.name.last) { return -1; }
                if(a.name.last > b.name.last) { return 1; }
                return 0;
            }))
        }
        if (sort.dob === 'up') {
            console.log('dob up')
            // setSortedUsers(state.users.sort((a, b) => {
            //     return a.dob.date - b.dob.date
            // }))
        }
        if (sort.dob === 'down') {
            console.log('dob down')
            // setSortedUsers(state.users.sort((a, b) => {
            //     return b.dob.date - a.dob.date
            // }))
        }
    }, [sort, setSortedUsers, state.users])

    return sortedUsers
}


export default useSort;
