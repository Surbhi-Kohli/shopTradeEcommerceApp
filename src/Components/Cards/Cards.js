import {React} from "react";
import CardItem from "../Card/CardItem";
import styles from "./Cards.module.css";
function Cards(props){

  //
// JSON.parse(props.data);
 //console.log(props.data);
 
  let data=props.data;
     let disp=data.map((item,i)=>{
       return <CardItem selected={props.selected} key={i} item={item}/>
 })
    return(
        <div className={styles.Card}>
        {disp}
        </div>
    );
}
export default Cards;