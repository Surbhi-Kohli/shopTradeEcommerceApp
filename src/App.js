import React, {Component , createContext} from 'react';
import axios from 'axios';
import Header from "./Components/Header/Header";
import Cards from "./Components/Cards/Cards";
import ModalOverlay from "./Components/Modal/Modal";
import Cart from "./Components/Cart/Cart";
import {Spinner,Button,ButtonGroup} from "react-bootstrap";
import './App.css';
import { Provider } from "./Context";
class App extends Component {
  
  state={
    data:[],
    filter:[],
    modalShow:false,
    filterChosen:"All Products",
    count:0,
    selection:{},
    cart:[],
    showCart:false
  }
  addToCart=(item,spec)=>{
    this.setState({cart: this.state.cart.concat([{item,spec}])},()=>console.log(this.state.cart));
     this.modalToggleHandler();
  }
  toggleCartShow=()=>{
    console.log("in toggle cart show");
    this.setState(prevState=>({showCart:!prevState.showCart}),()=>{
      console.log(this.state.showCart+" is the cart state");
    });
  }
  modalToggleHandler=()=>{
    console.log("in close Handler");
      if(this.state.modalShow)
      {
        this.setState({selection:{}});
      }
    this.setState(prevState=>({modalShow:!prevState.modalShow}));
  }
  componentDidMount(){
    axios.get('https://cdn.shopify.com/s/files/1/0341/4907/3029/files/products.json?v=1607317366'
    )
    .then(res=>{
     this.setState({data:res.data});
     this.setState({count:res.data.length});
     this.setState({filter:res.data});
    })
  }
  addToSelection=(selected,option)=>{
    console.log("add to selection")
    this.setState({selection:{selected,option}},()=>console.log(this.state.selection));
   
  }
  applyFilter=(filterVal)=>{
    this.setState({filterChosen:filterVal});
    if(filterVal=="All Products")
    {
      this.setState({filter:this.state.data});
      this.setState({count:this.state.data.length})
      return;
    }
    let filterArray=this.state.data.filter(info=>{
         return info.name.includes(filterVal) || info.tag.includes(filterVal);
    })
    this.setState({count:filterArray.length})
    console.log(filterArray);
    this.setState({filter:filterArray});
  }
  render(){
    let app=null;
     if(this.state.data)
      {
      app=(<Cards selected={this.selected} data={this.state.filter}/>);
      }
       else{
      app=(<Spinner animation="border" role="status">
         <span className="sr-only">Loading...</span>
        </Spinner>);
       }
    return (
      <div className="App">
      <Provider  value={{cart:this.state.cart,modalShow:this.state.modalShow,modalToggle:this.modalToggleHandler,addToSelection:this.addToSelection,selection:this.state.selection,addToCart:this.addToCart,toggleCartShow:this.toggleCartShow,showCart:this.state.showCart}}>
         <Header/>
         <div className="subNav">
         <h3>{this.state.filterChosen}({this.state.count})</h3>
           <div>Filters: 
           <ButtonGroup className="mb-2">
                  <Button active onClick={()=>this.applyFilter("All Products")}>All Products</Button>
                  <Button onClick={()=>this.applyFilter("T-shirt")}>Tee Shirt</Button>
                  <Button onClick={()=>this.applyFilter("Denim")}>Denim</Button>
                  <Button onClick={()=>this.applyFilter("Sweatshirt")}>Sweatshirts</Button>
                  <Button onClick={()=>this.applyFilter("Polo T-shirt")}>Polo Tee Shirt</Button>
                  <Button onClick={()=>this.applyFilter("shirt")}>Shirt</Button>
          </ButtonGroup>
          </div>
         </div>
         {app}
         <Cart/>
         <ModalOverlay/>
         </Provider>
      </div>
    );
  }
  
};

export default App;
