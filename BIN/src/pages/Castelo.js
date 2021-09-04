import React, {useState, useEffect} from 'react';
//import {ReactComponent as CenarioCastelo} from '../images/backgrounds/casteloCenario.svg';
import CenarioCastelo from '../images/imagens_ranking/fundoCastelo.jpg';
import '../styles/CasteloStyle.css';
import TransitionEffects from '../transitionEffects.js';
import player from '../DadosJogador.js';//Objeto com todos os dados do jogador
import Api from '../firebase/API';
//import { getAllData } from '../DadosJogador.js';

async function inserirJogador(){
   player.calcularTempoTotal();//inserindo o tempo total do jogador para o seu respectiva propriedade de modo privada (dentro do próprio objeto/classe)
   await Api.insertPlayer(player.getAllData());//jogador inserido no banco de dados
}


export default function Castelo (){
    //onst {getTempoTorre, getTempoLaboratorio, getTempoMoinho} = global.DadosJogador;
    //const player = window.localStorage[window.localStorage.key(0)]; 

   
    const [players, setPlayers] = useState([]);
    
    useEffect( async () =>{ 
        inserirJogador();

        let allPlayers = await Api.listPlayers();//FUNÇÃO QUE RETORNA UMA PROMISSE
           // console.log(allPlayers);
      
        allPlayers.sort( (playerA, playerB)=>{//RANQUEANDO OS PLAYERs CONFORME OS VALORES DO TEMPO TOTAL (em String)
             return (playerA.tempoTotal < playerB.tempoTotal) ? -1 : (playerA.tempoTotal > playerB.tempoTotal) ? 1 : 0;
                  //ORGANIZANDO OS JOGADORES EM ORDEM CRESCENTE DE TEMPO
        });

        setPlayers(allPlayers);
    }, []);

   //Math.random().toString(36).substr(2, 9)
   //console.dir(JSON.stringify(novosValores,null, 4));

     const estiloFundo = require('../funcoesGerais.js');

     const mapear = (jogador, indice)=>{//adicionando linhas e colunas no componente 'vals'
         let cor="rgb(216, 214, 213)";//cor de fundo padrão para os dados dos outros jogadores

         if(player.nome === jogador.nome){
            cor = "yellow";//cor para destacar a posição  de onde a pessoa se encontra
         }

         return ( <tr style={{backgroundColor: cor, color: "green"}}>
                     <td>{indice+1}</td>
                     <td>{jogador.nome}</td>
                     <td>{jogador.tempoTotal}</td>
             </tr>);
     };
  
   
      return (
            <div>
                  <TransitionEffects effectName="fadeIn" />

                  <div className="tabelaModalRanking">
                     <div className="tabela">
                        <table>
                              <thead>
                                 <tr>
                                    <th className="titulo"> Posição:</th>
                                    <th className="titulo"> Nome do <br /> jogador: </th>
                                    <th className="titulo"> Tempo total: </th>
                                 </tr>
                              </thead>
                           <tbody>
                              { players.length>0 &&(players.map(mapear)) }
                           </tbody>
                        </table>
                     </div>
                  </div>


                  <div id="sombraEntrePlacaEFundo"></div>
               <img src={CenarioCastelo}  style={estiloFundo()} alt="Ranking dos jogadores" /> 
         </div>
      );


   /*
      async componentDidMount(){
         await this.connectAPI();
      } */
}                 



/*
function gerarMinutoAleatorio(){// 0 <= N <11 
   return Math.floor( Math.random()*(11-0));
}


function gerarSegundoAleatorio(){// 0 <= N <61 
  return Math.floor( Math.random()*(61-0));
}
*/



//allPlayers = allPlayers.forEach( obj=> obj.data() );

   
   /*
      componentDidMount() {
            // initial data fetch() calls here
            fetch('https://jsonplaceholder.typicode.com/posts')
               .then(res => res.json())
                     .then(data => this.setState({posts: data}))
                           .catch(err => console.error(err));
      }
   */


   /*
      async componentDidMount() {
            try {
                  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                  this.setState({posts: await res.json()})
            } catch (e) {
                  console.error(e);
            }
      }
   */

   



      
   /*
   let valores = [
      [state.player.nome, getTempototal()],
      ['Juliete','Xmin : Ys'],
      ['Filomena','Xmin : Ys'],
      ['Gabriela','Xmin : Ys'],
      ['Gustavo','Xmin : Ys'],
      ['Fernanda','Xmin : Ys'],
      ['diogo silva','Xmin : Ys'],
      ['bia','Xmin : Ys'],
      ['fabio lima','Xmin : Ys'],
      ['fernandoo','Xmin : Ys'],
      ['paty','Xmin : Ys'],
      ['Flávio assuncão','Xmin : Ys'],
      ['Felipe nogueira','Xmin : Ys'],
      ['Amanda do Nascimento','Xmin : Ys'],
      ['Rodrigo','Xmin : Ys'],
      ['guilherme Avila','Xmin : Ys'],
      ['ivo de lima','Xmin : Ys'],
      ['rafa','Xmin : Ys'],
      ['gabi','Xmin : Ys'],
      ['vane santos','Xmin : Ys'],
      ['talita menezes','Xmin : Ys'],
      ['henrique saraiva','Xmin : Ys'],
      ['talita menezes','Xmin : Ys'],
      ['henrique saraiva','Xmin : Ys']
   ]
*/








 /**link para resolver o problema da message "Treating warnings as errors because process.env.CI = true. Failed to compile":  
    * https://stackoverflow.com/questions/62663451/treating-warnings-as-errors-because-process-env-ci-true-failed-to-compile
   */