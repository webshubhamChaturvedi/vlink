import React, { useState } from "react";
import Head from "next/head";
import SectionHeader from "app/components/common/SectionHeader";
import HowWeWork from "app/components/Services/HowWeWork";
import OurSolutions from "app/components/Industries/Learning/OurSolutions";
import REQUEST from "app/helpers/http.service";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import HeroSection from "app/components/common/HeroSection";
import CertificateBar from "app/components/Home/CertificateBar";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { apiEndpoint } from "app/scripts/fetch";
import Metatag from "app/components/metaTag";
import GetInTouchModal from "app/components/common/GetInTouchModal";
import Partner from "app/components/common/Partner";
import Awards from "app/components/common/Awards";
import ToolsTechnologies from "app/components/Services/ToolsTechnologies";
import GetInTouch from "app/components/warehouse/GetInTouch";
import Faq from "app/components/Teams/Faq";
import DataResources from "app/components/warehouse/DataResources";
import CollaborateFrontend from "app/components/common/CollaborateFrontend";
import Industries from "app/components/Services/Industries";

export default function IndustriesLearning({ res }) {
  const [modalScheduleCall, setModalScheduleCall] = useState(false);
  const dispatch = useDispatch();
  const { asPath } = useRouter();
  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const header = [
    { label: "Home", link: "/" },
    { label: "Industries", link: "/industries" },
    { label: "E-learning" },
  ];

  const { industriesLearningData, trusted, testimonial, stories } =
    JSON.parse(res);

  if (industriesLearningData?.error) {
    return <div>{industriesLearningData?.error}</div>;
  }
  return (
    <div>
      <Head>
        <title>
          {industriesLearningData?.title
            ? industriesLearningData?.title
            : `VLink`}
        </title>
        <meta
          name="description"
          content={industriesLearningData?.description || "Vlink Description"}
        />

        <meta
          property="og:title"
          content={
            industriesLearningData?.Seo?.metaTitle ||
            industriesLearningData?.title ||
            `Vlink`
          }
        />
        <meta
          property="og:description"
          content={
            industriesLearningData?.Seo?.metaDescription ||
            industriesLearningData?.description ||
            "Vlink Description"
          }
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />

        <Metatag
          content={apiEndpoint(
            industriesLearningData?.Seo?.metaImage?.data?.attributes?.url ||
              industriesLearningData?.section1?.image?.data?.attributes?.url
          )}
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <SectionHeader list={header} isBreadcrumb={true} />
      <HeroSection
        isSupply={true}
        setModalCall={setModalScheduleCall}
        data={industriesLearningData?.HeroSection}
        isEduHero={true}
      />
      <CertificateBar
        isTrusted={true}
        section={Object.keys(trusted)?.length ? trusted : null}
      />

      <Partner
        isPartnerFrontend={true}
        partner={industriesLearningData?.Services}
      />

      <Awards awards={industriesLearningData?.Awards} />

      <Industries
        industries={industriesLearningData?.edTech_Services}
        isEduInd={true}
      />

      <DataResources
        resources={industriesLearningData?.Projects}
        isEduProduct={true}
      />

      <OurSolutions
        section_title={industriesLearningData?.section3}
        section_content={industriesLearningData?.section3?.section3_detail}
        isEduSol={true}
      />

      <ToolsTechnologies
        tech={industriesLearningData?.TechStack}
        isToolsTechnologies={true}
        isWeb={"Frontend"}
      />

      <HowWeWork
        section={industriesLearningData?.working_process}
        isEduHow={true}
      />

      <CollaborateFrontend
        crm={industriesLearningData?.edTech_Guide}
        isEducol={true}
      />

      <DataResources resources={industriesLearningData?.Latest} />

      {industriesLearningData?.Faq && (
        <Faq section={industriesLearningData?.Faq} isFaq={true} forCSS={true} />
      )}

      <GetInTouch
        getintouch={industriesLearningData?.GetInTouch}
        isStaff={true}
      />

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
  const [industriesLearningData, trusted, testimonial, stories] =
    await Promise.all([
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.INDUSTRIES_LEARNING,
      }),
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.TRUSTED_BY_STARTUPS,
      }),
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.TESTIMONIALS,
      }),
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.SUCESS_STORIES,
      }),
    ]);
  const res = JSON.stringify({
    industriesLearningData: industriesLearningData?.data?.data?.attributes,
    trusted: trusted?.data?.data?.attributes,
    testimonial: testimonial?.data?.data?.attributes,
    stories: stories?.data?.data,
  });
  return {
    props: { res },
  };
}
