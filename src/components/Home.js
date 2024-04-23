import React from "react";

function Home() {
  const username = "John Doe"; // Define the 'username' variable and assign it a value
  const city = "New York"; // Define the 'city' variable and assign it a value

  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;