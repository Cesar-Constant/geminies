import styles from './form.module.css'
import {Character} from "@/components/form/character";
import {TextArea} from "@/components/form/textArea";
import {Button} from "@/components/button/button";
import {useEffect, useState} from "react";
import {CharacterType} from "@/types/character";

type Props = {
    start: () => void;
    setStatus: (status: number) => void
    setCharacter1: (character: CharacterType) => void
    setCharacter2: (character: CharacterType) => void
    setScenario: (scenario: string | null) => void,
}

export function Form(props: Props){
    const [form1Status, setForm1Status] = useState(false)
    const [form2Status, setForm2Status] = useState(false)
    const [validate, setValidate] = useState(false)

    useEffect(() => {
        if(validate){
            if(form2Status && form1Status){
                props.setStatus(1)
                props.start()
            }else{
                setValidate(false)
            }
        }

    }, [validate]);

    return(
        <div className={styles['form-container']}>
            <div>
                <Character
                    setFormStatus={(status: boolean) => setForm1Status(status)}
                    setCharacter={(character: CharacterType) => props.setCharacter1(character)}
                />

                <Character
                    setFormStatus={(status: boolean) => setForm2Status(status)}
                    setCharacter={(character: CharacterType) => props.setCharacter2(character)}
                />
            </div>

            <TextArea label='Mise en situation' setValue={(scenario: string | null) => props.setScenario(scenario)}/>
            <Button text='Commencer' onClick={() => setValidate(true)} icon='/images/ai-chat.svg'/>
        </div>
    )
}