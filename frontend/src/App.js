import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import SignUp from './components/pages/signup';
import SignIn from './components/pages/signin';
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