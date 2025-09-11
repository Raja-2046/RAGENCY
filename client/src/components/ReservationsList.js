import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Form, Modal, Button, Badge, OverlayTrigger, Tooltip } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineDoneAll } from "react-icons/md";
import { MdRemoveDone } from "react-icons/md";
import { deletereservation, editreservation, getreservation } from "../JS/reservationSlice";
function ReservationsList () {
    const dispatch = useDispatch();
    const reservations=useSelector((state)=>state.reservation.reservationlist);
    const [show, setShow] = useState(false); 
    const [reser, setReser] = useState({});
    const [isDelete, setIsDelete] = useState(false); 
    const [isUpdated, setIsUpdated] = useState(false); 

    useEffect(() => {
        dispatch(getreservation());
    }, [isUpdated, isDelete])

    const handleShow = (reservation) => {
        console.log('heeelooooo')
        setShow(true);
        setReser(reservation);
    }
    const handleClose = () => setShow(false);
    const handleDelete = () => {
        dispatch(deletereservation(reser._id));
        setReser({});
        setIsDelete(!isDelete);
    }
    
    const handleUpdate = (el) => {
        dispatch(editreservation({id: el._id, edited: {status: !el.status}}))
        setIsUpdated(!isUpdated);
    }
    return (
      <div>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>More Infos</th>
              <th>Pack</th>
              <th>Price</th>
              <th>date</th>

              <th>Situation</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {reservations?.map((el) => (
              <tr>
                <td>{el?.name}</td>
                <td>{el?.surname}</td>
                <td>{el?.email}</td>
                <td>{el?.number}</td>
                <td>{el?.info}</td>
                <td>{el?.packname}</td>
                <td>{el?.price}</td>
                <td>{el?.date}</td>
                <td>
                  {el?.status ? (
                    <Badge bg="success">Done</Badge>
                  ) : (
                    <Badge bg="warning">In Progress</Badge>
                  )}

                  {/* <Form.Control
                    type="text"
                    placeholder="Done / In Progress / No"
                  /> */}
                </td>
                <td>
                    {el?.status ? (
                        <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="button-tooltip-2">Make it undone</Tooltip>}
                  >
                    <Button style={{backgroundColor: 'transparent', border: 'none'}}>
                    <MdRemoveDone
                    style={{ fontSize: "36px", cursor: "pointer", color: 'grey'}}
                    onClick={() => handleUpdate(el)}
                    />
                    </Button>
                  </OverlayTrigger>
                    ) : (
                        <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="button-tooltip-2">Make it done</Tooltip>}
                  >
                    <Button style={{backgroundColor: 'transparent', border: 'none'}}>
                    <MdOutlineDoneAll
                    style={{ fontSize: "36px", cursor: "pointer", color: 'grey'}}
                    onClick={() => handleUpdate(el)}
                    />
                    </Button>
                  </OverlayTrigger>
                    )}
                  
                </td>
                <td>
                  <MdDeleteForever
                    color="red"
                    style={{ fontSize: "36px", cursor: "pointer" }}
                    onClick={() => handleShow(el)}
                  />
                </td>
              </tr>
            ))}
            {/* {Array.from({ length: 20 }).map((_, index) => (
                        <tr key={index}>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <Form.Control
                              type="text"
                              placeholder="Done / In Progress / No"
                              value={situations[index]}
                              onChange={(e) =>
                                handleSituationChange(index, e.target.value)
                              }
                            />
                          </td>
                        </tr>
                      ))} */}
          </tbody>
        </Table>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ fontSize: "20px" }}>
              Are you sure to delete this reservation?
            </div>
            <div className="fw-bold lead">{`${reser.name} ${reser.surname}`}</div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="dark"
              onClick={() => {
                handleDelete();
                handleClose();
              }}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
}

export default ReservationsList;