import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const RouterComp = () => {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />}> */}
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} /> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterComp;
