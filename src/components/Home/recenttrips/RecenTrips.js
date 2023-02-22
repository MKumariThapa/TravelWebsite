import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import { CiLocationOn } from "react-icons/ci";
import { AiTwotoneStar } from "react-icons/ai";
const RecenTrips = () => {
  return (
    <>
      <Container
      // style={{ backgroundColor: "#F9FEFF" }}
      >
        <div
          className="my-5   text-center"
          data-aos="fade-up"
          data-aos-duration="1300"
          // style={{ backgroundColor: "#F9FEFF" }}
        >
          <h2>Popular Packages</h2>
          {/* <h1>Popular Destination</h1> */}
          <p>You can discover unique Destinations using Google Maps.</p>
        </div>
        {/* <Row className="d-flex justify-content-center">
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
        <CardGroup className="cursor-pointer">
          <Card
            className=" m-3 pe-auto cursor-pointer h-100"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            <Card.Img
              className="w-100 h-100 object-fit-cover"
              variant="top"
              src="https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8SW5kb25lc2lhfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body>
              {/* <div className="d-flex justify-content-between flex-md-column  flex-sm-column"> */}
              <div className="d-flex justify-content-between  flex-lg-row flex-sm-column  ">
                <Card.Text>
                  <CiLocationOn
                    color=""
                    className="text-warning fw-bolder lh-1 fs-5"
                  />{" "}
                  Indonesia
                </Card.Text>
                <Card.Title>
                  <AiTwotoneStar className="text-warning" /> 5.0 (4)
                </Card.Title>
              </div>
              <Card.Title className="d-flex justify-content-between">
                Bali
              </Card.Title>
              <div
                className="d-flex justify-content-between align-items-center
                align-items-lg-center justify-content-lg-between
                flex-lg-row flex-sm-column align-items-sm-start  justify-content-sm-evenly "
              >
                <span className="text-warning fs-4 fw-bold lh-1 mt-1">$60</span>{" "}
                <Button variant="success">Book Now</Button>
              </div>
            </Card.Body>
          </Card>
          <Card
            className=" m-3  h-100"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <Card.Img
              className="w-100 h-100 object-fit-cover"
              variant="top"
              src="https://images.unsplash.com/photo-1581981657871-77c0d8adc84d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbGF5c2lhfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body>
              {/* <div className="d-flex justify-content-between"> */}
              <div className="d-flex justify-content-between  flex-lg-row flex-sm-column  ">
                <Card.Text>
                  <CiLocationOn
                    color=""
                    className="text-warning fw-bolder lh-1 fs-5"
                  />{" "}
                  15St
                </Card.Text>
                <Card.Title>
                  <AiTwotoneStar className="text-warning" /> 3.0 (4)
                </Card.Title>
              </div>
              <Card.Title className="d-flex justify-content-between">
                New York
              </Card.Title>
              {/* <div className="d-flex justify-content-between align-items-center"> */}
              <div
                className="d-flex justify-content-between align-items-center
                align-items-lg-center justify-content-lg-between
                flex-lg-row flex-sm-column align-items-sm-start  justify-content-sm-evenly "
              >
                <span className="text-warning fs-4 fw-bold lh-1 mt-1">$50</span>{" "}
                <Button variant="success">Book Now</Button>
              </div>
            </Card.Body>
          </Card>
          <Card
            className=" m-3  h-100"
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            <Card.Img
              className="w-100 h-100 object-fit-cover"
              variant="top"
              src="https://images.unsplash.com/photo-1580424917967-a8867a6e676e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8TmVwYWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body>
              {/* <div className="d-flex justify-content-between"> */}
              <div className="d-flex justify-content-between  flex-lg-row flex-sm-column  ">
                <Card.Text>
                  <CiLocationOn
                    color=""
                    className="text-warning fw-bolder lh-1 fs-5"
                  />{" "}
                  Lamjung
                </Card.Text>
                <Card.Title>
                  <AiTwotoneStar className="text-warning" /> 5.0 (2)
                </Card.Title>
              </div>
              <Card.Title className="d-flex justify-content-between">
                Nepal
              </Card.Title>
              {/* <div className="d-flex justify-content-between align-items-center w-100"> */}
              <div
                className="d-flex justify-content-between align-items-center
                align-items-lg-center justify-content-lg-between
                flex-lg-row flex-sm-column align-items-sm-start  justify-content-sm-evenly "
              >
                {/* <p className="mt-3"> */}
                <span className="text-warning fs-4 fw-bold lh-1 mt-1 ">
                  $80
                </span>
                {/* </p> */}
                <Button variant="success">Book Now</Button>
              </div>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
      <Container
      // style={{ backgroundColor: "#F9FEFF" }}
      >
        <CardGroup className="cursor-pointer">
          <Card
            className=" m-3 pe-auto cursor-pointer h-100"
            data-aos="fade-up"
            data-aos-duration="1700"
          >
            <Card.Img
              className="w-100 h-100 object-fit-cover"
              variant="top"
              src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjY1fHx0cmF2ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"

              // src="https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8SW5kb25lc2lhfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body>
              {/* <div className="d-flex justify-content-between"> */}
              <div className="d-flex justify-content-between  flex-lg-row flex-sm-column  ">
                <Card.Text>
                  <CiLocationOn
                    color=""
                    className="text-warning fw-bolder lh-1 fs-5"
                  />{" "}
                  Bridge
                </Card.Text>
                <Card.Title>
                  <AiTwotoneStar className="text-warning" /> 5.0 (5)
                </Card.Title>
              </div>
              <Card.Title className="d-flex justify-content-between">
                London
              </Card.Title>
              {/* <div className="d-flex justify-content-between align-items-center"> */}
              <div
                className="d-flex justify-content-between align-items-center
                align-items-lg-center justify-content-lg-between
                flex-lg-row flex-sm-column align-items-sm-start  justify-content-sm-evenly "
              >
                <span className="text-warning fs-4 fw-bold lh-1 mt-1">$90</span>{" "}
                <Button variant="success">Book Now</Button>
              </div>
            </Card.Body>
          </Card>
          <Card
            className=" m-3  h-100"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <Card.Img
              className="w-100 h-100 object-fit-cover"
              variant="top"
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjg5fHx0cmF2ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              // src="https://images.unsplash.com/photo-1581981657871-77c0d8adc84d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbGF5c2lhfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body>
              {/* <div className="d-flex justify-content-between"> */}
              <div className="d-flex justify-content-between  flex-lg-row flex-sm-column  ">
                <Card.Text>
                  <CiLocationOn
                    color=""
                    className="text-warning fw-bolder lh-1 fs-5"
                  />{" "}
                  Bhutan
                </Card.Text>
                <Card.Title>
                  <AiTwotoneStar className="text-warning" /> 5.0 (4)
                </Card.Title>
              </div>
              <Card.Title className="d-flex justify-content-between">
                Thimpu
              </Card.Title>
              {/* <div className="d-flex justify-content-between align-items-center"> */}
              <div
                className="d-flex justify-content-between align-items-center
                align-items-lg-center justify-content-lg-between
                flex-lg-row flex-sm-column align-items-sm-start  justify-content-sm-evenly "
              >
                <span className="text-warning fs-4 fw-bold lh-1 mt-1">$70</span>{" "}
                <Button variant="success">Book Now</Button>
              </div>
            </Card.Body>
          </Card>
          <Card
            className=" m-3  h-100"
            data-aos="fade-up"
            data-aos-duration="1900"
          >
            <Card.Img
              className="w-100 h-100 object-fit-cover"
              variant="top"
              src="https://images.unsplash.com/photo-1517176642928-dfc2da661b3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjk4fHx0cmF2ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              // src="https://images.unsplash.com/photo-1580424917967-a8867a6e676e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8TmVwYWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Card.Body>
              {/* <div className="d-flex justify-content-between"> */}
              <div className="d-flex justify-content-between  flex-lg-row flex-sm-column  ">
                <Card.Text>
                  <CiLocationOn
                    color=""
                    className="text-warning fw-bolder lh-1 fs-5"
                  />{" "}
                  Desert
                </Card.Text>
                <Card.Title>
                  <AiTwotoneStar className="text-warning" /> 5.0 (4)
                </Card.Title>
              </div>
              <Card.Title className="d-flex justify-content-between">
                Dubai
              </Card.Title>
              {/* <div className="d-flex justify-content-between align-items-center w-100"> */}
              <div
                className="d-flex justify-content-between align-items-center
                align-items-lg-center justify-content-lg-between
                flex-lg-row flex-sm-column align-items-sm-start  justify-content-sm-evenly "
              >
                {/* <p className="mt-3"> */}
                <span className="text-warning fs-4 fw-bold lh-1 mt-1 ">
                  $60
                </span>
                {/* </p> */}
                <Button variant="success">Book Now</Button>
              </div>
            </Card.Body>
          </Card>
        </CardGroup>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="my-5   text-center"
          // style={{ backgroundColor: "#F9FEFF" }}
        >
          {/* <h2>DISCOVER ALL TOURS</h2> */}
          <Button variant="success" className=" p-3 rounded-pill" style={{}}>
            DISCOVER ALL TOURS
          </Button>
          {/* <h1>Popular Destination</h1> */}
          {/* <p>You can discover unique Destinations using Google Maps.</p> */}
        </div>
      </Container>
    </>
  );
};

export default RecenTrips;
