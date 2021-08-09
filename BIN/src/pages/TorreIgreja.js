import React from 'react';
import '../styles/TorreIgrejaStyle.css';

//PARTES DO MEDALHAO QUE SERÃO UNIDAS:
import Taca from '../images/amuleto_partes_v2/taca.png';
import CimaEsq from '../images/amuleto_partes_v2/cimaEsq.png';
import CimaDir from '../images/amuleto_partes_v2/cimaDir.png';
import BaixoEsq from '../images/amuleto_partes_v2/baixoEsq.png';
import BaixoDir from '../images/amuleto_partes_v2/baixoDir.png';
import CirculoCentro from '../images/amuleto_partes_v2/circuloCentro.png';
//import MedalhaoDourado '../amuleto_partes_v2/medalhaoAmarelo.png';

//DEMAIS OBJETOS/OBSTÁCULOS DO CENÁRIO (em png):
import TorreCenario from '../images/torreRelogio/torreCenarioPNG.jpg';
import MachadoGrande from '../images/torreRelogio/Machado_grande.png';
import Caneta from '../images/torreRelogio/Caneta.png';
import Papel from '../images/torreRelogio/Papel.png';
import Pergaminho from '../images/torreRelogio/Pergaminho.png';
//import CentroMedalhao from '../images/amuleto_partes_v2/medalhao.png';
//import {ReactComponent as CentroMedalhao} from '../images/amuleto_partes_v2/medalhaoContornado1SVG.svg';

//DEMAIS OBJETOS/OBSTÁCULOS DO CENÁRIO (em svg):
import {ReactComponent as EscudoMesa} from '../images/torreRelogio/escudo - mesa.svg';
import {ReactComponent as EscudoParede} from '../images/torreRelogio/escudo - parede.svg';
import {ReactComponent as Barril} from '../images/torreRelogio/barril.svg';
import {ReactComponent as Caneca} from '../images/torreRelogio/caneca.svg';
import {ReactComponent as Jarra} from '../images/torreRelogio/Jarra.svg';
import {ReactComponent as Machado} from '../images/torreRelogio/machado.svg';
import {ReactComponent as Tampa} from '../images/torreRelogio/tampa.svg';
import {ReactComponent as Armadura} from '../images/torreRelogio/armadura.svg';


class TorreIgreja extends React.Component{
   
   constructor(){ 
       super(); 
    
       this.state = {
            inicializar: true,
            distanciasXY: {X: 0, Y: 0},

            pedacosMedalhao: {
                circuloCentro: { left:   30+"%",   top: 84+"%"},
                baixoDir:      { left:   81+"%",   top: 82+"%"},
                baixoEsq:      { left:    8+"%",   top: 80+"%"},
                cimaDir:       { left:   29+"%",   top: 45+"%"},
                cimaEsq:       { left:   46+"%", top: 18.5+"%"},
                taca:          { left:   18+"%",   top: 55+"%"}
            },

            objetosCenario: {
                barril:        { left:    5+"%",  top: 63+"%"},
                caneca:        { left:   61+"%",  top: 41+"%"},
                escudoMesa:    { left:   25+"%",  top: 70+"%"},
                escudoParede:  { left:  2.5+"%",  top: 31+"%"},
                machado:       { left:   60+"%",  top: 85+"%"},
                tampa:         { left:   76+"%",  top: 53+"%"},
                jarra:         { left:   16+"%",  top: 40+"%"},
                armadura:      { left:   83+"%",  top: 30+"%"},
                machadoGrande: { left:   28+"%",  top: 43+"%"},
                caneta:        { left:   68+"%",  top: 32+"%"},
                papel:         { left:   78+"%",  top: 74+"%"},
                pergaminho:    { left:   80+"%",  top: 40+"%"}
            },

            medalhaoCompleto: false
       }
    }

    dragstart = (evt)=>{
        //evt.dataTransfer.setData('text', evt.currentTarget.getAttribute('id'));
        let distX = (evt.clientX - evt.target.offsetLeft);
        let distY = (evt.clientY - evt.target.offsetTop);
        
        this.setState({distanciasXY: {X: distX, Y: distY}});
    }

    drag = (evt) =>{
        //alert("arrastando!");
    }

