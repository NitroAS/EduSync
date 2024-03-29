import '../../Assets/CSS/locadora.css'
import { Header } from '../../Components/Header/header'
import { Footer } from '../../Components/Footer/footer'
import { useEffect, useState } from 'react'
import { apiCase } from '../../services/api'
import Swal from 'sweetalert2'

import { ButtonLocadora } from '../../Components/ButtonLocadora/buttonLocadora'

export const Locadora = (): JSX.Element => {
    let propsLocadora: any = {
        descriptionHome: 'Home',
        descriptionCarros: 'Carros',
        descriptionReservas: 'Reservas',
        descriptionLocadora: 'Locadora',
        descriptionPerfil: 'Perfil',
        supdescription: 'Sair',
        underlineLocadora: 'underlineLocadora',
    }

    const [locadora, setLocadora] = useState<any[]>([]);

    const PegandoLocadora = () => {
        apiCase.get('locadoras')
            .then(resultado => {
                setLocadora(resultado.data)

            })
    }

    useEffect(() => {
        PegandoLocadora()
    }, [])

    const ExcluirLocadora = (id: any) => {

        Swal.fire({
            title: 'Deseja Excluir esse Locadora??',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Excluir!'
          })

          .then((resultado) =>  {
            if(resultado.isConfirmed){
                apiCase.delete(`locadoras/${id}`)
                    .then(() => {
                        window.location.reload()
      
      
                    })
            }
          })
               
    }

    const [booleano, setBooleano] = useState(false)

    const [guardaIdLocadoras, setGuardaIdLocadoras] = useState(0);
    const [nomeLocadoras, setNomeLocadoras] = useState('');
    const [enderecoLocadoras, setEnderecoLocadora] = useState('');
    const [telefonelocadora, setTelefoneLocadora] = useState('')
    const [id,  setId] = useState(0)

        const TrazerDadosDoLocadora = (id:number, nome: string, endereco: string, telefone: string) => {

            setId(id)
            setBooleano(true)
            setNomeLocadoras(nome)
            setEnderecoLocadora(endereco)
            setTelefoneLocadora(telefone)
            setGuardaIdLocadoras(id)
        }

    window.scroll({
        top:
            310, left: 0, behavior: 'smooth'
    })

    // const feita para guarda o Id e la em baixo no Onclick

    
    const EditarLocadora = () => {

        if (nomeLocadoras !== '' && enderecoLocadoras !== '' && telefonelocadora !== '' ) {


            apiCase.put(`locadoras/${id}`, { nome: nomeLocadoras , endereco: enderecoLocadoras , telefone: telefonelocadora  })
                .then(() => {
                    window.location.reload()
                })
        }

        else {
            Swal.fire({
                title: 'Por Favor, Preencha os campos vazios',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#DB1812',
                cancelButtonColor: '#41B8D2',
                confirmButtonText: 'OK'
            })
        }

    }

    const CadastrarLocadora = () => {

        for (let index = 0; index < locadora.length; index++) {
            if(locadora[index].nome === nomeLocadoras)
            {
                return
            }
        }

        if (nomeLocadoras !== '' && enderecoLocadoras !== '' && telefonelocadora !== '' ) {
            apiCase.post(`locadoras`, {nome: nomeLocadoras, endereco: enderecoLocadoras, telefone: telefonelocadora})
            .then(() => {
                window.location.reload()
            })
        }

        else {
            Swal.fire({
                title: 'Por Favor, Preencha os campos vazios',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#DB1812',
                cancelButtonColor: '#41B8D2',
                confirmButtonText: 'OK'
            })
        }
    }

    return (
        <>
            <Header objeto={propsLocadora} />
            <div className='mainLocadora'>
                <section className='locadora'>
                    <h2 id='tituloLocadora'>Locadora</h2>
                    <div className='inputsLocadora'>
                        <div className='centralizarInputslocadora'>
                            <input
                                placeholder='Locadora:'
                                className='inputCadastrarLocadora'
                                type="text"
                                defaultValue={nomeLocadoras}
                                onChange={e => setNomeLocadoras(e.target.value)}
                            />
                        </div>
                        <div className='centralizarInputslocadora'>
                            <input 
                            placeholder='Endereço:' 
                            className='inputCadastrarLocadora' 
                            type="text"
                            defaultValue={telefonelocadora}
                                onChange={e => setEnderecoLocadora(e.target.value)}
                             />
                        </div>
                        <div id='centralizarInputBotao'>
                            <input 
                                placeholder='Telefone:' 
                                className='inputCadastrarLocadora telefoneLocadora'
                                type="text"
                                defaultValue={enderecoLocadoras}
                                onChange={e => setTelefoneLocadora(e.target.value)}
                             />
                            
                           
                            <ButtonLocadora booleano={booleano} Editar={EditarLocadora} Cadastrar={CadastrarLocadora} />
                        </div>
                    </div>
                </section>

                {locadora.map((item): any => {
                    return (
                        <section className='SectionCardsLocadora'>
                            <div className='cardsLocadora'>
                                <div className='CentralizarNomeLocadora'>
                                    <h3 className='nomeLocadora'>{item.nome}</h3>
                                </div>
                                <div className='centralizarInformacoesLocadora'>
                                    <p className='informacoesLocadora'>{item.endereco}</p>
                                    <p className='informacoesLocadora'>{item.telefone}</p>
                                </div>
                                <div className='botoesLocadora'>
                                    <button className='botaoEditar'onClick={() => TrazerDadosDoLocadora ( item.id , item.nome , item.telefone, item.endereco  )}>Editar</button>
                                    <button className='botaoExcluir' onClick={() => ExcluirLocadora(item.id)}>Excluir</button>
                                </div>
                            </div>
                        </section>
                    )
                })}
            </div>
            <Footer />
        </>
    );
}

export default Locadora