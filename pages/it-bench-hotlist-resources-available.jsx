import REQUEST from "app/helpers/http.service";
import React, { useState, useEffect } from "react";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import ITBenchResumes from "app/components/ITBenchHotlist/ITBenchResumes";
import Container from "app/components/common/Container";
import CollaborateFrontend from "app/components/common/CollaborateFrontend";
import TestimonialData from "app/components/warehouse/TestimonialData";
import WhyVlink from "app/components/Home/WhyVlink";
import Faq from "app/components/Teams/Faq";
import Head from "next/head";
import "./it-bench.css";
import BlogAds from "app/components/common/BlogAds";
import ItBenchRequirement from "app/components/common/ItBenchRequirement";
import SubscribeModel from "app/components/common/SubscribeModel";
import Metatag from "app/components/metaTag";
import { useRouter } from "next/router";
import { JobdivaEmployers, getLocaleCountry } from "app/scripts/utils";
import { useDispatch, useSelector } from "react-redux";
import ACTION_TYPE from "store/action-type";

export default function ItBenchHotlistResourcesAvailable({
  itbenchhotlist,
  list,
  list_india,
  benchdata,
  testimonials
}) {
  const router = useRouter();
  const { asPath } = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  const [modalScheduleCall, setModalScheduleCall] = useState(false);
  const [modalBenchSubscribe, setModalBenchSubscribe] = useState(false);

  const country = useSelector((state) => state?.country);
  const dispatch = useDispatch();

  const GetLocation = async () => {
    if (!country) {
      let data = await getLocaleCountry();
      dispatch({
        type: ACTION_TYPE.GET_COUNTRY,
        payload: data.country,
      });
    }
  };

  useEffect(() => {
    (async () => {
      await GetLocation();
    })();
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@800&display=swap"
          rel="stylesheet"
        ></link>
        <title>{itbenchhotlist?.title ? itbenchhotlist?.title : `VLink`}</title>
        <meta
          name="og:description"
          content={itbenchhotlist?.description || "Vlink Description"}
        />
        <meta name="og:title" content={itbenchhotlist?.title || "Vlink"} />
        <meta
          name="description"
          content={itbenchhotlist?.description || "Vlink Description"}
        />

        <meta
          property="og:title"
          content={itbenchhotlist?.title ? itbenchhotlist?.title : `Vlink`}
        />
        <meta
          property="og:description"
          content={itbenchhotlist?.description || "Vlink Description"}
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />

        <Metatag content={`https://www.vlinkinfo.com/img/logopng.png`} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <section className="mt-[80px] lg:py-[55px] py-[30px]">
        <Container>
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:basis-full lg:mb-[55px] mb-[35px]">
              <h4 className="relative font-bold text-[#0C2139] xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3">
                <span className="text_stock lg:text-[100px] text-[45px] font-[800] text-[transparent] barlow block w-[100%] lg:leading-[100px] leading-[45px]">
                  {itbenchhotlist?.bgTitle}
                </span>
                <span className="w-[100%] font-[800] relative mt-[-30px] block max-w-[1200px] mx-auto">
                  {itbenchhotlist?.title}
                </span>
              </h4>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-10">
            <div className="lg:col-span-9 col-span-12">
              <ITBenchResumes
                itbenchhotlist={itbenchhotlist?.Bench_List}
                list={list}
                list_india={list_india}
                benchdata={benchdata}
                country={country}
              />
            </div>
            <aside className="lg:col-span-3 col-span-12">
              <div className="stickthis">
                <BlogAds
                  adsdata={itbenchhotlist?.Blog_Subscribe}
                  setModalCall={setModalBenchSubscribe}
                />
                <BlogAds
                  adsdata={itbenchhotlist?.List_Requirement}
                  setModalCall={setModalScheduleCall}
                />
              </div>
            </aside>
          </div>
        </Container>
      </section>
      {/* <TestimonialData
        customers={itbenchhotlist?.Testimonials}
        isBenchData={true}
      /> */}
      <TestimonialData testimonials={testimonials} isNewTestimonial={true} isBenchData={true} />
      <CollaborateFrontend
        crm={itbenchhotlist?.Talk_To_Consultant}
        isBenchData={true}
        setModalCall={setModalScheduleCall}
      />
      <WhyVlink
        section_title={itbenchhotlist?.Why_Choose}
        section_content={itbenchhotlist?.Why_Choose_Content}
        isBenchData={true}
      />

      {itbenchhotlist?.Faqs && (
        <Faq
          section={itbenchhotlist?.Faqs}
          isFaq={true}
          forCSS={true}
          isDeleteRightData={true}
          isBenchFaq={true}
        />
      )}
      {modalScheduleCall && (
        <ItBenchRequirement
          isOpen={modalScheduleCall}
          setIsOpen={setModalScheduleCall}
        />
      )}
      {modalBenchSubscribe && (
        <SubscribeModel
          // modalData={modalData?.attributes}
          isOpen={modalBenchSubscribe}
          setIsOpen={setModalBenchSubscribe}
        />
      )}
    </>
  );
}
export async function getStaticProps() {
  const [testimonials, itbenchhotlist] = await Promise.all([
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.TESTIMONIALS,
    }),
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.IT_BENCH_HOTLIST,
    }),
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.IT_BENCH_LIST_INDIA,
    }),
  ]);

  let page = 0;
  let limit = 1000;
  let contentPages = [];
  let total = 0;
  do {
    const [res] = await Promise.all([
      REQUEST({
        method: "GET",
        url: `${API_ENDPOINTS.IT_BENCH_LIST}&pagination[page]=${page}&pagination[pageSize]=${limit}`,
      }),
    ]);
    contentPages = [...contentPages, ...res?.data?.data];
    if (res?.data?.meta?.pagination?.total) {
      total = res?.data?.meta?.pagination?.total;
      page = page + 1;
    } else break;
  } while (total > contentPages.length);

  let pagee = 0;
  let limitt = 1000;
  let contentPagess = [];
  let totall = 0;
  do {
    const [ress] = await Promise.all([
      REQUEST({
        method: "GET",
        url: `${API_ENDPOINTS.IT_BENCH_LIST_INDIA}&pagination[page]=${pagee}&pagination[pageSize]=${limitt}`,
      }),
    ]);
    contentPagess = [...contentPagess, ...ress?.data?.data];
    if (ress?.data?.meta?.pagination?.totall) {
      totall = ress?.data?.meta?.pagination?.totall;
      pagee = pagee + 1;
    } else break;
  } while (totall > contentPagess.length);

  return {
    props: {
      testimonials: testimonials?.data?.data?.attributes,
      itbenchhotlist: itbenchhotlist?.data?.data?.attributes,
      list: contentPages,
      list_india: contentPagess,
    },
  };
}
