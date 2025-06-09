import React, { useEffect, useState } from "react";
import ButtonCard from "./ButtonCard";
import Card from "./Card";

const News = () => {
  const [search, setSearch] = useState("India");
  const [newsData, setNewsData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const API_KEY = "cfd08ce83ed14234bf347fd846041d07";

  const getData = async (query = search) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
      );
      const jsonData = await response.json();
      setNewsData(jsonData.articles || []);
      setSearch("");
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleCategory = (category) => {
    setSearch(category);
    getData(category);
  };

  useEffect(() => {
    getData();
  }, []);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
      }`}
    >
      {/* Navbar */}
      <nav
        className={`flex flex-col md:flex-row justify-between items-center w-full px-6 py-4 gap-4 ${
          darkMode ? "bg-gray-800" : "bg-blue-200"
        }`}
      >
        <h1 className="font-bold text-3xl md:text-4xl">Trendy News</h1>

        <ul className="flex gap-6 text-lg md:text-xl font-semibold">
          <li className="cursor-pointer hover:text-blue-500">All News</li>
          <li className="cursor-pointer hover:text-blue-500">Trending</li>
        </ul>

        <div className="flex gap-2 w-full md:w-auto">
          <input
            type="text"
            onChange={handleInput}
            value={search}
            onKeyDown={(e) => {
              if (e.key === "Enter") getData(search);
            }}
            className={`px-4 py-2 h-10 md:h-12 text-lg font-semibold w-full md:w-64 rounded border focus:outline-none ${
              darkMode ? "bg-gray-700 text-white border-white" : "border-black"
            }`}
            placeholder="Search News"
          />
          <button
            onClick={() => getData(search)}
            className="h-10 md:h-12 w-20 text-lg bg-blue-700 text-white rounded hover:bg-blue-500"
          >
            Search
          </button>
        </div>

        <div className="absolute top-4 right-4 md:static">
  <label className="inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      className="sr-only peer"
      checked={darkMode}
      onChange={toggleDarkMode}
    />
    <div className="w-11 h-6 bg-gray-300 rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 peer-checked:bg-blue-600 transition-colors duration-300 relative">
      <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transform transition-transform duration-300 peer-checked:translate-x-5"></div>
    </div>
    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
      {darkMode ? "Dark" : "Light"} Mode
    </span>
  </label>
</div>

      </nav>

      {/* Header Text */}
      <div className="text-center my-8">
        <p className="font-semibold text-3xl">Stay Updated with Trendy News</p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {["Sports", "Politics", "Entertainment", "Health", "Fitness"].map(
          (category) => (
            <ButtonCard
              key={category}
              name={category}
              onClick={() => handleCategory(category)}
            />
          )
        )}
      </div>

      {/* News Cards */}
      <div className="mt-10 px-4">
        <Card data={newsData} darkMode={darkMode} />
      </div>

      {/* Sticky Footer */}
      <footer
        className={`mt-auto py-4 text-center text-lg ${
          darkMode ? "bg-gray-800 text-white" : "bg-blue-200 text-black"
        }`}
      >
        Made with ❤️ by Rishikant Singh
      </footer>
    </div>
  );
};

export default News;
