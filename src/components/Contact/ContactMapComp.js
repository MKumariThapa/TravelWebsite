import React from "react";
import Container from "react-bootstrap/Container";
const ContactMapComp = () => {
  return (
    <Container
      style={{ height: "30rem" }}
      data-aos="zoom-in-up"
      data-aos-duration="1400"
    >
      {/* <h1>hello</h1> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.150917097069!2d85.30377721490083!3d27.681730082802588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ba532c0ab3%3A0x3139e7d344f333e1!2sYantra%20Solution!5e0!3m2!1sen!2snp!4v1676973786859!5m2!1sen!2snp"
        // width="600"
        // height="100"
        // style="border:0;"
        // allowfullscreen="true"
        // loading="lazy"
        style={{ width: "100%", height: "100%" }}
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Container>
  );
};

export default ContactMapComp;
