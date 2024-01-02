import React from "react";
import Profile from "../../assets/user.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Suraj Upadhyay</span> Web Designer
          </h1>
          <p className="home__description">
            Having 3.9 years of work experience as a software developer, seeking
            a position to work in a challenging environment which demands
            constant development of new skills and maximum utilization of the
            existing skills for mutual growth and benefits.
          </p>
          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
};

export default Home;
