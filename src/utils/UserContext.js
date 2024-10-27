import { createContext, useContext } from "react";
const userContext=createContext({
    loggedInUser:"Default Users"
});
export default userContext;