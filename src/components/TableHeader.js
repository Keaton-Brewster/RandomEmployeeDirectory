import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './fontawesome.css'

// We are accepting as props from the Table component the sort state, the onSortChange event handler, and the sortTypes for the fontawesome icons
const TableHeader = ({ sort, onSortChange, sortTypes }) => {
    return (
        <thead className="bg-dark">
            <tr className="text-light">
                <th className="pb-3"> Photo </th>
                <th>Name
                <button onClick={() => onSortChange('name')}>
                        <FontAwesomeIcon className="fa" icon={sortTypes[sort.name]} />
                    </button>
                </th>
                <th className="pb-3">Phone</th>
                <th>Email</th>
                <th>DOB
                <button onClick={() => onSortChange('dob')}>
                        <FontAwesomeIcon className="fa" icon={sortTypes[sort.dob]} />
                    </button>
                </th>
            </tr>
        </thead>
    );
}

export default TableHeader;