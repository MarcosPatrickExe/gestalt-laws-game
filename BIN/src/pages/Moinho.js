import React from 'react';
import MoinhoFundo from '../images/backgrounds/moinho.png';


export default function Moinho(){

   const moinhoFundoEstilo = require("../funcoesGerais.js");

   return (
      <div>
            <img src={MoinhoFundo} style={moinhoFundoEstilo()} />
      </div>
   );
}