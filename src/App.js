import React from "react";
import { Switch, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Hero from "./components/LandingPage/Hero"
import Pizza from "./components/Pizza/Pizza"

const App = () => {
  return (
    <>
    <Header />
      <Switch>
        <Route exact path="/" component={Hero} />
        <Route path="/pizza" component={Pizza}/>
      </Switch>
    </>
  );
};
export default App;
