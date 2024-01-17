'use client'

import React, { useState } from 'react';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Implement your search logic here
    console.log('Search query submitted:', searchQuery);
  };

  return (
    <div className="container mx-auto mt-20 p-4">
      <form onSubmit={handleSearchSubmit} className="flex justify-center">
        <input
          type="text"
          placeholder="Search for Lab Files Eg: #GSP111"
          value={searchQuery}
          onChange={handleSearchChange}
          className="form-input w-full max-w-xl px-4 py-2 border rounded-l-lg focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Resources;
