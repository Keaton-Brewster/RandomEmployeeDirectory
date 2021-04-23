import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../state_managment/GlobalState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import './fontawesome.css'
const TableHeader = () => {
    // Need to write a custom hook and set up state for the sort optinos, then from the Reducer function maybe I can set up the array.sort for the employee state?


    const handleSort = event => {
        switch (event.target.value) {
            case 'name':
                console.log('name')
                break;
            case 'dob':
                console.log('dob')
                break;
            default:
                throw new Error();
        }
    }

    return (
        <thead className="bg-dark">
            <tr className="text-light">
                <th className="pb-3">
                    Photo
                </th>
                <th>
                    Name
                    <button
                        className="btn btn-sm"
                        value='name'
                        onClick={handleSort}>
                        <span>
                            <FontAwesomeIcon className="fa" icon={faCaretUp} />
                        </span>
                    </button>
                </th>
                <th className="pb-3">Phone</th>
                <th>Email
                    <button
                        className="btn btn-sm"
                        value='name'
                        onClick={handleSort}>
                        <span><FontAwesomeIcon className="fa" icon={faCaretDown} /></span>
                    </button></th>
                <th>
                    DOB
                    <button
                        className="btn btn-sm"
                        value='dob'
                        onClick={handleSort}>
                        <span>
                            <FontAwesomeIcon className="fa" icon={faCaretDown} />
                        </span>
                    </button>
                </th>
            </tr>
        </thead>
    );
}

export default TableHeader;
