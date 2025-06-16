import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFavorites, saveFavorites } from '../utils/localStorage';
import { toast } from 'react-toastify';

const RecipeCard = ({ recipe }) => {
  const [isFav, setIsFav] = useState(false);

const toggleFavorite = () => {
  const favs = getFavorites();
  let updated;

  if (isFav) {
    updated = favs.filter((item) => item.idMeal !== recipe.idMeal);
    toast.info("Removed from Favorites");
  } else {
    updated = [...favs, recipe];
    toast.success("Added to Favorites!");
  }

  saveFavorites(updated);
  setIsFav(!isFav);
};


  return (
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{recipe.strMeal}</h2>
        <p className="text-gray-600">{recipe.strCategory}</p>
        <div className="flex justify-between items-center mt-2">
          <Link to={`/recipe/${recipe.idMeal}`} className="text-blue-600 italic font-bold hover:underline">
            View
          </Link>
          <button onClick={toggleFavorite} className="text-xl">
            {isFav ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
