import React from 'react';
import parag from "../images/5048173.webp";
import { Link } from 'react-router-dom';


const Home = () => {
  
  return (
    <>
      <nav className="navbar">
        <div className="ss">
          <Link className="first" to="/">
            <img className="img1" src={parag} alt="" /> CROP FINDER
          </Link>
        </div>
        <div className="ask">
          <Link to="/">Home</Link>
          <Link to="#">About us</Link>
          <Link to="/login" className="btn1">
            Log in
          </Link>
          <Link to="/signup" className="btn1">
            Sign up
          </Link>
        </div>
      </nav>
      <div className="sell">
        <div>
          <button style={{ marginLeft: '20px' }} className="btn2" 
      >
            <Link to="/login">Click here to share your experiences</Link>
          </button>
          <button className="btn2">
          <Link to="/search" >Click here to see which crop is better for our location</Link>  
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
