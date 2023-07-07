import React, { useState } from 'react';
import AddUser from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevList) => {
      return [...prevList, { name: uName, age: uAge }]
    })
  }

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
