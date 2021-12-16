import React, { useState } from "react";
import macbook from "../../../img/macbookpro.webp";
import Products from "../products/Products";
import Footer from "../footer/Footer";
import NavBarr from "../navBarr/NavBarr";
import "./Landing.css";

const Landing = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <NavBarr setText={setText} text={text} />
      <section id="landing-page" className="landing-page">
        <div className="landing-container">
          <h6 className="landing-heading">MacBook Pro</h6>
          <h3 className="landing-paragraph">Powerful. Fast. Elegant.</h3>
          <img className="macbook-img" src={macbook} alt="Macbook Pro" />
        </div>
      </section>
      <Products text={text} />
      <Footer />
    </div>
  );
};

export default Landing;
