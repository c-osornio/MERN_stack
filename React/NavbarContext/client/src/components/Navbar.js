import {useContext} from 'react'
import Context from "../contexts/Context"
import styles from "./Navbar.module.css"

const Navbar = () => {
    
    const {name} = useContext(Context)

    return (
        <>
            <div className={styles.nav}>
                <h1>Hi {name || "Charlie"}!</h1>
            </div>
        </>
    )
}

export default Navbar