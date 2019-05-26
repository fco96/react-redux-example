import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="box">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  )
}

const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  )
}

export default App