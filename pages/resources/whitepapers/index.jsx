import Head from "next/head";
import "styles/Home.module.css";
import SectionHeader from "app/components/common/SectionHeader";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import { useEffect, useState } from "react";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import HeroSection from "app/components/common/HeroSection";
import CertificateBar from "app/components/Home/CertificateBar";
import WhitepaperCard from "app/components/common/whitepaperCard";
import CONSTANTS from "app/scripts/constants";
import Pagination from "app/components/common/Pagination";
import { useRouter } from "next/router";
import Metatag from "app/components/metaTag";
import { apiEndpoint } from "app/scripts/fetch";
const style = {
  episodesLists: {},
  li: {
    boxShadow: "0px 0px 58px rgba(0, 0, 0, 0.1)",
    borderRadius: "6px",
  },
  figure: {
    backgroundRepeat: "no-repeat",
    width: "213px",
    backgroundSize: "cover",
    height: "207px",
    borderRadius: "6px",
  },
};

export default function Whitepapers({ whitepaper, trusted, list }) {
  const { asPath } = useRouter();
  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  const [whitepaperDetail, setWhitepaperDetail] = useState();
  const [loading, setLoading] = useState(true);
  const [optionsPagination, setOptionsPagination] = useState({
    page: CONSTANTS.PAGINATION_INITIAL_PAGE,
    limit: CONSTANTS.PAGINATION_PAGE_SIZE,
    totalResults: 0,
  });
  const { page, limit, total } = optionsPagination;

  const header = [{ label: "Home", link: "/" }, { label: "Whitepapers" }];

  useEffect(() => {
    setLoading(true);
    setWhitepaperDetail([...list.slice((page - 1) * limit, page * limit)]);
    setOptionsPagination({
      ...optionsPagination,
      totalResults: list.length,
    });
    setLoading(false);
  }, [page, limit]);
  return (
    <div>
      <Head>
        <title>{whitepaper?.title ? whitepaper?.title : `VLink`}</title>
        <meta
          name="description"
          content={whitepaper?.description || "Vlink Description"}
        />
        <meta
          name="og:description"
          content={
            whitepaper?.Seo?.metaDescription ||
            whitepaper?.description ||
            "Vlink Description"
          }
        />
        <meta
          name="og:title"
          content={whitepaper?.Seo?.metaTitle || whitepaper?.title || "Vlink"}
        />

        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />
        <Metatag
          content={apiEndpoint(
            whitepaper?.Seo?.metaImage?.data?.attributes?.url ||
              whitepaper?.image?.data?.attributes?.url
          )}
        />

        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <SectionHeader list={header} />
      <HeroSection data={whitepaper} isService={true} />
      <CertificateBar isTrusted={true} section={trusted} id={"download"} />
      <section
        className="font-sans md:py-10 py-[30px] lg:px-[4rem] md:px-[2rem] px-1"
        id="whitepaper-list"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 items-center">
            <h2 className="xl:text-4xl lg:text-[32px] text-[22px] text-[#62207E] font-[700] md:leading-[54px] leading-[30px] md:mb-[55px] mb-[25px] colors-black">
              All <span className="text-[#030303]">Whitepapers</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7">
            {whitepaperDetail?.map((cardData, index) => (
              <WhitepaperCard data={cardData} key={`whitepaper-${index}`} />
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
  const [whitepaper, trusted] = await Promise.all([
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.WHITEPAPERS,
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
        url: `${API_ENDPOINTS.WHITEPAPERS_DETAIL}&pagination[page]=${page}&pagination[pageSize]=${limit}&sort[0]=createdAt%3Adesc`,
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
      whitepaper: whitepaper?.data?.data?.attributes,
      list: contentPages,
      trusted: trusted?.data?.data?.attributes,
    },
  };
}
