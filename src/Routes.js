import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import {
  Content,
  Footer,
  Secrets,
  Testimonials,
  Values,
  Winnie,
} from "./components/Content";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/services" component={Services}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </Switch>
      <Navbar /> {/* visible always */}
      <Wrapper />
      <Content />
      <Winnie />
      <Testimonials />
      <Values />
      <Secrets />
      <Footer />
    </Router>
  );
}
