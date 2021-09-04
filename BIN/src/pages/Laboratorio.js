import React from 'react';
import FundoLaboratorio from '../images/imagens_jogo_laboratorio/laboratorio_sem_globo.png';
import TransitionEffects from '../transitionEffects.js';
import '../styles/LaboratorioStyle.css';
import Personagem from './Personagem';

class Laboratorio extends React.Component{

    constructor(props){
      super(props);

      this.pecaAtual = { id: "asaEsquerda1", distX: null, distY: null };
      this.ctxMain = props.ctxMain;//passando o contexto 'this' da classe 'Main' para a variável de contexto da classe 'Laboratorio'
      this.ctxMain.pararContador=true;

      this.fadeOutOcorreu = false;

      
      this.direcaoPecasPassaro = [
        {nomePeca: "asaEsquerda1", direcaoCorreta: true },
        {nomePeca: "asaEsquerda2", direcaoCorreta: false },
        {nomePeca: "asaEsquerda3", direcaoCorreta: false },
        {nomePeca: "asaDireita1", direcaoCorreta: false } ,
        {nomePeca: "asaDireita2", direcaoCorreta: false },
        {nomePeca: "barriga", direcaoCorreta: false },
        {nomePeca: "costa", direcaoCorreta: true },
        {nomePeca: "cauda", direcaoCorreta: false },
        {nomePeca: "bico", direcaoCorreta: false }
      ]

      this.direcaoPecasPeixe = [
        {nomePeca: "nadadeiraInferiorDianteira", direcaoCorreta: false },
        {nomePeca: "nadadeiraSuperiorTrazeira", direcaoCorreta: false },
        {nomePeca: "nadadeiraInferiorTrazeira", direcaoCorreta: false },
        {nomePeca: "nadadeiraInferiorBarriga", direcaoCorreta: false },
        {nomePeca: "nadadeiraSuperior", direcaoCorreta: false },
        {nomePeca: "barrigaPeixe", direcaoCorreta: false } ,
        {nomePeca: "caudaPeixe", direcaoCorreta: false },
        {nomePeca: "testa", direcaoCorreta: false },
        {nomePeca: "boca", direcaoCorreta: true }
      ]

      this.state = {
          pecasPassaro: [
             { nomePeca: "asaEsquerda1", grausPercorridos: 0 }, //asaEsquerda1    posicao cooreta: 90 graus pra baixo
             { nomePeca: "asaEsquerda2", grausPercorridos: 180 }, //asaEsquerda2: 
             { nomePeca: "asaEsquerda3", grausPercorridos: 90 }, //asaEsquerda3:
             { nomePeca: "asaDireita1", grausPercorridos: 270 }, //asaDireita1
             { nomePeca: "asaDireita2", grausPercorridos: 180 }, //asaDireita2
             { nomePeca: "costa", grausPercorridos: 0 }, //costa
             { nomePeca: "bico", grausPercorridos: 90 }, //bico
             { nomePeca: "barriga", grausPercorridos: 90 }, //barriga
             { nomePeca: "cauda", grausPercorridos: 270 } //cauda
          ],


          pecasPeixe: [
            { nomePeca: "nadadeiraInferiorDianteira", grausPercorridos: 180 }, //
            { nomePeca: "nadadeiraSuperiorTrazeira", grausPercorridos: 270 },  
            { nomePeca: "nadadeiraInferiorTrazeira", grausPercorridos: 180 },  
            { nomePeca: "nadadeiraInferiorBarriga", grausPercorridos: 90 }, //
            { nomePeca: "nadadeiraSuperior", grausPercorridos: 90 }, //
            { nomePeca: "barrigaPeixe", grausPercorridos: 270 }, //
            { nomePeca: "testa", grausPercorridos: 90 }, //
            { nomePeca: "caudaPeixe", grausPercorridos: 180 },
            { nomePeca: "boca", grausPercorridos: 0 }//
          ],

          estadoPersonagem: "apresentando",//incializa como 'true' para que o personagem possa aparecer antes do início do jogo
          
          faseAtual: "montarPassaro"//A STRING "montarPassaro" CORRESPONDE A MONTAGEM DO PASSARO (1ª FASE) E A "montarPeixe" CORRESPONDE A MONTAGEM DO PEIXE (2ª E ULTIMA FASE)
        }
    }

