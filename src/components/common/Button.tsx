
import styles from "./Button.module.scss"


function Button (props: any) {
    return (
        <div><button className={styles.button} onClick={props.functionOfButton}>{props.nameOfButton}</button></div>
    )
}


export default Button