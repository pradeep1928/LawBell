import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/pages';
import About from './Components/pages/about';
import Contact from './Components/pages/contact';
import SignUp from './Components/pages/signup';
import SignIn from './Components/pages/signin';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;