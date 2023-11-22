import Layout from "app/layout";
// import "styles/styles.scss";
import { Provider } from "react-redux";
import { store } from "store/store";
import ErrorBoundary from "app/components/common/ErrorBoundary";
import dynamic from "next/dynamic";
const SupportChat = dynamic(
  () => import("app/components/support-chat/SupportChat"),
  {
    ssr: false,
  }
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ErrorBoundary>
        <Provider store={store}>
          <Layout data={pageProps?.homePageData}>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ErrorBoundary>
      <SupportChat />
    </>
  );
}

export default MyApp;
