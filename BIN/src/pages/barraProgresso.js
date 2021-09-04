import React from 'react';
import barraImagem from '../images/molduras_barra_progresso/barra_progresso_v3.1.png';

export default function BarraProgresso(props){

    const estiloBarra = {
        position: "absolute",
        left: "81.050%",
        top: "91.900%", 
        height: "5.550%",
        width: "17%",
        padding: "0.2%",
        backgroundImage: `url(${barraImagem})`,
        backgroundSize: "100%", 
        backgroundPosition: "center center",
        zIndex: 50
    }

    const fundoProgresso = {/*conteudo cinza */
        position: "relative",
        marginLeft: "14%",
        marginTop: "3%",
        top: "0%",
        left: "0%",
        height: "62%",
        width: "73%",
        backgroundColor: "gray",
        zIndex: 60
    }

    const taxaProgresso = {/*conteudo verde */
        position: "relative",
        marginLeft: "0%",
        marginTop: "0%",
        height: "100%",
        width: `${props.taxaProgresso}`,
        backgroundColor: "yellow",
        zIndex: 65
    }

    return(<> 
        <div style={estiloBarra} id="barraProgresso"> {/* imagem da moldura da barra de progresso*/}
            <div style={fundoProgresso}> {/*fundo de cor cinza */}
                 <div style={taxaProgresso}></div> {/* barra de progresso em cor amarela*/}
            </div>
        </div>
    </>);
}