import React from 'react';
import BotaoImagem from "../images/botoes/botao_ajuda.png";
import '../styles/MainStyle.css';


//https://www.w3docs.com/snippets/css/how-to-change-the-style-of-the-title-attribute-inside-an-anchor-tag.html

export default function BotaoAjuda(props){

    let estiloBotao = {
        position: "absolute",
        left: "81.590%",
        top: "0.0%",
        height: "16.500%",
        width: "8.500%",
        backgroundImage: `url(${BotaoImagem})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%", 
        backgroundPosition: "center center",
        animationName: "virarPlacaSelecao",
        animationFillMode: "forwards",
        animationDuration: "1s",
        zIndex: 50,
    }

    return <div style={estiloBotao} onClick={ ()=>ajudar(props) }  title="botão de ajuda"></div> ;
}



function ajudar(props){
    
    switch(props.telaAtual){

        case "laboratorio":
              alert(`Um mago de gelo prendeu vários animais dentro daquele globo de neve mágico. Você deve rotacionar as formas escuras para formar a silhueta de cada animal e assim libertá-los do encantamento.`); 
        break;

        case "torreIgreja":
             alert(`Parece que o amuleto que faz a torre do relógio funcionar se desmontou. Você deve ajudar Magus à procurar as peças e montá-lo novamente na parede.`);
        break;

        case "moinho":
             alert(`Tudo indica que as engrenagens que faziam o moinho funcionar saíram de seus eixos. Você deve ajudar os fazendeiros do reino à consertar o moinho movendo as engrenagens de volta para seus respectivos eixos ou encaixes.`);
        break;
    }
}