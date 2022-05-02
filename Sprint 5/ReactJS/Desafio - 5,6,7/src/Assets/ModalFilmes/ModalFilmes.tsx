import React from "react";
import '../../Assets/CSS/modalFilmes.css';


export const ModalFilmes = (props: any) => {

    return (

        <div className="alinhamentoModalFilme">
            <div className={"corDoModalFilme " + props.mostrar}>

            </div>
            <div className={"modalFilme " + props.mostrar}>

                <div className="btnAlinhamentoModalFilme">

                    <button className="btnModalFilme" onClick={props.funcao}>X</button>

                </div>

                <div className="cardtxtFilme">

                    <h1>Edite o Filme</h1>

                    <div className="AlinhamentoInputModalFilme">

                        <input
                            type="text"
                            placeholder="Filme"
                            className="inputFilmeModal"
                        />
                        <div className="AlinhamentoSalvarModalFilme">
                            <button className="btnFilmeModalSalvar" >Salvar</button>
                        </div>
                    </div>
                </div>


                <footer className="ModalFilmeFooter">

                </footer>
            </div>
        </div>

    );


}

export default ModalFilmes 