import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => setRecipe(res.data.meals[0]))
      .catch((err) => console.error('Failed to fetch recipe details', err));
  }, [id]);

  if (!recipe) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Link to="/" className="text-blue-600 underline mb-4 inline-block">← Back to Recipes</Link>
      <h2 className="text-3xl font-bold mb-2">{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full max-w-md mb-4 rounded-lg" />
      <p className="mb-2"><strong>Category:</strong> {recipe.strCategory}</p>
      <p className="mb-4 whitespace-pre-line"><strong>Instructions:</strong> {recipe.strInstructions}</p>
      {recipe.strYoutube && (
        <a href={recipe.strYoutube} target="_blank" className="text-blue-600 underline">
          🎥 Watch on YouTube
        </a>
      )}
    </div>
  );
};

export default RecipeDetail;
