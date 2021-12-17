import styles from '../styles/login.module.scss'
import Input from  '../components/Input.jsx'
import { useEffect, useState } from 'react';
import axios from 'axios'

export default function login(props) {

  const [loginData, setLoginData] = useState({
    user: "",
    password: ""
  });

  function validateUser() {
    let user = localStorage.getItem("user");

    return user
  }

  function handleInput(event) {
    let auxData = {...loginData}
    auxData[event.target.name] = event.target.value

    setLoginData(auxData)
  }

  function sendDataToBackend(event) {
    event.preventDefault()
    axios.post('/api/login', loginData).then((response) => {
      if(response.data.success){
        localStorage.setItem('user', 1);
        if(validateUser()){
          window.location.href = "/"
        }
      }
    })
  }

  useEffect(() => {
    if(validateUser()){
      window.location.href = "/"
    }
  }, []);

  return(
    <main className={styles.main}>
      <form className={styles.content} onSubmit={sendDataToBackend}>
        <h1 className={styles.titulo}>Login</h1>
        <Input handle={event => handleInput(event)} name="user" label="Usuário" type="text"/>
        <Input handle={event => handleInput(event)} name="password" label="Senha" type="password"/>
        <button type="submit" className={styles.button}>Entrar</button>
      </form>
    </main>
  )
}