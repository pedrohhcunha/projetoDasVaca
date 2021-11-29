import styles from '../styles/Input.module.scss'

export default function Input(props) {    
    return(
        <div className={styles.areaInput}>
            <label className={styles.label}>{props.label}</label>
            <input className={styles.input} onChange={props.handle} name={props.name} type={props.type} />
        </div>
    )
}