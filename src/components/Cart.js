import { useDispatch, useSelector } from "react-redux";
import ItemLists from "./ItemLists";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch();
    const HandleClearCart=()=>{
        dispatch(clearCart())
    }
    return ( 
    <div className="text-center m-4 p-4 ">
    <h1 className="text-2xl font-bold">Cart</h1>
    <button className="p-2 m-2 bg-black text-white  rounded-lg" onClick={HandleClearCart}>Clear Cart!</button>
    {
        cartItems.length==0 && <h1>Cart Is Empty Please Add Items To The Cart!</h1>
    }
    <div className="w-6/12 m-auto border border-black">
        <ItemLists items={cartItems}/>
    </div>
    </div>
    )
}
export default Cart;