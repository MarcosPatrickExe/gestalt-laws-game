import React from "react";
//import ShowGrid from './ShowGrid.jsx';
import Canvas from './Canvas.js';
import BotaoAjuda from './pages/BotaoAjuda.js';
import './styles/MainStyle.css';
//import TempoContador from './SaveTimer.js';
//import {ReactComponent as BotaoCoroa} from './images/telaSelecao/coroa.svg'; //esse funcionou


//Dimensões da janela: 1304 x 697 
//import Button from './testingFiles/Button';
//import ComponentA from './testingFiles/ComponentA';
//import ComponentB from './testingFiles/ComponentB';
//import Principal from './testingFiles/creating_button_with_callback.js';
//import {ReactComponent as Peca1} from './images/passaroSVG/1.svg';
//deve-se sempre importar o modulo 'ReactComponent' junto com a imagem em svg
//import Carro from './testingFiles/ComponenteTemporario.jsx';

import Contador from './Contador.js';
import Login from './pages/Login.js';
import TorreIgreja from './pages/TorreIgreja.js';
import SelecaoGames from './pages/SelecaoGames.js';
import Castelo from './pages/Castelo.js';
import Moinho from './pages/Moinho.js';
import Laboratorio from './pages/Laboratorio.js';

export default class Main extends React.Component {
 constructor(){
     super();

        this.pararContador=false;
        this.sairTelaSelecao =false;
        this.aparecerPersonagemUnicaVez = true;//ESSA VARIAVEL IRÁ FAZER COM QUE O PERSONAGEM SO APAREÇA 1 VEZ NA TELA DE SELEÇÃO

        this.tempoGeral = {
              tempoTorreIgreja: [0, 0],
              tempoMoinho: [0, 0],
              tempoLaboratorio: [0, 0],
              
              tempoTorreIgrejaReal: false,//SE FOR 'TRUE' QUER DIZER QUE REALMENTE O JOGADOR CONCLUIU O JOGO. SE FOR FALSO SIGNIFICA QUE O JOGADOR ENTROU E SAIU DO JOGO SEM CONCLUÍ-LO 
              tempoMoinhoReal: false,
              tempoLaboratorioReal: false
        }

        this.state={//A variavel 'state' será responsável por gerenciar as telas que são exibidas!
            telas: [
              {nome: "SelecaoGames", exibida: false}, 
              {nome: "TorreIgreja", exibida: false},
              {nome: "Laboratorio", exibida: false},
              {nome: "Castelo", exibida: false},
              {nome: 'Moinho', exibida: false},
              {nome: "Login", exibida: true}
            ],

            player: {
               nome: ""
            },

            showGrid: false
      }

      //document.addEventListener("keydown", this.digitou);
  }

/*
 digitou = ()=>{
     this.setState({showGrid: (!this.state.showGrid) });
 }
*/

 verRanking =()=>{
    
     this.setState({
        telas: this.state.telas.map( (tela)=>{
              
          if(tela.nome === "Castelo")
                return {...tela, exibida: true}
          else
                return {...tela, exibida: false}
          })
     /*     ,
        player: {
          ...this.state.player
          } */
      });
  }


    /*For que permitirá a navegação entre as telas posteriormente:
     for(let i=0; i< telas.length; i++){
 
        if(telas[i].exibida){
             telas[i].exibida = false;
             
             if(i === telas.length-1)/*Se a última tela estiver 
             aberta ela será fechada (receberá 'false') e a primeira 
             será exibida (receberá 'true') */

                /*telas[0].exibida = true;
             else
                telas[++i].exibida = true; */
                /*Coso a tela atual não for a última, ela
                será fechada e a proxima aberta. */
       /*    }
     }*/
 

  verTelaSelecao =()=>{
    let {telas} = this.state;

     telas = telas.map( tela=>{
        if (tela.nome=="SelecaoGames")
            return {...tela, exibida: true}
        else
            return {...tela, exibida: false}
     });
    
     //this.sairTelaSelecao = true;//necessário para que ocorra o efeito 'fade out' nas telas que não serão renderizdas
     this.setState({telas: telas});
  }


  verLaboratorio = ()=>{
      this.setState({
            telas: this.state.telas.map( (tela)=>{

            if(tela.nome === "Laboratorio")
                  return {...tela, exibida: true}
            else
                  return {...tela, exibida: false}
            })
           /* ,
            player: {
            ...this.state.player
          } */
      });
  }  

  verTorreIgreja = ()=>{
      this.setState({
          telas: this.state.telas.map( (tela)=>{

              if(tela.nome === "TorreIgreja")
                  return {...tela, exibida: true}
              else
                  return {...tela, exibida: false}
          })
        /*  ,

          player: {
          ...this.state.player
          }*/
     });
 }


  verMoinho = ()=>{
      this.setState({
        telas: this.state.telas.map( (tela)=>{

        if(tela.nome === "Moinho")
              return {...tela, exibida: true}
        else
              return {...tela, exibida: false}
        })
        /*
        ,
        player: {
           ...this.state.player
       } */
      });
   }

