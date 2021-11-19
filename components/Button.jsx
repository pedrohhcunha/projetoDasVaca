import styles from '../styles/Button.module.scss'
import Link from 'next/link'

export default function Button(props) {

  if(typeof clickFunction === "function"){
      return(
        <button
            className={`
              ${styles.button}
              ${props.size === 'full' ? styles.full : ''}
            `}
            onClick={props.clickFunction}
        >{props.children}</button>
      )
  } else{
    return(
      <Link href={clickFunction} target={props.blank ? "__blank" : ""}>
      <div
        className={`
          ${styles.button}
          ${props.size === 'full' ? styles.full : ''}
        `}
      >{props.children}</div>
      </Link>
    )
  }
}