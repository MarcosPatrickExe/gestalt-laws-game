import React, { Component } from 'react';
import MoinhoFundo from '../images/imagens_jogo_moinho/moinho_versao_definitiva.png';
import '../styles/MoinhoStyle.css';
import TransitionEffects from '../transitionEffects.js';
import Personagem from './Personagem';

/* 
import {ReactComponent as EngRightTop} from '../images/Engrenagens/engrenagem1.svg';
import {ReactComponent as EngRightMiddle} from '../images/Engrenagens/engrenagem2.svg';
import {ReactComponent as EngRightBottom} from '../images/Engrenagens/engrenagem3.svg';
import {ReactComponent as EngLeftTop} from '../images/Engrenagens/engrenagem4.svg';
import {ReactComponent as EngLeftMiddle} from '../images/Engrenagens/engrenagem5.svg';
import {ReactComponent as EngLeftBottom} from '../images/Engrenagens/engrenagem6.svg';
*/

//import {ReactComponent as EngLeftTop} from '../images/moinho/Engrenagens/eixoCirculo.svg';

class Moinho extends Component{

  constructor(props){
    super(props);

    this.ctxMain = props.contextoMain;
    this.ctxMain.pararContador=true;
    this.styleRoot = document.querySelector(':root');//Esse objeto recebe e retorna as variáveis da classe 'root' presente no arquivo de estilos correspondente à esse arquivo

    this.state = {
        eventosAplicados: false,
        distsXY: {top: 0, left: 0},
        estadoPersonagem: "apresentando",

        engrenagens: {
              engLeftCircle:  {top: 18+"%", left: 4+"%"}, //left top
              engLeftTriangle: {top: 45+"%", left: 0.3+"%"}, //left middle
              engLeftTriangle2:  {top: 71.6+"%", left: 4+"%"}, //left bottom

              engRightCircle:  {top: 18+"%", left: 79+"%"}, //right top
              engRightDiamond:  {top: 45+"%", left: 83.6+"%"}, //right middle
              engRightDiamond2:  {top: 71.6+"%", left: 78+"%"}  //right bottom
        },
        
        encaixes: {
              encaiCirculo: {top: 72+"%", left: 53.7+"%"},//circ inferior direito
              encaiQuadrado: {top: 81+"%", left: 27+"%"},//quad inferior esquerdo
              encaiTriangulo: {top: 66.7+"%", left: 39+"%"},//trian baixo

              encaiCirculo2: {top: 24.0+"%", left: 63.7+"%"},//circ superior direito
              encaiQuadrado2: {top: 49+"%", left: 60+"%"},//quad mediano direito
              encaiTriangulo2: {top: 11+"%", left: 51+"%"}//trian topo
        }
    }
  }
 

  //---------------------------------------------------------------------------------------------
  calcPorcentagem=(coscLeft, coscTop)=>{//calcula a porcentagem a partir da posicao do elemento
      coscLeft = coscLeft.replace('px','');
      coscTop = coscTop.replace('px','');

      let left = parseFloat(coscLeft);
      let top = parseFloat(coscTop);

     // alert("Left: "+(left/window.innerWidth).toFixed(4)+"// top: "+(top/window.innerHeight).toFixed(2));
  }
  //-----------------------------------------------------------------------------------------------
  



  //---------------------------------------------------------------------------------------
  arrastar=(event)=>{
      //event.dataTransfer.setData("text/plain", event.target.id); 
      let X = (event.clientX - event.target.offsetLeft);
      let Y = (event.clientY - event.target.offsetTop);

      this.setState({distsXY: {top: Y, left: X}});
  }
  //---------------------------------------------------------------------------------------


  //---------------------------------------------------------------------------------------
  arrastando=(event)=>{
     // event.preventDefault();
  }

