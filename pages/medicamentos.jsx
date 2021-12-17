import styles from '../styles/vacas.module.scss'
import Input from '../components/Input'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faTimes } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

export default function medicamentos(props) {

    function validateUser() {
        let user = localStorage.getItem("user");

        return user
    }
    
    useEffect(() => {
        if(!validateUser()){
            window.location.href = "/login"
        }
    }, []);

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
              setMedicamentos([...medicamentos, response.data.vaca_adicionada])
              setStateModalCreate(false)
            }
        })
    }

    const [medicamentos, setMedicamentos] = useState([
        {
            nome: "Medicamentos",
            laboratorio: "vaca",
            carencia: "sdsdsd",
            dosagem: "sdsdsd",
            data_criacao: "sdsd"
        }
    ]);

    useEffect(() => {
        console.log("buscando medicamentos")
        axios.get('/api/medicamentos').then((response) => {
            if(response.data.success){
                console.log(response.data)
                setMedicamentos(response.data.medicamentos)
            }
          })
    }, []);

    return(
        <main className={styles.main}>
            <div className={styles.areaTopo}>
                <h1 className={styles.titulo}>medicamentos</h1>
            </div>
            <div className={styles.medicamentos}>
                {medicamentos.map((medicamento, index) => (
                    <div key={index} className={styles.medicamento}>
                        <h3>{medicamento.nome}</h3>
                        <h5>{`Laboratório: ${medicamento.laboratorio}`}</h5>
                        <h5>{`Carencia: ${medicamento.carencia.slice(0, 10)}`}</h5>
                        <h5>{`Dosagem: ${medicamento.dosagem}`}</h5>
                        <h5>{`Data criacao: ${medicamento.data_criacao.slice(0, 10)}`}</h5>
                    </div> 
                ))}
            </div>
        </main>
    )
}