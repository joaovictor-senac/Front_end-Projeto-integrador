import React, { createContext, useCallback } from "react";
import api from "../services/api";

interface SignInCredentials {

    nome?: string;
    email: string;
    senha: string;

}

interface SignUpCredentials {

    nome?: string;
    email: string;
    senha: string;

}

interface Prop {

    children?: React.ReactNode

}

interface AuthContextData {

    nome: string;
    signIn( creadential: SignInCredentials ) : Promise <void>;
    signUp( creadential: SignUpCredentials ) : Promise <void>;

}

const AuthContext = createContext<AuthContextData>({} as AuthContextData );

const AuthProvider: React.FC<Prop> = ({ children }) => { 

    const signUp = useCallback(async ({ nome, email, senha }:SignUpCredentials) => {

        const reponse = await api.post('instrutor', {
            nome,
            email,
            senha

        } ) 
        console.log(reponse.data)
    },[]);

    const signIn = useCallback(async ({ email, senha }:SignInCredentials) => {

        const rensponse = await api.post('api/v2/login', {
            email,
            senha
        })
        console.log(rensponse.status);
    },[]);

    return(

        <AuthContext.Provider value={ { nome: 'joao', signUp, signIn, } }>
            { children }
        </AuthContext.Provider>

    )

};