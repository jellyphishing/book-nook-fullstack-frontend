import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../..hooks/useAuth";

const AddBookPage = (props) => {
  const [user, token] = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <p>Add Book Page</p>
    </>
  );
};

export default AddBookPage;
