import styles from './Display.module.css'

const Display = (props) => {
    const { boxes } = props;

    return (
        <div className={styles.boxContainer}> 
        {
            boxes.map((box) =><div className={styles.box} style={{ backgroundColor: box.color, width: box.size, height: box.size}} ></div>)
        }
    </div>
    )
}

export default Display