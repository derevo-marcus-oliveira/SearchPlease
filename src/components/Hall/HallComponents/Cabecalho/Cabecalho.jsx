import React from "react";
import './Cabecalho.css'

export default function Cabecalho () {
    return (
        <div className="cabecalho">
            <div className="box">

                <div className="Logo">
                    <h2>Logo</h2>
                </div>

                <div className="rotasLinks">
                   <ul>
                        <li>
                            <p>Home</p>
                        </li>
                        <li>
                            <p className="catalago">
                                Catálogo
                                
                                <span className="seta l1"></span>
                                <span className="seta l2" ></span>
                                <div className="bloco">
                                    <div className="bloco-item">
                                        <p>Placa mãe</p>
                                        <p>Placa de video</p>
                                    </div>
                                </div>
                            </p>
                        </li>
                        <li>
                        </li>
                   </ul>
                </div>

                <div className="social-perfil">
                    <ul>
                        <li>
                            <p>Regitrar</p>
                            
                        </li>
                        <li>
                            <p>Entrar</p>                            
                        </li>
                    </ul>

                    <div className="perfil">
                        <p>img</p>
                    </div>
                </div>

            </div>
        </div>
    )
}