  //---------------------------------------------------------------------------------------
  arrastou =(event)=>{
      let newLeft = (event.clientX - this.state.distsXY.left);
      let newTop = (event.clientY - this.state.distsXY.top);
      
     /* console.log("id: "+event.currentTarget.id);
      console.log("id: "+event.target.id);
      console.log("id: "+event.target.getAttribute('id')); */

      //console.log("id: "+event.id); //Nao funciona
      //console.log("id: "+event.dataTransfer.getData("text/plain")); //nao funciona
      //console.dir(JSON.stringify(this.state, null, 4));

      let nLeft = ""+newLeft+"px";
      let nTop = ""+newTop+"px";
    

      switch(event.target.getAttribute('id')){
        
        ///-------------ENGRENAGENS DA ESQUERDA-----------------------------------------
            case 'engLeftCircle':
                  this.setState({
                     engrenagens: {
                           ...this.state.engrenagens,
                           engLeftCircle:  {top: nTop, left: nLeft}
                       }
                  });

                  //this.calcPorcentagem(nLeft, nTop);
            break;


            case 'engLeftTriangle':
                  this.setState({
                      engrenagens: {
                        ...this.state.engrenagens,
                         engLeftTriangle:  {top: nTop, left: nLeft}
                      }
                  });
                  //this.calcPorcentagem(nLeft, nTop);
            break;
                  

            case 'engLeftTriangle2':
                  this.setState({
                      engrenagens: {
                        ...this.state.engrenagens,
                         engLeftTriangle2: {top: nTop, left: nLeft}
                      }
                  });
                  //this.calcPorcentagem(nLeft, nTop);
            break;
        ///-----------------------------------------------------
      

            
             case 'engRightCircle':
                  this.setState({
                        engrenagens: {
                          ...this.state.engrenagens,
                          engRightCircle:  {top: nTop, left: nLeft}
                        }
                  });
                  //this.calcPorcentagem(nLeft, nTop);
             break;


             case 'engRightDiamond':
                  this.setState({
                      engrenagens: {
                        ...this.state.engrenagens,
                        engRightDiamond:  { top: nTop, left: nLeft}
                      }
                  });
                  //this.calcPorcentagem(nLeft, nTop);
             break;
                  

             case 'engRightDiamond2':
                  this.setState({
                      engrenagens: {
                        ...this.state.engrenagens,
                        engRightDiamond2:  {top: nTop, left: nLeft}
                      }
                  });
                  //this.calcPorcentagem(nLeft, nTop);
             break;

             default: 
                  alert("nada foi selecionado"); break;
      }
      

      analisarEncaixe(document.getElementById(event.target.getAttribute('id')), this);
      gameIsDone(this);//verifica se o jogo está concluído
      event.preventDefault();
  }


  //--------------------------------------------------------------------------------------------
  render(){
      const reajustarTela = require("../funcoesGerais.js");

      let engrenagensEncaixes = [
          //RIGHT GEARS
          <TransitionEffects effectName="fadeIn"/>,
          ,
          <Personagem ctxMain={this.ctxMain}   telaAtual="moinho"  estadoPersonagem={this.state.estadoPersonagem}/>
          ,
          <div id="engLeftCircle" style={this.state.engrenagens.engLeftCircle} className="engrenagem" draggable="true"> 
          </div> 
          ,
          <div id="engLeftTriangle" style={this.state.engrenagens.engLeftTriangle} className="engrenagem" draggable="true">
          </div>
          ,
          <div id="engLeftTriangle2" style={this.state.engrenagens.engLeftTriangle2} className="engrenagem" draggable="true">            
          </div>
          ,
          //LEFT GEARS
          <div id="engRightCircle" style={this.state.engrenagens.engRightCircle} className="engrenagem" draggable="true">        
          </div>
          ,
          <div id="engRightDiamond" style={this.state.engrenagens.engRightDiamond} className="engrenagem" draggable="true"> 
          </div>
          ,
          <div id="engRightDiamond2" style={this.state.engrenagens.engRightDiamond2} className="engrenagem" draggable="true">  
          </div>
          ,
          <img draggable="false" src={MoinhoFundo}  style={reajustarTela()}  alt="Moinho visao interna" />
          ,

          //CAIXA DE PARABÉNS QUE SERÁ EXIBIDA AO FIM DO JOGO!
          <div id="avisoParabensJogoMoinho" class="avisoParabensJogoMoinhoDesativado"> 
                    <h2>Parabéns!!! <br /> 
                    Você completou <br /> 
                    o jogo em: <br />

                       {this.ctxMain.tempoGeral.tempoMoinho &&(this.ctxMain.tempoGeral.tempoMoinho[0])}min 
                     e {this.ctxMain.tempoGeral.tempoMoinho &&(this.ctxMain.tempoGeral.tempoMoinho[1])}s
                    
                    <br />
                    
                    <span style={{fontSize: "60%", top: "40", textAlign: "right", letterSpacing: "-10%"}}>
                    Clique no botão <br />
                    superior direito <br />
                    para sair </span>
                    </h2>
            </div>
          ,

          //ENCAIXE PARA CADA ENGRENAGEM:
          <div id="encaiCirculo" style={this.state.encaixes.encaiCirculo} className="encaixe">  
          </div>
          ,
          <div id="encaiQuadrado" style={this.state.encaixes.encaiQuadrado} className="encaixe" >  
          </div>
          ,
          <div id="encaiTriangulo" style={this.state.encaixes.encaiTriangulo} className="encaixe" >  
          </div>
          ,
          <div id="encaiCirculo2" style={this.state.encaixes.encaiCirculo2} className="encaixe" >  
          </div>
          ,
          <div id="encaiQuadrado2" style={this.state.encaixes.encaiQuadrado2} className="encaixe" >  
          </div>
          ,
          <div id="encaiTriangulo2" style={this.state.encaixes.encaiTriangulo2} className="encaixe" >  
          </div>
        ]


       return (
         <div>
               {engrenagensEncaixes}  
         </div>
      );
  }
  //--------------------------------------------------------------------------------------------




