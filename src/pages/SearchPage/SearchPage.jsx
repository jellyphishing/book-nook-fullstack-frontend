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
        try{
            let lowerCaseSearch = searchTerm.toLowerCase();
            let response = await axios.get(
                `http`
            )
        }
    }

















    return <h1>Search Page</h1>;
};

export default SearchPage;
