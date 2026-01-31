
import { GoogleGenAI } from "@google/genai";
import { HARDIK_SYSTEM_PROMPT } from "../constants";

// Correct initialization as per guidelines: Always use const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getDixieResponse = async (prompt: string, history: {role: 'user' | 'model', content: string}[]) => {
  try {
    // Correct chat creation using the Gemini 3 Pro model for complex reasoning and technical assistance
    const chat = ai.chats.create({
      model: 'gemini-3-pro-preview',
      // Include history to maintain conversational context and follow standard SDK structure
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.content }]
      })),
      config: {
        systemInstruction: HARDIK_SYSTEM_PROMPT,
      },
    });

    const response = await chat.sendMessage({
      message: prompt,
    });

    // Directly accessing the .text property as per guidelines (not a method)
    return response.text || "I'm sorry, I couldn't process that. Please try again or reach out to Hardik directly.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error connecting to Hardik's strategist brain. Please try again later.";
  }
};