  //--------------------------------------------------------------------------------------------
  componentDidMount(){
      //alert(JSON.stringify(this.state));
  
        if(!this.state.eventosAplicados){
              let elementos = document.getElementsByClassName('engrenagem');
  
              Object.values(elementos).forEach( (eng) =>{
                    if(eng.className === "engrenagem"){
                    
                    eng.addEventListener("dragstart", this.arrastar);
                    eng.addEventListener("drag", this.arrastando);
                    eng.addEventListener("dragend", this.arrastou);
  
                    eng.girar = false;
                    }
              });
  
              this.setState({eventosAplicados: true});
        }
    }
  //--------------------------------------------------------------------------------------------



  //--------------------------------------------------------------------------------------------
  componentWillUnmount(){//função executada depois que o componente não é mais renderizado

      if(this.state.inicializar==false){
           Object.values(document.getElementsByTagName("div")).forEach( (objeto)=>{
                   
               if(objeto.getAttribute("className") !== "centroMedalhao"){
                       objeto.removeEventListener("dragstart", this.dragstart);
                       objeto.removeEventListener("drag", this.drag);
                       objeto.removeEventListener("dragend", this.dragend);
                       //obejeto.addEventListener("dragstart", dragstart);

                       objeto.cair = true;
               }
          });
      }
  }
  //--------------------------------------------------------------------------------------------
}


function vibrarEngrenagem( topAtual, leftAtual, topOriginal, leftOriginal, engre, classeAnimacao){

      //decrementando em 5% a distância Y do encaixe ao topo da janela para que a engrenagem 'vibre' acima e no centro do encaixe
      topAtual = parseFloat(topAtual.replace("%",''))-10;    
      topAtual += '%';

      //decrementando em 5% a distância X do encaixe à esqueda da janela para que a engrenagem 'vibre' acima e no centro do encaixe
      leftAtual = parseFloat(leftAtual.replace("%",''))-5;
      leftAtual += '%';

      this.styleRoot.style.setProperty('--topAtual',`${topAtual}`);//inserindo a posicao (em top) atual da engrenagem
      this.styleRoot.style.setProperty('--leftAtual',`${leftAtual}`);//inserindo a posicao (em left) atual da engrenagem (ou seja, acima de um encaixe que não é compatível com a sua forma)
      this.styleRoot.style.setProperty('--topOriginal',`${topOriginal}`);//inserindo a posicao (em top) inicial da engrenagem
      this.styleRoot.style.setProperty('--leftOriginal',`${leftOriginal}`);//inserindo a posicao (em left) inicial da engrenagem

      engre.classList.add(classeAnimacao);//adicionando a classe que irá fazer a vibração da engrenagem
      engre.girar = false;//engrenagem não será girada pois nao foi colocada no encaixe correto
}

