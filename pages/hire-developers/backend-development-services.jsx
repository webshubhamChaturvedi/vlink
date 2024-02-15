import React, { useState } from "react";
import { useRouter } from "next/router";
import Metatag from "app/components/metaTag";
import Head from "next/head";
import SectionHeader from "app/components/common/SectionHeader";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import HeroSection from "app/components/common/HeroSection";
import CertificateBar from "app/components/Home/CertificateBar";
import FrontendServices from "app/components/HireDevelopers/FrontendServices";
import WarehousePlatform from "app/components/warehouse/WarehousePlatform";
import BlockChain from "app/components/common/BlockChain";
import TechnologiesFrontend from "app/components/HireDevelopers/TechnologiesFrontend";
import Partner from "app/components/common/Partner";
import TestimonialData from "app/components/warehouse/TestimonialData";
import GetInTouch from "app/components/warehouse/GetInTouch";
import Faq from "app/components/Teams/Faq";
import DataResources from "app/components/warehouse/DataResources";
import BlockService from "app/components/Services/BlockService";
import ServiceBackend from "app/components/HireDevelopers/ServiceBackend";
import GetInTouchModal from "app/components/common/GetInTouchModal";
import { apiEndpoint } from "app/scripts/fetch";

export default function Frontend({ backendData, trusted, testimonial }) {
  const [modalScheduleCall, setModalScheduleCall] = useState(false);

  const header = [
    { label: "Home", link: "/" },
    { label: "Hire Developers", link: "/hire-developers" },
    { label: " Backend Development Services" },
  ];
  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  if (backendData?.error) {
    return <div>{backendData?.error}</div>;
  }

  return (
    <>
      <Head>
        <title>
          {backendData?.Seo?.metaTitle ? backendData?.Seo?.metaTitle : `VLink`}
        </title>
        <meta
          name="description"
          content={backendData?.Seo?.metaDescription || "Vlink Description"}
        />
        <meta
          name="og:description"
          content={backendData?.Seo?.metaDescription || "Vlink Description"}
        />
        <meta
          name="og:title"
          content={backendData?.Seo?.metaTitle || "Vlink"}
        />
        <Metatag
          content={
            apiEndpoint(backendData?.Seo?.metaImage?.data?.attributes?.url) ||
            "https://www.vlinkinfo.com/img/logopng.png"
          }
        />

        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <SectionHeader list={header} isBreadcrumb={true} />
      <HeroSection
        isSupply={true}
        data={backendData?.HeroSection}
        setModalCall={setModalScheduleCall}
      />
      {Object.keys(trusted)?.length ? (
        <CertificateBar
          isTrusted={true}
          section={Object.keys(trusted)?.length ? trusted : null}
        />
      ) : (
        <></>
      )}

      <Partner partner={backendData?.Services} isPartner={true} />

      <WarehousePlatform data={backendData?.Stories} />

      <TechnologiesFrontend technologies={backendData?.Technologies} />

      <FrontendServices
        frontend={backendData?.Trusted}
        isBackendService={true}
      />

      <BlockService BlockService={backendData?.Process} />

      <Partner isPartnerFrontend={true} partner={backendData?.Performance} />

      <BlockChain blockchain={backendData.Requirements} />

      <ServiceBackend whyvlink={backendData?.WhyVlink} />

      <TestimonialData testimonials={testimonial} isNewTestimonial={true} />

      <DataResources resources={backendData?.Blogs} isDataFrontend={true} />

      {backendData?.Faq && (
        <Faq section={backendData?.Faqs} isFaq={true} forCSS={true} />
      )}

      <GetInTouch getintouch={backendData?.GetInTouch} isStaff={true} />

      {modalScheduleCall && (
        <GetInTouchModal
          // modalData={modalData?.attributes}
          isOpen={modalScheduleCall}
          setIsOpen={setModalScheduleCall}
        />
      )}
    </>
  );
}

export async function getStaticProps() {
  const [backendData, trusted, testimonial] = await Promise.all([
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.BACKEND_DEVELOPMENT,
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
  return {
    props: {
      backendData: backendData?.data?.data?.attributes,
      trusted: trusted?.data?.data?.attributes,
      testimonial: testimonial?.data?.data?.attributes,
    },
  };
}
