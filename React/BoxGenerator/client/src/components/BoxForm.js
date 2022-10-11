import { useState } from 'react'
import styles from './BoxForm.module.css'

const BoxForm = (props) => {
    const { boxes, setBoxes } = props;

    const [color, setColor] = useState("");
    const [size, setSize] = useState("");

    const handleColor = (e) => {
        setColor(e.target.value);
    }
    
    const handleSize = (e) => {
        setSize(parseInt(e.target.value));
    }

    const processForm = (e) => {
        e.preventDefault()
        const newBox = { color, size };
        setBoxes([...boxes, newBox])
        setColor("");
        setSize("");
    }

    return (
        <>
            <form className={styles.boxForm} onSubmit={processForm}>
                <div>
                    <label >Color:</label>
                    <input type="text" name="color" onChange= { handleColor } value={color} />
                </div>
                <div>
                    <label >Size (px):</label>
                    <input type="number" name="size" onChange= { handleSize } value={size} />
                </div>
                <input type="submit" value="Add" />
            </form>
        </>
    )
}

export default BoxForm