    dragend = (evt)=>{

        let newPositionX = (evt.clientX - this.state.distanciasXY.X)+"px";
        let newPositionY = (evt.clientY - this.state.distanciasXY.Y)+"px";

        //alert(JSON.stringify(estadoCenario));
        //console.dir(JSON.stringify(objeto, null, 4));

        switch(evt.target.id){
                    //.circuloCentro.top = evt.clientX;

                //--------- SOLTANDO PEDAÇOS DO MEDALHÃO ------------
                case "circuloCentro":
                    this.setState({ 
                        pedacosMedalhao: {
                            ...this.state.pedacosMedalhao,
                            circuloCentro: {top: newPositionY, left: newPositionX}
                        } 
                    }); 
                    //ou então, usando o setState de forma assíncrona: 
                    /*
                    this.setState( prevState => ({
                        pedacosMedalhao: {
                            ...prevState.pedacosMedalhao,
                            circuloCentro: {top: newPositionY, left: newPositionX}
                        }
                    }));
                    */
                break;

                case "baixoDir":
                    this.setState({ pedacosMedalhao: { ...this.state.pedacosMedalhao, baixoDir: {top: newPositionY, left: newPositionX}} });
                break;
                case "baixoEsq":
                    this.setState({ pedacosMedalhao: {  ...this.state.pedacosMedalhao, baixoEsq: {top: newPositionY, left: newPositionX}} });
                break;
                case "cimaDir":
                    this.setState({ pedacosMedalhao: { ...this.state.pedacosMedalhao, cimaDir: {top: newPositionY, left: newPositionX}} });
                break;
                case "cimaEsq":
                    this.setState({ pedacosMedalhao: { ...this.state.pedacosMedalhao, cimaEsq: {top: newPositionY, left: newPositionX}} });
                break;
                case "taca":
                    this.setState({ pedacosMedalhao: { ...this.state.pedacosMedalhao, taca: {top: newPositionY, left: newPositionX}  }});
                break;

                
                //--------- SOLTANDO DEMAIS OBJETOS DO CENÁRIO: ------------

                case "barril":
                    this.setState({ objetosCenario: { ...this.state.objetosCenario, barril: {top: newPositionY, left: newPositionX}  }});
                break;
                case "caneca":
                    this.setState({ objetosCenario: { ...this.state.objetosCenario, caneca: {top: newPositionY, left: newPositionX}  }});
                break;
                case "escudoMesa":
                    this.setState({ objetosCenario: { ...this.state.objetosCenario, escudoMesa: {top: newPositionY, left: newPositionX}  }});
                break;

                case "escudoParede":
                    this.setState({ objetosCenario: { ...this.state.objetosCenario, escudoParede: {top: newPositionY, left: newPositionX}  }});
                break;
                case "machado":
                    this.setState({ objetosCenario: { ...this.state.objetosCenario, machado: {top: newPositionY, left: newPositionX}  }});
                break;
                case "tampa":
                    this.setState({ objetosCenario: { ...this.state.objetosCenario, tampa: {top: newPositionY, left: newPositionX}  }});
                break;
                case "jarra":
                    this.setState({ objetosCenario: { ...this.state.objetosCenario, jarra: {top: newPositionY, left: newPositionX}  }});
                break;
                case "armadura":
                    this.setState({ objetosCenario: { ...this.state.objetosCenario, armadura: {top: newPositionY, left: newPositionX}  }});
                break;
                case "machadoGrande":
                    this.setState({ objetosCenario: { ...this.state.objetosCenario, machadoGrande: {top: newPositionY, left: newPositionX}  }});
                break;
                case "caneta":
                    this.setState({ objetosCenario: { ...this.state.objetosCenario, caneta: {top: newPositionY, left: newPositionX}  }});
                break;
                case "papel":
                    this.setState({ objetosCenario: { ...this.state.objetosCenario, papel: {top: newPositionY, left: newPositionX}  }});
                break;
                case "pergaminho":
                    this.setState({ objetosCenario: { ...this.state.objetosCenario, pergaminho: {top: newPositionY, left: newPositionX}  }});
                break;
            
                default: console.log("objeto inexistente...");
        }
    
        verificarEncaixe(evt, this);
        ativarGravidade(evt);
        verficarMedalhao(this);
   }


   componentDidMount(){ 

      if(this.state.inicializar){
            let objetosCenario = document.getElementsByTagName("div");

            Object.values(objetosCenario).forEach( (objeto)=>{
                
                if(objeto.getAttribute("className") !== "centroMedalhao"){
                        objeto.addEventListener("dragstart", this.dragstart);
                        objeto.addEventListener("drag", this.drag);
                        objeto.addEventListener("dragend", this.dragend);
                        //obejeto.addEventListener("dragstart", dragstart);

                        objeto.cair = true;
                }
            });

            this.setState({inicializar: false});
      }
   }

