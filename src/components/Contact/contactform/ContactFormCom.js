import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// css
import styles from "./ContactFormCom.module.css";

// toaster
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
// end of toaster

// contact form validation
import emailjs from "@emailjs/browser";

import { useFormik } from "formik";

// import { SendEmailSchema } from "../components/Schemas";
import { SendEmailSchema } from "./Schema";
const initialValues = {
  name: "",
  email: "",
  message: "",
};
const ContactFormCom = () => {
  //   const [position, setPosition] = useState("top-start");
  const [showToast, setShowToast] = useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SendEmailSchema,
      onSubmit: (values, action) => {
        console.log(values);
        console.log("submit clickedd");
        // sendEmail(e);
        emailjs
          .sendForm(
            "service_u8fkj14",

            "template_cfgue7u",
            form.current,

            "2_d1YTKfs7aus0C2K"
          )
          .then(
            (result) => {
              console.log(result.text, "sent message");
              //   toast.success("message sent");
              setShowToast(true);
            },
            (error) => {
              console.log(error.text, "error sending email");
              //   setShowToast(true);
            }
          );
        action.resetForm();
      },
    });
  const form = useRef();
  return (
    <>
      <div
        aria-live="polite"
        aria-atomic="true"
        // className="bg-dark position-relative"
        className=" position-relative pt-5"
        style={{
          //   minHeight: "80px",

          marginTop: "0",
          marginRight: "0",
        }}
      >
        <ToastContainer position="top-end" className="  " style={{}}>
          <Toast
            show={showToast}
            onClose={() => setShowToast(false)}
            autohide
            delay={5200}
            // position="bottom-center"
          >
            <Toast.Header className="text-success">
              <strong className="me-auto text-success">Message Sent</strong>
            </Toast.Header>
            <Toast.Body>Thank you for sending message</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
      <Container style={{ position: "", backgroundColor: "" }}>
        <Form
          ref={form}
          onSubmit={handleSubmit}
          data-aos="zoom-in-up"
          data-aos-duration="1400"
        >
          <h3 className="d-flex justify-content-center text-dark">
            Contact Us
          </h3>
          <h2 className="d-flex justify-content-center text-success">
            LEAVE A MESSAGE
          </h2>
          <p className="d-flex justify-content-center ">
            If you have a question regarding our services, feel free to contact
            us using the form below.
          </p>

          <div className="mb-3">
            {/* <label for="exampleFormControlInput1" class="form-label">
            Name
          </label> */}
            <input
              // type="email"
              // className="form-control"
              // id="exampleFormControlInput1"
              // placeholder="name@example.com"
              type="text"
              className="form-control"
              name="name"
              id="email-address"
              autoComplete="email"
              placeholder="John"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.name && touched.name ? (
            <p className="text-danger">{errors.name}</p>
          ) : null}
          <div className="mb-3">
            {/* <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label> */}
            <input
              className="form-control"
              type="text"
              name="email"
              id="email-address"
              autoComplete="email"
              placeholder="abc@gmail.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.email && touched.email ? (
            <p className="text-danger">{errors.email}</p>
          ) : null}

          <div className="mb-3">
            {/* <label for="exampleFormControlTextarea1" class="form-label">
            Message
          </label> */}
            <textarea
              className="form-control"
              type="text"
              name="message"
              id="email-address"
              autoComplete="text"
              placeholder="Hello There ..."
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
          </div>
          {errors.message && touched.message ? (
            <p className="text-danger">{errors.message}</p>
          ) : null}
          <div className="d-flex justify-content-center mb-5 mt-5">
            <Button variant="success" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default ContactFormCom;
