import React from 'react';
import '../styles/PersonagemStyle.css';
//import TempoContador from '../SaveTimer.js';
//import Laboratorio from './Laboratorio';
import '../DadosJogador.js';

class Personagem extends React.Component {
    //static contextType = TempoContador;//ADICIONANDO O CONTEXTO DO CONTADOR DE TEMPO

    constructor(props){
        super(props);

        this.contextoMain = props.ctxMain;
        //this.contextoLab = props.ctxLaboratorio;

       // this.posicaoFalas = 0;this.ctxMain.pararContador=true;

        this.state = {
            personagemEsta: "visivel"
        }
    }


//static contextType = TempoContador

    render(){
        //const {tempoTorreIgreja} = useContext(TempoContador);
        //let {minutes, seconds} = this.context;

        let falaTelaSelecaoJogos = {
            apresentacao:  `Bem-vindo ao reino de pragnanz ${this.contextoMain.state.player.nome}! Clique nas 
                                     placas para explorar o reino e nos ajudar, garanto que um conhecimento fantástico 
                                     lhe aguarda.`
        }

        let falasLab = {
            apresentacao:  `não! O mago de gelo prendeu vários animais dentro daquele globo de neve mágico. ${this.contextoMain.state.player.nome}! 
                              rotacione as formas escuras para formar a silhueta de cada animal e assim libertá-los do encantamento.`,

                            /*RETIRAR ESSE CÓDIGO CASO A MECANICA DE PASSAR AS FALAS SEJA REJEITADA
                             ,"Olá "+this.props.ctxMain.state.player.nome+" !!! Seja bem-vindo(a) ao jogo da torre do relógio!",
                             "O jogo se baseria em você girar...",
                             "Ao terminar, vc salvará alguns animais que estavam presos no globo de cristal",
                             "Então é isso! Boa sorte pra vc!",
                             "começando o jogo em...",
                             "3...",
                             "2...",
                             "1...",
                             "Vaiiii !!!!"
                            ], */

            parabenizacao: `parabéns ${this.contextoMain.state.player.nome}! Você completou o desafio em ${global.DadosJogador.getTempoLaboratorio()[0]}min 
                            e ${global.DadosJogador.getTempoLaboratorio()[1]}s e teve uma boa noção dos princípios da pregnância 
                            da forma e do fechamento.`
        };


        let falasTorre = {
            apresentacao:  `droga! parece que o amuleto que faz o relógio funcionar se desmontou. ${this.contextoMain.state.player.nome}, 
                              me ajude a procurar as peças e montá-lo novamente na parede.`,
                          
                            /*APAGAR OS DE BAIXO DEPOIS!!!
                                "Olá "+this.props.ctxMain.state.player.nome+" !!! Seja bem-vindo(a) ao jogo da torre do relógio!",
                                "O jogo se baseria em você girar...",
                                "Ao terminar, vc salvará alguns animais que estavam presos no globo de cristal",
                                "Então é isso! Boa sorte pra vc!" ],   */


            parabenizacao: `parabéns ${this.contextoMain.state.player.nome}! você completou o desafio em ${global.DadosJogador.getTempoTorre()[0]}min e
                              ${global.DadosJogador.getTempoTorre()[1]}s e teve uma boa noção dos princípios da semelhança, segregação e unificação.`
                            
                             //   "Parabéns XXX !!! Você completou o jogo com êxito", "Você concluiu esse jogo em XXmin e YYs "
        };

        
        let falasMoinho={
            apresentacao:  `Hmmm... parece que as engrenagens que faziam o moinho funcionar sairam de seus eixos. ${this.contextoMain.state.player.nome}!
                             Ajude os fazendeiros do reino a consertar o moinho movendo as engrenagens de volta para seus respectivos eixos.`,
                            
                             /*
                                "Hmmmm... parece que as engrenagens que faziam o moinho funcionar sairam de seus eixos. Viajante! Ajude os fazendeiros do reino a consertar o moinho movendo as engrenagens de volta para seus respectivos eixos. ",
                                "Olá "+this.props.ctxMain.state.player.nome+" !!! Seja bem-vindo(a) ao jogo do moinho !!!",
                                "O jogo se baseria em você arrastar engrenagens para os encaixes azuis...",
                                "Ao terminar o moinho poderá funcionar normalmente",
                                "Então é isso! Boa sorte pra vc!" ], */


            parabenizacao:  `parabéns ${this.contextoMain.state.player.nome}! Você completou o desafio em ${global.DadosJogador.getTempoMoinho()[0]}min e
                             ${global.DadosJogador.getTempoMoinho()[1]}s e teve uma boa noção dos princípios da unidade, continuidade e proximidade.`
                            // "Parabéns XXX !!! Você completou o jogo com êxito", "Você concluiu esse jogo em XXmin e YYs "]
        };



        let atual; //ESSA VARIAVEL GUARDARÁ UM OBJETO COM AS FALAS DO PERSONAGEM. ELE RECEBERÁ E EXIBIRÁ AS FALAS DE ACORDO COM A TELA EM QUE O USUÁRIO ESTÁ
        /*
        if(this.props.telaAtual=="laboratorio" && this.props.ctxLaboratorio.state.jogoConcluido===false ){
            texto = this.state.telaLaboratorio.apresentacao;
       
        }else if(this.props.telaAtual=="moinho" && this.props.ctxMoinho.state.jogoConcluido===false){
            texto = this.state.telaMoinho.apresentacao;

        }else if(this.props.telaAtual=="torreIgreja" && this.props.ctxTorreIgreja.state.jogoConcluido===false){
            texto = this.state.telaMoinho.apresentacao;
        }
*/
        //if(this.props.ctxLaboratorio.chamarPersonagem===true)


         //VERIFICANDO QUAL A TELA ESTÁ SENDO VISÍVEL NO MOMENTO PARA EXIBIR O PERSONAGEM COM A FALA DE ACORDO COM O CONTEXTO DELA
         switch(this.props.telaAtual){
            case "laboratorio":  
                atual = falasLab; break;

            case "moinho": 
                 atual = falasMoinho; break;

            case "torreIgreja":  
                atual = falasTorre; break;

            case "telaSelecao": 
                 atual = falaTelaSelecaoJogos; break;

            default:  console.log("nenhuma fala identificada"); break;
         }

         
         return(<>
                <div id="magus" className="personagemAparecer"></div>
                
                <div id="mensagemParabens" className="aparecerCaixaDeMensagem">
                        <h3 id="fala">  
                            { this.props.estadoPersonagem=="apresentando" &&( atual.apresentacao.toUpperCase() )}
                            { this.props.estadoPersonagem=="parabenizando" &&( atual.parabenizacao.toUpperCase() ) }
                        </h3>

                        <p> <span id="clique"> { this.props.estadoPersonagem=="apresentando" ? "Clique para prosseguir":"Clique no botão superior direito para sair"} </span></p>
                  {/* <p> <span id="avancar"> A (avançar)</span>  <span id="pular"> S (pular) </span> </p> */}
                </div>

                <div id="fundoPreto" className="escurecerFundo"></div>
        </>);


        
    }



