import React ,{ useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Edittask } from '../redux/todoslice/Todoslice';
import { useDispatch } from 'react-redux';


    const Edit = ({id}) => {
        const [show, setShow] = useState(false);
    const dispatch = useDispatch()
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const [edited, setEdited] = useState({
    title:"",
    description:"",  
      });
    
  return (
    <div><>
    <Button variant="primary" onClick={handleShow}>
   Edit
    </Button>
    

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body className="inps">  <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>title</Form.Label>
        <Form.Control type="text" placeholder="Enter Task"  onChange={(e)=>{
           setEdited({...edited,title:e.target.value})
        }}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Description"
        onChange={(e)=>{setEdited({...edited,description:e.target.value})}}
         />
      </Form.Group>
    
    </Form></Modal.Body>
      <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
            handleClose();
            dispatch(Edittask({id : id , edited}))
          }}>
            Save Changes
          </Button>
      </Modal.Footer>
    </Modal>
  </></div>
  )
}

export default Edit



