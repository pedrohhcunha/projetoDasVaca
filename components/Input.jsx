import styles from '../styles/Input.module.scss'

export default function Input(props) {    
    return(
        <div className={styles.areaInput}>
            <label>{props.label}</label>
            <input onChange={props.handle} name={props.name} type={props.type} />
        </div>
    )
}