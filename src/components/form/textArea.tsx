import styles from './form.module.css'
import {useRef} from "react";

type Props = {
    label: string;
    setValue: (value: string | null) => void;
}

export function TextArea(props: Props){
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
        <div className={styles['textarea-container']}>
            <label htmlFor={props.label}>{props.label}</label>
            <textarea id={props.label} rows={5}  ref={ref} onChange={handleChange}/>
        </div>
    )
}