import {Modal,Button } from 'react-bootstrap';
import {Consumer} from "../../Context";
import React  from 'react';

function ModalOverlay(props){
       
      return (
        <Consumer>
          {(context)=>
          <Modal show={context.modalShow} onHide={context.modalToggle}>
        <Modal.Header closeButton>
          <Modal.Title>Do you want to add the item to cart?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Item specifications:</h4>
          <p>{context.selection.selected}</p>
           <p>{context.selection.option}</p> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=>context.addToCart(context.selection.selected,context.selection.option)} >Add to Cart</Button>
        </Modal.Footer>
      </Modal>}
        
      </Consumer>)
}
export default ModalOverlay;