 render(){
      let telaAtualObj = this.state.telas.find(Telas);
        //descobrindo qual pagina o 'return'(mais abaixo) vai renderizar
      function Telas(tela)  {
          return tela.exibida===true;
      }
      
      this.pararContador=false;

      {/*
      if(this.state.player.tempoTorreIgreja != null){
        alert("Tempo total no moinho: "+this.state.player.tempoTorreIgreja[0]+"min /"+this.state.player.tempoTorreIgreja[1]+"secs");
      */}

      let  
        botoes = [], 
             BotaoVoltar = <div onClick={ ()=> this.verTelaSelecao() } id="BotaoVoltar">  </div>;


      switch(telaAtualObj.nome){

        case 'Login':
           botoes[0] = <Login ctxCanvas={this}/>; 
           break;

        case 'SelecaoGames':
           botoes[0] = <SelecaoGames ctxMain={this} />;
           break;

        case 'Castelo':
           botoes[0] =  <Castelo ctxMain={this}/>;
           botoes[1] = BotaoVoltar;
           break;

        case "TorreIgreja":
           botoes[0] = <TorreIgreja contextoMain={this}/>;;//inserindo o botão que leva à tela de seleção de jogos no jogo da torre da igreja 
           //botoes[1] = moldura;
           botoes[1] = BotaoVoltar;
           botoes[2] = <Contador ctxMain={[this, "TorreIgreja"]}/>;
           botoes[3] = <BotaoAjuda telaAtual="torreIgreja" />;
           break;

        case "Moinho":
           botoes[0] = <Moinho contextoMain={this} />;
           botoes[1] = BotaoVoltar;
           botoes[2] = <Contador ctxMain={[this, "Moinho"]}/>;
           botoes[3] = <BotaoAjuda telaAtual="moinho"/>;
           break;

        case "Laboratorio":
           botoes[0] = <Laboratorio ctxMain={this} />;
           botoes[1] = BotaoVoltar;
           botoes[2] = <Contador ctxMain={[this, "Laboratorio"]} />;
           botoes[3] = <BotaoAjuda telaAtual="laboratorio"/>;
           break;

        default: 
           alert("Não foi possível mudar de tela :/");
           break;
        }

        return( 
           <div>
            {/*}  <TempoContador.Provider value= {{...this.tempoGeral}}>   */}

              {/* <h1 className="TituloDoCentro"> Tela de {telaAtualObj[0].nome}</h1> */}
               
               <Canvas grid={this.state.showGrid}>
                      {botoes}
               </Canvas>

               {/* </TempoContador.Provider>   */}
           </div> 
        );
   };
}



 /*}

            return(
              <ShowGrid>
                  <Canvas />
              </ShowGrid> */
            
              /* 
                  <Carro segundos='5000' />

                  <Peca1 style = {{position: 'absolute', height: '100px', width: 'auto'}}/>

                  <h3>Width: {window.innerWidth} & Heght: {window.innerHeight}</h3>  
                  */


              /* Somente descomente os coomponentes abaixo caso vc tenha descomentado as importações
              dos mesmos lá em cima! */

              /*
              <ComponentA>
                  <ComponentB>
                      <Button  name="clique aqui!"  onClick={() => {alert("Fala brothers!!!"); } }/>
                  </ComponentB>
              </ComponentA>

              );
              */


 
//FUNÇÃO 'FILTER' RETORNA OS VALORES QUE ATENDEM A DETERMINADAS CONDICOES PASSADAAS PARA AS CALLBACKS FUNCTIONS
//PARÂMETROS RECEPTÍVEIS: .filter(function callback(element, index, array)

/*
    const students = [
      { name: 'Quincy', grade: 96 },
      { name: 'Jason', grade: 84 },
      { name: 'Alexis', grade: 100 },
      { name: 'Sam', grade: 65 },
      { name: 'Katie', grade: 90 }
    ];

    const studentGrades = students.filter(student => student.grade >= 90);
    return studentGrades; 
    
    // [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ]
 */



//FUNÇÃO 'MAP' RETORNA CADA UM DOS VALORES ALTERADOS NA FUNÇÃO DE CALLBACK 
/*
    const numbers = [1, 2, 3, 4];
    const doubled = numbers.map(item => item * 2);
    console.log(doubled); // [2, 4, 6, 8]
*/

//OUTRO EXEMPLO:
/*render() {
    return (
      <ol>
        {this.state.items.map((item, index) => (

          <li key={item.text} onClick={() => this.doSomething(item.text, index)}>
           
          <span>{item.text}</span>
          </li>
          
        ))}
      </ol>
    );
  } */


//FUNÇÃO 'REDUCE' RETORNA UM ÚNICO VALOR QUE SERÁ ACULATIVO ENTRE CADA UM DOS ELEMENTOS DO ARRAY:
//PARÂMETROS RECEPTÍVEIS: .reduce( callback (beforeValue, afterValue) , initialValue]

/*
  const rockets = [
      {country: "Russia", launches: 32},
      {country: "US", launches: 23},
      {country: "China", launches: 16},
      {country: "Europe", launches: 7},
      {country: "India", launches: 4},
      {country: "Japan", launches: 3},
  ]
  */
  
/*
  const totalLanches = rocket.reduce( (valorAnte, valorPoste)=> valorAnte + valorPoste.launches, 0);
*/

//OUTRO EXEMPLO:
/*
  const numbers = [1, 2, 3, 4];
  const sum = numbers.reduce(function (result, item) {
    return result + item;
  }, 0);
  console.log(sum); // 10 
*/ 



//TESTAR DEPOIS:
/*
      var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

      var petCounts = pets.reduce(function(obj, pet){
          if (!obj[pet]) {
              obj[pet] = 1;
          } else {
              obj[pet]++;
          }
          return obj;
      }, {});

      console.log(petCounts); 

      /*
      Output:
      { 
          dog: 2, 
          chicken: 3, 
          cat: 1, 
          rabbit: 1 
      }
 */





//FORMAS DE IMPORTAÇÃO E EXPORTAÇÃO:

//export {varCompnent, App};
//export more than one component with JS;

//import { SampleA, SampleB } from './Sample'
//import more than one component with JS