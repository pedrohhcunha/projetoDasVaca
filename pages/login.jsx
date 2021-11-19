import styles from '../styles/login.module.scss'
import Input from  '../components/Input.jsx'
import Button from '../components/Button'
import { useState } from 'react';
import axios from 'axios'

export default function login(props) {

  const [loginData, setLoginData] = useState({
    user: "",
    password: ""
  });

  function handleInput(event) {
    let auxData = {...loginData}
    auxData[event.target.name] = event.target.value

    setLoginData(auxData)
  }

  function sendDataToBackend(event) {
    event.preventDefault()
    console.log(loginData)
    axios.post('/api/login', loginData).then((response) => {
      console.log(response.data.success)
    })
  }

  return(
    <main>
      <div className={styles.content}>
        <div className={styles.areaLeft}>
          <form onSubmit={sendDataToBackend}>
            <h1>Cuidador de vacas</h1>
            <Input handle={event => handleInput(event)} name="user" label="Usuário" type="text"/>
            <Input handle={event => handleInput(event)} name="password" label="Senha" type="password"/>
            <Button>Entrar</Button>
          </form>
        </div>
        <div className={styles.areaRight}></div>
      </div>
    </main>
  )
}