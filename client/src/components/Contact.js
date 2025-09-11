import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt, FaClock } from "react-icons/fa";

function Contact() {
  return (
    <div
      id="contact"
      style={{
        background: "linear-gradient(to bottom right, #d32f2f, #3e0c0c)",
        color: "white",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <Container>
        <h2 className="fw-bold mb-3">Ready to Grow Your Business?</h2>
        <p className="mb-4 fs-5">
          Get a free consultation and discover how we can help your small
          business dominate the digital landscape.
        </p>

        <Row className="mt-5">
          <Col md={4} className="mb-4">
            <FaEnvelope size={32} />
            <p className="fw-semibold mt-2">Email Us</p>
            <p className="text-light">hello@ragency.com</p>
          </Col>
          <Col md={4} className="mb-4">
            <FaPhoneAlt size={32} />
            <p className="fw-semibold mt-2">Call Us</p>
            <p className="text-light">20 111 223</p>
          </Col>
          <Col md={4} className="mb-4">
            <FaClock size={32} />
            <p className="fw-semibold mt-2">Business Hours</p>
            <p className="text-light">Mon-Fri 9AM-6PM</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
