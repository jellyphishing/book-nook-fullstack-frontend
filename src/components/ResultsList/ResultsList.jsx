import axios from "axios";
import React from "react";
import "./ResultsList.css";
import { Link } from "react-router-dom";

const ResultsList = ({ searchResults }) => {
  return (
    <div className="resultsList">
      <h2>Results List:</h2>
      {searchResults.map((bookId, index) => (
        <Link to={`/${bookId.books.title}`} key={index}>
          <div key={index}>
            <h3>{bookId.books.title} </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ResultsList;
