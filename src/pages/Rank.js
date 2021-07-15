import React from 'react';
import {ReactComponent as Ranking} from '../images/castelo/Castelo_cenario.svg';
//import styles from '../styles/BackgroundStyle.css';
import '../styles/ClassicStyle.css';

//className={styles.AlocarBackground}

export default function Rank(props){
  
    let gerarMinutoAleatorio =()=>{// 0 <= N <11 
       return Math.floor(
          Math.random()*(11-0)+0
       );
    }

console.log(props.value);

    let gerarSegundoAleatorio =()=>{// 0 <= N <61 
      return Math.floor(
         Math.random()*(61-0)+0
      );
   }

   let valores = [
      [props.value[0].nome,'XminYs'],
      ['xxxxxx','XminYs'],
      ['yyyyyy','XminYs'],
      ['zzzzzz','XminYs'],
      ['vvvvvv','XminYs'],
      ['wwwww','XminYs'],
   ]

   let novosValores = valores.map(
      (elemento, indice)=>{
        
        //let result = new Array(6,2);

        elemento[1] = elemento[1].replace("X", (" "+gerarMinutoAleatorio()));
        elemento[1] = elemento[1].replace("Y", (" "+gerarSegundoAleatorio()));

        //alert("nome: "+elemento[0]+"/ tempo: "+elemento[1]);
        return elemento;
      }
   );

   const vals = novosValores.map( (elemento, indice)=>{//adicionando linhas e colunas no componente 'vals'
       let value = <tr> 
                    <td>{elemento[0]}</td> {/* nome */}
                    <td>{elemento[1]}</td> {/* tempo total   */}
                  </tr> 
        
       return value;
    })

   return (
     <div>
         <table>
               <tr >
                  <th> Nome do jogador: </th>
                  <th> Tempo total: </th>
               </tr>

               {vals}
         </table>

         <Ranking className="imagemInserida"/> 
     </div>
   );
}                 

//comando para ver todos os pacotes instalados atualmente na máquina:
//npm list -g --depth=0