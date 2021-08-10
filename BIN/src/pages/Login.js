import React from 'react';
import TelaLogin from '../images/backgrounds/portaPrincipal.png';
import '../styles/LoginStyle.css';
//import {ReactComponent as placa} from '..images/';

//import {Estilo} from '../styles/StyleJS.js';
//import {Styles} from '../styles/BackgroundStyle.module.css'; 
//para esses dois ultimos comandos funcionarem é necessário instalar o package "react-cssmodules"


//resolução 1920x1080 - tela do angelo
//resolução 1334x1200 - tela do guilherme


export default function Login(props){
   /*
     <img className="imagemInserida" 
               src='./images/porta/porta_oficial_ultimate.png' 
               alt='Porta do reino' 
               title='porta do reino'/>
   */
   function entrar(){
      let nomeRecebido = document.getElementById("nomeText").value;

      if(nomeRecebido.length){

          // let {jogador, salvarPlayer} = require("../DadosJogador.js");
           //jogador.name = nomeRecebido;

           props.ctxCanvas.setState( (estadoMain) => ({//alterando o estado do componente "Main" via props

               telas: estadoMain.telas.map( (tela)=>{

                  if(tela.nome === "SelecaoGames")
                        return {...tela, exibida: true}
                  else
                        return {...tela, exibida: false}
               }),

               player: {
                  nome: nomeRecebido
               }
           }));

         //window.localStorage.setItem(document.getElementById("nomeText"), jogador);
         //salvarPlayer(jogador);
         //alert(props.ctxCanvas.state.telas[5].exibida);
      }else{
           alert("Escreva seu nome!");
      }
  }

   const reajustarFundo = require("../funcoesGerais.js");

   return (
      <div>
            <div id="boxNomeJogador">
                 {/*
                   <div className="fundoEscrevaNome">
                     <label><span className="InsiraSeuNome">Insira o seu nome: </span></label>
                     
                     <input id="nomeText" type="text" placeholder="Player name" />
                   </div> 
                */}

                 <input id="nomeText" type="text" placeholder="Digite seu nome aqui" />

                 <button value="ENTRAR!" id="botaoEntrar" onClick={() => entrar()}>ENTRAR</button>
            </div>

            <img src={TelaLogin} style={reajustarFundo()} alt="Bem vindo :)"/>
      </div>
   );
}