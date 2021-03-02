import React from "react";
import perfume from "../img/perfume.jpg";
import desk from "../img/desk.jpg";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const StyledButton = withStyles({
  root: {
    background: "rgba(157, 124, 94, 1)",
    borderRadius: 1,
    border: 0,
    color: "white",
    height: 20,
    padding: "10px 10px",
  },
  label: {
    textTransform: "capitalize",
    fontFamily: "Roboto",
    fontSize: "1px",
  },
})(Button);

const Wrapper = () => {
  return (
    <div className="img-wrapper">
      <div className="img-area">
        <div className="single-img-one">
          <img src={perfume} alt="Luxury perfume" />
        </div>
        <div className="single-img-two">
          <img src={desk} alt="Minimal desk" />
        </div>
        <div className="wrapper">
          <div className="simple">
            <h1 className="title">
              Be delightful as you build your online presence with{" "}
              <span id="delightart">Delightartco</span>
            </h1>
            <p className="title-paragraph">
              Let's begin establishing your very own: compelling brand name,
              strinking websites & strong social media existence
            </p>
            <StyledButton
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
            </StyledButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
