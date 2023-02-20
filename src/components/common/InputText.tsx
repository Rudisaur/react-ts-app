
import styles from "./InputText.module.scss"


function InputText (props:any) {
    return (
        <form className={styles.form}>
            <div><label htmlFor={props.nameFor}>{props.nameOfLabel}</label></div>
            <div><input className={styles.input} id={props.nameFor} value={props.valueOfInput}></input></div>
        </form>
    )
}


export default InputText