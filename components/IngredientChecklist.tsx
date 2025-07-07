
import React, { useState } from 'react';
import { Ingredient } from '../types';

interface IngredientChecklistProps {
  ingredients: Ingredient[];
}

const IngredientChecklist: React.FC<IngredientChecklistProps> = ({ ingredients }) => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheckboxChange = (ingredientName: string) => {
    setCheckedItems(prev =>
      prev.includes(ingredientName)
        ? prev.filter(item => item !== ingredientName)
        : [...prev, ingredientName]
    );
  };

  return (
    <div className="space-y-3">
      {ingredients.map((ingredient, index) => (
        <div key={index} className="flex items-center">
          <input
            type="checkbox"
            id={`ingredient-${index}`}
            checked={checkedItems.includes(ingredient.name)}
            onChange={() => handleCheckboxChange(ingredient.name)}
            className="h-5 w-5 rounded border-gray-300 text-slate-600 focus:ring-slate-500 cursor-pointer"
          />
          <label
            htmlFor={`ingredient-${index}`}
            className={`ml-3 text-gray-700 cursor-pointer transition-colors ${
              checkedItems.includes(ingredient.name) ? 'line-through text-gray-400' : ''
            }`}
          >
            <span className="font-medium">{ingredient.name}</span> - {ingredient.quantity}
          </label>
        </div>
      ))}
    </div>
  );
};

export default IngredientChecklist;
