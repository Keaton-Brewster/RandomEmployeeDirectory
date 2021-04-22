import React, { createContext, useReducer } from "react";
import Reducer from './Reducer'

// The initial state could be ANYTHING
// Try to think outside of the box on how you can use
// reducer functions in conjunction with the initial values of your state. 
// Imagine setting the initial state to some database data, 
// and boom you have your social media app that can interact 
// with users, and data, seamlessly and elegantly


const initialState = { 
    rootUsers: [],
    users: []
};

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;