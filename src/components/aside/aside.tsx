import styles from './aside.module.css'

type Props = {
    children: any;
}

export function Aside(props: Props){
    return (
        <div className={styles['aside-main']}>
            {props.children}
        </div>
        )
}