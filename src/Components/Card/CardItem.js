import React ,{ useState ,useContext } from 'react';
import { Card } from "react-bootstrap";
import {shopContext} from "../../Context";
import classes from "./Card.module.css";
function CardItem(props){
    const contextValue = useContext(shopContext);
    const [selectedOption,setSelectedOption]=useState([]);
    const [option,setOption]=useState('');
    let discount=(props.item.compare_at_price-props.item.price)/props.item.compare_at_price*100;
     discount=Math.round(discount);
   
   function optionSelected(selection,option){
      
    contextValue.modalToggle();
    contextValue.addToSelection(selection,option);
    //shopContext.addToCart(selection,option);
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
                    // onClick={context.modalToggle}
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
