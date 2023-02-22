import styles from "./Packages.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Packages = () => {
  return (
    <>
      <main>
        <Container>
          {/* <Row className="px-4 my-15"> */}
          <Row className="px-4 my-5">
            <Col sm={6}>
              <Image
                src="https://images.unsplash.com/photo-1445307806294-bff7f67ff225?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc1fHx0cmF2ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                fluid
                rounded
                // className="h-100 object-fit-contain w-100"
                className="w-100 h-100 object-fit-cover"
                data-aos="fade-up-right"
                data-aos-duration="1400"
              />
            </Col>
            <Col sm={6} class="">
              <div data-aos="fade-up-left" data-aos-duration="1400">
                <h3 class="mt-5">Why Choose Us</h3>
                <h5>Nature's Majesty Awaits You</h5>
                <p class="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate optio error officia sit reprehenderit quas
                  voluptatem nostrum quisquam cum repellendus quibusdam fugit
                  veniam, laborum, maiores nobis quaerat veritatis magni! Fuga!
                </p>
                {/* <h3 class="">Live adventures like you never have before</h3> */}
                <p class="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, ullam maxime adipisci ratione obcaecati amet
                  vitae, nobis est.
                </p>
                {/* <a href="#" className="text-success">
                  Learn More &rarr;
                </a> */}
                <Button variant="success">Read More &rarr;</Button>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="px-4 my-10 d-flex flex-sm-row-reverse  flex-row">
            {/* <Row className="px-4 my-10 d-flex flex-md-column-reverse flex-sm-column-reverse  flex-row"> */}

            <Col sm={6}>
              <Image
                src="https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjU1fHx0cmF2ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                // src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg4fHx0cmF2ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                fluid
                border="success"
                rounded
                // className=""
                className="w-100 h-100 object-fit-cover"
                data-aos="fade-up-right"
                data-aos-duration="1400"
              />
            </Col>
            <Col sm={6} className=" ">
              <div data-aos="fade-up-left" data-aos-duration="1400">
                <h3 className="heading-tertiary u-margin-bottom-small mt-5">
                  Our Values
                </h3>
                <h5>Journey Worth Taking</h5>
                <p class="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate optio error officia sit reprehenderit quas
                  voluptatem nostrum quisquam cum repellendus quibusdam fugit
                  veniam, laborum, maiores nobis quaerat veritatis magni! Fuga!
                </p>
                <p class="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, ullam maxime adipisci ratione obcaecati amet
                  vitae, nobis est.
                </p>
                <Button variant="success mb-4">Read More &rarr;</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default Packages;
