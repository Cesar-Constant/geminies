'use client'

import {useState} from "react";
import {Button} from "@/components/button/button";
import {Aside} from "@/components/aside/aside";
import {Main} from "@/components/main/main";

export default function Home() {
    const [status, setStatus] = useState(0)

    const handleClick = () => {
        console.log('ok')
    }

    return (
        <>
            <Aside>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    gap: '20px'
                }}>
                    <Button text='Démarrer une discussion' onClick={() => setStatus(2)} icon='/images/ai-chat.svg'/>
                    {
                        status == 1 ?
                            <Button text='Pause' onClick={() => {}} icon='/images/play.svg'/>
                            :
                            undefined
                    }
                </div>
            </Aside>

            <Main status={status} setStatus={(sta) => setStatus(sta)}/>
        </>

    );
}
