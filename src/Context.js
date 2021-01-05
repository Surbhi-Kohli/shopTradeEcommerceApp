import { createContext } from "react"
const shopContext=createContext({ data:[],
    filter:[],
    modalShow:false,
    filterChosen:"All Products",
    count:0,
    selection:{},
    cart:[],
    showCart:false,
    addToCart:()=>{},
    toggleCartShow:()=>{},
    modalToggleHandler:()=>{},
    removeFromCart:()=>{},
    addToSelection:()=>{},
    applyFilter:()=>{}
});
const { Provider, Consumer } =shopContext;
export { Provider, Consumer ,shopContext };