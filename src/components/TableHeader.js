import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp, faSort } from '@fortawesome/free-solid-svg-icons'


import './fontawesome.css'
const TableHeader = () => {
    // Need to write a custom hook and set up state for the sort optinos, then from the Reducer function maybe I can set up the array.sort for the employee state?
    const [sort, setSort] = useState({
        name: 'default',
        dob: 'default'
    });

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
                throw new Error();
        }
    }

    // Need to create a whole ass component for the button
    return (
        <thead className="bg-dark">
            <tr className="text-light">
                <th className="pb-3"> Photo </th>
                <th>Name
                <button onClick={() => onSortChange('name')}>
                        <FontAwesomeIcon className="fa" icon={sortTypes[sort.name].icon} />
                    </button>
                </th>
                <th className="pb-3">Phone</th>
                <th>Email</th>
                <th>DOB
                <button onClick={() => onSortChange('dob')}>
                        <FontAwesomeIcon className="fa" icon={sortTypes[sort.dob].icon} />
                    </button>
                </th>
            </tr>
        </thead>
    );
}

export default TableHeader;