import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from './Components/pages';
import About from './Components/pages/about';
import Contact from './Components/pages/contact';
import SignUp from './Components/pages/signup';
import SignIn from './Components/pages/signin';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/signin" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;