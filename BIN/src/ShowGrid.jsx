import React, {Children, Component} from 'react';
import Canvas from './Canvas.js';

export default class ShowGrid extends Component{

    constructor(props){
        super(props);
         this.state = {
             grid: false
         }
      
    }

    alternar = () =>{
      
         this.setState({
           grid: (!this.state.grid)//alternando valor a cada clique
         }); 

        //document.getElementsByTagName("button")[0].style="color: red;";
        //É possível renderizar mais de uma vez!!!
    }

    render(){ 
      return(
          <div>
            {props.children}

            {/*<Canvas grid={this.state.grid} />*/}

            <button style={{position: 'absolute', left: '90%', top: '90%'}} onClick={()=>{this.alternar()}}>Exibir grade</button>
          
          </div>
      );
    };
}
