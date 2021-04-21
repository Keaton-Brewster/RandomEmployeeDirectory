import React from 'react';
import { Table } from "react-bootstrap";
import TableBody from "./TableBody"
// import axios from "axios";

const MyTable = () => {
    return (
        <Table striped bordered hover>
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
        </Table>
    );

}

export default MyTable;