    render(){
        const estiloLabFundo = require("../funcoesGerais.js");


        let pecasPassaro = [ 
            // CADA DIV REPRESENTA UMA PEÇA GIRATÓRIA
            <div id="asaEsquerda1" className="pecas"></div>,

            <div id="asaEsquerda2" className="pecas"></div>,

            <div id="asaEsquerda3" className="pecas"></div>,

            <div id="asaDireita1" className="pecas"></div>,

            <div id="asaDireita2" className="pecas"></div>,
            //PECA GIRATÓRIA GRANDE DA PARTE DA DIREITA

            <div id="costa" className="pecas"></div>,

            <div id="bico" className="pecas"></div>,

            <div id="barriga" className="pecas"></div>,

            <div id="cauda" className="pecas"></div>

          /*  <div id="passaroCompleto" className="passaroCompleto"></div>  */
        ]  


        let pecasPeixe = [ 
            // CADA DIV REPRESENTA UMA PEÇA GIRATÓRIA
            <div id="caudaPeixe" className="pecas"></div>,

            <div id="nadadeiraInferiorTrazeira" className="pecas"></div>,

            <div id="nadadeiraInferiorBarriga" className="pecas"></div>,

            <div id="barrigaPeixe" className="pecas"></div>,

            <div id="nadadeiraInferiorDianteira" className="pecas"></div>,

            <div id="boca" className="pecas"></div>,

            <div id="testa" className="pecas"></div>,

            <div id="nadadeiraSuperior" className="pecas"></div>,

            <div id="nadadeiraSuperiorTrazeira" className="pecas"></div>,

           /*  <div id="peixeCompleto" className="peixeCompleto"></div>   */
        ] 
       

        return (
            <div>
                {/* Se o efeito fadeOut não ocorreu ele irá ocorrer somente uma vez quando o usuário entrar nessa página. Ele é desativado para que nao ocorra de novo na func didMoundt() */}
                {this.fadeOutOcorreu===false &&(<TransitionEffects effectName="fadeIn"/>)}
                {/* this.ctxMain.sairTelaSelecao===true && (<TransitionEffects effectName="fadeOut"/>) */  }
                {/* this.ctxMain.sairTelaSelecao===false && (<TransitionEffects effectName="fadeIn"/>) */ }
    
                <Personagem ctxMain={this.ctxMain}   telaAtual="laboratorio"  estadoPersonagem={this.state.estadoPersonagem+""}/>

                { (this.state.faseAtual==="montarPassaro")  && (pecasPassaro) }
                { (this.state.faseAtual==="montarPeixe")  && (pecasPeixe) }
                

                <div id="passaro" className="parado"></div>
                <div id="caixaGlobo" className="caixaGlobo">
                 {/*    <div className="cavalo"> </div>
                     <div className="peixe"></div>  
                     <div className="topeira"> </div>  */}
                </div>
                <div className="sombraEntreGloboFundo"></div>
                <img src={FundoLaboratorio} style={estiloLabFundo()} alt="Laboratorio" />

            </div>);
    }



    girou = (event)=>{
           this.retirarEventoDeClique();//COM ESSA FUNÇÃO O USUÁRIO NÃO PODERÁ FAZER OUTRA PEÇA GIRAR ENQUANTO A ATUAL NÃO TERMINAR O SEU GIRO COMPLETO

           this.pecaAtual = document.getElementById(event.target.id);//SALVANDO O ÚLTIMO ELEMENTO QUE FOI ROTACIONADO!
         //  console.log("pela atual ID: "+this.pecaAtual.id);

                //---------------------------------------------------------------------------------------------
           if(this.state.faseAtual==="montarPassaro"){
                    let pecaClicada = this.state.pecasPassaro.find( (pecaSelecionada) => pecaSelecionada.nomePeca==event.target.id);

                    document.getElementById(event.target.id).style.transform = `rotate(${pecaClicada.grausPercorridos+90}deg)`;//acessando o DOM para que haja a rotação da peça
                    //todas as peças (quando clicadas) rotacianarão num ângulo de 90 graus em sentido horário

                    this.setState( (estado) => ({ 
                                pecasPassaro: estado.pecasPassaro.map( (pecaSelecionada)=>{

                                        if(pecaSelecionada.nomePeca == event.target.id){
                                            return { ...pecaSelecionada, grausPercorridos: (pecaSelecionada.grausPercorridos+90)}//inserindo no vetor "pecasPassaro" a nova angulação que também foi atribuída ao seu elemento do DOM
                                        }else{
                                            return {...pecaSelecionada}
                                        }
                                }) 
                    }));


            }else if(this.state.faseAtual==="montarPeixe"){ 
                        let pecaClicada2 = this.state.pecasPeixe.find( (pecaSelecionada) => pecaSelecionada.nomePeca==event.target.id);

                     //  console.log("peca que veio do vetor 'pecasPeixes': "+pecaClicada2.grausPercorridos);

                        document.getElementById(event.target.id).style.transform = `rotate(${pecaClicada2.grausPercorridos+90}deg)`;
                        //todas as peças (quando clicadas) rotacianarão num ângulo de 90 graus em sentido horário

                        this.setState( (estado) => ({ 
                            pecasPeixe: estado.pecasPeixe.map( (pecaSelecionada)=>{

                                    if(pecaSelecionada.nomePeca == event.target.id){
                                        return { ...pecaSelecionada, grausPercorridos: (pecaClicada2.grausPercorridos+90)}
                                    }else{
                                        return {...pecaSelecionada}
                                    }
                            }) 
                        }));
            }
                    
            //document.getElementById(event.target.id).style.transition = "transform 2s ease 0s";
       window.setTimeout( ()=>{ 
          this.atualizarDirecao();
       }, 600);  //ATRASANDO A EXECUÇÃO DA FUNÇÃO "chamarDirecao()" PARA QUE A ATUALIZAÇÃO DOS GRAUS DA PEÇA CLICADA SEJA FEITA DE FORMA CORRETA
    }

