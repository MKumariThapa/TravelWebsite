import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Container from "react-bootstrap/esm/Container";
// import styles from "./Footer.module.css";
import style from "./Footer.module.css";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { FaBehanceSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <Container fluid className={style.mainDiv}>
      {/* <Container>
        <Row className="">
          <Col sm={6} className="mt-3">
            <h3>Tourisy</h3>
            <p className="">Choose your favourite Desitnation</p>
          </Col>
          <Col sm={6} className="text-end">
            <ul className="d-flex justify-content-end list-unstyled cursor-pointer my-3 me-5 ms-5">
              <li className="mx-3 ">
                <FaFacebookSquare size="30px" />
              </li>
              <li className="mx-3">
                <FaInstagramSquare size="30px" />
              </li>
              <li className="mx-3">
                <FaTwitterSquare size="30px" />
              </li>
              <li className="mx-3">
                <FaBehanceSquare size="32px" />
              </li>
            </ul>
          </Col>
        </Row>
      </Container> */}
      <Container>
        <Row className="d-flex justifu-content-center align-items-center bg-green pt-3">
          <Col
            className="  "
            data-aos="fade-right"
            // data-aos-delay="3500"
            data-aos-duration="2500"
          >
            <h3 className="text-success  fw-normal">Project</h3>
            <ul className="list-unstyled">
              <li>Changelog</li>
              <li>Status</li>
              <li>License</li>
              <li>All versions</li>
            </ul>
          </Col>
          <Col
            className="  "
            data-aos="fade-up"
            // data-aos-delay="3600"
            data-aos-duration="2500"
          >
            <h3 className="text-success  fw-normal">Community</h3>
            <ul className="list-unstyled">
              <li>Github</li>
              <li>Issues</li>
              <li>Project</li>
              <li>Twitter</li>
            </ul>
          </Col>

          <Col
            className="  "
            data-aos="fade-up"
            // data-aos-delay="3700"
            data-aos-duration="2500"
          >
            <h3 className="text-success  fw-normal">Help</h3>
            <ul className="list-unstyled">
              <li>Support</li>
              <li>TroubleShooting</li>
              <li>Contact US</li>
              <li>Subscribe</li>
            </ul>
          </Col>
          <Col
            className="  "
            data-aos="fade-left"
            // data-aos-delay="3800"
            data-aos-duration="2500"
          >
            <h3 className="text-success  fw-normal">Contact </h3>
            <ul className="list-unstyled ">
              <li>
                <FaFacebookSquare /> Facebook{" "}
              </li>
              <li>
                {" "}
                <FaInstagram /> Instagram{" "}
              </li>
              <li>
                <FaTwitterSquare /> Twitter{" "}
              </li>
              <li>
                <FaBehanceSquare /> Behance{" "}
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <hr
              className="bg-success text-success fw-bold"
              style={{ height: "0.1rem" }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="d-flex justify-content-center">
              © 2023 CopyRight{" "}
              <span className="ms-1 text-success">Mkumari</span>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
