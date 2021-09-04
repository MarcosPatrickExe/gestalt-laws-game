    //EM FUNÇÃO DA LARGURA DA JANELA:
    /*
    let larguraPadrao = 0.9501533742331288;
    let largura = window.innerWidth*larguraPadrao;
    let altura = largura / 1.778990450204638;
    console.log("tela sendo reajustada!!!");

    return {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: "auto",
        //display: "flex",
        //justifyContent: "center",
        //alignContent: "center",
        width: largura-20,
        height: altura-20,
        zIndex: -100
    } 
    */
function reajustarTela(){
    //EM FUNÇÃO DA ALTURA DA TELA:
    let altura = window.innerHeight;
    let largura = altura * 1.778990450204638;

    //alert("altura: "+altura+"/ larg: "+largura);
    //let valorR = (window.innerWidth - largura) /window.innerWidth;
   // console.log("Distancia da imagem-fundo à borda esquerda da tela: "+valorR/2);
   // console.log("Valor da altura: "+altura+"// largura: "+largura);
   // console.log("L circulo: "+"");

    //altura: 697  / largura 1239.95 (em relacao a imagem de fundo)

    return {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: "auto",
        //display: "flex",
        //justifyContent: "center",
        //alignContent: "center",
        width: largura,
        height: altura,
        zIndex: -10
     }
};


module.exports = reajustarTela;