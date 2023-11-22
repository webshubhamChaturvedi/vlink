import Header from "./Header";
import LayoutFooter from "./Footer";
import { getLocaleCountry } from "app/scripts/utils";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ACTION_TYPE from "store/action-type";
import LastCommit from "../../public/text.json";
import "../../styles/globals.css";
import "../../styles/styles.css";

export const config = {
  unstable_runtimeJS: false,
};

function Layout({ data, children }) {
  const { asPath } = useRouter();
  const dispatch = useDispatch();

  const [mobileSidebarIsOpen, setMobileSidebarIsOpen] = useState(false);

  const country = useSelector((state) => state?.country);

  useEffect(() => {
    async () => {
      if (!country) {
        let data = await getLocaleCountry();
        dispatch({
          type: ACTION_TYPE.GET_COUNTRY,
          payload: data.country,
        });
      }
    };
  }, []);

  useEffect(() => {
    dispatch({
      type: ACTION_TYPE.TOAST,
      payload: toast,
    });
  }, []);
  const ref = useRef();

  useEffect(() => {
    if (!ref)
      dispatch({
        type: ACTION_TYPE.SCROLL_REF,
        payload: ref,
      });
  }, []);

  useEffect(() => {
    ref.current.scrollTop = 0;
  }, [asPath]);

  if (asPath.includes("hire-developers/process"))
    return <div ref={ref}>{children}</div>;

  return (
    <div className="max-w-[100vw] max-h-[100vh]" ref={ref}>
      <Header
        logo={data?.section1?.logo}
        mobileSidebarIsOpen={mobileSidebarIsOpen}
        setMobileSidebarIsOpen={setMobileSidebarIsOpen}
      />
      <ToastContainer />
      {children}
      <div className={`seoId  ${LastCommit + process.env.GIT_HASH}`} />
      <LayoutFooter />
    </div>
  );
}
export default Layout;
