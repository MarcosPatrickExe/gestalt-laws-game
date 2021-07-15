import React from "react";
//import ShowGrid from './ShowGrid.jsx';
import Canvas from './Canvas.js';
import './styles/ClassicStyle.css';
import './styles/LoginStyle.css';
import './styles/SelecaoStyle.css';

//Dimensões da janela: 1304 x 697 

//import Button from './testingFiles/Button';
//import ComponentA from './testingFiles/ComponentA';
//import ComponentB from './testingFiles/ComponentB';
//import Principal from './testingFiles/creating_button_with_callback.js';
//import {ReactComponent as Peca1} from './images/passaroSVG/1.svg';
//deve-se sempre importar o modulo 'ReactComponent' junto com a imagem em svg

//import Carro from './testingFiles/ComponenteTemporario.jsx';



/*
   Para o dia 14, manhã: Patrick: 

 1- Protótipo interativo 
 2- Tela do portão - Caixa com o nome que bloqueia a entrada >
 3- Seleção de jogos - Botão clicável do castelo >>
 4- Tela do castelo - Variável no quadro de melhores tempos

*/


import Login from './pages/Login.js';
//import PortaReino from './pages/PortaReino.js';
import SelecaoGames from './pages/SelecaoGames.js';
import Rank from './pages/Rank.js';


export default class Main extends React.Component {

 constructor(){
      super();

      this.state={//A variavel 'state' será responsável por gerenciar as telas que são exibidas!
          telas: [
            {nome: 'Login', exibida: true}, 
           // {nome: 'Porta do reino', exibida: false}, 
            {nome: 'Seleção de games', exibida: false}, 
            {nome: 'Rank', exibida: false}]
      }
 }

 verRanking =()=>{
    let {telas} = this.state;

    telas[0].exibida=false;
    telas[1].exibida=false;
    telas[2].exibida=true;
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

    this.setState(telas);
 }

 verTelaDeSelecao =()=>{
    let {telas} = this.state;

    telas[0].exibida=false;
    telas[1].exibida=true;
    telas[2].exibida=false;
      /*
        for(let i=telas.length-1; i >=0; i--){

            if(telas[i].exibida===true){
                telas[i].exibida = false; */
                
                /*if(i === 0) /*Se a primeira tela estiver 
                aberta ela será fechada (receberá 'false') e a última 
                será exibida (receberá 'true') */
                /*   
                telas[2].exibida = true;
                else
                    telas[--i].exibida = true;
                    /*Coso a tela atual não for a última, ela
                    será fechada e a proxima aberta. */
         /*   }
          
        
        }*/
     this.setState({telas: telas});
 }

 


 render(){

      let telaAtualObj = this.state.telas.filter(Telas);
        //descobrindo qual pagina o 'return'(mais abaixo) vai renderizar
      function Telas(tela)  {
          return tela.exibida===true;
      }
      
      let componenteDaTela;
      let botao;
      switch(telaAtualObj[0].nome){

        case 'Login':
           componenteDaTela =  <Login valor={this}/> ; 
          /// botao = <input type="button" value="ENTRAR!" className="botaoEntrar" onClick={this.entrar()}/>
           break;

           /*
        case 'Porta do reino':
           componenteDaTela =  <PortaReino /> ;break;
           */

        case 'Seleção de games':
           componenteDaTela =  <SelecaoGames /> ;//botão da direita
           botao =  <button onClick={ ()=> this.verRanking() } className="castelo"> <span >Castelo</span></button>
           break;

        case 'Rank':
           componenteDaTela =  <Rank value={this.state}/> ;//botão de cima
           botao = <button onClick={ ()=> this.verTelaDeSelecao() } className="botao2"> <span>{'<='} Selecionar jogo</span></button>;
           break;

        default: 
            alert("Não foi possível mudar de tela :/");
            break;
        }


        return( 
           <div>
              <h1 className="TituloDoCentro"> Tela de {telaAtualObj[0].nome}</h1>
              
               <Canvas valor={ {value: true}}>
                      {componenteDaTela }
               </Canvas>
               
                {botao}

                
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
  const totalLanches = rocket.reduce( (valorAnte, valorPoste)=> valorAnte + valorPoste.lanches, 0);
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