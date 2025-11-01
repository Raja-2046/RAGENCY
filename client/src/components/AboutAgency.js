import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function AboutProfile() {
  return (
    <div id="about" className="min-vh-100 d-flex align-items-center bg-black text-light p-5">
      <Container>
        <Row className="align-items-center g-5">
          <Col md={5} className="text-center">
            <img
              src="/raja.jpg"
              alt="Profile"
              className="img-fluid rounded-4 shadow-lg"
            />
          </Col>

          <Col md={7}>
            <div className="mb-4">
              <h1 className="text-danger display-6 fw-bold">
                <i className="bi bi-quote"></i>
              </h1>
              <p className="fs-5 fst-italic">
                "I created Ragency to bridge the gap between big agency results
                and small business budgets."
              </p>
            </div>

            <h3 className="fw-bold text-danger">Rajae Boussaada</h3>
            <p className="text-light-50">
              Founder & Digital Marketing Strategist
            </p>

            <Card className="bg-dark border-0 rounded-3 mb-4 p-3">
              <Card.Body>
                <h5 className="fw-bold text-danger mb-2">Why "Ragency"?</h5>
                <p className="mb-0 text-light">
                  The name <b>Ragency</b> combines <b>"Raja"</b> (my name) with{" "}
                  <b>"agency"</b> — representing my personal commitment to every
                  client's success. It's not just another agency; it's a personal
                  partnership where your growth is my mission.
                </p>
              </Card.Body>
            </Card>

            <p className="fs-6 text-light">
              At Ragency, we don't just implement tactics – we build lasting relationships and deliver strategies that create real,
              measurable growth for small businesses who deserve to compete with the big players.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
