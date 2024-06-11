import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { FaGitSquare } from "react-icons/fa";
import { Context } from "../../main";

const Footer = () => {
  const isDashboard = useLocation("http://localhost:5173/dashboard");
  const { mode, setMode } = useContext(Context);

  return (
    <footer
      className={
        isDashboard.pathname === "/dashboard"
          ? "hideFooter"
          : mode === "light"
          ? "light-footer"
          : "dark-footer"
      }
    >
      <div className="container">
        <div className="about">
          <h3>About</h3>
          <p>
          BlogVerse, your ultimate destination for discovering, reading, and sharing blogs on a wide array of topics.
          At BlogVerse, we believe in the power of words to inform, inspire, and connect people from all walks of life
          </p>
          <p>
            <span>Email:</span>navneetdeshtaa@gmail.com
          </p>
          <p>
            <span>Phone:</span>8894405675
          </p>
        </div>
        <div className="quick_links">
          <h3>Quick Links</h3>
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
          </ul>
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li>Lifestyle</li>
            <li>Technology</li>
            <li>Sports</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
          </ul>
        </div>
        <div className="news_letter">
          <div>
            <h3>Weekly Newletter</h3>
            <p>Get blog articles and offer via email</p>
          </div>
          <div>
            <input type="text" placeholder={`Your Email`} />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="logo">BLOG  <span>VERSE</span></div>
        <div className="links">
          <Link to={"https://www.instagram.com/navneet.deshta?igsh=ejY5NTk5bGk1eThq"} target="_blank">
            <AiFillInstagram />
          </Link>
          <Link to={"https://github.com/NavneetDeshtaa"} target="_blank">
            <FaGitSquare />
          </Link>
          <Link to={"https://www.youtube.com/channel/UCHvUQZbvM7BaDhms4OZFS5g"} target="_blank">
            <AiFillYoutube />
          </Link>
          <Link to={"https://www.linkedin.com/in/navneet-deshta-14662b259/"} target="_blank">
            <AiFillLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;