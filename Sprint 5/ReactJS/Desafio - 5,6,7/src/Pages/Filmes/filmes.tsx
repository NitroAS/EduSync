import React, { useEffect, useState } from "react";
import './../../Assets/CSS/filmes.css';
import CinemaFilmes from './../../Assets/img/cinema 1.png'
import { Header } from "../../Components/header/header";
import { apiDesafio } from "../../Services/api";
import { Footer } from "../../Components/footer/footer";
import { ModalFilmes } from "../../Assets/ModalFilmes/ModalFilmes"
let propsFilmes: any = {
    description: 'Cadastre os filmes de sua preferência ',

}

export const Filmes = (): JSX.Element => {

    const [generos, setGeneros] = useState<any[]>([]);
    const [filmes, setFilmes] = useState<any[]>([]);

    const listarGeneros = () => {

        apiDesafio.get('Genre')
            .then(resultado => {
                setGeneros(resultado.data)
                console.log(resultado.data)



            })

    }

    

    const listarFilmes = () => {
        let quantidadeElementos: number = generos.length

        for (let index = 0; index < quantidadeElementos; index++) {
            apiDesafio.get(`Genre/${index + 1}/TittleMove`)
                .then(resultadoFilmes => {
                    setFilmes(filmes => filmes.concat(resultadoFilmes.data))
                })
        }
    }

    useEffect(() => {
        listarGeneros()
    }, [])

    useEffect(() => {
        listarFilmes()
    }, [generos.length])

    useEffect(() => {
        console.log(filmes)
    }, [filmes.length])



    const ExcluirFilmes = (idGenero: number, idFilme: number) => {

        if (window.confirm('Deseja realmente excluir o genero?')) {
            apiDesafio.delete(`Genre/${idGenero}/TittleMove/${idFilme}`)
                .then(() => {
                    window.location.reload()

                })
        }


    }




    const [nomeFilme, setNomeFilme] = useState('')
    const [nomeidGenero, setIdGenero] = useState(0)
    const Salvar = (idGeneros: any) => {
        apiDesafio.post(`Genre/${idGeneros}/TittleMove/`, { Tittle: nomeFilme })
            .then(() => setNomeFilme(''))
            .then(() => { window.location.reload() })

    }


    const [modalFilmes, SetModal] = useState('hide')

    const AbrirFecharModal = (estadoAtual:any) =>
    {
        if(estadoAtual === 'hide')
        {
            SetModal('show')
        }
        else
        {
            SetModal('hide')
        }

        window.scroll({top: 
            590,left: 0,behavior: 'smooth'});
    }


    return (
        <>
            <Header objeto={propsFilmes} />
            <main>

                <div className="filmesFilmes">
                    <h2 className="filmesTexto">Filmes</h2>
                    <img src={CinemaFilmes} alt="foto de Filme" className="CinemaFilmes" />
                </div>

                <label className="cadastrarFilmes">Cadastrar Filmes
                </label >
                <div className="AlinhamentoInputsFilmes">
                    <div className="inputsF">
                        <input className="inputsFilmesTexto" 
                        type="text" name="TFilmes" 
                        placeholder="Título do Filme"
                        value={nomeFilme}
                        onChange={(estadoDoInput) => setNomeFilme(estadoDoInput.target.value)} />
                        <div className="Alinhamentoselect">
                            <select name="generoFilmes" id="GeneroFilmes" className="selectFilmes"  onChange={(estadoDosSelect) => setIdGenero(Number(estadoDosSelect.target.value))}>
                                <option className="option" hidden selected >Gênero</option>
                                {generos.map((item): any => {
                                    return (

                                        <option className="option" value={item.idGeneros}>{item.NomeGenre}</option>
                                    )
                                })
                                }
                            </select>
                        </div>
                        <div className="espacamentoBtnSalvarFilmes">
                            <button className="btnSalvarFilmes" onClick={() => {Salvar(nomeidGenero)}} >Salvar</button>
                            
                        </div>
                    </div>
                </div>
                {filmes.map((item): any => {

                    return (

                        <div className="mapAlinhamentoFilmes">

                            <div className="mapPFilmes">

                                <div>
                                    <p >{item.Tittle}</p>
                                </div>
                                <div className="pMapFilmes">
                                    <p >{item.Genero.NomeGenre}</p>
                                </div>

                            </div>

                            <ModalFilmes info="X" mostrar={modalFilmes} funcao={AbrirFecharModal}/>
                            <div className="divDosBtnCima">
                                <button className="btnEditarFilmes"onClick={() => AbrirFecharModal(modalFilmes)}>Editar</button>
                                <button className="btnExcluirFilmes" onClick={() => ExcluirFilmes(item.Genero.idGeneros, item.idFilme,)}>Excluir</button>
                            </div>

                        </div>


                    )

                })}


            </main>
            <Footer />
        </>
    );

}