import React, { useContext, useEffect } from 'react';
import { Context } from '../state_managment/GlobalState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const TableHeader = () => {
    const [state, dispatch] = useContext(Context)
    // Need to write a custom hook and set up state for the sort optinos, then from the Reducer function maybe I can set up the array.sort for the employee state?


    return (
        <thead className="bg-primary">
            <tr className="justify-content-center">
                <th>Photo</th>
                <th>Name<button className="btn btn-sm">
                    <span><FontAwesomeIcon icon={faCaretDown} /></span>
                </button></th>
                <th>Phone</th>
                <th>Email<button className="btn btn-sm">
                    <span><FontAwesomeIcon icon={faCaretDown} /></span>
                </button></th>
                <th>DOB<button className="btn btn-sm">
                    <span><FontAwesomeIcon icon={faCaretDown} /></span>
                </button></th>
            </tr>
        </thead>
    );
}

export default TableHeader;
