import styles from './button.module.css'
import Image from 'next/image'

type Props = {
    text: string,
    icon?: string,
    onClick: () => void;
}

export function Button(props: Props){
    return (
        <button className={styles.button} onClick={props.onClick}>
            {
                props.icon ?
                    <Image alt='chat icon' src={props.icon} width={25} height={25}/>
                    :
                    undefined
            }
            {props.text}
        </button>
    )
}