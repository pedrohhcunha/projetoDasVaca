import styles from '../styles/vacas.module.scss'
import Input from '../components/Input'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons'

export default function Vacas(props) {

    const [stateModalCreate, setStateModalCreate] = useState(false);

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

        console.log(dataFormCriar)
    }

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
                        <tr className={styles.linha}>
                            <td>0002</td>
                            <td>Jucelina</td>
                            <td>Faminino</td>
                            <td>Pintada</td>
                            <td>10/05/1997</td>
                            <td>---</td>
                        </tr>
                        <tr className={styles.linha}>
                            <td>0002</td>
                            <td>Jucelina</td>
                            <td>Faminino</td>
                            <td>Pintada</td>
                            <td>10/05/1997</td>
                            <td>---</td>
                        </tr>
                        <tr className={styles.linha}>
                            <td>0002</td>
                            <td>Jucelina</td>
                            <td>Faminino</td>
                            <td>Pintada</td>
                            <td>10/05/1997</td>
                            <td>---</td>
                        </tr>
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
        </main>
    )
}