import styles from './main.module.css'
import {Welcome} from "@/components/main/messages";
import {Messages} from "@/components/main/welcome";
import {Form} from "@/components/form/form";
import {CharacterType} from "@/types/character";
import {useConversation} from "@/hooks/useConversation";
import {useState} from "react";

type Props = {
    status?: number,
    setStatus: (status: number) => void
}

export function Main(props: Props){
    const [character1, setCharacter1] = useState<CharacterType | null>(null)
    const [character2, setCharacter2] = useState<CharacterType | null>(null)
    const [scenario, setScenario] = useState<string | null>(null)

    const conversation = useConversation()

    const start = () => {
        if(character1 && character2 && scenario){
            conversation.run(character1, character2, scenario)
        }
    }

    switch (props.status){
        case 1:
            return (
                <div className={styles['main']}>
                    <Messages messages={conversation.messages}/>
                </div>
            )
        case 2:
            return (
                <div className={styles['main']}>
                    <Form
                        start={start}
                        setStatus={(status: number) => props.setStatus(status)}
                        setCharacter1={(character: CharacterType) => setCharacter1(character)}
                        setCharacter2={(character: CharacterType) => setCharacter2(character)}
                        setScenario={(scenario: string | null) => setScenario(scenario)}
                    />
                </div>
            )
        default:
            return (
                <div className={styles['main']}>
                    <Welcome/>
                </div>
            )
    }
}