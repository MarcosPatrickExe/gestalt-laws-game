import React from 'react';
import fundoSelecao from '../images/imagens_tela_selecao/tela_selecao_sem_helice.png';
import '../styles/SelecaoStyle.css';
import TransitionEffects from '../transitionEffects.js';
import BarraProgresso from "./barraProgresso.js";
import Personagem from './Personagem.js';
//import {ReactComponent as BotaoCoroa} from '../images/telaSelecao/coroa.svg'; //não funciona
//import {ReactComponent as Placa1} from "..componentesSVG/placa1.svg"; //não funciona
//import Placa1 from '..images/telaSelecao/placa1.svg';  //não funciona
//const placa = require("../images/telaSelecao/placa1.svg"); //não funciona
//import Placa from '..images/telaSelecao/placaA.png';

//import {ReactComponent as Laboratorio} from '..images/telaSelecao/placa2.svg';
//import {ReactComponent as Moinho} from '..images/telaSelecao/placa3.svg';
//import {ReactComponent as Poste} from '..images/telaSelecao/poste.svg';


function ajustarOpacidadeBotaoCastelo(){
      let progresso;//ESSA VARIÁVEL DEFINIRÁ O GRAU DE OPACIDADE DO BOTÃO DE ACESSO AO RANKING
      let taxaProgresso; //ESSA VARIÁVEL DEFINIRÁ A TAXA DE PROGRESSO NA BARRA AMARELA ABAIXO DO BOTÃO DE ACESSO AO RANKING

      let vector =[];
      vector[0] =  this.props.ctxMain.tempoGeral.tempoTorreIgrejaReal ? true : false ;
      vector[1] =  this.props.ctxMain.tempoGeral.tempoLaboratorioReal ? true : false ;
      vector[2] =  this.props.ctxMain.tempoGeral.tempoMoinhoReal ? true : false ;

      let numeroJogosConcluidos = vector.filter( (jogoConcluido) => jogoConcluido===true );   

      if((numeroJogosConcluidos.length===0) || (numeroJogosConcluidos.length===1) || (numeroJogosConcluidos.length==2)){//SE TODOS OS JOGOS AINDA NÃO FORAM CONCLUÍDOS O BOTÃO DE RANKING FICARÁ TRANSPARENTE
            progresso = 0.6;
            this.acessarRanking = false;
      }else if(numeroJogosConcluidos.length===3){//SE 3 DOS 3 JOGOS FORAM CONCLUÍDOS ENTÃO O BOTÃO "RANKING" FICARÁ COMPLETAMENTE OPACO
            progresso = 1.0;
            this.acessarRanking = true;
      }

      switch(numeroJogosConcluidos.length){
            case 0: taxaProgresso = "1.5%"; break;
            case 1: taxaProgresso= "33.3%"; break;
            case 2: taxaProgresso="76.9%"; break;
            case 3: taxaProgresso="100%"; break;
            default:  console.log("sem progresso"); break;
      }

      //alert("progresso: "+progresso);
      //console.log("opacidade da placa de ranking: "+progresso);
      //acessando a classe 'root' do arquivo 'SelecaoStyle.css' e passando o valor de opacidade de acordo com o progresso do usuário no jogo
      this.taxaProgresso = taxaProgresso;
      document.querySelector(':root').style.setProperty('--transparenciaBotaoRanking', progresso+'');
}



export default class SelecaoGames extends React.Component{

   constructor(props){
      super(props);

      this.acessarRanking=false;
      this.taxaProgresso=0;
     // this.jogosConcluidos=0;

      ajustarOpacidadeBotaoCastelo.call(this);//FUNÇÃO QUE AJUSTA A OPACIDADE DO BOTAO DE ACESSO AO CASTELO/RANKING
      this.ctxMain = props.ctxMain;
      this.ctxMain.sairTelaSelecao = false;
      

      //this.ctxMain.sairTela = false;//desativa o efeito FadeIn da tela
   
      this.state={
          sairTelaSelecao: false,//caso 'false' a tela de selecao recebe o efeito 'fadeOut', caso 'true' recebe o efeito FadeIn
          verRank: false,
          verTorre: false,
          verLab: false,
          verMoi: false,
          verPersonagem: false,//
          estadoPersonagem: "apresentando"
      }
   }


