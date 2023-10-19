import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../..hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";

const AddReviewPage = (props) => {
  const [user, token] = useAuth();
  const navigate = useNavigate();

  const initialValues = {
    text: "",
    rating: "",
  };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    postNewReview,
    initialValues
  );

  async function postNewReview() {
    console.log("Form Submitted");
  }

  return (
    <div className="container">
      <h1>Share your thoughts! Write a review!</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Text:{" "}
          <input
            type="text"
            name="text"
            value={formData.text}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Rating:{" "}
          <input
            type="text"
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
          />
        </label>
      </form>
      <button>Add New Review</button>
    </div>
  );
};

export default AddReviewPage;
