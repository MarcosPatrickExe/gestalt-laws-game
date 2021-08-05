import React, {Component} from 'react';
import {ReactComponent as MolduraContador} from './images/contadorMoldura.svg';
import './styles/ContadorStyle.css';

class Contador extends Component{

    constructor(props){
       super(props);

        this.state= {
            time: [0, 0],
            segundos: 0
        }
    }

    componentWillUnmount(){
        let tempoTotal = [ this.state.time[0], this.state.segundos];

        switch(this.props.ctxMain[1]){

            case "TorreIgreja": 
                this.props.ctxMain[0].setState({
                    player: {
                        tempoTorreIgreja: tempoTotal,
                        ...this.props.ctxMain[0].player
                    }
                });
            break;


            case "Moinho": 
                this.props.ctxMain[0].setState({
                    player: {
                        tempoMoinho: tempoTotal,
                        ...this.props.ctxMain[0].player
                    }
                });
            break;

            case "Laboratorio": 
                this.props.ctxMain[0].setState({
                    player: {
                        tempoLaboratorio: tempoTotal,
                        ...this.props.ctxMain[0].player
                    }
                });
            break;
        }
    }

    componentDidMount(){

       setTimeout( ()=>{
            setInterval( ()=>{
                
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