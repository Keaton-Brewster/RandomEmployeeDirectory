import React, { useEffect, useContext, useState } from 'react';
import useSearch from '../utils/useSearch';
import { Context } from '../state_managment/GlobalState';

const SearchBar = ({ handleInputChange }) => {
    return (
        <div className='float-right pr-3 py-2 mr-3'>
            <input
                className="form-control"
                type="search"
                placeholder="Search"
                onChange={handleInputChange}
            />
        </div>
    );
}

export default SearchBar;
