import React, { useContext, useEffect, useState } from 'react';
import SortToggle from './SortToggle';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'


import './fontawesome.css'
const TableHeader = () => {
    // Need to write a custom hook and set up state for the sort optinos, then from the Reducer function maybe I can set up the array.sort for the employee state?



    const handleSort = event => {
        console.log(event.target)
        let name = false;
        let dob = false;

        switch (event.target.value) {
            case 'name':
                name === false ?
                    name = true :
                    name = false;
                dob = false
                console.log(name)
                break;
            case 'dob':
                dob === false ?
                    dob = true :
                    dob = false;
                name = false
                console.log(dob)
                break;
            default:
                throw new Error('No value was read from the event.target. event.target must have a value of either "name" or "dob"');
        }
    }

    const nameSort =  <SortToggle handleSort={handleSort} type='name' icon={faCaretDown}/>
    const emailSort = <SortToggle handleSort={handleSort} type='name' icon={faCaretDown}/>
    const dobSort = <SortToggle handleSort={handleSort} type='dob' icon={faCaretDown}/>

    // Need to create a whole ass component for the button
    return (
        <thead className="bg-dark">
            <tr className="text-light">
                <th className="pb-3"> Photo </th>
                <th>Name {nameSort}</th>
                <th className="pb-3">Phone</th>
                <th>Email {emailSort}</th>
                <th>DOB {dobSort}</th>
            </tr>
        </thead>
    );
}

export default TableHeader;