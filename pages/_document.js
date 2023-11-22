import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en-IN">
      <Head>
        <meta name="theme-color" content="#337294"></meta>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Vlinkinfo",
              "alternateName": "VLink",
              "url": "https://www.vlinkinfo.com",
              "logo": "https://www.vlinkinfo.com/img/navbar-logo.svg",
              "sameAs": [
                "https://www.facebook.com/vlinkinc",
                "https://twitter.com/VLinkInc",
                "https://www.instagram.com/vlinkinc",
                "https://www.youtube.com/channel/UCIts-lcy_h9hhboDZnroLFg", 
                "https://www.linkedin.com/company/vlink-inc"
              ]
            }`,
          }}
        />
      </Head>
      <body className="font-openSans ">
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PNPT8R6"
            height="0"
            width="0"
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        {/* Google Tag Manager */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PNPT8R6');`}
      </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
