import React, {Component} from 'react';
import {ReactComponent as MolduraContador} from './images/contadorMoldura.svg';
//import TorreIgreja from './pages/TorreIgreja';
import './styles/ContadorStyle.css';

class Contador extends Component{
    _isUnmouted = false;

    constructor(props){
       super(props);
       
       this.ctxMain = props.ctxMain;//ctxMain recebe o contexto (this) da classe 'Main' via props

       this.state= {
            time: [0, 0],
            segundos: 0
       }
    }


    componentWillUnmount(){ this._isUnmouted=true;}

    componentDidMount(){

       setTimeout( ()=>{
            setInterval( ()=>{
               if(!this._isUnmouted){

                    if(this.state.segundos == 59){

                        let aux = this.state.time.map(
                            (minutoSegundo, index)=> {
                                return (index==0) ? ++minutoSegundo : 0;
                            });

                        this.setState({
                                time: aux,
                                segundos: 0
                        });
                    }else{
                    // console.log("this.state: "+this.state.segundos);
                        this.setState({
                                segundos: ++this.state.segundos
                        });
                    }


                    //atualizando o state do componente 'Main'
                    let tempoTotal = [ this.state.time[0], this.state.segundos];

                        switch(this.ctxMain[1]){
                            case "TorreIgreja": 
                             
                               this.ctxMain[0].tempoGeral.tempoTorreIgreja = tempoTotal;
                               console.log("testantando tempo geral em TorreIgreja: ");
                               console.dir(JSON.stringify(this.ctxMain[0].tempoGeral, null, 4));
                            break;


                            case "Moinho": 
                                this.ctxMain[0].tempoGeral.tempoMoinho = tempoTotal;
                                console.log("testantando tempo em moinho: ");
                                console.dir(JSON.stringify(this.ctxMain[0].state.player, null, 4));
                            break;


                            case "Laboratorio": 
                                this.ctxMain[0].tempoGeral.tempoLaboratorio = tempoTotal;
                                console.log("testantando tempo em laboratorio: ");
                                console.dir(JSON.stringify(this.ctxMain[0].state.player, null, 4));
                            break;
                        }
                 }

            }, 1000);
        }, 2000);
    }


    render(){
        return(
          <div>
                <div className="contadorBox">
                     <MolduraContador id="imgMoldura" />
                     <h2 id="segundos">{this.state.time[0]}:{this.state.segundos}</h2>
                </div>
                
          </div>
        );
    }
}

export default Contador;