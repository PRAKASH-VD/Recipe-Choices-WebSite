import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { getFavorites, saveFavorites } from '../utils/localStorage';
import { toast } from 'react-toastify';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites on page load
  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  // Clear all favorites
  const clearAllFavorites = () => {
    saveFavorites([]);
    setFavorites([]);
    toast.warn("All favorites cleared");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">❤️ Your Favorite Recipes</h2>

      {favorites.length > 0 && (
        <div className="flex justify-center mb-6">
          <button
            onClick={clearAllFavorites}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200"
          >
            🗑️ Clear All Favorites
          </button>
        </div>
      )}

      {favorites.length === 0 ? (
        <p className="text-center text-gray-600">No favorites saved yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
