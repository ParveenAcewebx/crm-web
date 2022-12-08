import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import AuthContextProvider from "../src/contexts/AuthContext";
import { useRouter } from "next/router";
import ProtectedRouter from "../src/utils/protectedRouter";

export default function App({ Component, pageProps }: AppProps) {
  const unprotectedRoutes = ["/login"];

  const route = useRouter();  
  const { asPath } = route;
  const renderApp = () => {
    return (
      <>
        <AuthContextProvider>
          <ToastContainer />
          <Component {...pageProps} />
        </AuthContextProvider>
      </>
    );
  };
  if (
    unprotectedRoutes.some((unprotectedRoutes) =>
      asPath.startsWith(unprotectedRoutes)
    )
  ) {
    return renderApp();
  }

  // Protected route only needs AuthContext for now.
  return (
    <AuthContextProvider>
      <ProtectedRouter> {renderApp()}</ProtectedRouter>
    </AuthContextProvider>
  );
}
