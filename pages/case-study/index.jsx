import React, { useState, useEffect } from "react";
import Head from "next/head";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import SectionHeader from "app/components/common/SectionHeader";
import HeroSection from "app/components/common/HeroSection";
import CaseStudiesList from "app/components/CaseStudies/CaseStudiesList";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import CertificateBar from "app/components/Home/CertificateBar";
import { useRouter } from "next/router";
import Metatag from "app/components/metaTag";
import GetInTouchModal from "app/components/common/GetInTouchModal";
import BlockChain from "app/components/common/BlockChain";
import CloudModernization from "app/components/warehouse/CloudModernization";
import OurClients from "app/components/Home/OurClients";
import TestimonialData from "app/components/warehouse/TestimonialData";
import OurAchievements from "app/components/common/OurAchievements";
import Integration from "app/components/common/Integration";
import "./case-study.css";
import AnimatedTitle from "app/components/common/AnimatedTitle";
import { Example } from "app/components/common/Example";

export default function CaseStudy({
  caseStudyData,
  list,
  trusted,
  testimonials,
}) {
  const [modalScheduleCall, setModalScheduleCall] = useState(false);
  const header = [{ label: "Home", link: "/" }, { label: "Case Studies" }];
  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
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

  if (caseStudyData?.error) {
    return <div>{caseStudyData?.error}</div>;
  }

  return (
    <div>
      <Head>
        <title>{caseStudyData?.title ? caseStudyData?.title : `VLink`}</title>
        <meta
          name="description"
          content={caseStudyData?.description || "Vlink Description"}
        />
        <meta
          name="og:description"
          content={caseStudyData?.description || "Vlink Description"}
        />
        <meta name="og:title" content={caseStudyData?.title || "Vlink"} />
        <Metatag content={"https://www.vlinkinfo.com/img/logopng.png"} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <SectionHeader list={header} />
      <HeroSection
        isSupply={true}
        data={caseStudyData?.HeroSection}
        isSingleCase={true}
        isWhiteBtn={true}
        setModalCall={setModalScheduleCall}
      />
      <CertificateBar
        isTrusted={true}
        section={Object.keys(trusted)?.length ? trusted : null}
      />

      <BlockChain
        isTxtClr={"#ffffff"}
        isCaseOffering={true}
        isGradient={true}
        blockchain={caseStudyData?.Offerings}
        showDownload={true}
      />
      <div className="md:pb-[55px] pb-[30px]">
        <CloudModernization
          data={caseStudyData?.ourExperts}
          issupplyChain={true}
          isBlockChain={true}
          isCaseCloud={true}
          isTxtClr={"#353535"}
        />
      </div>

      <Integration data={caseStudyData?.Integration} />

      <OurClients
        section={caseStudyData?.ourClients}
        isCaseClient={true}
        setModalScheduleCall={setModalScheduleCall}
      />

      <div className="md:py-[55px] py-[30px]">
        <CaseStudiesList section_title={caseStudyData} list={list} />
      </div>

      <OurAchievements data={caseStudyData?.Achievements} />

      <TestimonialData testimonials={testimonials} isNewTestimonial={true} />

      <GetInTouchForm />

      {modalScheduleCall && (
        <GetInTouchModal
          // modalData={modalData?.attributes}
          isOpen={modalScheduleCall}
          setIsOpen={setModalScheduleCall}
        />
      )}
    </div>
  );
}

export async function getStaticProps() {
  const [caseStudyData, trusted, testimonials] = await Promise.all([
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.CASE_STUDIES,
    }),
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.TRUSTED_BY_STARTUPS,
    }),
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.TESTIMONIALS,
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
        url: `${API_ENDPOINTS.CASE_STUDIES_DETAILS_PAGE}&pagination[page]=${page}&pagination[pageSize]=${limit}&sort[0]=createdAt%3Adesc`,
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
      caseStudyData: caseStudyData?.data?.data?.attributes,
      list: contentPages,
      trusted: trusted?.data?.data?.attributes,
      testimonials: testimonials?.data?.data?.attributes,
    },
  };
}
