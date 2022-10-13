import {useContext} from 'react'
import Context from "../contexts/Context";
import styles from "./Form.module.css"


const Form = () => {

    const {name, setName} = useContext(Context)

    const handleName = (e) => {
        setName(e.target.value)
    }

    return (
        <div className={styles.form}>
                <label>Your Name: </label>
                <input type="text" value={name} onChange= { handleName } />
        </div>
    )
}

export default Form