import React, {useState, useEffect} from "react";
import Layout from "app/layout";
// import "styles/styles.scss";
import { Provider } from "react-redux";
import { store } from "store/store";
import ErrorBoundary from "app/components/common/ErrorBoundary";
import dynamic from "next/dynamic";
import HireTopTalent from "app/components/common/HireTopTalent";
import Script from "next/script";

const SupportChat = dynamic(
  () => import("app/components/support-chat/SupportChat"),
  {
    ssr: false,
  }
);



function MyApp({ Component, pageProps }) {

  const [open, setOpen] = useState(false);
 
    const handleClose = () => {
        setOpen(false);
    };
 
    const handleOpen = () => {
        setOpen(true);
    };

  useEffect(() => {
    if (typeof document !== undefined) {
      const sidebarContentEl = document.querySelector('#some-id');
      const buttonnn = document.querySelectorAll(".buttonOpen");
      buttonnn.forEach(box => {
        box.addEventListener("click", function() {
          sidebarContentEl.classList.add("mystyle");
        });
      });
      const removeButton1 = document.querySelectorAll(".buttonremove1");
      removeButton1.forEach(box => {
        box.addEventListener("click", function() {
            sidebarContentEl.classList.remove("mystyle");
        }); 
      });
    }
  }, [])

  return (
    <>
      <ErrorBoundary>
        <Provider store={store}>
          <Layout data={pageProps?.homePageData}>
            <Component {...pageProps} />
            <HireTopTalent isOpen={open} onClose={handleClose} />
          </Layout>
        </Provider>
      </ErrorBoundary>
      <SupportChat />
    </>
  );
}

export default MyApp;
