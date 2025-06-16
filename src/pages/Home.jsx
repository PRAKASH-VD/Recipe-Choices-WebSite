import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';
import SearchFilter from '../components/SearchFilter';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const fetchRecipes = async () => {
    try {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
      const res = await axios.get(url);
      let data = res.data.meals || [];

      if (selectedCategory) {
        data = data.filter((r) => r.strCategory === selectedCategory);
      }

      setRecipes(data);
    } catch (err) {
      console.error('Error fetching recipes:', err);
    }
  };

  const fetchCategories = async () => {
    const res = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    setCategories(res.data.meals);
  };

  useEffect(() => {
    fetchRecipes();
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="pt-24">
      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
