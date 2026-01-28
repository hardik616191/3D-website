
import { GoogleGenAI } from "@google/genai";
import { HARDIK_SYSTEM_PROMPT } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getDixieResponse = async (prompt: string, history: {role: 'user' | 'model', content: string}[]) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: HARDIK_SYSTEM_PROMPT,
      },
    });

    const response = await chat.sendMessage({
      message: prompt,
    });

    return response.text || "I'm sorry, I couldn't process that. Please try again or reach out to Hardik directly.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error connecting to Hardik's strategist brain. Please try again later.";
  }
};
