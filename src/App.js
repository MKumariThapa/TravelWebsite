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
import Router from "./Router";
AOS.init();
function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;
