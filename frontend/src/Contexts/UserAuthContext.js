import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useCookies } from "react-cookie";

export const UserAuthContext = createContext({});

export const UserAuthProvider = ({ children }) => {
  const cookies = useCookies(["access_token"])[0];
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (cookies.access_token) {
      try {
        const user = jwt_decode(cookies.access_token);
        setUserData(user);
      } catch (error) {
        console.log(error);
      }
    }
  }, [cookies.access_token]);

  const providerValue = {
    accessToken: cookies.access_token,
    userData,
    setUserData,
  };

  return (
    <UserAuthContext.Provider value={providerValue}>
      {children}
    </UserAuthContext.Provider>
  );
};
