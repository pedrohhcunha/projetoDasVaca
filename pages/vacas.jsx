import styles from '../styles/vacas.module.scss'
import Input from '../components/Input'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faTimes } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

export default function Vacas(props) {

    const [stateModalCreate, setStateModalCreate] = useState(false);

    const [statusModalViewVaca, setStatusModalViewVaca] = useState(false);

    const [atualVacaView, setAtualVacaView] = useState(0);

    useEffect(() => {
        document.addEventListener("keydown", event => {
            if(event.keyCode === 27){
                setStateModalCreate(false)
            }
        });
    }, []);

    const [dataFormCriar, setDataFormCriar] = useState({
        file: "",
        nome: "",
        codigo: "",
        raca: "",
        sexo: ""
    });

    const handleInput = event => {
        if(event.target.name !== "fotoCriarvaca"){
            setDataFormCriar({...dataFormCriar, [event.target.name]: event.target.name})
        } else {
            setDataFormCriar({...dataFormCriar, file: event.target.files[0]})
        }
    }

    const handleSubmitCriar = event => {
        event.preventDefault()

        axios.post('/api/criar_vaga', dataFormCriar).then((response) => {
            console.log(response.data)
            if(response.data.success){
              setVacas([...vacas, response.data.vaca_adicionada])
              setStateModalCreate(false)
            }
        })
    }

    const [vacas, setVacas] = useState([
        {
            nome: "vaca",
            codigo: "sdsdsd",
            raca: "sdsdsd",
            sexo: "sdsd",
            data: "sdsd",
            status: true
        }
    ]);

    return(
        <main className={styles.main}>
            <div className={styles.areaTopo}>
                <h1 className={styles.titulo}>Vacas</h1>
                <div className={styles.controllers}>
                    <button onClick={() => setStateModalCreate(true)} className={styles.button}>Adicionar vaca</button>
                </div>
            </div>
            <div className={styles.vacas}>
                <table className={styles.table}>
                    <thead>
                        <th className={styles.linha}>
                            <td>N°</td>
                            <td>Nome</td>
                            <td>Sexo</td>
                            <td>Raça</td>
                            <td>Data de entrada</td>
                            <td>---</td>
                        </th>
                    </thead>
                    <tbody>
                        {vacas.map((vaca, index) => (
                            <tr onClick={() => {
                                setStatusModalViewVaca(true)
                                setAtualVacaView(index)
                            }} key={index} className={styles.linha}>
                                <td>{vaca.codigo}</td>
                                <td>{vaca.nome}</td>
                                <td>{vaca.sexo}</td>
                                <td>{vaca.raca}</td>
                                <td>{vaca.data}</td>
                                <td>{vaca.status ? "disponivel" : "indisponivel"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <aside className={`${styles.asideForm} ${stateModalCreate ? styles.active : ''}`}>
                <form onSubmit={event => handleSubmitCriar(event)} className={styles.modalForm}>
                    <div className={styles.areaFoto}>
                        <img className={styles.imgPreview} src={dataFormCriar.file !== "" ? URL.createObjectURL(dataFormCriar.file) : ""} alt="" />
                        <input type="file" name="fotoCriarvaca" id="fotoCriarvaca" onChange={event => handleInput(event)} />
                        <label className={`${styles.labelImagem} ${dataFormCriar.file !== "" ? styles.withPhoto : ''}`} htmlFor="fotoCriarvaca">
                            <FontAwesomeIcon icon={faUpload} className={styles.icon}/>
                            <span>Adicionar imagem</span>
                        </label>
                    </div>
                    <Input handle={event => handleInput(event)} name="nome" label="Nome do bovino" type="text"/>                            
                    <Input handle={event => handleInput(event)} name="codigo" label="Código do brinco" type="text"/>                            
                    <Input handle={event => handleInput(event)} name="raca" label="Raça do bovino" type="text"/>
                    <Input handle={event => handleInput(event)} name="sexo" label="Sexo do bovino" type="text"/>
                    <button type="submit" className={styles.buttonEnviar}>Cadastrar</button>  
                </form>
            </aside>
            <aside className={`${styles.asideForm} ${statusModalViewVaca ? styles.active : ""}`}>
                <div className={styles.modalMostrarVaca}>
                    <FontAwesomeIcon onClick={() => setStatusModalViewVaca(false)} className={styles.iconClose} icon={faTimes}/>
                    <div className={styles.areaTopo}>
                        <div className={styles.areaFoto}>

                        </div>
                        <div className={styles.areaInfoTopo}>
                            <h1>{vacas[atualVacaView].nome}</h1>
                            <h2>{`Código: ${vacas[atualVacaView].codigo}`}</h2>
                            <h2>{`Sexo: ${vacas[atualVacaView].sexo}`}</h2>
                            <h2>{`Data de entrada: ${vacas[atualVacaView].data}`}</h2>
                            <h2>{`Status: ${vacas[atualVacaView].status}`}</h2>
                        </div>
                    </div>
                </div>
            </aside>
        </main>
    )
}