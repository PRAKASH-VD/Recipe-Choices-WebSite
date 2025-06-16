# 🍽️ Recipe App

A dynamic and user-friendly recipe browsing application built with **React.js** and **Tailwind CSS**, integrated with the [TheMealDB](https://www.themealdb.com/api.php) API. This app allows users to search, filter, and explore a variety of delicious meals with complete recipe details. It also includes a favorites feature and various UI enhancements for a seamless cooking discovery experience.

---

## 🚀 Features


1.📜 **Recipe Listings**         
         Browse meals fetched from the public API with images, names, and categories. 
2.🔍 **Live Search Suggestions** 
         Get recipe name suggestions as you type in the search bar.                 
3. 🎛️ **Filtering**              
          Filter recipes by category (e.g., Seafood, Vegetarian, etc.).            
4. 🍳 **Recipe Details View**    
         View full instructions, ingredients, and YouTube video (if available).    
5. ❤️ **Favorites**              
         Save your favorite recipes using `localStorage` to persist data. 

---

## 🛠 Tech Stack

- ⚛️ React.js (Vite)
- 🎨 Tailwind CSS
- 🌐 Axios for API requests
- 🔔 React Toastify for notifications
- 🗃️ LocalStorage for persistent favorites
- 📡 API: [TheMealDB](https://www.themealdb.com/api.php)

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── RecipeCard.jsx
│   └── SearchFilter.jsx
├── pages/
│   ├── Home.jsx
│   ├── RecipeDetail.jsx
│   └── Favorites.jsx
├── utils/
│   └── localStorage.js
├── App.jsx
└── main.jsx
```

---

## 🧪 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/recipe-app.git
   cd recipe-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 📸 Screenshots

- **Home Page**: Recipe listing with search and category filter.
- **Detail View**: Full recipe instructions and media.
- **Favorites Page**: Manage and clear favorite recipes.
- **Responsive UI**: Fully mobile-friendly.

---

## 📚 Acknowledgements

- [TheMealDB API](https://www.themealdb.com/api.php) – for recipe data
- [React Toastify](https://fkhadra.github.io/react-toastify/) – for notification system

---

## 📧 Contact

For any feedback or contributions, feel free to reach out:

**Developer**: Prakash V  


---

> _Bon Appétit! 🥘_
