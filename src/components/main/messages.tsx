import styles from './main.module.css'
import {Message} from "@/components/message/message";

export function Welcome() {
    return (
        <div className={styles['welcome-container']}>
            Bienvenue, Bla Bla Bla
        </div>
    )
}