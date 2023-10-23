import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const DetailsPage = () => {
  const { bookId } = useParams();
  const [bookDetails, setBookDetails] = useState();

  useEffect(() => {
    fetchBookDetails();
  }, []);

  const fetchBookDetails = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${bookId}/`
      );
      setBookDetails(response.data.volumeInfo);
    } catch (error) {
      console.log("Error in fetchBookDetails: ", error);
    }
  };

  const postNewFavorite = async () => {
    try {
      let response = await axios.post(`https://localhost:5001/api/favorites/`);
      setNewFavorite(response.data.bookId);
    } catch (error) {
      console.log("Error in post new favorite: ", error);
    }
  };

  return (
    <div className="container">
      {bookDetails ? (
        <div>
          <h1>{bookDetails.Id}'s Details Page!</h1>
          <h3>{bookDetails.title}Title: </h3>
          <h3>{bookDetails.authors}Authors: </h3>
          <h3>{bookDetails.description}Description: </h3>
          <h3>{bookDetails.imageLinks.thumbnail}</h3>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default DetailsPage;
