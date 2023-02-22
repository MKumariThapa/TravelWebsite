import "./App.css";
// import { BrowserRouter } from "react-router-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
// animation
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />}> */}
        <Route exact path="/TravelWebsite" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
