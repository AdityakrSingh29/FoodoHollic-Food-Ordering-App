import React from "react";
class UserClass extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            userInfo:{
                name:"Dummy",
                location:"Dummy Locn",
            }

        }
    }

    async componentDidMount()
    {
        //API CALL
        const data=await fetch("https://api.github.com/users/AdityakrSingh29");
        const json=await data.json();

        this.setState({
            userInfo:json,
        })

        console.log(json);

    }

    componentDidUpdate(){
        console.log("Updated");
    }
    
    componentWillUnmount(){
        console.log("Unmount will happened..");
    }
    render()
    {
        const {name,location,avatar_url}=this.state.userInfo;
        return(
            <div className="user-card">
            <img src={avatar_url}/>
            <h2 className="text-white px-4 py-2 font-semibold">Name:{name}</h2>
            {/* <h2>Location:{location}</h2>
            <h2>Social Networking Id:@Aditya</h2> */}
            </div>
        );
    }
}

export default UserClass;