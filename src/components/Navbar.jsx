import { FaShoppingCart, FaCaretDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../Asstes/About/logo2.png";
import {
  FaLaptop,
  FaTshirt,
  FaHome,
  FaBasketballBall,
  FaPuzzlePiece,
} from "react-icons/fa";
import SearchBar from "./Core/Search/Searchbar"; // Adjust the path according to your structure

// Sample categories with icons
const categories = [
  { name: "Electronics", path: "/category/electronics", icon: <FaLaptop /> },
  { name: "Fashion", path: "/category/fashion", icon: <FaTshirt /> },
  { name: "Home & Garden", path: "/category/home-garden", icon: <FaHome /> },
  { name: "Sports", path: "/category/sports", icon: <FaBasketballBall /> },
  { name: "Toys", path: "/category/toys", icon: <FaPuzzlePiece /> },
];

const Navbar = ({ setIsLoggedIn }) => {
  const { cart } = useSelector((state) => state);
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("/");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    navigate(link);
    setIsCategoryOpen(false);
  };

  return (
    <div>
      <nav className="flex justify-between items-center h-24 w-full mx-auto px-4 bg-teal-300 sticky top-0 z-50 shadow-md">
        {/* Logo */}
        <NavLink to="/" onClick={() => handleLinkClick("/")}>
          <div className="ml-5">
            <img src={logo} className="h-36" alt="Logo" />
          </div>
        </NavLink>

        {/* Search Bar */}
        <SearchBar />

        {/* Navigation Links */}
        <div className="flex justify-between items-center font-medium text-gray-800 text-[18px] space-x-6 ml-auto">
          {["/", "/product", "/about", "/contact"].map((link) => (
            <NavLink
              key={link}
              to={link}
              onClick={() => handleLinkClick(link)}
              className={`py-1 transition-colors duration-300 ${
                activeLink === link ? "text-white" : "text-gray-800"
              } hover:border-b-2 hover:border-caribbeangreen-400`}
            >
              {link === "/"
                ? "Home"
                : link.charAt(1).toUpperCase() + link.slice(2)}
            </NavLink>
          ))}

          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className={`flex items-center py-1 transition-colors duration-300 ${
                activeLink.includes("/category")
                  ? "text-teal-600"
                  : "text-gray-800"
              } hover:border-b-2 hover:border-caribbeangreen-300`}
            >
              Categories <FaCaretDown className="ml-1" />
            </button>
            {isCategoryOpen && (
              <div className="absolute z-10 mt-2 w-48 bg-teal-300 rounded shadow-lg">
                {categories.map((category) => (
                  <NavLink
                    key={category.name}
                    to={category.path}
                    onClick={() => handleLinkClick(category.path)}
                    className="flex items-center px-4 py-2 text-gray-800 hover:bg-sky-100 transition-colors duration-200"
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Cart */}
        <div className="flex items-center space-x-6 ml-auto">
          <NavLink to="/cart">
            <div className="relative text-gray-800 hover:scale-110">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600 w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-pink-200 text-xl">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
