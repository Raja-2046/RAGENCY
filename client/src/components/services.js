import React, { useState } from "react";
import { Container, Row, Col, Card, } from "react-bootstrap";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import "./Services.css";
import BookModal from "./BookModal";
import EditServiceModal from "./editServiceModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteservice, getservice } from "../JS/serviceSlice";

const Services = ({ping, setping}) => {
  const dispatch = useDispatch();
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [editedId, setEditedId] = useState(null);
  const services=useSelector((state)=>state.service.servicelist);
  const user = useSelector((state) => state.user.user);

  // const services = [
  //   {
  //     icon: <FaBullhorn size={50} color="#e63946" />,
  //     title: "Digital Advertising",
  //     description:
  //       "We design and manage your online advertising campaigns to maximize visibility and attract new customers.",
  //     price: "299€ / month",
  //     button: "Book",
  //   },
  //   {
  //     icon: <FaChartLine size={50} color="#e63946" />,
  //     title: "SEO & Optimization",
  //     description:
  //       "Boost your Google ranking with our effective SEO strategies tailored to your industry.",
  //     price: "499€ / month",
  //     button: "Book",
  //   },
  //   {
  //     icon: <FaLaptopCode size={50} color="#e63946" />,
  //     title: "Web Development",
  //     description:
  //       "We build modern, responsive, and optimized websites that turn visitors into loyal clients.",
  //     price: "799€ / project",
  //     button: "Book",
  //   },
  // ];

const handleDeleteService = async(id) => {
  await dispatch(deleteservice(id));
  dispatch(getservice());
}
const handleServiceClose = () => {
  setShowServiceModal(false);
  setEditedId(null);
  };
const handleServiceShow = (id) => {
  setEditedId(id)
  setShowServiceModal(true);
};

  return (
    <div id="services">
      <Container className="py-5">
        <h2 className="text-center mb-4 fw-bold">Our Services</h2>
        <Row>
          {services?.map((service, index) => (
            <Col md={4} sm={12} className="mb-4" key={index}>
              <Card className="service-card text-center h-100 shadow-lg border-0 rounded-4">
                <Card.Body>
                  <div className="mb-3 service-icon">{service?.icon}</div>
                  {user && (
                    <div>
                      <MdDeleteForever
                        color="red"
                        style={{
                          fontSize: "25px",
                          cursor: "pointer",
                          float: "right",
                        }}
                        onClick={() => {
                          handleDeleteService(service._id);
                        }}
                      />
                      <MdEdit
                        color="red"
                        style={{
                          fontSize: "25px",
                          cursor: "pointer",
                          float: "right",
                        }}
                        onClick={() => {
                          handleServiceShow(service._id);
                        }}
                      />
                    </div>
                  )}
                  <Card.Title className="fw-bold fs-4">
                    {service?.title}
                  </Card.Title>

                  <Card.Text className="service-desc">
                    {service?.description}
                  </Card.Text>

                  <div className="service-price">{service.price}</div>

                  <BookModal service={service} ping={ping} setping={setping} />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      {showServiceModal && (
        <EditServiceModal
          showServiceModal={showServiceModal}
          handleServiceClose={handleServiceClose}
          handleServiceShow={handleServiceShow}
          editedId={editedId}
        />
      )}
      {/* {show && (
      <BookModal 
        show={show}
        handleClose={handleClose}
        service={service}
      />
    )} */}
    </div>
  );
};

export default Services;
