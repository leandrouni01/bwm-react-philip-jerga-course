
import React from 'react';

export const StateContext = React.createContext({});

export const Provider = ({children, store}) => 
    <StateContext.Provider value={store} >{children}</StateContext.Provider>;
