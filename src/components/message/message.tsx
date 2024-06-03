import styles from './message.module.css'

type Props = {
    message: string;
    left: boolean;
}

export function Message(props: Props){
    return(
        <div className={props.left ? styles['message-left'] : styles['message-right']}>
            <p>
                {props.message}
            </p>
        </div>
    )
}