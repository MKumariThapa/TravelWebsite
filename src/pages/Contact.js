import React from "react";
import { Link } from "react-router-dom";
import ContactMapComp from "../components/Contact/ContactMapComp";
import ContactFormCom from "../components/Contact/contactform/ContactFormCom";
import Footer from "../components/footer/Footer";

const Contact = () => {
  return (
    <div style={{ backgroundCo: "#000" }}>
      <ContactFormCom />
      <ContactMapComp />

      <Footer />
    </div>
  );
};

export default Contact;
