import { Link, useLocation } from "react-router-dom";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1 className="second-par text-5xl font-black 	 "><span className="opacity-40 font-thin">Frontend</span>|developer</h1>
        <Link to="about">
        </Link>
      </div>
      <div className="person bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-xl		">
        <img className="shadow-2xl border-gray-900 transform translate-x-4 translate-y-4 backdrop-filter brightness-100 	"
          src={`${process.env.PUBLIC_URL}/gad.png`}
          alt="person picture"
        />
      </div>
    </div>
  );
};

export default Home;
