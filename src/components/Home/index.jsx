import { Link, useLocation } from "react-router-dom";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1 className="second-par">
           Frontend developer
        </h1>
        <Link to="about">
        </Link>
      </div>
      <div className="person">
        <img
          src={`${process.env.PUBLIC_URL}/gad.png`}
          alt="person picture"
        />
      </div>
    </div>
  );
};

export default Home;
