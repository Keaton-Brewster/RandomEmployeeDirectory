import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SortToggle = ({ type, handleSort, icon }) => {
    return (
        <button
            className="btn btn-sm"
            value={type}
            onClick={handleSort}>
            <span value={type}>
                <FontAwesomeIcon
                    className="fa"
                    value='name'
                    icon={icon} />
            </span>
        </button>
    );
}

export default SortToggle;
