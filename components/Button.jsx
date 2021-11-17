export default function Button(props) {
    return(
        <button onClick={props.clickFunction} >{props.children}</button>
    )
}