   render(){
      const reajustarFundo = require("../funcoesGerais.js");
      //console.dir(JSON.stringify(this.state, null, 4));
      

      let moreObjects = [
            <div id="barril" style={this.state.objetosCenario.barril} className="objetos" draggable="true"> 
                <Barril /> 
            </div> 
            ,
            <div id="caneca" style={this.state.objetosCenario.caneca} className="objetos" draggable="true"> 
                <Caneca />  
            </div> 
            ,
            <div id="escudoMesa" style={this.state.objetosCenario.escudoMesa} className="objetos" draggable="true"> 
                <EscudoMesa  /> 
            </div>
            ,
            <div id="escudoParede" style={this.state.objetosCenario.escudoParede} className="objetos" draggable="true"> 
                <EscudoParede/>  
            </div>
            ,
            <div id="machado" style={this.state.objetosCenario.machado} className="objetos" draggable="true"> 
                <Machado /> 
            </div>
            ,
            <div id="tampa" style={this.state.objetosCenario.tampa} className="objetos" draggable="true"> 
                <Tampa /> 
            </div>
            ,
            <div id="jarra" style={this.state.objetosCenario.jarra} className="objetos" draggable="true"> 
                <Jarra /> 
            </div>
            ,
            <div id="armadura" style={this.state.objetosCenario.armadura} className="objetos" draggable="false"> 
                <Armadura /> 
            </div>
            ,
            <div id="machadoGrande" style={this.state.objetosCenario.machadoGrande} className="objetos" draggable="true"> 
                <img draggable="false" src={MachadoGrande}  alt="machado grande"/> 
            </div>
            ,
            <div id="caneta"  style={this.state.objetosCenario.caneta} className="objetos" draggable="true"> 
                 <img draggable="false" src={Caneta} alt="caneta"/>
            </div>
            ,
            <div id="papel" style={this.state.objetosCenario.papel} className="objetos" draggable="true"> 
                 <img draggable="false" src={Papel} alt="papel"/> 
            </div>
            ,
            <div id="pergaminho"  style={this.state.objetosCenario.pergaminho} className="objetos" draggable="true"> 
                 <img draggable="false" src={Pergaminho} alt="pergaminho" /> 
            </div>
            ,

            //Item que representa o fundo do cenário: 
            <img draggable="false" style={reajustarFundo()} src={TorreCenario} alt="cenário da torre da igreja"/>
            ,
            /*----------------------------ENCERRAMENTO DOS OBJETOS DO CENÁRIO DA TORRE DA IGREJA-------------------------------------------*/


            /*----------------------------INSERINDO PEDAÇOES DO MEDALHÃO NO CENÁRIO DA TORRE DA IGREJA-------------------------------------------*/


            //<centroMedalhao  /> <img draggable="false" src={CentroMedalhao} />
            <div id="centroMedalhao" className="centroMedalhao" draggable="false"> </div>
            ,
            // {this.state.pedacosMedalhao.circuloCentro.top=="143px"? "circuloCentroEncaixe":""}
            <div id="taca"  style={this.state.pedacosMedalhao.taca} className="taca" draggable="true"> 
                 <img draggable="false" src={Taca} alt="taça" /> 
            </div>
            ,
            <div id="cimaEsq"  style={this.state.pedacosMedalhao.cimaEsq} className="cimaEsqEncaixe" draggable="true"> 
                 <img draggable="false" src={CimaEsq} alt="parte do medalhão" /> 
            </div>
            ,
            <div id="cimaDir"  style={this.state.pedacosMedalhao.cimaDir} className="cimaDir" draggable="true"> 
                 <img draggable="false" src={CimaDir} alt="parte do medalhão" /> 
            </div>
            ,
            <div id="baixoEsq"  style={this.state.pedacosMedalhao.baixoEsq} className="baixoEsq" draggable="true"> 
                 <img draggable="false" src={BaixoEsq} alt="parte do medalhão" /> 
            </div>
            ,
            <div id="baixoDir"  style={this.state.pedacosMedalhao.baixoDir} className="baixoDir" draggable="true"> 
                 <img draggable="false" src={BaixoDir}  alt="parte do medalhão"/> 
            </div>
            ,
            <div id="circuloCentro" style={this.state.pedacosMedalhao.circuloCentro} className="circuloCentro" draggable="true"> 
                 <img draggable="false" src={CirculoCentro} alt="parte do medalhão" /> 
            </div>

            //---------------ENCERRAMENTO DO CÓDIGO DE INSERÇÃO DOS PEDAÇOS DO MEDALHÃO (DO CENTRO DA PAREDE)---------------------------
        

            /*
                exibirMensagemFinal &&(
                    <div id="mensagemFinal" style={{zIndex: 1000, position: "absolute", left: "30%", top: "20%", backgroundColor: "blue", height: "300px", width: "400px"}}>
                    </div>
                )
            */
      ];

 /*------------------------------------OBJETOS DO CENÁRIO DA TORRE DA IGREJA-------------------------------------------*/
      return(
        <div>
            {moreObjects}
        </div>);
   }

}


