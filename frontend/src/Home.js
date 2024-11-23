import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <h1>SPA-CE</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="/model">MODEL</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/about-us">ABOUT</a></li>
          </ul>
        </nav>
      </header>

      {/* Main content */}
      <main className="main-content">
        <h1 className="main-title">SPA-CE</h1>
        <button className="get-started-btn">GET STARTED</button>
      </main>
    </div>
  );
};

export default Home;
