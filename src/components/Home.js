import React, { useState } from "react";

function Home() {
  const [users, setUsers] = useState([
    { id: 1, name: "John" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Michael" },
    { id: 4, name: "Jane" },
  ]);
  const [todo, setTodo] = useState("");

  // const onClickUser = (item) => {
  //   console.log("user", item);
  // };

  const onSubmit = (e) => {
    e.preventDefault();

    // making a copy of users state
    const allusers = users;

    // creatin an object of new user
    // Math.random() is a javascript function to generate a random number
    const newUser = { id: Math.random(), name: todo };

    // adding the new user object in the allusers array
    allusers.push(newUser);

    // updating or setting the users state with addition of new user
    setUsers([...allusers]);
    // reseting or clearing the input field for todo
    setTodo("");
  };

  console.log("users", users);

  return (
    <div>
      <div className="container">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit">add</button>
        </form>

        <div>
          {users.map((user) => {
            return (
              <div
                key={user.id}
                className="item"
                // onClick={() => onClickUser(user)}
              >
                {user.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
