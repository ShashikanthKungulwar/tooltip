import styles from './Tooltip.module.css'

export default function Tooltip(props) {
    return (
        <div className={styles.tooltip}>
            <span className={styles.context}>
                {props.children} {/*calling the children passed to it from app.js */}
            </span>
            <span className={styles.message+" "+styles[`${props.position}Message`]}>{/*styles according to the position value from the app.js */}
                this is a tooltip message
                <span className={styles.arrow + " " + styles[props.position]}></span>{/*styles according to the position value from the app.js */}
            </span>
        </div>
    )
}