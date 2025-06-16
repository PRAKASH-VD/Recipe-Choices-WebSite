import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';
import Header from './components/Header';
import Favorites from './pages/Favorites';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-linear-to-r from-orange-600 to-amber-300 min-h-screen ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
       <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default App;
