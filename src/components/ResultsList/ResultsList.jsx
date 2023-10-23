import axios from "axios";
import React from "react";
import "./ResultsList.css";
import { Link } from "react-router-dom";

const ResultsList = ({ searchResults }) => {
  return (
    <div className="resultsList">
      <h2>Results List:</h2>
      {searchResults.map((items, index) => (
        <Link to={`/${items.id}`} key={index}>
          <div key={index}>
            <h3>{items.volumeInfo.title} </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ResultsList;
