
import React , {useState} from 'react';
import {Modal , Button } from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import { edittask } from '../todos/action';
function EditTask({todos}) {
  const [editTask, setEditTask] = useState(todos.task);    
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const  dispatch = useDispatch();
  
const handleClick=()=>{ dispatch (edittask(todos.id, editTask)); handleClose()};
  return (
    <>
      <Button  class="button-27" role="button" variant="primary" onClick={handleShow}  ><h3>
       Edit </h3>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <h4> Edit your task  </h4> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input type="text" value ={editTask}  onChange={e => setEditTask(e.target.value)}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default EditTask
