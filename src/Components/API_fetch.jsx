import axios from "axios";
import React, { useEffect, useState } from "react";

function API_fetch() {
  const [users, setUsers] = useState([]);

  // useEffect runs when the component loads
  useEffect(() => {
    // GET request to fetch data
    axios
      .get("http://localhost:5000/products")
      .then((response) => {
        setUsers(response.data); // set data to state
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default API_fetch;
