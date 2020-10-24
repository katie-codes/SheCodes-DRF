import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Carousel from "./components/Carousel/Carousel";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProjectPage from "./pages/ProjectPage";
import "./App.css";



function App() {
  return (
    <Router>
      <div>
        <Header />
        <Nav />
        <Carousel />

        <Switch>
          <Route path="/projects/:id">
            <ProjectPage />
          </Route>

          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>

        </Switch>
        <Categories />
      </div>
    </Router>
); 
}

export default App;