import axios from "axios";
import React, { useState } from "react";

const UserFavorites = () => {
  const [userFavorites, setUserFavorites] = useState([]);
  // const [userFavorites, ]

  const fetchUserFavorites = async () => {
    try {
      const response = await axios.get(userFavorites);
      console.log(response);
      setUserFavorites(response.data);
    } catch (error) {
      console.warn("Error in fetch user favorites request", error);
    }
  };

  return (
    <div>
      <h1>My Favorites!</h1>;
      {/* {userFavorites.map((item)
      <Item key={item})} */}
      {/* <SearchBar />
      <span>{item</span>
      <button onClick={fetchUserFavorites}>Favorites</button> */}
    </div>
  );
};

export default UserFavorites;
