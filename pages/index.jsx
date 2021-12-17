
import styles from '../styles/Index.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBriefcaseMedical, faCalendar, faChartLine, faHatCowboy, faUsers, faSpinner, faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Index() {

  function logout() {
    localStorage.removeItem("user");
    window.location.href = "/login"
  }
  function validateUser() {
    let user = localStorage.getItem("user");

    return user
  }

  useEffect(() => {
    if(!validateUser()){
      window.location.href = "/login"
    }
  }, []);

  const user = {
    name: 'Pedro Henrique '
  }
  return (
    <main className={styles.main}>
      <h1 className={styles.titulo}>Bem vindo, {user.name}</h1>
      <div className={styles.options}>
        <Link href="/">
          <a className={styles.option}>
          <div className={styles.areaImg}><FontAwesomeIcon icon={faChartLine} className={styles.icon} /></div>
            <h2 className={styles.tituloOption}>Dashboard</h2>
          </a>
        </Link>
        <Link href="/">
          <a className={styles.option}>
            <div className={styles.areaImg}><FontAwesomeIcon icon={faBriefcaseMedical} className={styles.icon} /></div>
            <h2 className={styles.tituloOption}>Medicamentos</h2>
          </a>
        </Link>
        <Link href="/vacas">
          <a className={styles.option}>
          <div className={styles.areaImg}><FontAwesomeIcon icon={faHatCowboy} className={styles.icon} /></div>
            <h2 className={styles.tituloOption}>Vacas</h2>
          </a>
        </Link>
        <Link href="/calendario">
          <a className={styles.option}>
          <div className={styles.areaImg}><FontAwesomeIcon icon={faCalendar} className={styles.icon} /></div>
            <h2 className={styles.tituloOption}>Calendario</h2>
          </a>
        </Link>
        <Link href="/">
          <a className={styles.option}>
          <div className={styles.areaImg}><FontAwesomeIcon icon={faSpinner} className={styles.icon} /></div>
            <h2 className={styles.tituloOption}>Ciclos</h2>
          </a>
        </Link>
        <Link href="/">
          <a className={styles.option}>
          <div className={styles.areaImg}><FontAwesomeIcon icon={faUsers} className={styles.icon} /></div>
            <h2 className={styles.tituloOption}>Profissionais</h2>
          </a>
        </Link>
      </div>
      <aside onClick={logout} className={styles.logout}>
        <FontAwesomeIcon icon={faAngleLeft} className={styles.icon} />
        <span>Sair</span>
      </aside>
    </main>
  )
}
