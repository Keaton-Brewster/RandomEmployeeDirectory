const SearchBar = ({ handleInputChange }) => {
    return (
        <div className='float-right pr-3 py-2 mr-3'>
            <input
                className="form-control"
                type="search"
                placeholder="Search by name (first or last)"
                onChange={handleInputChange}
            />
        </div>
    );
}

export default SearchBar;
