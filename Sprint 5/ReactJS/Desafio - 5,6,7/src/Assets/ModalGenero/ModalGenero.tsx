import React from "react";
import '../../Assets/CSS/modalGenero.css';


export const ModalGenero = (props: any) => {

    return (

        <div className="alinhamentoModalGenero">
            <div className={"corDoModalGenero " + props.mostrar}>

            </div>
            <div className={"modalGenero " + props.mostrar}>

                <div className="btnAlinhamentoModalGenero">

                    <button className="btnModalGenero" onClick={props.funcao}>X</button>

                </div>

                <div className="cardtxtGenero">

                    <h1>Edite o Gênero</h1>

        <div className="AlinhamentoInputModal">

                      <input
                    type="text"
                    placeholder="Gênero"
                    className="inputGeneroModal"
                />
        </div>
                </div>


                <footer className="ModalGeneroFooter">

                </footer>
            </div>
        </div>


    );


}

export default ModalGenero 