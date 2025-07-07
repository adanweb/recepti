
import React, { useState } from 'react';
import { suggestRecipesFromIngredients } from '../services/geminiService';
import { SuggestedRecipe } from '../types';
import Spinner from './Spinner';
import Icon from './Icon';

const PantryChef: React.FC = () => {
  const [ingredients, setIngredients] = useState<string>('');
  const [suggestedRecipes, setSuggestedRecipes] = useState<SuggestedRecipe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ingredients.trim()) {
      setError('Molimo unesite namirnice koje imate.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setSuggestedRecipes([]);
    try {
      const results = await suggestRecipesFromIngredients(ingredients);
      setSuggestedRecipes(results);
    } catch (err: any) {
      setError(err.message || 'Došlo je do greške.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-3xl font-bold text-gray-900">Šta mogu kuhati?</h2>
        <p className="mt-2 text-gray-600">Unesite namirnice koje imate, a mi ćemo predložiti šta možete napraviti!</p>
        <form onSubmit={handleSubmit} className="mt-6">
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Npr: piletina, riža, brokula, mrkva, soja sos..."
            className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="mt-4 w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? <Spinner /> : 'Predloži recepte'}
          </button>
        </form>
        {error && <p className="mt-4 text-red-600">{error}</p>}
      </div>

      {isLoading && (
         <div className="mt-8 text-center">
             <Spinner />
             <p className="mt-2 text-gray-600">AI kuhar razmišlja...</p>
         </div>
      )}

      {suggestedRecipes.length > 0 && (
        <div className="mt-8 space-y-6">
          <h3 className="text-2xl font-bold text-center text-gray-800">Prijedlozi recepata</h3>
          {suggestedRecipes.map((recipe, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900">{recipe.name}</h4>
              <p className="mt-2 text-gray-600">{recipe.description}</p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-lg font-semibold mb-2">Sastojci:</h5>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {recipe.ingredients.map((ing, i) => <li key={i}>{ing.quantity} {ing.name}</li>)}
                  </ul>
                </div>
                <div>
                  <h5 className="text-lg font-semibold mb-2">Oprema:</h5>
                  <div className="flex flex-wrap gap-2">
                     {recipe.equipment.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1 text-sm">
                           <Icon name={item} className="w-4 h-4 text-slate-600" />
                           <span>{item}</span>
                        </div>
                     ))}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="text-lg font-semibold mb-2">Postupak:</h5>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    {recipe.steps.map((step, i) => <li key={i}>{step}</li>)}
                </ol>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PantryChef;
