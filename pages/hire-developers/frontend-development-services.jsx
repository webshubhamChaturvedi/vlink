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
import CollaborateFrontend from "app/components/common/CollaborateFrontend";
import TechnologiesFrontend from "app/components/HireDevelopers/TechnologiesFrontend";
import Partner from "app/components/common/Partner";
import TestimonialData from "app/components/warehouse/TestimonialData";
import GetInTouch from "app/components/warehouse/GetInTouch";
import Faq from "app/components/Teams/Faq";
import DataResources from "app/components/warehouse/DataResources";
import Approach from "app/components/HireDevelopers/Approach";
import GetInTouchModal from "app/components/common/GetInTouchModal";
import { apiEndpoint } from "app/scripts/fetch";

export default function Frontend({ frontendData, trusted, testimonial }) {
  const [modalScheduleCall, setModalScheduleCall] = useState(false);

  const header = [
    { label: "Home", link: "/" },
    { label: "Hire-Developers", link: "/hire-developers" },
    {
      label: "Frontend Development Services",
    },
  ];
  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  if (frontendData?.error) {
    return <div>{frontendData?.error}</div>;
  }

  return (
    <>
      <Head>
        <title>{frontendData?.Seo?.metaTitle ? frontendData?.Seo?.metaTitle : `VLink`}</title>
        <meta
          name="description"
          content={frontendData?.Seo?.metaDescription || "Vlink Description"}
        />
        <meta
          name="og:description"
          content={
            frontendData?.Seo?.metaDescription ||
            "Vlink Description"
          }
        />
        <meta
          name="og:title"
          content={
            frontendData?.Seo?.metaTitle || "Vlink"
          }
        />
        <Metatag
          content={
            apiEndpoint(frontendData?.Seo?.metaImage?.data?.attributes?.url) ||
            "https://www.vlinkinfo.com/img/logopng.png"
          }
        />

        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <SectionHeader list={header} isBreadcrumb={true} />
      <HeroSection
        isSupply={true}
        data={frontendData?.HeroSection}
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

      <FrontendServices frontend={frontendData?.services} />

      <WarehousePlatform data={frontendData?.Stories} />

      <BlockChain blockchain={frontendData.Requirements} />

      <CollaborateFrontend crm={frontendData?.HireDevelopers} isdes={true} />

      <TechnologiesFrontend technologies={frontendData?.Technologies} />

      <Approach approach={frontendData?.Approach} />

      <Partner isPartnerFrontend={true} partner={frontendData?.WhyHire} />

      <TestimonialData testimonials={testimonial} isNewTestimonial={true} />

      <DataResources resources={frontendData?.Blog} isDataFrontend={true} />

      {frontendData?.Faq && (
        <Faq section={frontendData?.Faq} isFaq={true} forCSS={true} />
      )}

      <GetInTouch getintouch={frontendData?.GetInTouch} isStaff={true} />

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
  const [frontendData, trusted, testimonial] = await Promise.all([
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.FRONTEND_DEVELOPMENT,
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
      frontendData: frontendData?.data?.data?.attributes,
      trusted: trusted?.data?.data?.attributes,
      testimonial: testimonial?.data?.data?.attributes,
    },
  };
}