    prosseguir = (event)=>{
        //switch(this.props.telaAtual){//para cada tela o personagem falará coisas diferentes
            //----------------------------------------------------------------------------------------------
          if(this.props.estadoPersonagem=="apresentando" && this.state.personagemEsta !="oculto"){
                    document.getElementById("magus").className= "personagemDesaparecer"; //.classList.add('desaparecer');
                    //document.getElementById("magus").classList.remove("personagemAparecer");
                    //document.getElementById("magus").classList.add("personagemDesaparecer");

                    document.getElementById("mensagemParabens").className = "desaparecerCaixaDeMensagem";  
                   // document.getElementById("mensagemParabens").classList.remove("aparecerCaixaDeMensagem"); 
                    //document.getElementById("mensagemParabens").classList.add("desaparecerCaixaDeMensagem"); 
                   
                    document.getElementById("fundoPreto").className = "clarearFundo";   
                    //document.getElementById("fundoPreto").style.animationDirection = "reverse";

                    window.setTimeout( ()=>{
                         this.setState({ personagemEsta: "oculto" });
                         this.contextoMain.pararContador=false;
                    }, 1000);            
            }
                
                /*
                if(this.props.ctxLaboratorio.state.estadoPersonagem=="apresentando"){//selecionando o estado do personogem.. Se ele está dando dicas ou parabenizando o jogador

                    if( (event.key=='A' || event.key=='a')  && (this.posicaoFalas + 1 < this.falasLab.apresentacao.length) ){
                         document.getElementById('fala').innerText = this.falasLab.apresentacao[++this.posicaoFalas];
                         
                         if(this.posicaoFalas== this.falasLab.apresentacao.length-1){//Caso a púltima fala esteja sendo apresentada: 
                                document.getElementById('avancar').style.display = "none";
                                document.getElementById('pular').innerText= "(S) Começar!";
                         }

                    }else if(event.key=='S' ||  event.key=='s'){//a tecla S quando apertada faz com que ocorra a exibição da útima fala do personagem
                        document.getElementById('fala').innerText = this.falasLab.apresentacao[ this.falasLab.apresentacao.length-1];//imprimindo a ultima fala
                        this.posicaoFalas =  this.falasLab.apresentacao.length-1;

                        this.setState({
                            showPerson: false
                        });

                       // alert("retirando o persongem");
                        document.getElementById("magus").style.animationName = "desaparecer";
                        document.getElementById('mensagemParabens').style.animationName= "desaparecer";
                       
                        setTimeout( ()=>{
                            this.props.ctxMain.pararContador= false;//iniciando o contador
                            //this.props.ctxLaboratorio.setState({chamarPersonagem: false})//renderiza a tela de laboratorio novamente, porém, sem o personagen
                        }, 1000);
                    
                    }
        
                 //---------------------------------------------------------------
                } */
            
            //----------------------------------------------------------------------------------------------
          
           // default: //alert("tela atual não definida...."); 
        //break; }
    }



