
import React from 'react';
import { Recipe } from '../types';
import IngredientChecklist from './IngredientChecklist';
import Icon from './Icon';

interface RecipeDetailProps {
  recipe: Recipe;
  onBack: () => void;
}

const MacroBadge: React.FC<{ label: string; value: number; unit: string, color: string }> = ({ label, value, unit, color }) => (
    <div className={`text-center p-3 rounded-lg ${color}`}>
        <p className="text-sm font-medium text-gray-700">{label}</p>
        <p className="text-xl font-bold text-gray-900">{value}{unit}</p>
    </div>
);


const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe, onBack }) => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <button
        onClick={onBack}
        className="mb-6 flex items-center text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Nazad na sve recepte
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img src={recipe.image} alt={recipe.name} className="w-full h-64 sm:h-80 object-cover" />
        
        <div className="p-6 md:p-8">
          <p className="text-base font-semibold text-slate-600 uppercase tracking-wider">{recipe.category}</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">{recipe.name}</h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">{recipe.description}</p>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-slate-200 pb-2 mb-4">Sastojci</h2>
              <IngredientChecklist ingredients={recipe.ingredients} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-slate-200 pb-2 mb-4">Postupak</h2>
              <ol className="space-y-4 list-decimal list-inside">
                {recipe.steps.map((step, index) => (
                  <li key={index} className="text-gray-700 leading-relaxed marker:text-slate-500 marker:font-semibold">
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-slate-200 pb-2 mb-4">Potrebna oprema</h2>
              <div className="flex flex-wrap gap-4">
                {recipe.equipment.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                    <Icon name={item.name} className="w-5 h-5 text-slate-600" />
                    <span className="font-medium text-gray-700">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-slate-200 pb-2 mb-4">Makronutrijenti</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MacroBadge label="Kalorije" value={recipe.macros.calories} unit=" kcal" color="bg-red-100" />
                <MacroBadge label="Proteini" value={recipe.macros.protein} unit="g" color="bg-blue-100" />
                <MacroBadge label="Ugljikohidrati" value={recipe.macros.carbs} unit="g" color="bg-yellow-100" />
                <MacroBadge label="Masti" value={recipe.macros.fat} unit="g" color="bg-green-100" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
