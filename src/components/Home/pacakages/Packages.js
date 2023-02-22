import styles from "./Packages.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Packages = () => {
  return (
    // <div ClassName="" style={{ maxWidth: " 840px", backgroundColor: "#000" }}>
    // <div className={styles.mainContainer}>
    //   <div ClassName={styles.imageContainer}>
    //     <img
    //       src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
    //       ClassName={styles.imgSize}
    //       alt="..."
    //       style={{ width: "30p%", height: "30%" }}
    //     />
    //     <img
    //       src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
    //       ClassName={styles.imgSize}
    //       alt="..."
    //       style={{ width: "30p%", height: "30%" }}
    //     />
    //   </div>
    //   <div ClassName={styles.cardContainer}>
    //     <div ClassName="card-body">
    //       <h5 ClassName="">Card title</h5>
    //       <p ClassName="">
    //         This is a wider card with supporting text below as a natural lead-in
    //         to additional content. This content is a little bit longer.
    //       </p>
    //       <p ClassName="">
    //         <small ClassName="text-muted">Last updated 3 mins ago</small>
    //       </p>
    //     </div>
    //   </div>
    // </div>
    // </div>

    // <Container fluid className="App py-2 overflow-hidden">
    //   <Row className="justify-content-center">Some text here</Row>
    //   {/* <Row className=" d-flex flex-row  justify-content-around flex-nowrap overflow-auto"> */}
    //   <Row className=" d-flex flex-row  justify-content-around flex-wrap">
    //     <div className="d-flex bg-primary">
    //       <Card style={{}} className="w-25">
    //         <Card.Img
    //           variant="top"
    //           src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
    //         />
    //       </Card>
    //       <Card style={{}} className="w-25 d-flex">
    //         <Card.Img
    //           variant="top"
    //           src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
    //         />
    //       </Card>
    //     </div>

    //     <div className="w-25">
    //       <Card.Body>
    //         <Card.Title>Card Title</Card.Title>
    //         <Card.Text>
    //           Some quick example text to build on the card title and make up the
    //           bulk of the card's content.
    //         </Card.Text>
    //         <Button variant="primary">Go somewhere</Button>
    //       </Card.Body>
    //     </div>
    //   </Row>
    //   <Row>There's some text in here too</Row>
    // </Container>
    <main
    // style={{ backgroundColor: "#F9FEFF" }}
    >
      <Container>
        {/* <Row className="px-4 my-15"> */}
        <Row className="px-4 my-5">
          <Col sm={6}>
            <Image
              src="https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=600"
              fluid
              rounded
              // className="h-100 object-fit-contain w-100"
              className="w-100 h-100 object-fit-cover"
              data-aos="fade-up-right"
              data-aos-duration="1400"
            />
          </Col>
          <Col sm={6} class="  ">
            <div data-aos="fade-up-left" data-aos-duration="1400">
              <h3 className="mt-5">
                You are going to fall in love with nature
              </h3>
              <p class="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate optio error officia sit reprehenderit quas voluptatem
                nostrum quisquam cum repellendus quibusdam fugit veniam,
                laborum, maiores nobis quaerat veritatis magni! Fuga!
              </p>
              <h3 class="">Live adventures like you never have before</h3>
              <p class="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, ullam maxime adipisci ratione obcaecati amet vitae,
                nobis est.
              </p>
              <a href="#" className="text-success fs-4 fw-bold lh-1">
                Learn More &rarr;
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="px-4 my-10 d-flex flex-sm-row-reverse  flex-row">
          <Col sm={6}>
            <Image
              src="https://images.unsplash.com/photo-1461237439866-5a557710c921?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fFRvdXJzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              fluid
              border="success"
              rounded
              className=" w-100 h-100 object-fit-cover"
              data-aos="fade-up-right"
              data-aos-duration="1350"
            />
          </Col>
          <Col sm={6} class="">
            <div data-aos="fade-up-left" data-aos-duration="1450">
              <h3 class="heading-tertiary u-margin-bottom-small mt-5">
                You are going to fall in love with nature
              </h3>
              <p class="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate optio error officia sit reprehenderit quas voluptatem
                nostrum quisquam cum repellendus quibusdam fugit veniam,
                laborum, maiores nobis quaerat veritatis magni! Fuga!
              </p>
              <h3 class="">Live adventures like you never have before</h3>
              <p class="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, ullam maxime adipisci ratione obcaecati amet vitae,
                nobis est.
              </p>
              <a href="#" className="text-success fs-4 fw-bold lh-1">
                Learn More &rarr;
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Packages;