function verificarEncaixe(event, estadoCenario){//verdicar se a parte do amuleto está dentro da área de encaixe do medalhão

    let objetoPeca = document.getElementById(event.target.id);//objeto pego pelo mouse

    //verificando se o objeto pego pelo mouse é uma peça do medalhão, ou seja, se ela não é um "objeto" comum do cenário.
    if(objetoPeca.className != "objetos"){

        let encaixeDoMedalhao = document.getElementById("centroMedalhao").getBoundingClientRect();
        let pecaDoMedalhao = objetoPeca.getBoundingClientRect();//objeto com todas as coordenadas da div que tem o pedação do medalhão

        if( //verificando se houve colisão entre a parte do medalhão e o amuleto:
            (
                (pecaDoMedalhao.right > encaixeDoMedalhao.left) && 
                (pecaDoMedalhao.top < encaixeDoMedalhao.bottom  || pecaDoMedalhao.bottom < encaixeDoMedalhao.bottom) && 
                (pecaDoMedalhao.right < encaixeDoMedalhao.right) 
             ) || ( 
                (pecaDoMedalhao.left < encaixeDoMedalhao.right) &&
                (pecaDoMedalhao.top < encaixeDoMedalhao.bottom || pecaDoMedalhao.bottom < encaixeDoMedalhao.bottom) &&
                (pecaDoMedalhao.left > encaixeDoMedalhao.left)
             )
        ){
            
            objetoPeca.cair=false;
            
            switch(objetoPeca.id){
                case "circuloCentro": 
                    objetoPeca.classList.remove("circuloCentro");
                    objetoPeca.classList.add("circuloCentroEncaixe");
 
                    estadoCenario.setState({  
                        pedacosMedalhao: { ...estadoCenario.state.pedacosMedalhao,  circuloCentro: { left: 47+"%",  top: 20.6+"%" }}
                    });
                 break;

                 case "taca": 
                    objetoPeca.classList.remove("taca");
                    objetoPeca.classList.add("tacaEncaixe");
 
                    estadoCenario.setState(
                        { pedacosMedalhao: { ...estadoCenario.state.pedacosMedalhao, taca: {left: 48.4+"%",  top:  20.7+"%" } }
                    });
                 break;

                 case "cimaDir": 
                    objetoPeca.classList.remove("cimaDir");
                    objetoPeca.classList.add("cimaDirEncaixe");
 
                    estadoCenario.setState({ pedacosMedalhao: { ...estadoCenario.state.pedacosMedalhao, cimaDir: { left:  51.6+"%",top:  18.7+"%" } } //left: 641px; top: 130px;
                    });
                 break;

                 case "cimaEsq": 
                    objetoPeca.classList.remove("cimaEsq");
                    objetoPeca.classList.add("cimaEsqEncaixe");
 
                    estadoCenario.setState({ pedacosMedalhao: { ...estadoCenario.state.pedacosMedalhao, cimaEsq: { left:  46+"%",  top: 18.5+"%" } }//left: 570px; top: 130px;
                    });
                 break;

                 case "baixoDir": 
                    objetoPeca.classList.remove("baixoDir");
                    objetoPeca.classList.add("baixoDirEncaixe");
 
                    estadoCenario.setState({  pedacosMedalhao: { ...estadoCenario.state.pedacosMedalhao, baixoDir: { left: 51.4+"%",  top: 25.9+"%" } }//left: 640px; top: 180px;
                    });
                 break;

                 case "baixoEsq": 
                    objetoPeca.classList.remove("baixoEsq");
                    objetoPeca.classList.add("baixoEsqEncaixe");
 
                    estadoCenario.setState({  pedacosMedalhao: { ...estadoCenario.state.pedacosMedalhao, baixoEsq: { left:  46+"%",  top: 26.1+"%" }}//left: 572px; top: 180px;
                    });
                 break;

                default: console.log("não foi possível encaixar a parte do medalhão"); break;
            }
       
        }else{//se a peça do medalhão for retirada  do slot ela receberá a sua classe original
           
            objetoPeca.cair= true;

            switch(objetoPeca.className){
               case "circuloCentroEncaixe":
                    objetoPeca.classList.remove("circuloCentroEncaixe");
                    objetoPeca.classList.add("circuloCentro");
               break;

               case "tacaEncaixe": 
                    objetoPeca.classList.remove("tacaEncaixe");
                    objetoPeca.classList.add("taca");
               break; 

               case "cimaDirEncaixe": 
                    objetoPeca.classList.remove("cimaDirEncaixe");
                    objetoPeca.classList.add("cimaDir");
               break; 

               case "cimaEsqEncaixe": 
                    objetoPeca.classList.remove("cimaEsqEncaixe");
                    objetoPeca.classList.add("cimaEsq");
               break; 

               case "baixoDirEncaixe": 
                    objetoPeca.classList.remove("baixoDirEncaixe");
                    objetoPeca.classList.add("baixoDir");
               break; 

               case "baixoEsqEncaixe": 
                    objetoPeca.classList.remove("baixoEsqEncaixe");
                    objetoPeca.classList.add("baixoEsq");
               break; 

               default: ;
           }
        }
    }else{ objetoPeca.cair= true;}
}


