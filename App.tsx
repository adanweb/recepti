
import React, { useState, useMemo } from 'react';
import { Recipe, Category } from './types';
import { recipes } from './data/recipes';
import { CATEGORIES } from './constants';
import RecipeCard from './components/RecipeCard';
import RecipeDetail from './components/RecipeDetail';
import PantryChef from './components/PantryChef';

type View = 'RECIPES' | 'PANTRY_CHEF';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.SVA_JELA);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [view, setView] = useState<View>('RECIPES');

  const handleSelectRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedRecipe(null);
  };

  const filteredRecipes = useMemo(() => {
    if (selectedCategory === Category.SVA_JELA) {
      return recipes;
    }
    return recipes.filter(recipe => recipe.category === selectedCategory);
  }, [selectedCategory]);

  const renderContent = () => {
    if (view === 'PANTRY_CHEF') {
      return <PantryChef />;
    }

    if (selectedRecipe) {
      return <RecipeDetail recipe={selectedRecipe} onBack={handleBack} />;
    }

    return (
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-slate-800 text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-100 shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} onSelect={handleSelectRecipe} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-slate-800 cursor-pointer" onClick={() => { setView('RECIPES'); setSelectedRecipe(null); }}>
              AI Kuharica
            </h1>
            <nav>
              <button 
                onClick={() => { setView('RECIPES'); setSelectedRecipe(null); }}
                className={`font-medium px-3 py-2 rounded-md text-sm ${view === 'RECIPES' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Recepti
              </button>
              <button 
                onClick={() => { setView('PANTRY_CHEF'); setSelectedRecipe(null); }}
                className={`font-medium px-3 py-2 rounded-md text-sm ${view === 'PANTRY_CHEF' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Šta kuhati?
              </button>
            </nav>
          </div>
        </div>
      </header>
      
      <main>
        {renderContent()}
      </main>

      <footer className="bg-white mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} AI Kuharica. Sva prava zadržana.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
