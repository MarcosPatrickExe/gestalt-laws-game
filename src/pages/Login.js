import React from 'react';
import {ReactComponent as TelaLogin} from '../images/porta/Porta_oficial_ultimate.svg';
import '../styles/LoginStyle.css';

//import {Estilo} from '../styles/StyleJS.js';
//import {Styles} from '../styles/BackgroundStyle.module.css'; 
//para esses dois ultimos comandos funcionarem é necessário instalar o package "react-cssmodules"

//style={{height: 'auto', width: '500px', position: 'absolute', left: 0, top: 0, border: '1px double red'}}>

export default function Login(props){
   /*
     <img className="imagemInserida" 
               src='./images/porta/porta_oficial_ultimate.png' 
               alt='Porta do reino' 
               title='porta do reino'/>
   */
   function entrar(){
      let nomeRecebido = document.getElementById("nomeText").value;

      props.valor.setState({
         telas: [
            {nome: nomeRecebido, exibida: false}, 
           // {nome: 'Porta do reino', exibida: false}, 
            {nome: 'Seleção de games', exibida: true}, 
            {nome: 'Rank', exibida: false}
          ]
      });
   }

   return (
      <div>
         
            <form className="formulario">
             
                 <div className="fundoEscrevaNome">
                     <label><span className="InsiraSeuNome">Insira o seu nome: </span></label>
                     
                     <input id="nomeText" type="text" placeholder="Player name" />
                 </div>
                 <input type="button" value="ENTRAR!" className="botaoEntrar" onClick={()=>entrar()}/>
            </form>

          <TelaLogin className="imagemInserida"/>
      </div>
   );
}