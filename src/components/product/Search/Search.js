import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  // Form on Submit Hanlder
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    // here we're using trim because we don't want any space in our search keyword
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };
  return (
    <>
      <form onSubmit={searchSubmitHandler} className="searchBox">
        <input
          type="text"
          placeholder="search a product..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </>
  );
};

export default Search;
