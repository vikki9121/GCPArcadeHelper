'use client'
import React, { useState } from 'react';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [links, setLinks] = useState([]);
  const [isLabFound, setIsLabFound] = useState(true); // New state for tracking if lab is found

  const labLinks = {
    '#gsp1033': ["https://github.com/quiccklabs/Labs_solutions/blob/master/Securing%20Compute%20Engine%20Applications%20and%20Resources%20using%20BeyondCorp%20Enterprise%20(BCE)"],
    '#gsp111': ["https://example.com/lab/gsp111/file1", "https://example.com/lab/gsp111/file2"],
    '#gsp891': ["https://github.com/quiccklabs/Labs_solutions/blob/master/Looker%20Developer%20-%20Qwik%20Start"],
    '#gsp210': ["https://github.com/quiccklabs/Labs_solutions/blob/master/VPC%20Networking%20Fundamentals"],
    '#gsp412': ["https://github.com/quiccklabs/Labs_solutions/blob/master/Troubleshooting%20and%20Solving%20Data%20Join%20Pitfalls"],
    '#arc120':["https://github.com/quiccklabs/Labs_solutions/blob/master/The%20Basics%20of%20Google%20Cloud%20Compute%3A%20Challenge%20Lab"],
    '#arc107':["https://github.com/quiccklabs/Labs_solutions/blob/master/Get%20Started%20with%20Looker%3A%20Challenge%20Lab"],
    '#gsp401':["https://github.com/quiccklabs/Labs_solutions/blob/master/Cloud%20Scheduler%3A%20Qwik%20Start"],
    


    ///// Add more labs and arrays of links as needed here///////
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase()); // Convert input to lowercase
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const normalizedQuery = searchQuery.toLowerCase(); // Normalize the search query
    const foundLinks = labLinks[normalizedQuery]; // Use the normalized query for lookup
    if (foundLinks) {
      setLinks(foundLinks);
      setIsLabFound(true);
    } else {
      console.log('Lab not found:', searchQuery);
      setLinks([]);
      setIsLabFound(false);
    }
  };

  const openLink = (url) => {
    window.open(url, "_self");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4">
      <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row items-center gap-2">
        <input
          type="text"
          placeholder="Search for Lab Files Eg: #GSP111"
          value={searchQuery}
          onChange={handleSearchChange}
          className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Search
        </button>
      </form>

      {!isLabFound && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 border border-red-200 rounded-lg text-center">
          <p>Lab file not found or uploaded.</p>
        </div>
      )}

      {links.length > 0 && (
        <div className="mt-4 p-4 bg-white shadow-md rounded-lg text-center border border-gray-200">
          <p className="mb-2 text-sm font-medium text-gray-700">Links:</p>
          {links.map((link, index) => (
            <div key={index} className="mb-2">
              <a href={link} target="_blank" className="text-blue-600 hover:text-blue-800 break-words">{link}</a>
              <button
                onClick={() => openLink(link)}
                className="ml-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
              >
                Open
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Resources;
