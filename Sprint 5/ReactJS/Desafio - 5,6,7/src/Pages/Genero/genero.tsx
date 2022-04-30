import React, { useEffect, useState } from "react";
import '../../Assets/CSS/genero.css';
import Theater from '../../Assets/img/theater 1.png'
import { Header } from "../../Components/header/header";
import { Footer } from "../../Components/footer/footer";
import { apiDesafio } from "../../Services/api";
import axios from "axios";


let propsGenero: any = {
    description: 'Cadastre os gêneros dos filmes',

}
export const Genero = (): JSX.Element => {

    //    CRUDE

    // Listar,Cadastrar , Delete , Edita 

    // State = generos = constante, ele mudar não a constante 
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


    const Excluir = (id: any) => {
        if (window.confirm('Deseja realmente excluir o genero?')) {
            apiDesafio.delete(`Genre/${id}`)
                .then(() => {
                    window.location.reload()

                })
        }


    }

    const [nomeGenre, setNomeGeneros] = useState<any>('');
    const Cadastrar = () => {
        
        apiDesafio.post(`Genre`, { NomeGenre : nomeGenre })
        
        .then(() => {
            
            setNomeGeneros('')
            
        })

        .then(() => {
            window.location.reload()
        })
    }


    return (
        <>
            <Header objeto={propsGenero} />

            <main>
                <h1 className="generoGenero">Gênero</h1>

                <img src={Theater} alt="Logo do Gênero" className="logoGenero " />

                <div className="cadastroGenero">
                    <div>
                        <label className="labelGenero">Cadastrar Gênero</label>
                        <input
                            type="text"
                            placeholder="Gênero"
                            className="inputGenero"
                            value={nomeGenre}
                            onChange={(estadoDoInput) => setNomeGeneros(estadoDoInput.target.value)} />
                    </div>

                    <div>
                        <button className="btnGeneroSalvar" onClick={() => Cadastrar()} >Salvar</button>
                    </div>
                </div>


                {/* CHAMANDO A API DE GENEROS */}

                {generos.map((item): any => {

                    return (

                        <div className="mapAlinhamento">
                            <div className="pMap">

                                <p>{item.NomeGenre}</p>
                            </div>


                            <div className="divDosBtnCima">
                                <button className="btnEditarGenero">Editar</button>
                                <button className="btnExcluirGenero" onClick={() => Excluir(item.id)} >Excluir</button>
                            </div>

                        </div>
                    )
                })}
            </main>
            <Footer />
        </>
    );
}
// limitar para n usar o mesmo nome - extra