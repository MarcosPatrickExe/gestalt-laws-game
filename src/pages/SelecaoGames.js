import React from 'react';
import {ReactComponent as Selecao} from '../images/backgroundSelecao/backgroundSelecaoSVG.svg';
//import styles from '../styles/BackgroundStyle.css';
import '../styles/SelecaoStyle.css';

export default function SelecaoGames(){

   return (
      <div>

            <button  className="btn1"><span>Mini game 1</span></button>
            
            <button  className="btn2"><span>Mini game 2</span></button>

            <button  className="btn3"><span>Mini game 3</span></button>

            <div className="boxDescricao">
               <h3 className="descricao">Navegue pelas redondezas do reino para desvendar seus mistérios e completar seus desafios.</h3>
            </div>
      
            <Selecao style={{zIndex: 1, position: 'absolute', left: 0, top: 0}}/>
      </div>);
}