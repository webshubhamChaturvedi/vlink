import Head from "next/head";
import OurClients from "app/components/Home/OurClients";
import "styles/Home.module.css";
import REQUEST from "app/helpers/http.service";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Metatag from "app/components/metaTag";
import TestimonialData from "app/components/warehouse/TestimonialData";
import DataResources from "app/components/warehouse/DataResources";
import GetInTouch from "app/components/warehouse/GetInTouch";
import ToolsTechnologies from "app/components/Services/ToolsTechnologies";
import WhyChoose from "app/components/Services/ItStaff";
import FrontendServices from "app/components/HireDevelopers/FrontendServices";
import HomeHeroSection from "app/components/common/HomeHeroSection";
import AwardWinningBar from "app/components/Home/AwardWinningBar";
import HomeService from "app/components/Home/HomeService";
import WarehousePlatform from "app/components/warehouse/WarehousePlatform";
import Industries from "app/components/common/Industries";
import OurAchievements from "app/components/common/OurAchievements";
import CollaborateFrontend from "app/components/common/CollaborateFrontend";
import OurWork from "app/components/common/OurWork";
import Interested from "app/components/common/Interested";
const GetInTouchModal = dynamic(() =>
  import("../app/components/common/GetInTouchModal")
);

export default function Home({ res }) {
  const { asPath } = useRouter();

  const [modalScheduleCall, setModalScheduleCall] = useState(false);

  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  const { homeData, awards, testimonials, stories, blogData } = JSON.parse(res);

  useEffect(() => {
    if (typeof document !== undefined) {
      const sidebarContentEl = document.querySelector("#some-id");
      const buttonnn = document.querySelectorAll(".buttonOpen");
      buttonnn.forEach((box) => {
        box.addEventListener("click", function () {
          sidebarContentEl.classList.add("mystyle");
        });
      });
      const removeButton1 = document.querySelectorAll(".buttonremove1");
      removeButton1.forEach((box) => {
        box.addEventListener("click", function () {
          sidebarContentEl.classList.remove("mystyle");
        });
      });
    }
  }, []);

  if (homeData?.error) {
    return <div>{homeData?.error}</div>;
  }

  return (
    <>
      <Head>
        <title>{homeData?.title ? homeData?.title : `VLink`}</title>
        <meta
          name="description"
          content={homeData?.description || "Vlink Description"}
        />
        <meta
          name="og:description"
          content={homeData?.description || "Vlink Description"}
        />
        <meta name="og:title" content={homeData?.title || "Vlink"} />

        <meta
          property="og:title"
          content={homeData?.title ? homeData?.title : `Vlink`}
        />
        <meta
          property="og:description"
          content={homeData?.description || "Vlink Description"}
        />
        <Metatag content={`https://www.vlinkinfo.com/img/logopng.png`} />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />

        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <HomeHeroSection
        data={homeData?.HeroSection}
        ishome={true}
        setModalCall={setModalScheduleCall}
        headingSize="11.56vh"
      />

      <AwardWinningBar section={awards} />

      <HomeService isHomeService={true} datas={homeData?.ServiceOfferings} />

      <ToolsTechnologies
        tech={homeData?.Technologies}
        isStaff={true}
        isWeb={"Web development"}
        isHm={true}
      />

      <OurWork work={homeData?.Work} isWorkHome={true} />

      <Interested
        interested={homeData?.Interested}
        setModalCall={setModalScheduleCall}
      />

      <WhyChoose data={homeData?.WhyChoose} isHomeWhyChoose={true} />

      <FrontendServices
        frontend={homeData?.Process}
        isHomeService={true}
        setModalScheduleCall={setModalScheduleCall}
      />

      <WarehousePlatform data={homeData?.CaseStudy} />

      <Industries industries={homeData?.industries} />

      <OurClients
        section={homeData?.our_clients}
        isCaseClient={true}
        setModalScheduleCall={setModalScheduleCall}
        isHomeclient={true}
      />

      <OurAchievements data={homeData?.Achievements} />

      <TestimonialData testimonials={testimonials} isNewTestimonial={true} />

      <CollaborateFrontend
        crm={homeData?.CollabForDev}
        isCollaborateStaticData={true}
      />

      <DataResources resources={homeData?.MoreCaseStudy} isEduProduct={true} />
      <GetInTouch getintouch={homeData?.GetInTouch} isStaff={true} />
      {modalScheduleCall && (
        <GetInTouchModal
          isOpen={modalScheduleCall}
          setIsOpen={setModalScheduleCall}
        />
      )}
    </>
  );
}

export async function getStaticProps() {
  const [homeData, awards, testimonials, stories, blogData] = await Promise.all(
    [
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.HOME_PAGE,
      }),
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.AWARDS,
      }),
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.TESTIMONIALS,
      }),
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.SUCESS_STORIES,
      }),
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.COMMON_BLOGS,
      }),
    ]
  );
  const res = JSON.stringify({
    homeData: homeData?.data?.data?.attributes,
    awards: awards?.data?.data?.attributes,
    testimonials: testimonials?.data?.data?.attributes,
    stories: stories?.data?.data,
    blogData: blogData?.data?.data,
  });
  return {
    props: { res },
  };
}
