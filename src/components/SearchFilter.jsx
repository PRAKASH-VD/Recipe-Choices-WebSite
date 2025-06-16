import React from 'react';

const SearchFilter = ({
  searchTerm,
  setSearchTerm,
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-4 bg-gradient-to-r from-orange-400 to-amber-400 text-white italic font-bold">
      <input
        type="text"
        placeholder="Search recipes..."
        className="border p-2 rounded w-full md:w-1/3 bg-gradient-to-r from-orange-400 to-amber-400 text-shadow-gray-200 italic font-bold"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        className="border p-2 rounded w-full md:w-1/4 bg-gradient-to-r from-orange-400 to-amber-400 text-black italic font-bold"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option className="bg-gradient-to-to-r from-orange-400 to-amber-400 text-shadow-gray-200 italic font-bold"
         value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat.strCategory} value={cat.strCategory}>
            {cat.strCategory}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchFilter;
