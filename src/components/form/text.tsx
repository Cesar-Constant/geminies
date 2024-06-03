import styles from './form.module.css'
import {useRef, useState} from "react";

type Props = {
    label: string;
    setValue: (value: string | null) => void;
}

export function Text(props: Props){
    const ref = useRef(null)

    const handleChange = () => {
        // @ts-ignore
        if(ref.current && ref.current.value){
            // @ts-ignore
            props.setValue(ref.current.value)
        }else{
            props.setValue(null)
        }
    }

    return(
        <div className={styles['text-container']}>
            <label htmlFor={props.label}>{props.label}</label>
            <input type="text" id={props.label} ref={ref} onChange={handleChange}/>
        </div>
    )
}