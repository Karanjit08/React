import { createContext } from "react";


var UserContext = createContext(
    {
        loggedInUser : 'Karan'
    }
);

export default UserContext;