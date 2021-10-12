import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialState = {
  friends: [],
}

const Friends = () => {
  const [ friendsList, setFriends ] = useState(initialState);

  const getData = () => {
      axiosWithAuth()
          .get('http://localhost:5000/api/friends')
          .then(response => {
              console.log(response);
              setFriends({friends: response.data})
          })
          .catch(error => {
              console.log(error);
          })
  }

  useEffect(() => {
      getData();
  }, []); 

  return (
      <div>
          {friendsList.friends.map(friend => (
              <div key = {friend.id}>
                  <h4>{friend.name}</h4>
                  <p>Age: {friend.age}</p>
                  <p>Email: {friend.email}</p>
              </div>
              )
          )}
      </div>
  );
}

export default Friends;