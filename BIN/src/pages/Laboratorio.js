import React from 'react';
import FundoLaboratorio from '../images/backgrounds/fundoLaboratorio.jpg';

export default function Laboratorio(){

    const estiloLabFundo = require("../funcoesGerais.js");

    return (
      <div>
            <img src={FundoLaboratorio} style={estiloLabFundo()} />
     </div>);
}
