// SearchBar.jsx
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Trigger search on button click or Enter keypress
  const handleSearch = () => {
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery) {
      navigate(`/search?query=${encodeURIComponent(trimmedQuery)}`);
      setSearchQuery(""); // Clear search query after submission
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center bg-gray-200 w-full max-w-lg ml-10">
      <input
        type="text"
        className="bg-gray-200 text-gray-800 focus:outline-none w-full px-4 py-2 "
        placeholder="Search for products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyPress} // Trigger search on Enter key
        aria-label="Search for products"
      />
      <button
        onClick={handleSearch}
        className="flex items-center justify-center p-3 bg-teal-400 text-white hover:bg-sky-100 transition-colors"
        aria-label="Search"
      >
        <FaSearch className="text-xl" />
      </button>
    </div>
  );
};

export default SearchBar;
