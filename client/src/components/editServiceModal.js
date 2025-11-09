import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Form } from "react-bootstrap";
import { editservice, getOneService, getservice } from "../JS/serviceSlice";

function EditServiceModal ({ editedId, showServiceModal, handleServiceClose }) {
  const fetchedService=useSelector((state)=>state.service.service);
  const dispatch = useDispatch();
  const [service, setService] = useState({
      title: '',
      description: '',
      price: '',
    });
  useEffect(() => {
    dispatch(getOneService(editedId));
  }, []);
  useEffect(() => {
    setService({
      ...service,
      title: fetchedService?.title,
      description: fetchedService?.description,
      price: fetchedService?.price,
    });
  }, [fetchedService]);
    const handleChange = (event) => {
        setService({ ...service, [event.target.name]: event.target.value })
    }
    const handleSaveService = async() => {
        console.log('editedId', editedId);
        await dispatch(editservice({id: editedId, edited: service}));
        handleServiceClose();
        dispatch(getservice());
    }
    return (
        <Modal show={showServiceModal} onHide={handleServiceClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="serviceName" className="mb-3">
              <Form.Label>Service Name</Form.Label>
              <Form.Control type="text" placeholder="Enter service name" name="title" onChange={handleChange} value={service.title}/>
            </Form.Group>
            <Form.Group controlId="serviceDescription" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter description" name="description" onChange={handleChange} value={service.description}/>
            </Form.Group>
            <Form.Group controlId="servicePrice" className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="textarea" placeholder="Enter price" name="price" onChange={handleChange} value={service.price}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleServiceClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveService}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default EditServiceModal;