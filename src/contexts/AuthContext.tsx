import { createContext, useMemo, useState } from "react";
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
    setAuthValue(data)
  };

  const logOut = ()=>{
    console.log('authValueauthValue',authValue);
    setAuthValue({})
  }

  const isLogin = () => {
    if( Object.keys(authValue).length > 0 ){
      return true;
    }else{
      return false;}
  }

  const contextValue = useMemo(
    () => ({
      authValue,
      authgetValue,
      logOut,
      isLogin,
      ...value
    }),
    [value,authValue, isLogin]
  );

  return (
    <LoginContext.Provider value={contextValue}>
        {children}
    </LoginContext.Provider>
  )
}

AuthContextProvider.defaultProps = {
    value: {},
  };
  
  

export default AuthContextProvider