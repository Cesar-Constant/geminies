import styles from './main.module.css'
import {Message} from "@/components/message/message";
import {MessageType} from "@/types/message";

type Props = {
    messages: MessageType[];
}

export function Messages(props: Props) {
    return (
        <div className={styles['messages-list']}>
            {
                props.messages!.map((message, index) => {
                    return <Message message={message.message} left={message.left} key={index}/>
                })
            }
        </div>
    )
}