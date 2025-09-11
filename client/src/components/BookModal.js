import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { addreservation } from "../JS/reservationSlice";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'
function BookModal ({service, ping , setping}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch=useDispatch();
  const [newreservation, setnewreservation] = useState({
       name:"",
      surname:"",
      email:"",
      number:"",
      info:"",
      packname:service.title,
      price:service.price,
      date:new Date(),
  })

  
    return (
      <>
          <Button 
                  variant="dark" 
                  className="rounded-pill px-5 mt-3 fs-5"
                  onClick={handleShow}
                >
                  Book
                </Button>
    
        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>Book our service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required  onChange={(e)=>setnewreservation({...newreservation, name:e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control type="text" placeholder="Enter your surname" required onChange={(e)=>setnewreservation({...newreservation, surname:e.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required  onChange={(e)=>setnewreservation({...newreservation, email:e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTel">
              <Form.Label>Tel Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" required  onChange={(e)=>setnewreservation({...newreservation, number:e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMore">
              <Form.Label>More Infos</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Additional information..."  onChange={(e)=>setnewreservation({...newreservation, info:e.target.value})}/>
            </Form.Group>

            <Button variant="dark"  className="w-100" color="red" onClick={()=>{dispatch(addreservation(newreservation));setping(!ping);handleClose();Swal.fire({
  title: "Thank You",
  text: "Contact you soon",
  icon: "success"
});}}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
        </>
    )
}

export default BookModal;