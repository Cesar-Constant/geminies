import {ChatSession, GenerativeModel} from "@google/generative-ai";

export async function generateText(prompt: string, model: GenerativeModel){
    const result = await model.generateContent(prompt);
    return result.response.text();
}

export async function chat(prompt: string, chat: ChatSession){
    const res = await chat.sendMessage(prompt);
    return res.response.text()
}
