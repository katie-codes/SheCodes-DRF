import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import HomePage from "./pages/HomePage";
import NewProject from "./pages/NewProject";
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

          <Route path="/newproject">
            <NewProject />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>

        </Switch>
      </div>
    </Router>
); 
}

export default App;