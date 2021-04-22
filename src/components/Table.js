import { Table as BootstrapTable } from "react-bootstrap";
import TableBody from "./TableBody";

const Table = () => {
    return (
        <BootstrapTable striped bordered hover>
            <thead>
                <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
            </thead>
            <TableBody />
        </BootstrapTable>
    );
}

export default Table;
