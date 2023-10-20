import axios from "axios";
import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useState } from "react";
import ResultsList from "../../components/ResultsList/ResultsList";
import "./SearchPage.css";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchBooks = async () => {
    try {
      let lowerCaseSearch = searchTerm.toLowerCase();
      let response = await axios.get(
        `https://localhost:5001/api/bookId/${lowerCaseSearch}/`
      );
      setSearchResults(response.data.bookList);
    } catch (error) {
      console.log("Error in fetchBooks: ", error);
    }
  };

  const handleSUbmit = (e) => {
    e.preventDefault();
    fetchBooks();
  };

  return (
    <div className="container search">
      <h1>Search Page!</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSubmit={handleSUbmit}
      />
      <ResultsList searchResults={searchResults} />
    </div>
  );
};

export default SearchPage;
