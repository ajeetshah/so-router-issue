import React from "react";
import Image from "../img/image1.jpg";
import imagetwo from "../img/image2.jpg";
import imagethree from "../img/image3.jpg";
import { withStyles } from "@material-ui/core/styles";
import Federica from "../img/federica.jpg";
import Mokul from "../img/mokul.jpg";
import Value from "../img/value1.jpg";
import MyValue from "../img/value2.jpg";
import me from "../img/me.jpg";
import Button from "@material-ui/core/Button";
import Video from "../video/arc.mp4";
import Minimal from "../img/minimal.jpg";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";
import { Link } from "react-router-dom";

const StyledButton = withStyles({
  root: {
    background: "rgba(255, 255, 255, 1)",
    borderRadius: 1,
    border: 0,
    color: "white",
    height: 20,
    margin: "1em",
    padding: "20px 20px",
    marginTop: "5em",
    width: "30%",
    position: "relative",
    top: "-100px",
    left: "60px",
  },
  label: {
    textTransform: "capitalize",
    fontFamily: "Roboto",
    fontSize: "1px",
  },
})(Button);

const MyButton = withStyles({
  root: {
    background: "rgba(255, 255, 255, 1)",
    borderRadius: 1,
    border: 0,
    color: "white",
    height: 20,
    margin: "2em 0",
    padding: "20px 20px",
    width: "30%",
  },
  label: {
    textTransform: "capitalize",
    fontFamily: "Roboto",
    fontSize: "1px",
  },
})(Button);

const Content = () => {
  return (
    <div className="box">
      <div className="image"></div>
      <div className="inner-container">
        <h1>
          If you are looking to level up your brand , you`re in the right place
        </h1>
        <p>
          Branding and Web Design - DelightartCo is a full-service graphic
          design studio for passionate entrepreneurs WHO WANT TO STAND OUT IN A
          WAY THAT SUITS THEM.
        </p>
        <p className="link">
          <a href="#">Ready for challenge?</a>
        </p>
      </div>
      <div className="gallery">
        <figure className="gallery__item gallery__item--5">
          <h2 id="hand">What I do...</h2>
        </figure>
        <figure className="gallery__item gallery__item--4">
          <h2>Branding</h2>
          <br />
          <h2>Web design</h2>
          <br />
          <h2>Social media</h2>
          <br />
          <h2>Photography</h2>
          <br />
          <p className="paragraph">
            If you are looking to level up your brand , you`re in the right
            place. Branding and web design DelightartCo is a full-service
            graphic design studio for passionate entrepreneurs who want to stand
            out in a way that suits them.
          </p>
          <MyButton
            style={{
              backgroundColor: "rgba(157, 124, 94, 1)",
              padding: "20px 20px",
            }}
          >
            <a
              href="https://delightart.co"
              style={{
                transition: "#0000 all 0.2s linear",
                textDecoration: "none",
                color: "white",
                fontSize: "10px",
                textTransform: "uppercase",
                fontFamily: "commuters-sans",
                letterSpacing: "1px",
              }}
            >
              Learn more
            </a>
          </MyButton>
        </figure>
        <figure className="gallery__item gallery__item--1">
          <img src={Image} className="gallery__img" alt="Portfolio sample 1" />
        </figure>
        <figure className="gallery__item gallery__item--2">
          <img
            src={imagetwo}
            className="gallery__img"
            alt="Portfolio sample 2"
          />
        </figure>
        <figure className="gallery__item gallery__item--3">
          <img
            src={imagethree}
            className="gallery__img"
            alt="Portfolio sample 3"
          />
        </figure>
      </div>
    </div>
  );
};

function Winnie() {
  return (
    <div className="miod">
      <div className="element-1">
        <p className="me-title">Avocado obsessed, enneagram 3, nature lover</p>
        <h2 id="me-more">
          Hi, I`m Magdalena. Photographer, brand specialist and web designer
        </h2>
        <p className="me-title1">
          I would describe myself as spontaneous, perfectionist and a bit
          stubborn. Want to know more about me and my working method?
        </p>
        <StyledButton>
          <a
            label="label"
            href="https://delightart.co"
            style={{
              transition: "#0000 all 0.2s linear",
              textDecoration: "none",
              color: "black",
              fontSize: "10px",
              textTransform: "uppercase",
              fontFamily: "commuters-sans",
              letterSpacing: "1px",
            }}
          >
            Learn more
          </a>
        </StyledButton>
      </div>
      <div className="element-2">
        <img src={me} alt="More about me" />
      </div>
      <div id="doddle"></div>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="testimonials">
      <div className="testimonial1">
        <img src={Federica} alt="Federica" />
      </div>
      <div className="title">
        <h2>Indigo Childress</h2>
        <p>
          “I was LOST on branding for my company. I have so much more clarity
          after working with DelightartCo. Thank you SO much. Def recommend!”
        </p>
      </div>
      <div className="testimonial2">
        <img src={Mokul} alt="Mokul" />
      </div>
      <div className="title2">
        <h2>Tay Frost</h2>
        <p>
          “Working with Magdalena and DelightartCo was great! She listened and
          really got a feel for me, my business, and what I want my brand to be.
          Her creativity is unbeatable- talking my ramblings and making into a
          work of art. I was blown away! Turnaround time was fast which is much
          appreciated. Will absolutely work with DelightartCo in the future!”
        </p>
      </div>
    </div>
  );
}

function Values() {
  return (
    <div className="container">
      <div className="my-img-2">
        <img src={Value} alt="My values" />
      </div>
      <div className="title1">
        <h2>Empathy</h2>
      </div>
      <div className="title2">
        <h2>Trust</h2>
      </div>
      <div className="my-img-1">
        <img src={MyValue} alt="My best values" />
      </div>
      <video autoPlay={false} loop={false}>
        <source src={Video} type="video/mp4"></source>
      </video>
    </div>
  );
}

function Secrets() {
  return (
    <div className="secrets">
      <div className="minimal">
        <img src={Minimal} alt="Minimal" />
      </div>
      <div className="typography">
        <h3>Ready to</h3>
        <h2>Find brand clarity and connect with your dream clients?</h2>
        <p>
          I’m sharing my templates for a brand moodboard, logo designs, brand
          style guide and more so you can plug & play & get your new brand out
          into the world.
        </p>
        <MyButton
          style={{
            backgroundColor: "rgba(157, 124, 94, 1)",
            padding: "20px 20px",
          }}
        >
          <a
            href="https://delightart.co"
            style={{
              transition: "#0000 all 0.2s linear",
              textDecoration: "none",
              color: "white",
              fontSize: "10px",
              textTransform: "uppercase",
              fontFamily: "commuters-sans",
              letterSpacing: "1px",
            }}
          >
            Download
          </a>
        </MyButton>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <h2>Delightartco</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div id="instagram">
        <InstagramFeed
          token="IGQVJWeS1DUXVmaGxFYzFwVWlpYlJ2Y3F1ZAmpFS194aEFNTHZA6RXBfQlJibnJvRHUydzRTRWphUW9UN09TU2JVQVlkOWhjU1BNdDhjcDJmbEJlUXZAoUUc4dU9jb2xWQUtGcnFZAVVFBU0xsUHRILVRQVQZDZD"
          counter="6"
        />
      </div>
    </div>
  );
}

export { Content, Winnie, Testimonials, Values, Secrets, Footer };
