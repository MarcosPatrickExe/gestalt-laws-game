import React from 'react';
import './styles/CanvasStyle.css';

//AQUI EU TENTEI FAZER UM CANVAS NA MÃO (sabendo que existe biblioteca para isso). O QUE HOUVE FOI QUE SE O CANVAS FOR UM COMPONENTE DO TIPO 'CLASS' ELE NÃO PODE RECEBER OS NOVOS PROPS ENVIADOS POR "ShowGrid". CONTUDO, SE ELE FOR DO TIPO 'FUNCTION' SEU ESTADO NAO PODERÁ SER ALTERADO. ISSO SO SERA POSSIVEL COM AS FUNCOES QUE POSSUEM ESTADO COM REACT HOOKS
/*
class Canvas extends Component{
  constructor(props) {
    super(props);

    this.state = {
        canvasAlreadyCreated: false,
        gridOn: props.grid,
        context: null,
        canvas: null
    }

    alert("executando construtor do Canvas "+this.state.gridOn);
  }
*/
 
class Canvas extends React.Component{
   //alert("largura da janela: "+window.innerWidth+"/ Altura da janela: "+window.innerHeight);
  //1304x697 = 1,870875179340029 (proporção da janela)
  
  componentDidMount(){
      if(this.props.grid){ 
            this.desenharGrid();
      }
  }

  desenharGrid(){
      let ctx = this.refs.canvas.getContext('2d');//passando o contexto para a criação das linhas

     // let largura = window.innerWidth*0.9501533742331288;
     // let altura = largura / 1.778990450204638;
     // let distHoriz =  (window.innerWidth - largura)/2;//pegando distância do canvas às bordas esqueda e direita da janela
     // let distVerti = (window.innerHeight - altura)/2;//pegando distância do canvas às bordas de cima e baxo da janela

      for(let X=0; X < 1300; X+=100){
          for(let Y=0; Y < 697; Y+=100){
            let coordenada = document.createElement("p");
            coordenada.classList.add("coordenadas");

            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "red";
            ctx.moveTo(X, Y);
            ctx.lineTo(X+100, Y);
            ctx.stroke();

            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "red";
            ctx.moveTo(X, Y);
            ctx.lineTo(X, Y+100);
            ctx.stroke();

            coordenada.style = "position: absolute; "
                              + "color: white;"
                              + "font-size: 9px; "
                              + "left: "+(X)+"px; " 
                              + "top: "+Y+"px; "
                              + "z-index: 100; ";

            coordenada.appendChild( document.createTextNode("X:"+X+" / Y:"+Y+" "));
            document.body.appendChild(coordenada);
        }
      }
  }

  apagarGrid(){

    let altura = window.innerHeight;
    let largura = altura * 1.778990450204638;

    let ctx = this.refs.canvas.getContext('2d');
    ctx.clearRect(0, 0, largura, altura);
    document.body.removeChild(document.getElementsByClassName("coordenadas"));
  }

  render(){
      //proporção da imagem original: 1,777675276752768
      //let larguraPadrao = 0.9501533742331288;//sempre a largura da imagem será 95% da janela do browser
  
      let altura = window.innerHeight;
      let largura = altura * 1.778990450204638;
      
      let reajustarFundo = require("./funcoesGerais.js");

      return(
          <div>
                <div style={reajustarFundo()}>

                    <canvas ref="canvas" width={largura} height={altura} />
                    {this.props.children}
                    
                </div>
          </div>
      );
    }
}
 

export default Canvas;