function ativarGravidade(event){
    let objeto = document.getElementById(event.target.id);
    let ele = objeto.getBoundingClientRect();

    function caindo(){
        objeto.style.top = event.target.offsetTop + 1 +"px";

        let limit = (event.target.offsetTop + ele.height);
        //console.log("valor de height: "+ele.height);
        if(limit < window.innerHeight-20) {
            window.requestAnimationFrame(caindo);

        }else{
            objeto.cair = false; 
            //console.log("top: "+event.target.offsetTop+"/ top-state"+estadoAtual.state.objetosCenario.caneca.top);
            // VER ISSO DEPOIS!!
        }
    }

    if(objeto.cair===true) caindo();
}



function verficarMedalhao(estadoAtual){

    let objetos = Object
          .values(document.getElementsByTagName("div"))
              .filter( (obj)=> (obj.className === "circuloCentro") || 
                                        (obj.className === "taca") ||    
                                    (obj.className === "baixoDir") || 
                                    (obj.className === "baixoEsq") ||
                                     (obj.className === "cimaDir") ||
                                    (obj.className === "cimaEsq"));


   if(objetos.length==0) {
        let medalhao = document.getElementById("centroMedalhao");
        medalhao.classList.remove("centroMedalhao");
        medalhao.classList.add("centroMedalhaoCompleto");

        estadoAtual.setState({medalhaoCompleto: !(estadoAtual.state.medalhaoCompleto)});
   }
}


export default TorreIgreja;





//----------------- ATUALIZANDO SETSTATE DE FORMA ASSÍNCRONA: --------------------
/*
this.state = {
    food: {
      sandwich: {
        capsicum: true,
        crackers: true,
        mayonnaise: true
      },
      pizza: {
        jalapeno: true,
        extraCheese: false
      }
    }
  }

  //To update extraCheese of pizza object:
  
  this.setState(prevState => ({
    food: {
      ...prevState.food,           // copy all other key-value pairs of food object
      pizza: {                     // specific object of food object
        ...prevState.food.pizza,   // copy all pizza key-value pairs
        extraCheese: true          // update value of specific key
      }
    }
  }))
*/



/*

//TAMBÉM TEMOS:
this.state = {
  todoItems: [
    {
      name: 'Learn React Basics',
      status: 'pending'
    }, {
      name: 'Check Codebase',
      status: 'pending'
    }
  ]
}
To update the status of any todo object, run a map on the array and check for some unique value of each object, in case of condition=true, return the new object with updated value, else same object.

let key = 2;
this.setState(prevState => ({

  todoItems: prevState.todoItems.map(
    el => el.key === key? { ...el, status: 'done' }: el
  )

}))



function dragover(evt){
    //alert("em cima!");
//    evt.target.style.border = "2px solid blue";

    evt.preventDefault();
}

function drop(evt){
   // alert("soltou!");
  
    let peca_id = evt.dataTransfer.getData('text');
    let peca = document.getElementById(peca_id);

    evt.target.appendChild(peca);

    evt.preventDefault();
}

function dragleave(evt){
    //alert("foraa!");
   // evt.target.style.border = "none";
    evt.preventDefault();
}
*/
