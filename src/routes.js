import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Projetos from "./pages/projetos";
import Home from "./pages/home";


const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/projetos" element={<Projetos />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;