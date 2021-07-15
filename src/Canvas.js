import React from 'react';
import './styles/BackgroundStyle.css';

/*
//AQUI EU TENTEI FAZER UM CANVAS NA MÃO (sabendo que existe biblioteca para isso). O QUE HOUVE FOI QUE SE O CANVAS FOR UM COMPONENTE DO TIPO 'CLASS' ELE NÃO PODE RECEBER OS NOVOS PROPS ENVIADOS POR "ShowGrid". CONTUDO, SE ELE FOR DO TIPO 'FUNCTION' SEU ESTADO NAO PODERÁ SER ALTERADO. ISSO SO SERA POSSIVEL COM AS FUNCOES QUE POSSUEM ESTADO COM REACT HOOKS

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

  componentDidMount(){
     let canvasObj = document.getElementById('canvas');
     
     alert("Fazendo montagem. Estado do canvas: "+this.state.canvasAlreadyCreated);
     if(!this.state.canvasAlreadyCreated){
            //let canvasA = document.createElement("canvas");

            canvasObj["width"] = 1200;//(window.innerWidth-20);
            canvasObj["height"] = 600;//(window.innerHeight-20);

            canvasObj.style = "border: 2px solid black;"
                            +"background-color: purple;"
                            +"position: absolute;" 
                            +"padding: 0px;" 
                            +"margin: auto;"
                            +"left: 0;"
                            +"top: 0;"
                            +"right: 0;"
                            +"bottom: 0;"
                            +"display: block;";


            this.setState({//ao alterar o setSate vc chama automaticamente o render()
                canvasAlreadyCreated: true,
                //gridOn: props.grid,
                context: canvasObj.getContext("2d"),
                canvas: canvasObj
            });

            
            //document.body.appendChild(canvasA);
        }


        if(this.state.gridOn){//se o gridIn  estiver ativado o bloco de seleção é lido
            
            let resX = canvasObj.width/50;
            let resY = canvasObj.height/50;
            let ctx = canvasObj.getContext("2d");//passando o contexto para a criação das linhas

            for(let X=resX; X < (canvasObj.width); X+=resX){

                ctx.moveTo(X, 0);
                ctx.lineTo(X, canvasObj.height);
                ctx.stroke();
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#ff0000';
            }

            for(let Y=resY; Y < canvasObj.height; Y+=resY){
                ctx.moveTo(0, Y);
                ctx.lineTo(canvasObj.width, Y);
                ctx.stroke();
                ctx.lineWidth = 1;
                ctx.strokeStyle = 'black';
            }
        }
    }


    render(){
        alert("renderizar o canvas");
       
        return(<canvas id="canvas">  </canvas>);
    };
}
*/


//Exemplo de Canvas funcional:
function Canvas (props){

    return(
       <div>
            <div className="canvas">
              {/* {texto}  */}
              {props.children} {/* mostrando o componente escolhido dentro do Canvas*/}

           </div>
       </div>
     );
}


export default Canvas;