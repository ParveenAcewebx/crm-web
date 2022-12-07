import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { LoginContext } from "../contexts/AuthContext";
import { LoginContextTye } from "../types/auth";

function ProtectedRouter({ children }: { children: JSX.Element }) {
  const { isLogin } = React.useContext(LoginContext) as LoginContextTye;
  const [loading, setLoading] = useState<any>(true);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => { 
      if (await isLogin()) {
        setLoading(false);
      } else {
        router.push("/login");
      }
    };
    checkUser();
  }, []);

  if (loading) return <div>Loading</div>;
  return children;
}

export default ProtectedRouter;
