import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import "./App.css";



function App() {
  return (
    <Router>
      <div>
        <Header />
        <Nav />

        <Switch>
          <Route path="/projects/:id">
            <ProjectPage />
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