import React from 'react';
import Table from './components/Table'
import Navbar from './components/Navbar'

const App = () => {
    return (
        <>
            <Navbar />
            <div className="m-5 p-5">
                <Table />
            </div>
        </>
    );
}

export default App;
