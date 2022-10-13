import styles from './Display.module.css'

const Display = (props) => {
    const { boxes } = props;

    return (
        <div className={styles.boxContainer}> 
        {
            boxes.map((item, index) =><div key={index} className={styles.box} style={{ backgroundColor: item.color || "white", width: item.size || 100, height: item.size || 100 }} ></div>)
        }
    </div>
    )
}

export default Display