import Head from "next/head";
import "styles/Home.module.css";
import SectionHeader from "app/components/common/SectionHeader";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import { useEffect, useState } from "react";
import { apiEndpoint } from "app/scripts/fetch";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import HeroSection from "app/components/common/HeroSection";
import CertificateBar from "app/components/Home/CertificateBar";
import BroctureCard from "app/components/common/brochureCard";
import CONSTANTS from "app/scripts/constants";
import Pagination from "app/components/common/Pagination";
import { useRouter } from "next/router";
import Metatag from "app/components/metaTag";

export default function Brochures({ brochure, trusted, list }) {
  const { asPath } = useRouter();
  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  const [brochureDetail, setBrochureDetail] = useState();
  const [loading, setLoading] = useState(true);
  const [optionsPagination, setOptionsPagination] = useState({
    page: CONSTANTS.PAGINATION_INITIAL_PAGE,
    limit: CONSTANTS.PAGINATION_PAGE_SIZE,
    totalResults: 0,
  });
  const { page, limit, total } = optionsPagination;

  const header = [{ label: "Home", link: "/" }, { label: "Brochure" }];
  useEffect(() => {
    setLoading(true);
    setBrochureDetail([...list.slice((page - 1) * limit, page * limit)]);
    setOptionsPagination({
      ...optionsPagination,
      totalResults: list.length,
    });
    setLoading(false);
  }, [page, limit]);
  return (
    <div>
      <Head>
        <title>{brochure?.title ? brochure?.title : `VLink`}</title>
        <meta
          name="description"
          content={brochure?.description || "Vlink Description"}
        />
        <meta
          name="og:description"
          content={brochure?.description || "Vlink Description"}
        />
        <meta name="og:title" content={brochure?.title || "Vlink"} />

        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />

        <link rel="canonical" href={canonicalUrl} />
        <Metatag
          content={apiEndpoint(brochure?.image?.data?.attributes?.url)}
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="use-credentials"
        />
      </Head>
      <SectionHeader list={header} />
      <HeroSection data={brochure} isService={true} />
      <CertificateBar isTrusted={true} section={trusted} />
      <section className="font-sans md:py-[55px] py-[30px] lg:px-[4rem] md:px-[2rem] px-1">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 items-center">
            <h2 className="xl:text-4xl lg:text-[32px] text-[22px] text-[#62207E] font-[700] md:leading-[54px] leading-[30px] mb-[10px] colors-black">
              All <span className="text-[#030303]">Brochures</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:mt-10 mt-2 gap-7">
            {brochureDetail?.map((cardData, index) => (
              <BroctureCard
                data={cardData?.attributes}
                key={`brochure-${index}`}
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
  const [brochure, trusted] = await Promise.all([
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.BROCHURES,
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
        url: `${API_ENDPOINTS.BROCHURES_DETAIL}&pagination[page]=${page}&pagination[pageSize]=${limit}`,
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
      brochure: brochure?.data?.data?.attributes,
      list: contentPages,
      trusted: trusted?.data?.data?.attributes,
    },
  };
}
