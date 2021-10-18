import React from "react";
import SignUp from "./SignUp";


const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Potluck Planner</h1>
      </header>
      <div>
        <p>
          If you have ever tried to organize a potluck through text messages,
          online to-do lists or spreadsheets, you'll understand why this app is
          essential.
        </p>
        <p>
          In the world of social gatherings and potlucks the "Potluck Planner"
          is king. This is your place for all things pot luck.
        </p>
        <SignUp />

      </div>
    </div>
  );
};

export default HomePage;
