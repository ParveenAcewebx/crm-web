import { createContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

import { LoginContextTye } from "../types/auth";

export const LoginContext = createContext<LoginContextTye | null>(null);

function AuthContextProvider({
  children,
  value,
}: {
  children: ReactNode;
  value: {
    [key: string]: any;
  };
}) {
  const [authValue, setAuthValue] = useState<any>({});

  const authgetValue = (data: any) => {
    setAuthValue(data);
  };

  const logOut = () => {
    localStorage.removeItem("userDetailsStorage");
    setAuthValue({})
  };

  const isLogin = () => {
    if (Object.keys(authValue).length > 0) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    const userDetails = localStorage.getItem("userDetailsStorage") || ""
    if (Object.keys(userDetails).length > 0) {
      setAuthValue(userDetails);
    }
  }, [authValue]);
  const contextValue = useMemo(
    () => ({
      authValue,
      authgetValue,
      logOut,
      isLogin,
      ...value,
    }),
    [value, authValue, isLogin]
  );

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
}

AuthContextProvider.defaultProps = {
  value: {},
};

export default AuthContextProvider;