   componentDidUpdate(){
        //console.log("estado do personagem passado: "+this.props.estadoPersonagem+" // estado interno: "+this.state.personagemEsta);
        //FAZENDO O PERSONAGEM APARECER APÓS TERMINAR O JOGO 
        if(this.props.estadoPersonagem=="parabenizando" && this.state.personagemEsta=="oculto"){
            this.contextoMain.pararContador=true;
            document.getElementById("magus").className= "personagemAparecer"; //.classList.add('desaparecer');
            //document.getElementById("magus").className.remove("personagemAparecer");

            document.getElementById("mensagemParabens").className = "aparecerCaixaDeMensagem";  
            //document.getElementById("mensagemParabens").className.remove("aparecerCaixaDeMensagem"); 
        
            document.getElementById("fundoPreto").className = "escurecerFundo";   
           // document.getElementById("fundoPreto").style.animationDirection = "normal"; //NÃO FUNCIONA

            //window.setTimeout( ()=>{
             window.setTimeout( ()=>{
                 document.getElementById("magus").className="falando";
             }, 1500);

           //  this.state={ personagemEsta: "parabenizando" }
           //}, 1000); 
        }

    }

    
    componentDidMount(){
        window.setTimeout( ()=>{
            document.getElementById("magus").classList.add("falando");
            document.getElementById("magus").classList.remove("personagemAparecer");
            document.addEventListener('click', this.prosseguir);//A PESSOA SÓ PODERÁ PULAR A FALA DO PERSONAGEM DEPOIS QUE ELE APARECER NA TELA
        }, 2500);
    }

    componentWillUnmount(){
          document.removeEventListener('click', this.prosseguir);
          document.getElementById("magus").classList.remove("falando");
    }
}


//Personagem.contextType = SaveTimer;
//static contextType = AuthContext;
//<button onClick={this.context.logout}>Logout</button>

export default Personagem;
