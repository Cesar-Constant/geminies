import {GoogleGenerativeAI} from "@google/generative-ai";
import {useEffect, useState} from "react";
import {MessageType} from "@/types/message";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import {CharacterType} from "@/types/character";
import {chat} from "@/services/gemini";
import {useConversationInitializer} from "@/hooks/useConversationInitializer";

const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
];

const generationConfig = {
    stopSequences: ["###"],
    maxOutputTokens: 200,
    temperature: 0.9,
    topP: 0.1,
    topK: 16,
};

const genAI = new GoogleGenerativeAI("");
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro', safetySettings, generationConfig });

const chat1 = model.startChat()
const chat2 = model.startChat()

export function useConversation(){
    const [started, setStarted] = useState(false)
    const [counter, setCounter] = useState(0);
    const [messages, setMessages] = useState<MessageType[]>([])
    const [newMessage, setNewMessage] = useState<MessageType>()

    const conversationInitializer = useConversationInitializer()

    useEffect(() => {
        if(newMessage){
            setMessages(messages => [newMessage, ...messages])
        }

    }, [newMessage]);

    useEffect(() => {
        //TODO Le useEffect se relance avant la fin de answer(). Il faut faire en sorte que la boucle s'execute X sec après que answer soit fini et que ca ne se lance pas en parallèle

        async function answer(){
            if (counter % 2 == 0) {
                // @ts-ignore
                const res = await chat(newMessage.message, chat1)
                return {left: true, message: res}
            } else {
                // @ts-ignore
                const res = await chat(newMessage.message, chat2)
                return {left: false, message: res}
            }

        }

        if(started){
            answer()
                .then(r => {
                    setNewMessage(r);
                    setCounter((counter) => counter + 1);
                })
                .catch((e: any) => console.log(`Error : ${e}`))
        }

    }, [started, counter]);

    const run = async (character1: CharacterType, character2: CharacterType, scenario: string) => {
        const firstMessage = await chat(conversationInitializer.initializeCharacter1(character1, scenario), chat1)
        setNewMessage({left: true, message: firstMessage})
        // @ts-ignore
        setNewMessage({left: false, message: await chat(conversationInitializer.initializeCharacter2(character2, firstMessage, scenario), chat2)})

        setStarted(true)
    }

    return {
        messages,
        run
    }
}