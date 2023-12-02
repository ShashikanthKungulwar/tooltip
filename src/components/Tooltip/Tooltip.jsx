import styles from './Tooltip.module.css'

export default function Tooltip(props) {

    // function handlePosition() {
    //     switch (props.position) {
    //         case 'top':
    //             return styles.top;
    //         case 'bottom':
    //             return styles.bottom;
    //         case 'left':
    //             return styles.left;
    //         case 'right':
    //             return styles.right;
    //         default:
    //             return ''
    //     }
    // }
    return (
        <div className={styles.tooltip}>
            <span className={styles.context}>
                {props.children}
            </span>
            <span className={styles.message+" "+styles[`${props.position}Message`]}>
                this is a tooltip message
                <span className={styles.arrow + " " + styles[props.position]}></span>
            </span>
        </div>
    )
}