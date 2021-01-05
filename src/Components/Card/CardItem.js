import React ,{ useState ,useContext } from 'react';
import { Card } from "react-bootstrap";
import {shopContext} from "../../Context";
import classes from "./Card.module.css";
function CardItem(props){
    const contextValue = useContext(shopContext);
    /* useContext lets you “use” context without a Consumer
    The only thing to watch out for is that you have to pass the whole 
    context object to useContext – not just the Consumer!  */
console.log(contextValue);
    let discount=(props.item.compare_at_price-props.item.price)/props.item.compare_at_price*100;
     discount=Math.round(discount);
   
   function optionSelected(selection,option){
    contextValue.modalToggleHandler(); //To change values in context state
    /*Because of useContext,we could use the context without the consumer    */
    contextValue.addToSelection(selection,option);
    }
    return (
          <div>
            <Card className={classes.Card}>
              <Card.Img
                className={classes.Image}
                variant="top"
                src={props.item.image_src[0]}
              />
              <Card.Body className={classes.cardBody}>
                <Card.Title>{props.item.vendor}</Card.Title>
                <small>{props.item.name}</small>
                <div className={classes.cost}>
                  <Card.Text>${props.item.price}</Card.Text>
                  <strike>
                    <small className={classes.textMuted}>
                      ${props.item.compare_at_price}
                    </small>
                  </strike>
                  <Card.Text className={classes.discount}>
                    ({discount}%OFF)
                  </Card.Text>
                </div>
              </Card.Body>
              <Card.Footer className={classes.footer}>
                {props.item.options.map((option,id) => (
                  <div
                  key={id}
                    className={classes.option}
                    onClick={() => optionSelected(props.item.name,option.value)}
                 >
                    <Card.Text>
                      <b>{option.value}</b>
                    </Card.Text>
                  </div>
                ))}
              </Card.Footer>
            </Card>
          </div>
        );
}
export default CardItem;