   verRank = ()=>{

      if(this.acessarRanking){
            this.setState({
                  sairTelaSelecao: true, 
                  verRank: true
            });
      }else{
            alert("Você ainda não concluiu todos os jogos. Complete-os e assim você poderá ver a sua posicão no ranking!");
      }
   }

   verTorre =()=>{
      this.setState({
            sairTelaSelecao: true, 
            verTorre: true
      });
   }

   verLab =()=>{ 
      this.setState({
            sairTelaSelecao: true, 
            verLab: true
      });
   }

   verMoi =()=>{
      this.setState({
            sairTelaSelecao: true, 
            verMoi: true
      });
   }

/*
  shouldComponentUpdate(nextProps, nextState){
      if(this.ctxMain.sairTelaSelecao===true){
            return false; //o render() nao sera chamada
      }else{
            return true;//chama a função render()
      } 
      //se 'sairTelaSelecao' for verdadeiro, o render não é executada
  }           
*/
  render(){
      const reajustarTela = require("../funcoesGerais.js");
      const efeito =  this.state.sairTelaSelecao===false ? <TransitionEffects effectName="fadeIn"/> : <TransitionEffects effectName="fadeOut"/>;

      return (
         <div>
            {efeito}
            

           { (this.state.verPersonagem) &&( <Personagem ctxMain={this.ctxMain}  telaAtual="telaSelecao"  estadoPersonagem={this.state.estadoPersonagem}/>  ) }



                  <div id="todoOposte">
                        <div id="" className="placaTorreRelogio" onClick={()=>this.verTorre()}>
                              <h3>Torre do Relógio</h3>
                        </div> 


                        <div id="" className="placaLaboratorio" onClick={ ()=>this.verLab() }>
                              <h3>Laboratório</h3>
                        </div> 

                        <div id="" className="placaMoinho" onClick={ ()=>this.verMoi() }>
                              <h3>Moinho</h3>
                        </div> 

                        <div id="poste" className="poste"> </div>            
                  </div>



                  <div id="botaoRank" onClick={()=>this.verRank()}>
                        <div id="coroaIMG"> </div>

                        <div id="plaquinhaRank" onClick={()=>this.verRank()}>
                             <h3 id="castelo">Castelo</h3>
                        </div>
                  </div>

                 
                 <BarraProgresso taxaProgresso={this.taxaProgresso}/>
            

                 <div className="fundoEscuro"></div>


                  <div className="helice"></div>
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
      );
  }


  componentDidUpdate(){
      setTimeout(() => {//atrasando a renderização da nova tela por 1.5s, para dar tempo de ocorrer todo o efeito 'fadeout' 

            //depois da execução do efeito fadeOut, o render dessa classe 'SelecaoGames' nao será executado
           // console.log("executando componente didUpdate");

            if(this.state.verRank){
                  this.ctxMain.verRanking();
                  this.ctxMain.sairTelaSelecao=true;//habilita a troca da tela de seleção por outra que foi selecionada

            }else if(this.state.verTorre){
                  this.ctxMain.verTorreIgreja();
                  this.ctxMain.sairTelaSelecao=true;

            }else if(this.state.verLab){
                  this.ctxMain.verLaboratorio();
                  this.ctxMain.sairTelaSelecao=true;
                 
            }else if(this.state.verMoi){
                  this.ctxMain.verMoinho();
                  this.ctxMain.sairTelaSelecao=true;
            }

      }, 1500);//componentDidUpdate
   }


   componentDidMount(){//DEPOIS QUE OCORRER A ANIMCAO DA PLACA APARENCENDO O PERSONAGEM SE TORNA VISÍVEL:
      
      if(this.ctxMain.aparecerPersonagemUnicaVez===true){//SE FOR VERDADEIRO O PERSONAGEM É EXIBIDO NA TELA SOMENTE UMA 1 VEZ, MESMO QUE O USUÁRIO SAIA DESSA TELA E ENTRE NOVAMENTE
          
            if(this.state.verPersonagem===false){
                  window.setTimeout( ()=>this.setState({ verPersonagem:true}), 300);
            }

            this.ctxMain.aparecerPersonagemUnicaVez=false;//A PARTIR DAQUI O PERSONAGEM NÃO APARECERÁ MAIS NA TELA DE SELEÇÃO
      }

   }

   componentWillUnmount(){
        // alert("desmontado");
   }

}