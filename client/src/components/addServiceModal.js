import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, Form } from "react-bootstrap";
import { addservice } from "../JS/serviceSlice";

function AddServiceModal ({ showServiceModal, handleServiceClose }) {
    const dispatch = useDispatch();
    const [service, setService] = useState({
      title: '',
      description: '',
      price: '',
    });
    const handleChange = (event) => {
        setService({ ...service, [event.target.name]: event.target.value })
    }
    const handleSaveService = () => {
        dispatch(addservice(service));
        handleServiceClose();
    }
    return (
        <Modal show={showServiceModal} onHide={handleServiceClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="serviceName" className="mb-3">
              <Form.Label>Service Name</Form.Label>
              <Form.Control type="text" placeholder="Enter service name" name="title" onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId="serviceDescription" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter description" name="description" onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId="servicePrice" className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="textarea" placeholder="Enter price" name="price" onChange={handleChange}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleServiceClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveService}>
            Save Service
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default AddServiceModal;