import React, { useEffect, useContext, useState } from 'react';
import useSearch from '../utils/useSearch';
import { Context } from '../state_managment/GlobalState';

const SearchBar = ({handleInputChange}) => {
    return (
        <div className='float-right pr-5 mr-5'>
            <input
                type="text"
                placeholder="Search"
                onChange={handleInputChange}
            />
        </div>
    );
}

export default SearchBar;
