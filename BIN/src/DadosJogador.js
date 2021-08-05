var playerGlobal;

class Player{
    constructor(){
        this.name = "";
        this.tempoTorreIgreja = 0;
        this.tempoMoinho = 0;
        this.tempoLaboratorio = 0;
    }

    getTotalTimeIgreja(){
        return this.tempoTorreIgreja;
    }  

    getTotalTimeMoinho(){
        return this.tempoMoinho;
    }  

    getTotalTimeLaboratorio(){
        return this.tempoLaboratorio;
    }  
}

var salvarPlayer = (jogador)=>{
    playerGlobal = jogador;
   // alert(playerGlobal.name);
}

const jogador = new Player();
module.exports = { jogador, salvarPlayer, playerGlobal }