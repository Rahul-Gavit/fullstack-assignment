import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <nav>
        <ul>
          <li>
            <Link to="/help">Help Center</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
