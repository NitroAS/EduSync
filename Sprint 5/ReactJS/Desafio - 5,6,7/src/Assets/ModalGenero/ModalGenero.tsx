import React, { useEffect, useState } from "react";
import '../../Assets/CSS/modalGenero.css';
import { apiDesafio } from "../../Services/api";


export const ModalGenero = (props: any) => {

    const [generos, setGeneros] = useState<any[]>([]);

    const PegandoGeneros = () => {
        apiDesafio.get('Genre')
            .then(resultado => {
                setGeneros(resultado.data)
                



            })

    }

    useEffect(() => {

        PegandoGeneros()

    }, [])


    
    const [nomeGenero, setNomeGenero] = useState('');

    const EditarGenero = (id:number) => {
        apiDesafio.put(`Genre/${id}`, { NomeGenre : nomeGenero})
        .then(PegandoGeneros)
        .then(() => setNomeGenero(''))
        .then(() => {
            window.location.reload()

        })
    }

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
                    <div className="AlinhamentoSalvarModal">
                        <button className="btnGeneroModalSalvar" onClick={() => EditarGenero(generos.length)} >Salvar</button>
                    </div>
        </div>
                </div>


                <footer className="ModalGeneroFooter">

                </footer>
            </div>
        </div>


    );


}

export default ModalGenero 