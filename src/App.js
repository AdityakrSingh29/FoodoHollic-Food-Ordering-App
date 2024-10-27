import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import userContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Banner from "./components/Banner";
import NewAbout from "./components/NewAbout";
import Cart from "./components/Cart";

//REACT ELEMENTS USING REACT
// const heading=React.createElement("h1",{id:"head"},"My Name is aditya");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// --------------------------------------------------------------------------------
//REACT ELEMT USING JSX
// const jsxHeading=(
// <h1 id="heading">
// Aditya Kr Singh
// </h1>
// );//NOT A PURE JS-->HOW ITS WORKING-->BCZ OF PARCEL



//REACT FUNCTIONAL COMPONENT
// const HeadingComponent=()=>{
//     return <h1 className="head">Kaisa Ho Mera Bhai?</h1>
// };


//IF SINGLE LINE REMOVE RETURN AND LIKE THIS ALSO
// const HeadingComponent2=()=>(
// <h1 className="head">Or kaisa ho?</h1>
// );

// const number=10;

//COMPONENT COMPOSITION
// const HeadingComponent3=()=>(
//     <div id="container">
//     {/* {number} */}
//     {jsxHeading}
//     <HeadingComponent2/>
//     <h1 className="head">Or kaisa ho mera dost?</h1>
//     </div>
// );


// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent3/>); //RENDERING COMPONENT 
// root.render(jsxHeading); //RENDERING ELEMENTS

// --------------------------------------------------------------------------------------------------
//CREATION OF FOOD WB EPISODE4





const AppLayout=()=>{
    const [userName,setUserName]=useState();

    useEffect(()=>{
        const data={
            name:"Aditya",
        }
        setUserName(data.name);
    },[])
    return (
        <Provider store={appStore}>
        <userContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className="app">
        <Banner/>
        {/* BUILD HEADER */}
        <Header/>
        {/* BODY  */}
        <Outlet/>
        </div>
        </userContext.Provider>
        </Provider>
    )
}


//CREATING CONFIGURATION
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/About",
                element:<NewAbout/>,
                errorElement:<Error/>
            },
            {
                path:"/contactUs",
                element:<Contact/>,
                errorElement:<Error/> 
            },
            {
                path:"/restaurants/:resId",  
                element:<RestaurantMenu/>
            },
            {
                path:"/Cart",  
                element:<Cart/>
            },

        ],
        errorElement:<Error/>
    },
  
    
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)