import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <h1>
          Organize your <br /> Work and life,finally.
        </h1>
        <p className="home-p">
          Bacome focused, organized, and calm with <br />
          todo app. The World's #1 task manager app.
        </p>
        <button className="home-btn my-3">Make Todo List</button>
      </div>
    </div>
  );
};

export default Home;
