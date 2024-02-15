import Link from "next/link";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import REQUEST from "app/helpers/http.service";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import { useRouter } from "next/router";
import Metatag from "app/components/metaTag";

export default function Sitemap({ headerData }) {
  const { asPath } = useRouter();
  const [section, setSection] = useState([]);
  const [sectionLink, setSectionLink] = useState([]);
  useEffect(() => {
    let sitemapSections = [];
    let sitemapSectionsLink = [];
    for (let index = 0; index < headerData?.length; index++) {
      if (sitemapSections?.indexOf(headerData[index]?.menu_name) <= -1) {
        sitemapSections.push(headerData[index]?.menu_name);
        sitemapSectionsLink.push(headerData[index]?.menu_link);
      }
    }
    setSection(sitemapSections);
    setSectionLink(sitemapSectionsLink);
  }, [headerData]);
  return (
    <div>
      <Head>
        <title>Sitemap - VLink</title>
        <meta name="description" content={"Vlink Description"} />
        <meta name="og:description" content={"Vlink Description"} />
        <meta name="og:title" content={"Sitemap - Vlink"} />

        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />

        <Metatag content={`https://www.vlinkinfo.com/img/logopng.png`} />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="use-credentials"
        />
      </Head>
      <section className="py-[55px] mt-20">
        <div className="container">
          {headerData &&
            section.length > 0 &&
            section?.map((sections, index) => {
              return (
                <div className="grid grid-cols-12 gap-4 mb-[55px]" key={index}>
                  <div className="col-span-12">
                    <h1 className="font-bold text-4xl mb-5 font-sans text-[#000000]">
                      <Link href={`/${sectionLink[index]}`} className="">
                        {sections}
                      </Link>
                    </h1>
                  </div>
                  {headerData?.map((subMenu, index) => {
                    if (
                      subMenu?.menu_name === sections &&
                      (subMenu?.sub_sub_menu || subMenu?.sub_menu)
                    )
                      return (
                        <div className="col-span-4" key={index}>
                          <Link
                            href={
                              subMenu?.sub_sub_link || subMenu?.sub_link || "/"
                            }
                            className="text-company text-[18px] font-sans font-[600] hover:text-[#0050D5] hover:border-b-[1px] hover:border-[#0050D5] focus:outline-none"
                          >
                            {subMenu?.sub_sub_menu || subMenu?.sub_menu}
                          </Link>
                        </div>
                      );
                  })}
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const [headerData] = await Promise.all([
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.HEADER,
    }),
  ]);

  return {
    props: {
      headerData: headerData?.data?.data?.attributes?.menu?.menu_name,
    },
  };
}
