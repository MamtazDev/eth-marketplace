import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "@styles/globals.css";
import { BaseLayout } from "@components/ui/layout";

const Noop = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }) {
  // const Layout = Component.Layout ?? Noop;

  return (
    <BaseLayout>
      <ToastContainer />
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </BaseLayout>
  );
}

export default MyApp;
