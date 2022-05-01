import React from "react";
import '../../Assets/CSS/modalGenero.css';


export const ModalUsuario = (props: any) => {

    return (

        <div className="alinhamentoModal">
            <div className={"corDoModal " + props.mostrar}>

            </div>
            <div className={"modal " + props.mostrar}>

                <div className="btnAlinhamentoModal">

                    <button className="btnModal" onClick={props.funcao}>X</button>

                </div>

                <div className="cardtxt">

                    <h1>MASP</h1>

                </div>

                <div className="txtsPai">


                    <p className="primeiro-txt">Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200</p>

                    <p className="meio-txt">Um dos maiores símbolos da arquitetura moderna, o Museu de Arte de São Paulo é tido como um dos marcos de São Paulo, conhecido no país inteiro e ao redor do mundo. Essa é só um pouco da história do MASP, que tem muito mais a ser contado. </p>

                    <p className="final-txt">Todas as terças das 10 as 20hs</p>

                </div>
            </div>
        </div>


    );


}

export default ModalUsuario 