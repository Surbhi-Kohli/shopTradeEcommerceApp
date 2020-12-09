import {Modal,Button } from 'react-bootstrap';
import {Consumer} from "../../Context";
import  "./Cart.css";
import React  from 'react';

function Cart(props){
 

      return (
        <Consumer>
          {(context)=>
          <Modal show={context.showCart} onHide={context.toggleCartShow}>
         <Modal.Header closeButton>
          <Modal.Title>Cart Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          <h4>Item specifications:</h4>
         {context.cart.map((product,id)=>(<div className="item" key={id}><p>{product.item} : {product.spec}</p>
                                   </div>))} 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={context.toggleCartShow}>OK</Button>
        </Modal.Footer>
      </Modal>}
        
      </Consumer>)
}
export default Cart;