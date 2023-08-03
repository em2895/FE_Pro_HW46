import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Users list</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p>{user.name}</p>
            <Link to={`/albums?userId=${user.id}`}>Albums</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