    //-----------------------------------------------------------------------------------------------------------------------------


    atualizarDirecao(){
   /* 
        PARA CHECAR SE A PEÇA ESTÁ DIRECIONADA PARA A DIREÇÃO CORRETA
        BASTA DIVIDIR O TOTAL DE ÂNGULOS QUE ELA PERCORREU POR 360.
        SE O QUOCIENTE FOR IGUAL À 
        
        X.0 => quer dizer que a peça está "olhando" para DIREITA
        X.25 => quer dizer que a peça está "olhando" para BAIXO
        X.5 => quer dizer que a peça está "olhando" para ESQUERDA
        X.75 => quer dizer que a peça está "olhando" para CIMA

        */

      // alert("elemento com classe: "+document.getElementById("passaroCompleto").className);
      // if( document.getElementById("passaroCompleto").className==="piscar")
     //  document.getElementById("passaroCompleto").classList.remove('piscarPassaro');
      // document.getElementById("peixeCompleto").classList.remove('piscarPeixe');
        
       //retirando a classe CSS 'piscar' da imagem do pássaro grande para que ela possa ser utilizada novamente


        if(this.state.faseAtual=="montarPassaro"){
            this.direcaoPecasPassaro = this.direcaoPecasPassaro.map( (direcaoPeca)=>{

                        if( direcaoPeca.nomePeca == this.pecaAtual.id){
                            let numeroVoltas = direcaoAtual(this.pecaAtual);

                            if(numeroVoltas==".25" || numeroVoltas==".50" || numeroVoltas==".75"){
                                return { ...direcaoPeca, direcaoCorreta: false }

                            }else if(numeroVoltas==".00"){
                               // document.getElementById('passaroCompleto').classList.add('piscarPassaro'); //RETIRANDO A CLASSE QUE FAZIA O PASSARO PISCAR CASO A PEÇA ESTIVESSE NA POSIÇÃO CORRETA
                                return { ...direcaoPeca, direcaoCorreta: true }
                            }
                
                        }else{ return {...direcaoPeca} }
                });
            

        }else if(this.state.faseAtual=="montarPeixe"){
            this.direcaoPecasPeixe = this.direcaoPecasPeixe.map( (direcaoPeca)=>{

                    if( direcaoPeca.nomePeca == this.pecaAtual.id){
                        let numeroVoltas = direcaoAtual(this.pecaAtual);
                        
                        if(numeroVoltas==".25" || numeroVoltas==".50" || numeroVoltas==".75"){
                            return { ...direcaoPeca, direcaoCorreta: false }
                        }else if(numeroVoltas==".00"){
                           // document.getElementById("peixeCompleto").classList.add('piscarPeixe');  //RETIRANDO A CLASSE QUE FAZIA O PEIXE PISCAR CASO A PEÇA ESTIVESSE NA POSIÇÃO CORRETA
                            return { ...direcaoPeca, direcaoCorreta: true }
                        }
            
                    }else{ return {...direcaoPeca} }

                });
        }
            
            /*
            case "asaEsquerda1": 
                    angulo = this.state.pecasGiratorias[0].grausPercorridos;
                    numeroVoltas = (angulo/360).toString();
                    numeroVoltas = numeroVoltas.slice(numeroVoltas.indexOf('.'));//selecionando somente o ponto e as casas decimais
                    
                    if(numeroVoltas==".25" || numeroVoltas==".5" || numeroVoltas==".75"){
                        this.direcaoPecas[0] = false;
                    }else{
                        this.direcaoPecas[0] = true;
                        document.getElementById('passaroCompleto').classList.add('piscar');
                    }
            break;
*/
    
                    /*
            case "cauda": 
                    angulo = this.state.pecasGiratorias[8].grausPercorridos;
                    numeroVoltas = (angulo/360).toString();
                    numeroVoltas = numeroVoltas.slice(numeroVoltas.indexOf('.'));//selecionando somente o ponto mais as casas decimais
                    
                    if(numeroVoltas==".25" || numeroVoltas==".5" || numeroVoltas==".75"){
                        this.direcaoPecas[8] = false;
                    }else{
                        this.direcaoPecas[8] = true;
                        document.getElementById('passaroCompleto').classList.add('piscar');
                    }      
            break;     
        }
        */
       // alert("numero de voltas: "+numeroVoltas);
        this.verificarFimDoJogo();
    }

//-----------------------------------------------------------------------------------------------------------------------------


