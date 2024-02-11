import React, { ReactNode, createContext, useEffect, useState } from "react";

interface UserContextType {
  userDetails: any;
}
const initialBottomNavigatorContext: UserContextType = {
  userDetails: {},
};

export const UserContext = createContext(initialBottomNavigatorContext);
interface BottomNavigatorProviderProps {
  children: ReactNode;
}

const UserContextProvider: React.FC<BottomNavigatorProviderProps> = ({
  children,
}) => {
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserFromSession = async () => {
    const session = await getSession();
    setUserDetails(session?.user);
  };
  useEffect(() => {
    fetchUserFromSession();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userDetails,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
