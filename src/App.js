import React from 'react';
import GlobalContext from "./state_managment/GlobalState"
// import { Navbar } from "react-bootstrap";
import Table from './components/Table';

const App = () => {
    return (
        <GlobalContext>
            <Table />
        </GlobalContext>
    );
}

export default App;