    //VALIDANDO SE TODAS AS ÉÇAS ESTÃO ROTACIONADAS NA DIREÇÃO CORRETA
    verificarFimDoJogo = ()=>{

        if(this.state.faseAtual=="montarPassaro"){//DEPOIS QUE O PASSARO É MONTADO A PRIMEIRA FASE DO JOGO TERMIN, E O PEIXE APARECE PARA SER MONTADO
            let aux = this.direcaoPecasPassaro.filter( (direcaoPeca) => (direcaoPeca.direcaoCorreta===false) );

           // console.log("tamanho atual das pecas de passaro: "+aux.length);
            if(aux.length===0){
                //AQUI UM ERRO: NotFoundError: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.
                window.setTimeout( ()=>{
                      this.setState({ faseAtual: "montarPeixe" });
                      this.aplicarEventoDeClique();//ESSA FUNÇÃO PERMITE QUE AS PEÇAS GIRATÓRIAS DO PEIXE SEJAM CLICÁVEIS
                }, 800);
            }


        }else if(this.state.faseAtual=="montarPeixe"){//DEPOIS QUE O PEIXE É MONTADO O JOGO TERMINA, CRONOMETRO PÁRA E O PERSONAGEM APARECE
            let aux = this.direcaoPecasPeixe.filter( (direcaoPeca) => (direcaoPeca.direcaoCorreta===false) );
            
            if(aux.length===0){
                //AQUI HAVIA UM ERRO. OLHAR DEPOIS: NotFoundError: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.
    
                //ADICINANDO CLASSE CSS AOS ELEMENTOS PARA A ANIMAÇÃO FINAL:
                document.getElementById("caixaGlobo").classList.add("caixaGloboVariar");
                document.getElementById("passaro").className = "voando";

                global.DadosJogador.setTempoLaboratorio(this.ctxMain.tempoGeral.tempoLaboratorio);
        
                this.ctxMain.pararContador=true;

                window.setTimeout( ()=>{
                    this.ctxMain.tempoGeral.tempoLaboratorioReal = true;
                    this.setState({ estadoPersonagem: "parabenizando"});
                 }, 4000);//tempo de 4s para que der tempo de ocorrer a animação final e asim, somente depois aparecer o personagem
            }
        }
      
        window.setTimeout( ()=>{
             this.aplicarEventoDeClique();//DEPOIS QUE A PEÇA RECENTEMENTE CLICADA TERMINAR A SUA ROTAÇÃO O USUÁRIO PODERÁ CLICAR EM OUTRA PEÇA PARA ROTACIONÁ-LA
        }, 200);
     }

//-----------------------------------------------------------------------------------------------------------------------------


    
    aplicarEventoDeClique(){
        Object.values(document.getElementsByClassName('pecas')).forEach( (pec) =>{

            if(pec.className === "pecas"){
              /*  eng.addEventListener("dragstart", this.mover);
                eng.addEventListener("drag", this.movendo);
                eng.addEventListener("dragend", this.moveu); */
                pec.addEventListener("click", this.girou);
            }

            /*  document.addEventListener("keydown", this.teclou); */
        });

        this.fadeOutOcorreu = true;
    }


    retirarEventoDeClique(){
        Object.values(document.getElementsByClassName('pecas')).forEach( (pec) =>{

            if(pec.className === "pecas")
                pec.removeEventListener("click", this.girou);
        });
    }


    //---------------------------------------------------------------------
    componentDidMount(){
         this.aplicarEventoDeClique();
    }
    //---------------------------------------------------------------------

}

export default Laboratorio;








