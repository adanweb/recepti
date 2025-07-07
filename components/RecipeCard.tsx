
import React from 'react';
import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  onSelect: (recipe: Recipe) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onSelect }) => {
  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
      onClick={() => onSelect(recipe)}
    >
      <div className="overflow-hidden h-48">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-slate-500 mb-1">{recipe.category.replace(" jela", "")}</p>
        <h3 className="text-lg font-semibold text-gray-800 truncate">{recipe.name}</h3>
      </div>
    </div>
  );
};

export default RecipeCard;
