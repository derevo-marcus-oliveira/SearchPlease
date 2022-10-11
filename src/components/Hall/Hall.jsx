import React from "react";
import { BrowserRouter, Router, Route } from "react-router-dom";

import './Hall.css'
import Cabecalho from "./HallComponents/Cabecalho/Cabecalho";
import Rodape from "./HallComponents/Rodape/Rodape";

export default function Hall () {
    return(
        <div className="hall">
            <Cabecalho/>
        </div>
    )
}
