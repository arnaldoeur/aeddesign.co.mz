/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// @ts-ignore
const API_KEY = __GEMINI_API_KEY__ || '';

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  const ai = new GoogleGenAI({ apiKey: API_KEY });

  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `Você é o Assistente Virtual da AED DESIGN E SERVIÇOS SU, LDA.
      A empresa é de Moçambique, localizada na Av. do Trabalho, Prédio 924.
      
      Tom de voz: Profissional, prestativo, moderno e direto.
      
      Serviços principais: Design Gráfico, Impressão (Vinil, Lona, Papel), Brindes, Material de Escritório, Bordados, Bandeiras, Roulups.
      
      Cores da marca: Laranja (#F36F21) e Roxo (#662D91).
      
      Objetivo: Ajudar clientes a escolherem serviços e direcioná-los para pedir orçamento via WhatsApp (+258 84 610 9582).
      
      Responda sempre em Português. Mantenha as respostas curtas (máximo 2 parágrafos).`,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!API_KEY) {
    return "Sistema offline. Por favor contacte via WhatsApp.";
  }

  try {
    const chat = initializeChat();
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Desculpe, não entendi. Pode reformular?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Erro de conexão. Tente novamente mais tarde.";
  }
};