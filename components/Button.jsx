import styles from '../styles/Button.module.scss'
import Link from 'next/link'

export default function Button(props) {

  if(typeof props.clickFunction === "function"){
      return(
        <button
            className={`
              ${styles.button}
              ${styles[props.size]}
              ${styles[props.color]}
            `}
            onClick={props.clickFunction}
        >{props.children}</button>
      )
  } else{
    return(
      <Link href={props.clickFunction ? props.clickFunction : ''} target={props.blank ? "__blank" : ""}>
        <a
          className={`
            ${styles.button}
            ${styles[props.size]}
            ${styles[props.color]}
          `}
        >{props.children}</a>
      </Link>
    )
  }
}