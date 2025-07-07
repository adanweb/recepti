
export enum Category {
  SVA_JELA = "Sva jela",
  FANCY = "Fancy jela",
  PROTEINSKA = "Proteinska jela",
  NISKOKALORICNA = "Niskokalorična jela",
  SALATE = "Salate",
  JUNK_FOOD = "Junk Food",
  PIZZE = "Pizze",
  PILETINA = "Piletina",
  BOSANSKA = "Bosanska jela",
}

export interface Ingredient {
  name: string;
  quantity: string;
}

export interface Equipment {
  name: string;
}

export interface Macros {
  protein: number;
  carbs: number;
  fat: number;
  calories: number;
}

export interface Recipe {
  id: number;
  name:string;
  category: Category;
  description: string;
  image: string;
  ingredients: Ingredient[];
  steps: string[];
  equipment: Equipment[];
  macros: Macros;
}

// Type for recipes suggested by AI
export interface SuggestedRecipe {
  name: string;
  description: string;
  ingredients: Ingredient[];
  steps: string[];
  equipment: string[];
  macros: Macros;
}