//------------------------------------------------------------------------------------------
function analisarEncaixe(engrenagem, esse){//recebendo objeto 'engrenagem' que representa uma engrenagem que foi agarrada e variável 'this' renomeda de 'esse'
      let encaixes  = document.getElementsByClassName("encaixe");

       /* 
       encaixes[0] corresponde à encaiCirculo  (inferior)
       encaixes[1] corresponde à encaiQuadrado  (inferior esquerdo)
       encaixes[2] corresponde à encaiTriangulo  (inferior)
       encaixes[3] corresponde à encaiCirculo2    (superior)
       encaixes[4] corresponde à encaiQuadrado2    (altura mediana e à direita)
       encaixes[5] corresponde à encaiTriangulo2     (superior)
      */

       Object.values(document.getElementsByClassName("engrenagem"))//RETIRANDO AS CLASES QUE PERMITEM A ANIMAÇÃO DA ENGRENAGEM QUANDO A MESMA É POSICIONADA NO EIXO/ENCAIXE ERRADO
            .forEach( function(engren) {
                  engren.classList.remove("leftCircleOriginalPlace");
                  engren.classList.remove("leftTrinagleOriginalPlace");
                  engren.classList.remove("leftTriangle2OriginalPlace");
                  engren.classList.remove("rightCircleOriginalPlace");
                  engren.classList.remove("rightDiamondOriginalPlace");
                  engren.classList.remove("rightDiamond2OriginalPlace");
       });
       


       switch(engrenagem.getAttribute('id')){

            /* AJUSTANDO ENGRENAGENS NOS SEUS RESPECTIVOS ENCAIXES, CASO ELES SE COLIDEM */
           case 'engLeftCircle':
                        if( isCollide(engrenagem, encaixes[0]) ){ //ENCAIXE CIRCULAR INFERIOR
                              //engrenagens.classList.remove("encaixes");
                              //engrenagem.classList.add(""+encaixes[0].getAttribute('id'));
                              esse.setState({  engrenagens: { ...esse.state.engrenagens, engLeftCircle:  {top: 62.4+"%", left: 48.4+"%"}} })
                              engrenagem.girar = true;

                        }else if( isCollide(engrenagem, encaixes[3]) ){ //EXCAIXE CIRCULAR SUPERIOR
                              esse.setState({  engrenagens: { ...esse.state.engrenagens, engLeftCircle:  {top: 14.3+"%", left: 58.3+"%"}} })
                              engrenagem.girar = true;

                              //alert("executando eng left");

                        //VERIFICANDO COLISÃO DA ENGREAAGEM COM ENCAIXES INCOMPATÍVEIS COM ELA:
                        }else if( isCollide(engrenagem, encaixes[1]) ){//encaixe em forma de losango do lado esquerdo
                              vibrarEngrenagem.call(esse, encaixes[1].style.top, encaixes[1].style.left, '18%', '4%', engrenagem, "leftCircleOriginalPlace");
                              esse.setState({ engrenagens: { ...esse.state.engrenagens, engLeftCircle: {top: '18%', left: '4%'}} });//atribuindo valores nulos para que a nova classe atribuída à engrenagem seja executada
                              //"esse" é a mesma coisa que o 'this'

                        }else if( isCollide(engrenagem, encaixes[2]) ){
                              vibrarEngrenagem.call(esse, encaixes[2].style.top, encaixes[2].style.left, '18%', '4%', engrenagem, "leftCircleOriginalPlace");
                              esse.setState({ engrenagens: { ...esse.state.engrenagens, engLeftCircle: {top: '18%', left: '4%'}} });//atribuindo valores nulos para que a nova classe atribuída à engrenagem seja executada

                        }else if( isCollide(engrenagem, encaixes[4]) ){ 
                              vibrarEngrenagem.call(esse, encaixes[4].style.top, encaixes[4].style.left, '18%', '4%', engrenagem, "leftCircleOriginalPlace");
                              esse.setState({ engrenagens: { ...esse.state.engrenagens, engLeftCircle: {top: '18%', left: '4%'}} });//atribuindo valores nulos para que a nova classe atribuída à engrenagem seja executada

                        } else if( isCollide(engrenagem, encaixes[5]) ){//AO TENTAR ALOCAR AS ENGREANAGENS AOS ENCAIXES NAO PERMITIDOS PARA ELA, A MESMA RECEBE A CLASSE ".leftCircleOriginalPlace", VOLTANDO PARA O SEU LOCAL ORIGINAL
                              vibrarEngrenagem.call(esse, encaixes[5].style.top, encaixes[5].style.left, '18%', '4%', engrenagem, "leftCircleOriginalPlace");
                              esse.setState({ engrenagens: { ...esse.state.engrenagens, engLeftCircle: {top: '18%', left: '4%'}} });//atribuindo valores nulos para que a nova classe atribuída à engrenagem seja executada
                        }
                         /*alert(`left: ${encaixes[5].style.left} /top: ${encaixes[5].style.top}`);

                        setTimeout(() => {
                                esse.setState({ engrenagens: { ...esse.state.engrenagens, engLeftCircle: {top: null, left: null}} });//atribuindo valores nulos para que a nova classe atribuída à engrenagem seja executada
                        }, 1000);
                        */
           break;

          
           case 'engLeftTriangle':
              if( isCollide(engrenagem, encaixes[2]) ){  //ENCAIXE TRIANGULAR INFERIOR
                    esse.setState({  engrenagens: { ...esse.state.engrenagens, engLeftTriangle:  {top: 56.8+"%", left: 33.7+"%"}} })
                    engrenagem.girar = true;

              }else if( isCollide(engrenagem, encaixes[5]) ){   //ENCAIXE TRIANGULAR SUPERIOR
                    esse.setState({  engrenagens: { ...esse.state.engrenagens, engLeftTriangle:  {top: 1+"%", left: 45.7+"%"}} })
                    engrenagem.girar = true;


              }else if( isCollide(engrenagem, encaixes[0]) ){
                    vibrarEngrenagem.call(esse, encaixes[0].style.top, encaixes[0].style.left, '45%', '0.3%', engrenagem, "leftTrinagleOriginalPlace");
                    esse.setState({ engrenagens: { ...esse.state.engrenagens, engLeftTriangle: {top: '45%', left: '0.3%'}} });//atribuindo valores nulos para que a nova classe atribuída à engrenagem seja executada

              } else if( isCollide(engrenagem, encaixes[1]) ){
                    vibrarEngrenagem.call(esse, encaixes[1].style.top, encaixes[1].style.left, '45%', '0.3%', engrenagem, "leftTrinagleOriginalPlace");
                    esse.setState({ engrenagens: { ...esse.state.engrenagens, engLeftTriangle: {top: '45%', left: '0.3%'}} });

              } else if( isCollide(engrenagem, encaixes[3]) ){
                    vibrarEngrenagem.call(esse, encaixes[3].style.top, encaixes[3].style.left, '45%', '0.3%', engrenagem, "leftTrinagleOriginalPlace");
                    esse.setState({ engrenagens: { ...esse.state.engrenagens, engLeftTriangle: {top: '45%', left: '0.3%'}} });

              } else if( isCollide(engrenagem, encaixes[4]) ){
                    vibrarEngrenagem.call(esse, encaixes[4].style.top, encaixes[4].style.left, '45%', '0.3%', engrenagem, "leftTrinagleOriginalPlace");
                    esse.setState({ engrenagens: { ...esse.state.engrenagens, engLeftTriangle: {top: '45%', left: '0.3%'}} });
                    // esse.setState({ engrenagens: { ...esse.state.engrenagens, engLeftTriangle: {top: null, left: null}} });
              }
           break;


           case 'engLeftTriangle2':
                if( isCollide(engrenagem, encaixes[2]) ){ //ENCAIXE TRIANGULAR INFERIOR
                     esse.setState({  engrenagens: { ...esse.state.engrenagens, engLeftTriangle2:  {top: 56.8+"%", left: 33.7+"%"}} })
                     engrenagem.girar = true;

                }else if( isCollide(engrenagem, encaixes[5]) ){ //ENCAIXE TRIANGULAR SUPERIOR
                     esse.setState({  engrenagens: { ...esse.state.engrenagens, engLeftTriangle2:  {top: 1+"%", left: 45.7+"%"}} })
                     engrenagem.girar = true;


                }else if( isCollide(engrenagem, encaixes[0]) ){
                      vibrarEngrenagem.call(esse, encaixes[0].style.top, encaixes[0].style.left, '71.6%', '4%', engrenagem, "leftTriangle2OriginalPlace");
                      esse.setState({ engrenagens: { ...esse.state.engrenagens, engLeftTriangle2: {top: '71.6%', left: '4%'}} });

                } else if( isCollide(engrenagem, encaixes[1]) ){
                      vibrarEngrenagem.call(esse, encaixes[1].style.top, encaixes[1].style.left, '71.6%', '4%', engrenagem, "leftTriangle2OriginalPlace");
                      esse.setState({ engrenagens: { ...esse.state.engrenagens, engLeftTriangle2: {top: '71.6%', left: '4%'}} });
                      
                } else if ( isCollide(engrenagem, encaixes[3]) ){
                      vibrarEngrenagem.call(esse, encaixes[3].style.top, encaixes[3].style.left, '71.6%', '4%', engrenagem, "leftTriangle2OriginalPlace");
                      esse.setState({ engrenagens: { ...esse.state.engrenagens, engLeftTriangle2: {top: '71.6%', left: '4%'}} });

                } else if (isCollide(engrenagem, encaixes[4]) ){
                      vibrarEngrenagem.call(esse, encaixes[4].style.top, encaixes[4].style.left, '71.6%', '4%', engrenagem, "leftTriangle2OriginalPlace");
                      esse.setState({ engrenagens: { ...esse.state.engrenagens, engLeftTriangle2: {top: '71.6%', left: '4%'}} });
                      // esse.setState({ engrenagens: { ...esse.state.engrenagens, engLeftTriangle2: {top: null, left: null}} });
                }
           break;


           /* AJUSTANDO ENGRENAGENS NOS SEUS RESPECTIVOS ENCAIXES, CASO ELES SE COLIDEM */
           case 'engRightCircle':
              if( isCollide(engrenagem, encaixes[0]) ){   //EXCAIXE CIRCULAR INFERIOR
                    esse.setState({  engrenagens: { ...esse.state.engrenagens, engRightCircle: {top: 62.4+"%", left: 48.4+"%"}} })
                    engrenagem.girar = true;

              }else if( isCollide(engrenagem, encaixes[3]) ){  //EXCAIXE CIRCULAR SUPERIOR
                    esse.setState({  engrenagens: { ...esse.state.engrenagens, engRightCircle:  {top: 14.3+"%", left: 58.3+"%"}} })
                    engrenagem.girar = true;


              }else if (isCollide(engrenagem, encaixes[1]) ){
                    vibrarEngrenagem.call(esse, encaixes[1].style.top, encaixes[1].style.left, '18%', '79%', engrenagem, "rightCircleOriginalPlace");
                    esse.setState({ engrenagens: { ...esse.state.engrenagens, engRightCircle: {top: '18%', left: '79%'}} });

              }else if (isCollide(engrenagem, encaixes[2]) ){
                   vibrarEngrenagem.call(esse, encaixes[2].style.top, encaixes[2].style.left, '18%', '79%', engrenagem, "rightCircleOriginalPlace");
                   esse.setState({ engrenagens: { ...esse.state.engrenagens, engRightCircle: {top: '18%', left: '79%'}} });

              }else if (isCollide(engrenagem, encaixes[4]) ){
                   vibrarEngrenagem.call(esse, encaixes[4].style.top, encaixes[4].style.left, '18%', '79%', engrenagem, "rightCircleOriginalPlace");
                   esse.setState({ engrenagens: { ...esse.state.engrenagens, engRightCircle: {top: '18%', left: '79%'}} });  

              }else if (isCollide(engrenagem, encaixes[5]) ){
                   vibrarEngrenagem.call(esse, encaixes[5].style.top, encaixes[5].style.left, '18%', '79%', engrenagem, "rightCircleOriginalPlace");
                   esse.setState({ engrenagens: { ...esse.state.engrenagens, engRightCircle: {top: '18%', left: '79%'}} });
                   // esse.setState({ engrenagens: { ...esse.state.engrenagens, engRightCircle: {top: null, left: null}} });
              }
           break;



           case 'engRightDiamond':
              if( isCollide(engrenagem, encaixes[1]) ){  //EXCAIXE DE LOSANGO À ESQUERDA
                    esse.setState({  engrenagens: { ...esse.state.engrenagens, engRightDiamond:  {top: 71.5+"%", left: 21+"%"}} })
                    engrenagem.girar = true;

              }else if( isCollide(engrenagem, encaixes[4]) ){ //EXCAIXE DE LOSANGO À DIREITA
                    esse.setState({  engrenagens: { ...esse.state.engrenagens, engRightDiamond:  {top: 40+"%", left: 54+"%"}} })
                    engrenagem.girar = true;


              }else if (isCollide(engrenagem, encaixes[0]) ){
                    vibrarEngrenagem.call(esse, encaixes[0].style.top, encaixes[0].style.left, '45%', '83.6%', engrenagem, "rightDiamondOriginalPlace");
                    esse.setState({ engrenagens: { ...esse.state.engrenagens, engRightDiamond: {top: '45%', left: '83.6%'}} });

              }else if (isCollide(engrenagem, encaixes[2]) ){
                    vibrarEngrenagem.call(esse, encaixes[2].style.top, encaixes[2].style.left, '45%', '83.6%', engrenagem, "rightDiamondOriginalPlace");
                    esse.setState({ engrenagens: { ...esse.state.engrenagens, engRightDiamond: {top: '45%', left: '83.6%'}} });

              }else if (isCollide(engrenagem, encaixes[3]) ){
                    vibrarEngrenagem.call(esse, encaixes[3].style.top, encaixes[3].style.left, '45%', '83.6%', engrenagem, "rightDiamondOriginalPlace");
                    esse.setState({ engrenagens: { ...esse.state.engrenagens, engRightDiamond: {top: '45%', left: '83.6%'}} });

              }else if (isCollide(engrenagem, encaixes[5]) ){
                    vibrarEngrenagem.call(esse, encaixes[5].style.top, encaixes[5].style.left, '45%', '83.6%', engrenagem, "rightDiamondOriginalPlace");
                    esse.setState({ engrenagens: { ...esse.state.engrenagens, engRightDiamond: {top: '45%', left: '83.6%'}} });
                    //esse.setState({ engrenagens: { ...esse.state.engrenagens, engRightDiamond: {top: null, left: null}} });
              }
           break;


           case 'engRightDiamond2':
              if( isCollide(engrenagem, encaixes[1]) ){  //EXCAIXE DE LOSANGO À ESQUERDA
                    esse.setState({  engrenagens: { ...esse.state.engrenagens, engRightDiamond2:  {top: 71.5+"%", left: 21+"%"}} })
                    engrenagem.girar = true;

              }else if( isCollide(engrenagem, encaixes[4]) ){  //EXCAIXE DE LOSANGO À DIREITA
                    esse.setState({  engrenagens: { ...esse.state.engrenagens, engRightDiamond2:  {top: 40+"%", left: 54+"%"}} })
                    engrenagem.girar = true;



              }else if( isCollide(engrenagem, encaixes[0]) ){
                   vibrarEngrenagem.call(esse, encaixes[0].style.top, encaixes[0].style.left, '71.6%', '78%', engrenagem, "rightDiamond2OriginalPlace");
                   esse.setState({ engrenagens: { ...esse.state.engrenagens, engRightDiamond2: {top: '71.6%', left: '78%'}} });

              }else if(isCollide(engrenagem, encaixes[2]) ){
                   vibrarEngrenagem.call(esse, encaixes[2].style.top, encaixes[2].style.left, '71.6%', '78%', engrenagem, "rightDiamond2OriginalPlace");   
                   esse.setState({ engrenagens: { ...esse.state.engrenagens, engRightDiamond2: {top: '71.6%', left: '78%'}} });

              }else if(isCollide(engrenagem, encaixes[3]) ){
                  vibrarEngrenagem.call(esse, encaixes[3].style.top, encaixes[3].style.left, '71.6%', '78%', engrenagem, "rightDiamond2OriginalPlace");
                  esse.setState({ engrenagens: { ...esse.state.engrenagens, engRightDiamond2: {top: '71.6%', left: '78%'}} });

              }else if(isCollide(engrenagem, encaixes[5]) ){
                  vibrarEngrenagem.call(esse, encaixes[5].style.top, encaixes[5].style.left, '71.6%', '78%', engrenagem, "rightDiamond2OriginalPlace");
                  esse.setState({ engrenagens: { ...esse.state.engrenagens, engRightDiamond2: {top: '71.6%', left: '78%'}} }); 
                  //esse.setState({  engrenagens: { ...esse.state.engrenagens, engRightDiamond2: {top: null, left: null}} });
              }
           break;
  }
}
  //---------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------
