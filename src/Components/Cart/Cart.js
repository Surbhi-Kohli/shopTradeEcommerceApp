import {Modal,Button } from 'react-bootstrap';
import {Consumer} from "../../Context";
import removeIcon from "../../assets/removeIcon.png";
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
                                            <img src={removeIcon} onClick={()=>context.removeFromCart(product)}  width="25" height="25" alt="remove"/>
                                   </div>))} 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={context.toggleCartShow}>OK</Button>
        </Modal.Footer>
      </Modal>}
        
      </Consumer>)
}
export default Cart;