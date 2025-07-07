
import { GoogleGenAI } from "@google/genai";
import { SuggestedRecipe } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    console.error("API key for Gemini is not set. Please set the process.env.API_KEY environment variable.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const suggestRecipesFromIngredients = async (ingredients: string): Promise<SuggestedRecipe[]> => {
  if (!API_KEY) {
    throw new Error("API key for Gemini is not configured.");
  }

  const prompt = `
    You are a creative chef's assistant. Based on the ingredients provided, suggest 3 diverse meal recipes.
    The user has the following ingredients: ${ingredients}.
    Assume the user also has basic staples like salt, pepper, oil, water, flour, and common spices.
    For each recipe, provide a detailed plan.
    Your response MUST be a valid JSON array of objects. Do not include any text outside of the JSON array.
    Do not use markdown like \`\`\`json.
    Each object in the array must follow this exact structure:
    {
      "name": "Recipe Name",
      "description": "A brief, appealing description of the dish.",
      "ingredients": [
        { "name": "Ingredient Name", "quantity": "Amount" }
      ],
      "steps": [
        "Step 1...",
        "Step 2...",
        "Step 3..."
      ],
      "equipment": ["Pan", "Oven", "etc."],
      "macros": { "protein": number, "carbs": number, "fat": number, "calories": number }
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-04-17",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    let jsonStr = response.text.trim();
    
    // In case the model still wraps the output in markdown fences
    const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
    const match = jsonStr.match(fenceRegex);
    if (match && match[2]) {
      jsonStr = match[2].trim();
    }
    
    const suggestedRecipes: SuggestedRecipe[] = JSON.parse(jsonStr);
    return suggestedRecipes;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to generate recipes. The AI model might be busy. Please try again later.");
  }
};
