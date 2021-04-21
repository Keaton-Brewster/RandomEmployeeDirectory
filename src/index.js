import React from 'react';
import ReactDOM from 'react-dom';
import GlobalContext from "./state_managment/GlobalState"
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <GlobalContext>
            <App />
        </GlobalContext>
    </React.StrictMode>,
    document.getElementById('root')
);
