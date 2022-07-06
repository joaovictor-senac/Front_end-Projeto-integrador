import React from "react";
import { Routes, Route } from 'react-router-dom'
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Rotas: React.FC = () => (

    <Routes>
        <Route path='/*' element={<SignIn/>}/>
        <Route path='/singup' element={<SignUp/>}/>
    </Routes>
);

export default Rotas;