import React from 'react';
import fundoSelecao from '../images/backgrounds/selecaoGames.png';
import '../styles/SelecaoStyle.css';

//import {ReactComponent as BotaoCoroa} from '../images/telaSelecao/coroa.svg'; //não funciona
//import {ReactComponent as Placa1} from "..componentesSVG/placa1.svg"; //não funciona
//import Placa1 from '..images/telaSelecao/placa1.svg';  //não funciona
//const placa = require("../images/telaSelecao/placa1.svg"); //não funciona
//import Placa from '..images/telaSelecao/placaA.png';

//import {ReactComponent as Laboratorio} from '..images/telaSelecao/placa2.svg';
//import {ReactComponent as Moinho} from '..images/telaSelecao/placa3.svg';
//import {ReactComponent as Poste} from '..images/telaSelecao/poste.svg';


export default function SelecaoGames(props){
   let {mainState} = props;
   
   let verRank = ()=>{
       mainState.setState({
            telas: mainState.state.telas.map( (tela)=>{

              if(tela.nome === "Castelo")
                    return {...tela, exibida: true}
              else
                    return {...tela, exibida: false}
            }),
            player: {
              ...mainState.state.player
           }
       });
   }


   let verTorre =()=>{
        mainState.setState({
            telas: mainState.state.telas.map( (tela)=>{

              if(tela.nome === "TorreIgreja")
                    return {...tela, exibida: true}
              else
                    return {...tela, exibida: false}
            }),
            player: {
              ...mainState.state.player
          }
      });

   }


   let verLab =()=>{
          mainState.setState({
            telas: mainState.state.telas.map( (tela)=>{

              if(tela.nome === "Laboratorio")
                    return {...tela, exibida: true}
              else
                    return {...tela, exibida: false}
            }),
            player: {
              ...mainState.state.player
          }
      });
   }
   

   let verMoi =()=>{
          mainState.setState({
            telas: mainState.state.telas.map( (tela)=>{

              if(tela.nome === "Moinho")
                    return {...tela, exibida: true}
              else
                    return {...tela, exibida: false}
            }),
            player: {
              ...mainState.state.player
          }
      });
   }


   const reajustarTela = require("../funcoesGerais.js");

   return (
      <div>

            <div id="" className="placaTorreRelogio" onClick={ ()=>verTorre()}>
                  <h3>Torre do Relógio</h3>
            </div> 


            <div id="" className="placaLaboratorio" onClick={ ()=>verLab() }>
                  <h3>Laboratório</h3>
            </div> 


            <div id="" className="placaMoinho" onClick={ ()=>verMoi() }>
                  <h3>Moinho</h3>
            </div> 


            <div id="poste" className="poste"> </div>            


            <div id="botaoRank" onClick={()=>verRank()}>
                <div className="coroaIMG"> </div>
            </div>
            <div id="plaquinhaRank" onClick={()=>verRank()}>
                <h3>Ranking</h3>
            </div>
           

            <img src={fundoSelecao} style={reajustarTela()} alt="fundo da tela de seleção"/>
            {/*
              <img src='..images/telaSelecao/placaA.png' className="placaTorreRelogio" alt="placa1"/> 
              

              <div className="boasVindas"> 
                <h2>Selecione o jogo! </h2> 
              </div>
         
            <div className="boxDescricao">
                <h3 id="descriptionText">Navegue pelas redondezas do reino para desvendar seus mistérios e completar seus desafios.</h3>
            
                <div id="personagem"></div>
            </div>
          */}
      </div>
   )
}