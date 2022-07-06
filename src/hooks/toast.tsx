import React, { createContext, useCallback, useContext, useState } from "react";
import { FiMessageSquare } from "react-icons/fi";
import { v4 as uuidv4 } from 'uuid';
import ToastContainer from "../components/ToastContainer";


export interface ToastMenssage {

    id: string;
    type?: 'success' | 'error' | 'info';
    title: string;
    description?: string;

}

interface ToastContextData {

    addToast(message: Omit<ToastMenssage, 'id'>) : void;
    removeToast(id : string) : void;

}

interface Props {

    children: React.ReactNode;

}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC<Props> = ({ children }) => {

    const [message, setMessage] = useState<ToastMenssage[]>([]);

    const addToast = useCallback(({type, title, description}: Omit<ToastMenssage, 'id'>) => {
        // console.log('adicionou toast caramba')

        const id = uuidv4();

        const toast = { 
            
            id,
            type,
            title,
            description

        }

        setMessage((state) => [...state, toast]);

    },[]);

    const removeToast = useCallback((id: string) => {
        // console.log('removeu o toast ayeah!');

        setMessage((state) => state.filter((message) => message.id !== id))


    },[]);

    return (

        <ToastContext.Provider value={{ addToast, removeToast }}>

            { children }
            
            <ToastContainer messages={message} />

        </ToastContext.Provider>

    );

};

function useToast(): ToastContextData {

    const context = useContext(ToastContext);

    if(!context) {

        throw new Error('useToast must used within a ToastProvider')

    }
    return context;
}

export { ToastProvider, useToast }