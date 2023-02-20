import { Link } from "react-router-dom";

import styles from './LinkD.module.scss'






function NavLinkDecorated (props:any) {
    return (
        <div><Link className={styles.NavLink} to={props.link}>{props.nameOfLink}</Link></div>
    )
}

export default NavLinkDecorated