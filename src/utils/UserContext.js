import React,{ createContext} from "react";

const UserContext = React.createContext(
    {loggedInUser :'dafault user'},

);
export default UserContext;