/*------------------------- FUNÇOES AUXILIADORAS: ---------------------------*/
function direcaoAtual(pecaClicada){//FUNCAO QUE RETORNA O NUMERO DE VOLTAS FEITOS PELA PEÇA QUE FOI CLICADA. ESSE NUMERO É FORMATADO E DELE RETORNADO SOMENTE OS NUMEROS DAS CASAS DECIMAIS
    let anguloPercorrido = getCurrentRotation(pecaClicada);//PEGANDO O VALOR DO ROTATE ATUAL DA PEÇA QUE FOI ROTACIONADA
    let numeroVoltas = (anguloPercorrido/360).toFixed(2).toString();
    numeroVoltas = numeroVoltas.slice(numeroVoltas.indexOf('.'));//selecionando somente o ponto e as casas decimais
 
    return numeroVoltas;
}


function getCurrentRotation(el){//FUNCAO QUE RETORNA O VALOR DO ROTATE DA PEÇA CLICADA!
    var st = window.getComputedStyle(el, null);
    var tm = st.getPropertyValue("-webkit-transform") ||
             st.getPropertyValue("-moz-transform") ||
             st.getPropertyValue("-ms-transform") ||
             st.getPropertyValue("-o-transform") ||
             st.getPropertyValue("transform") || "none";

    if (tm != "none") {
      var values = tm.split('(')[1].split(')')[0].split(',');
      /*
      a = values[0];
      b = values[1];
      angle = Math.round(Math.atan2(b,a) * (180/Math.PI));
      */
      //return Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI)); //this would return negative values the OP doesn't wants so it got commented and the next lines of code added
      var angle = Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI));
      return (angle < 0 ? angle + 360 : angle); //adding 360 degrees here when angle < 0 is equivalent to adding (2 * Math.PI) radians before
    }
    return 0;
  }











  
    /*
    mover =(event)=>{
        let distX2 = (event.clientX - event.target.offsetLeft);
        let distY2 = (event.clientY - event.target.offsetTop);

        this.pecaAtual.distX = distX2;
        this.pecaAtual.distY = distY2;
        
       // alert("distX: "+this.pecaAtual.distX);
    }
    
    movendo =(event)=>{
    }
    
    moveu =(event)=>{
        document.getElementById(event.target.id).style.left =  (event.clientX - this.pecaAtual.distX)+"px";
        document.getElementById(event.target.id).style.top =  (event.clientY - this.pecaAtual.distY)+"px";

        //alert(JSON.stringify(document.getElementById(event.target.id).style));
        this.pecaAtual.id = event.target.id;
    }
    

    
    teclou =(event)=>{
        let pec = document.getElementById(this.pecaAtual.id);
        let rectPec = pec.getBoundingClientRect();

       // alert("id: "+this.pecaAtual.id);
        if(event.key === 'f'){
             pec.style.top = (pec.offsetTop - 1) + "px";

         }else if(event.key=="v"){
             pec.style.top = (pec.offsetTop + 1) + "px";
         
         }else if(event.key=='c'){
             pec.style.left = (pec.offsetLeft - 1) + "px";
         
         }else if(event.key=='b'){
             pec.style.left = (pec.offsetLeft + 1) + "px";
         
         }else if(event.key=='u'){//aumentar tamanho
             pec.style.height = (rectPec.height + 1) + "px";
             pec.style.width = (rectPec.width + 1) + "px";
         
         }else if(event.key=='j'){//diminuir tamanho
             pec.style.height = (rectPec.height - 1) + "px";
             pec.style.width = (rectPec.width - 1) + "px";
         }
        
         //exibir dados em porcentagem:
          else if(event.key=='l'){
            
            let leftVar = parseFloat(pec.offsetLeft/window.innerWidth + 0.024556616643929198);
            leftVar = leftVar.toFixed(6)
            leftVar *= 100.0;

            console.log('', "id: ",pec.id, ' \n',
                             "Left: ",pec.offsetLeft, '\n',
                             "Top: ",pec.offsetTop, '\n',
                             "Height: ",rectPec.height,'\n',
                             "Width: ",rectPec.width,'\n',
                             "Valores em %: ",'\n',
                             "id: ",pec.id, ' \n',

                             "left: ",leftVar+'%;', '\n',
                             "top: ",((pec.offsetTop/window.innerHeight).toFixed(6))*100+'%;', '\n',
                             "height: ",((rectPec.height/window.innerHeight).toFixed(6))*100+'%;' ,'\n',
                             "width: ", ((rectPec.width/window.innerWidth).toFixed(6))*100+'%;'
                        );
         }
    }
    */
