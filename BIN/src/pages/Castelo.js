import React from 'react';
//import {ReactComponent as CenarioCastelo} from '../images/backgrounds/casteloCenario.svg';
import CenarioCastelo from '../images/backgrounds/casteloCenario.png';
import '../styles/CasteloStyle.css';

export default function Castelo(props){
  
    let {tempoGeral, state} = props.ctxMain;
    const estiloFundo = require("../funcoesGerais.js");
    //const {playerGlobal} = require("../DadosJogador.js");
    //const player = window.localStorage[window.localStorage.key(0)];

    function getTempototal(){
        let minutosTorreIgreja = (tempoGeral.tempoTorreIgreja != null) ? tempoGeral.tempoTorreIgreja[0]:0;
        let segundosTorreIgreja = (tempoGeral.tempoTorreIgreja != null) ? tempoGeral.tempoTorreIgreja[1]:0;

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
      [state.player.nome, getTempototal()],
      ['xxxxxx','XminYs'],
      ['yyyyyy','XminYs'],
      ['zzzzzz','XminYs'],
      ['vvvvvv','XminYs'],
      ['wwwww','XminYs'],
   ]

   /**link para resolver o problema da message "Treating warnings as errors because process.env.CI = true. Failed to compile":  
    * https://stackoverflow.com/questions/62663451/treating-warnings-as-errors-because-process-env-ci-true-failed-to-compile
   */


   let novosValores = valores.map(
      (elemento, index)=>{

       if(index === 0){
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
         <table>
               <thead>
                  <tr>
                     <th> Nome do <br /> jogador: </th>
                     <th> Tempo total: </th>
                  </tr>
               </thead>
               <tbody>
                {linhas}

            </tbody>
          </table>
  
         <img src={CenarioCastelo} style={estiloFundo()} alt="Ranking dos jogadores" /> 
     </div>
   );
}                 

//comando para ver todos os pacotes instalados atualmente na máquina:
//npm list -g --depth=0