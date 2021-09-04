module.exports = global.DadosJogador = {
    nome: "",
    tempoJogoLaboratorio: [0, 0],
    tempoJogoMoinho: [0, 0],
    tempoJogoTorreRelogio: [0, 0],
    tempoTotal: "",

    getAllData(){
        return { 
            nome: this.nome,
            tempoJogoLaboratorio: (this.tempoJogoLaboratorio[0])+":"+(this.tempoJogoLaboratorio[1]),
            tempoJogoMoinho: this.tempoJogoMoinho[0]+":"+this.tempoJogoMoinho[1],
            tempoJogoTorreRelogio: this.tempoJogoTorreRelogio[0]+":"+this.tempoJogoTorreRelogio[1],
            tempoTotal: this.tempoTotal
        }
    },

    getTempoTorre: function(){
        return this.tempoJogoTorreRelogio;
    },

    getTempoMoinho: function(){
        return this.tempoJogoMoinho;
    },

    getTempoLaboratorio: function(){
        return this.tempoJogoLaboratorio;
    },

    setNamePlayer: function(nomeJ){
        return this.nome = nomeJ;
    },

    setTempoTorre: function(tempo){
        this.tempoJogoTorreRelogio = tempo;
    },

    setTempoMoinho: function(tempo){
       this.tempoJogoMoinho = tempo;
    },

    setTempoLaboratorio: function(tempo){
        this.tempoJogoLaboratorio = tempo;
    },

    setTempoTotal(tempo){
        this.tempoTotal = tempo;
    },

    calcularTempoTotal(){
        let minTotal = this.tempoJogoTorreRelogio[0] + this.tempoJogoMoinho[0] + this.tempoJogoLaboratorio[0];//SOMANDO TODOS OS MINUTOS LEVADOS NOS 3 JOGOS
        let segTotal = this.tempoJogoTorreRelogio[1] + this.tempoJogoMoinho[1] + this.tempoJogoLaboratorio[1];//SOMANDO TODOS OS SEGUNDOS LEVADOS NOS 3 JOGOS
     
        let minutosRestantes=0, segundosRestantes=0, val = segTotal/60;
     
        if( (val)%1 != 0 && !isNaN(val % 1)  ){//VERIFICANDO SE O TOTAL DE SEGUNDOS DIVIDIDO POR 60 É DECIMAL. SE FOR,  OS SEGUNDOS QUE "SOBRAM" NA DIVISÃO POR 60 FICARÃO GUARDADOS NA VARIAVEL DE "segTotal"
            minutosRestantes = Math.floor(segTotal/60);
            segundosRestantes = segTotal - (minutosRestantes*60);//PEGANDO O VALOR QUE SOBROU DOS DOS SEGUNDOS TOTAIS

        }else if((val)%1 == 0){
            minutosRestantes = val;
            segundosRestantes = 0;
        }
     
        minTotal += minutosRestantes;
        segTotal = segundosRestantes;
     
        minTotal = (minTotal>=0 && minTotal<10) ? "0"+minTotal : minTotal;
        segTotal = (segTotal>=0 && segTotal<10) ? "0"+segTotal : segTotal; 
     
        this.tempoTotal = ""+minTotal+" : "+segTotal;
     }
}
