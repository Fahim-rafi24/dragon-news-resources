import { createContext, useState } from "react";






// Create a context
const UserProvider = createContext(null);
export default UserProvider;






// Create a provider component
export const UserContext = ({ children }) => {
    const [userName, setUserName] = useState(null)
    const [userData, setUserData] = useState(null)
    // const userData ={name: 'rohim'};


    const userInfo = {
        userData,
        setUserData,
        userName,
        setUserName,
    };




    return (
      <UserProvider.Provider value={userInfo}>
        {children}
      </UserProvider.Provider>
    );
  };