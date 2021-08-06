import React from 'react';
//import {ReactComponent as CenarioCastelo} from '../images/backgrounds/casteloCenario.svg';
import CenarioCastelo from '../images/backgrounds/casteloCenario.png';
import '../styles/CasteloStyle.css';

export default function Castelo(props){
  
    let {player} = props.ctxMain.state;
    const estiloFundo = require("../funcoesGerais.js");
    //const {playerGlobal} = require("../DadosJogador.js");
    //const player = window.localStorage[window.localStorage.key(0)];

    function getTempototal(){
        let minutosTorreIgreja = (player.tempoTorreIgreja != null) ? player.tempoTorreIgreja[0]:0;
        let segundosTorreIgreja = (player.tempoTorreIgreja != null) ? player.tempoTorreIgreja[1]:0;

        /*let minutosMoinho = (player.tempoLaboratorio != null) ? player.tempoLaboratorio[0]:0;
        let segundosMoinho = (player.tempoLaboratorio != null) ? player.tempoLaboratorio[1]:0;

        let minutosLab = (player.tempoMoinho != null) ? player.tempoMoinho[0]:0;
        let segundosLab = (player.tempoMoinho != null) ? player.tempoMoinho[1]:0;

        let minTotal = minutosTorreIgreja + minutosMoinho + minutosLab;
        let segTotal = segundosTorreIgreja + segundosMoinho + segundosLab;

        let minutosRestantes = segTotal/60;
        let segundosRestantes = segTotal%60;

        minTotal += minutosRestantes;
        segTotal += segundosRestantes;*/

        return (""+Math.floor(minutosTorreIgreja)+"min"+Math.floor(segundosTorreIgreja)+"s");
    }
    

    let gerarMinutoAleatorio =()=>{// 0 <= N <11 
       return Math.floor( Math.random()*(11-0)+0);
    }


    let gerarSegundoAleatorio =()=>{// 0 <= N <61 
      return Math.floor( Math.random()*(61-0)+0 );
   }

  // console.log(props.estadoMain);
   //alert(getTempototal());
   let valores = [
      [player.nome, getTempototal()],
      ['xxxxxx','XminYs'],
      ['yyyyyy','XminYs'],
      ['zzzzzz','XminYs'],
      ['vvvvvv','XminYs'],
      ['wwwww','XminYs'],
   ]

   let novosValores = valores.map(
      (elemento, index)=>{

       if(index == 0){
          return elemento;
       }else{
         //let result = new Array(6,2);
         elemento[1] = elemento[1].replace("X", (" "+gerarMinutoAleatorio()));
         elemento[1] = elemento[1].replace("Y", (" "+gerarSegundoAleatorio()));

         //alert("nome: "+elemento[0]+"/ tempo: "+elemento[1]);
         return elemento;
        }
      }
   );

   //Math.random().toString(36).substr(2, 9)
   //console.dir(JSON.stringify(novosValores,null, 4));
      
   const linhas = novosValores.map( (elemento, indice)=>{//adicionando linhas e colunas no componente 'vals'
      return  <tr>
              <td>{elemento[0]}</td>
              <td>{elemento[1]}</td>
         </tr>;
   });
   
   return (
     <div>
     {/*
         <h3 id="nomePlayer">Patrick</h3>
         <h4 id="tempo">00:00</h4> */}

         <table>
               <thead>
                  <tr>
                     <th> Nome do jogador: </th>
                     <th> Tempo total: </th>
                  </tr>
               </thead>
               <tbody>
                {linhas}

{/*            
               <tr>
                  <td>{novosValores[0][0]}</td>
                  <td>{novosValores[0][1]}</td>
               </tr>
            
               <tr>
                  <td>{novosValores[1][0]}</td>
                  <td>{novosValores[1][1]}</td>
               </tr>

               <tr>
                  <td>{novosValores[2][0]}</td>
                  <td>{novosValores[2][1]}</td>
               </tr>

               <tr>
                  <td>{novosValores[3][0]} </td>
                  <td>{novosValores[3][1]}</td>
               </tr>

               <tr>
                  <td>{novosValores[4][0]}</td>
                  <td>{novosValores[4][1]}</td>
               </tr>

               <tr>
                  <td>{novosValores[5][0]}</td>
                  <td>{novosValores[5][1]}</td>
               </tr>
          */}
            </tbody>
          </table>
  
         <img src={CenarioCastelo} style={estiloFundo()} /> 
     </div>
   );
}                 

//comando para ver todos os pacotes instalados atualmente na máquina:
//npm list -g --depth=0