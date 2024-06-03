import styles from './form.module.css'
import {Text} from "@/components/form/text";
import {useEffect, useRef, useState} from "react";
import {CharacterType} from "@/types/character";

type Props = {
    setFormStatus: (status: boolean) => void;
    setCharacter: (character: CharacterType) => void;
}

export function Character(props: Props){
    const [firstname, setFirstname] = useState<string| null>(null)
    const [lastname, setLastname] = useState<string| null>(null)
    const [job, setJob] = useState<string| null>(null)
    const [sex, setSex] = useState<string| null>(null)
    const [age, setAge] = useState<string| null>(null)
    const [infos, setInfos] = useState<string| null>(null)

    useEffect(() => {
        if(firstname && lastname && job && sex && age && infos){
            props.setCharacter({
                firstname,
                lastname,
                job,
                sex,
                age,
                infos,
            })

            props.setFormStatus(true)
        }else{
            props.setFormStatus(false)
            //TODO show alert
        }
    }, [firstname, lastname, job, sex, age, infos]);

    return (
        <div className={styles['character-form-container']}>
            <Text label='Prénom' setValue={(value: string | null) => setLastname(value)}/>
            <Text label='Nom' setValue={(value: string | null) => setFirstname(value)}/>
            <Text label='Métier' setValue={(value: string | null) => setJob(value)}/>
            <Text label='Sexe' setValue={(value: string | null) => setSex(value)}/>
            <Text label='Age' setValue={(value: string | null) => setAge(value)}/>
            <Text label='Informations supplémentaires' setValue={(value: string | null) => setInfos(value)}/>
        </div>
    )
}