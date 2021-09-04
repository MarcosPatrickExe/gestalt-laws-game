import React from 'react';
import './styles/TransitionEffectsStyle.css';

export default function transitionEffects(props){

  let efeito = null;

  switch(props.effectName){
    case "fadeOut":
        efeito = <div className="fadeOut"></div>; break;

    case "fadeIn":
        efeito = <div className="fadeIn"></div>; break;
   
    default: ;
  }

    return(efeito);
}