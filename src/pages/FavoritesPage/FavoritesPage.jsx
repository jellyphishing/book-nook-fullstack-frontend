import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";

const UserFavorites = () => {
  const [userFavorites, setUserFavorites] = useState([]);
  const [user, token] = useAuth();

  useEffect(() => {
    fetchUserFavorites();
  }, []);

  const fetchUserFavorites = async () => {
    try {
      const response = await axios.get(
        "https://localhost:5001/api/favorites/",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response);
      setUserFavorites(response.data);
    } catch (error) {
      console.warn("Error in fetch user favorites request", error);
    }
  };

  return (
    <div>
      <h1>My Favorites!</h1>;
      {userFavorites.map((item) => (
        <div>
          <p>{item.title} </p>
          <p>{item.thumbnail}</p>
        </div>
      ))}
    </div>
  );
};

export default UserFavorites;
