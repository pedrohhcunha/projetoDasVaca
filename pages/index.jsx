
import styles from '../styles/Index.module.scss'

import Link from 'next/link'

export default function Index() {
  const user = {
    name: 'Pedro Henrique '
  }
  return (
    <main className={styles.main}>
      <h1 className={styles.titulo}>Bem vindo, {user.name}</h1>
      <div className={styles.options}>
        <Link href="/">
          <a className={styles.option}>
            <div className={styles.areaImg}>Img</div>
            <h2 className={styles.tituloOption}>Dashboard</h2>
          </a>
        </Link>
        <Link href="/">
          <a className={styles.option}>
            <div className={styles.areaImg}>Img</div>
            <h2 className={styles.tituloOption}>Medicamentos</h2>
          </a>
        </Link>
        <Link href="/vacas">
          <a className={styles.option}>
            <div className={styles.areaImg}>Img</div>
            <h2 className={styles.tituloOption}>Vacas</h2>
          </a>
        </Link>
        <Link href="/">
          <a className={styles.option}>
            <div className={styles.areaImg}>Img</div>
            <h2 className={styles.tituloOption}>Calendario</h2>
          </a>
        </Link>
        <Link href="/">
          <a className={styles.option}>
            <div className={styles.areaImg}>Img</div>
            <h2 className={styles.tituloOption}>Ciclos</h2>
          </a>
        </Link>
        <Link href="/">
          <a className={styles.option}>
            <div className={styles.areaImg}>Img</div>
            <h2 className={styles.tituloOption}>Profissionais</h2>
          </a>
        </Link>
      </div>
    </main>
  )
}