function isCollide(engrenagem, encaixe){
      let aRect = engrenagem.getBoundingClientRect();
      let bRect = encaixe.getBoundingClientRect();
  
      return !(
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))
     );
}
//---------------------------------------------------------------------------------------


function gameIsDone(este){//o 'este' faz o mesmo papel da palavra-chave 'this' aqui nessa função
      let engs = Object
          .values(document.getElementsByClassName("engrenagem"))
                 .filter( (eng) => eng.girar == true );
      /* 
          encaixes[0] corresponde à encaiCirculo  (inferior)
          encaixes[1] corresponde à encaiQuadrado  (inferior esquerdo)
          encaixes[2] corresponde à encaiTriangulo  (inferior)
          encaixes[3] corresponde à encaiCirculo2    (superior)
          encaixes[4] corresponde à encaiQuadrado2    (superior direita)
          encaixes[5] corresponde à encaiTriangulo2     (superior)

          engs[0] corresponde à engLeftCircle - circulo do lado esquerdo
          engs[1] corresponde à engLeftTriangle - triangulo superior do lado esquerdo
          engs[2] corresponde à engLeftTriangle2 - triangulo inferior do lado esquerdo
          engs[3] corresponde à engRightCircle - circulo do lado direito
          engs[4] corresponde à engRightDiamond - losango superior do lado direito
          engs[5] corresponde à engRightDiamond2 - losango inferior do lado direito
    */

      if(engs.length === 6){
          let encaixes = Object.values(document.getElementsByClassName('encaixe'));

          //---------ADICIONANDO AS CLASSES QUE FARÃO A ANIMAÇÃO DAS ENGRENAGENS E DOS ENCAIXES
          engs[0].classList.add("rodarSentidoHorario");
          engs[3].classList.add("rodarSentidoHorario");

          engs[1].classList.add("rodarSentidoAnteHorario");
          engs[2].classList.add("rodarSentidoAnteHorario");
 
          encaixes[2].classList.add("rodarSentidoAnteHorario");
          encaixes[5].classList.add("rodarSentidoAnteHorario");

          encaixes[1].classList.add("rodarSentidoHorario");
          encaixes[4].classList.add("rodarSentidoAnteHorario");


          if(isCollide(engs[4], encaixes[1]) ){/*Se a engrenagem for colocarda no encaixe na forma de losango da parte inferior, ela gira pra direita */
                engs[4].classList.add("rodarSentidoHorario");
                
          }else if(isCollide(engs[4], encaixes[4])){
                engs[4].classList.add("rodarSentidoAnteHorario");
          }     /*Se a engrenagem for colocarda no encaixe na forma de losango na parte superior, ela gira pra esquerda */

      
          if(isCollide(engs[5], encaixes[1]) ){/*Se a engrenagem for colocarda no encaixe de losango na parte inferior, ela gira pra direita */
                engs[5].classList.add("rodarSentidoHorario");
                
          }else if(isCollide(engs[5], encaixes[4])){
                engs[5].classList.add("rodarSentidoAnteHorario");/*Se a engrenagem for colocarda no encaixe de losango na parte superior, ela gira pra esquerda */
          }
          //------------------------


         // let mensagemFinal2 = document.getElementById('avisoParabensJogoMoinho');
         // mensagemFinal2.classList.add("avisoParabensJogoMoinhoAtivado");
         este.setState({ estadoPersonagem: "parabenizando"}); 
         este.ctxMain.tempoGeral.tempoMoinhoReal = true;
         global.DadosJogador.setTempoMoinho(este.ctxMain.tempoGeral.tempoMoinho);
        
         //este.ctxMain.pararContador = true;

         este.setState({moinhoCompleto: !(este.state.moinhoCompleto)});
      }
      
}

export default Moinho;



   /*
       var r = document.querySelector(':root');
      function myFunction_get() {
            var rs = getComputedStyle(r);
            alert("The value of --blue is: " + rs.getPropertyValue('--blue'));
      }
      function myFunction_set() { 
            r.style.setProperty('--blue', 'lightblue');
      }*/