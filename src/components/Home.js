import React from "react";

function Home() {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Michael" },
    { id: 4, name: "Jane" },
  ];

  // const mapped = users.map((user) => ({
  //   userName: user.name,
  //   userId: user.id,
  // }));

  // console.log("mapped", mapped);

  const onClickUser = (user) => {
    console.log("clicked on ", user);
  };

  return (
    <div>
      <div className="container">
        {users.map((user) => (
          <div key={user.id} className="item">
            <div onClick={() => onClickUser(user)}>{user.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
