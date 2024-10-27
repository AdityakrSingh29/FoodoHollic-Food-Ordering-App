import About from "./About";
import {useState} from "react";
const User=({name})=>{
    const [count,setCount]=useState(0);
    return(
        <div className="user-card">
        <h2>Name:{name}</h2>
        <h3>Count:{count}</h3>
        <h2>Location:Prayagraj</h2>
        <h2>Social Networking Id:@Aditya</h2>
        </div>
    )
}
export default User;