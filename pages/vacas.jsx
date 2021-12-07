import styles from '../styles/vacas.module.scss'

export default function Vacas(props) {
    return(
        <main className={styles.main}>
            <div className={styles.areaTopo}>
                <h1 className={styles.titulo}>Vacas</h1>
                <div className={styles.controllers}>
                    <button className={styles.button}>Adicionar vaca</button>
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
        </main>
    )
}