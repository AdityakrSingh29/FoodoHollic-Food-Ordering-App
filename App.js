import React from "react";
import ReactDOM from "react-dom/client";

//REACT ELEMENTS USING REACT
// const heading=React.createElement("h1",{id:"head"},"My Name is aditya");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// --------------------------------------------------------------------------------
//REACT ELEMT USING JSX
const jsxHeading=(
<h1 id="heading">
Aditya Kr Singh
</h1>
);//NOT A PURE JS-->HOW ITS WORKING-->BCZ OF PARCEL



//REACT FUNCTIONAL COMPONENT
// const HeadingComponent=()=>{
//     return <h1 className="head">Kaisa Ho Mera Bhai?</h1>
// };


//IF SINGLE LINE REMOVE RETURN AND LIKE THIS ALSO
const HeadingComponent2=()=>(
<h1 className="head">Or kaisa ho?</h1>
);

// const number=10;

//COMPONENT COMPOSITION
const HeadingComponent3=()=>(
    <div id="container">
    {/* {number} */}
    {jsxHeading}
    <HeadingComponent2/>
    <h1 className="head">Or kaisa ho mera dost?</h1>
    </div>
);






const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent3/>); //RENDERING COMPONENT 
// root.render(jsxHeading); //RENDERING ELEMENTS

