import Head from "next/head";
import "styles/Home.module.css";
import SectionHeader from "app/components/common/SectionHeader";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import Link from "next/link";
import { useEffect, useState } from "react";
import { apiEndpoint } from "app/scripts/fetch";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import HeroSection from "app/components/common/HeroSection";
import CertificateBar from "app/components/Home/CertificateBar";
import WhitepaperCard from "app/components/common/whitepaperCard";
import CONSTANTS from "app/scripts/constants";
import Pagination from "app/components/common/Pagination";
import { useRouter } from "next/router";
import Metatag from "app/components/metaTag";

export default function Webinars({ webinar, trusted, list }) {
  const { asPath } = useRouter();
  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  const [webinarDetail, setWebinarDetail] = useState();
  const [loading, setLoading] = useState(true);
  const [optionsPagination, setOptionsPagination] = useState({
    page: CONSTANTS.PAGINATION_INITIAL_PAGE,
    limit: CONSTANTS.PAGINATION_PAGE_SIZE,
    totalResults: 0,
  });
  const { page, limit, total } = optionsPagination;

  const header = [{ label: "Home", link: "/" }, { label: "Webinars" }];

  useEffect(() => {
    setLoading(true);
    setWebinarDetail([...list.slice((page - 1) * limit, page * limit)]);
    setOptionsPagination({
      ...optionsPagination,
      totalResults: list.length,
    });
    setLoading(false);
  }, [page, limit]);

  return (
    <div>
      <Head>
        <title>{webinar?.title ? webinar?.title : `VLink`}</title>
        <meta
          name="description"
          content={webinar?.description || "Vlink Description"}
        />
        <meta
          name="og:description"
          content={webinar?.description || "Vlink Description"}
        />
        <meta name="og:title" content={webinar?.title || "Vlink"} />

        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />
        <Metatag content={apiEndpoint(webinar?.image?.data?.attributes?.url)} />

        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <SectionHeader list={header} />
      <HeroSection data={webinar} isService={true} />
      <CertificateBar isTrusted={true} section={trusted} />
      <Link href="/webinars/LiveWebinarPage/" className="text-[#fff]"></Link>
      <section className="font-sans md:py-16 py-[30px] md:px-[4rem] px-2">
        <div className="container mx-auto px-4" id="webinar-list">
          <div className="grid md:grid-cols-1 items-center">
            <h2 className="md:text-[40px] text-[22px] text-[#030303] font-[700] md:leading-[54px] leading-[30px] md:mb-8 mb-4 colors-black">
              Register and Watch
              <span className="text-[#62207E]">On-demand </span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
            {webinarDetail?.map((cardData, index) => (
              <WhitepaperCard
                data={cardData}
                showDownload={false}
                key={`webinar-${index}`}
              />
            ))}
          </div>
          {optionsPagination?.totalResults > CONSTANTS.PAGINATION_PAGE_SIZE && (
            <Pagination
              loading={loading}
              paginationOptions={optionsPagination}
              onPagination={setOptionsPagination}
              className="my-6"
            />
          )}
        </div>
      </section>
      <GetInTouchForm />
    </div>
  );
}

export async function getStaticProps() {
  const [webinar, trusted] = await Promise.all([
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.WEBINARS,
    }),
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.TRUSTED_BY_STARTUPS,
    }),
  ]);
  let page = 1;
  let limit = 20;
  let contentPages = [];
  let total = 0;
  do {
    const [res] = await Promise.all([
      REQUEST({
        method: "GET",
        url: `${API_ENDPOINTS.WEBINARS_DETAIL}&sort[0]=date%3Adesc&pagination[page]=${page}&pagination[pageSize]=${limit}`,
      }),
    ]);
    contentPages = [...contentPages, ...res?.data?.data];
    if (res?.data?.meta?.pagination?.total) {
      total = res?.data?.meta?.pagination?.total;
      page = page + 1;
    } else break;
  } while (total > contentPages.length);

  return {
    props: {
      webinar: webinar?.data?.data?.attributes?.section1,
      list: contentPages,
      trusted: trusted?.data?.data?.attributes,
    },
  };
}
