
import React, { createContext, useReducer } from "react";
import { InitialState, UsuarioRedutor } from  '../Redutor/UsuarioRedutor';
import { initialWindowMetrics } from "react-native-safe-area-context";


export const UsuarioContex = createContext();

export default ({children}) =>{
    const [state, dispatch] = useReducer(UsuarioRedutor, InitialState); 

    return ( 
        <UsuarioContex.Provider value={{state, dispatch}}>
            {children}
        </UsuarioContex.Provider>
    );
}