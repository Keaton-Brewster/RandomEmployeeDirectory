import React from 'react';
import Provider from './state_managment/GlobalState';
import Table from './components/Table'
import Navbar from './components/Navbar'

const App = () => {
    return (
        <Provider>
            <Navbar />
            <Table />
        </Provider>
    );
}

export default App;
