import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <FontAwesomeIcon icon='carat-down' />
                <th>Photo<span></span></th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
            </tr>
        </thead>
    );
}

export default TableHeader;
