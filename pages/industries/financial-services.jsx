import Blogs from "app/components/Home/Blogs";
import CertificateBar from "app/components/Home/CertificateBar";
import SuccessStories from "app/components/Home/SuccesStories";
import TechStacks from "app/components/financial/TechStacks";
import Solutions from "app/components/Teams/Solutions";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import HeroSection from "app/components/common/HeroSection";
import SectionHeader from "app/components/common/SectionHeader";
import Banner from "app/components/financial/Banner";
import Faq from "app/components/financial/Faq";
import HowWeWork from "app/components/financial/HowWeWork";
import OurSolution from "app/components/financial/OurSolution";
import WhyVlink from "app/components/financial/WhyVlink";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { apiEndpoint } from "app/scripts/fetch";
import Metatag from "app/components/metaTag";
const GetInTouchModal = dynamic(() =>
  import("/app/components/common/GetInTouchModal")
);

export default function IndustriesFinancial({ res }) {
  const [modalScheduleCall, setModalScheduleCall] = useState(false);
  const { asPath } = useRouter();

  const header = [
    { label: "Home", link: "/" },
    { label: "Industries", link: "/industries" },
    { label: "Financial Services" },
  ];
  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  const { industriesLearningData, offering, trusted, stories, blogs } =
    JSON.parse(res);

  if (industriesLearningData?.error) {
    return <div>{industriesLearningData?.error}</div>;
  }
  return (
    <>
      <Head>
        <title>
          {industriesLearningData?.title
            ? industriesLearningData?.title
            : `Vlink`}
        </title>
        <meta
          name="description"
          content={industriesLearningData?.description || "Vlink Description"}
        />
        <link rel="canonical" href={canonicalUrl} />

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
      </Head>
      <SectionHeader list={header} />
      <HeroSection data={industriesLearningData?.section1} />
      <CertificateBar
        isTrusted={true}
        section={Object.keys(trusted)?.length ? trusted : null}
      />
      <Solutions
        isIndustries={true}
        section={{
          h1_black: industriesLearningData?.section2?.h1_black,
          h1_purple: industriesLearningData?.section2?.h1_purple,
          p: industriesLearningData?.section2?.p,
          body: industriesLearningData?.section2?.body,
          button_text: industriesLearningData?.section2?.button_text,
        }}
        offering={offering}
      />
      <OurSolution
        section_title={industriesLearningData?.section3}
        section_content={industriesLearningData?.section3?.section3_detail}
      />
      <Banner section={industriesLearningData?.finacialBanner} />
      <WhyVlink
        section={industriesLearningData?.whyVlink}
        setModalScheduleCall={setModalScheduleCall}
      />
      <HowWeWork section={industriesLearningData?.working_process} />
      <TechStacks
        section_title={industriesLearningData?.fin_tech_header}
        section_content={industriesLearningData?.fin_tech_stacks}
      />
      <SuccessStories
        section_title={industriesLearningData?.success_story}
        section_content={stories}
      />
      <div className="pt-[55px]">
        <Blogs
          section_title={industriesLearningData?.fin_recent_blog}
          homeBlog={blogs}
        />
      </div>
      <Faq faqs={industriesLearningData?.financialFaqs} />
      <GetInTouchForm />

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
  const [industriesLearningData, offering, trusted, stories, blogs] =
    await Promise.all([
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.INDUSTRIES_FINANCE,
      }),
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.INDUSTRY_OFFERINGS,
      }),
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.TRUSTED_BY_STARTUPS,
      }),
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.SUCESS_STORIES,
      }),
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.COMMON_BLOGS,
      }),
    ]);
  const res = JSON.stringify({
    industriesLearningData: industriesLearningData?.data?.data?.attributes,
    offering: offering?.data?.data?.attributes?.industry_offering,
    trusted: trusted?.data?.data?.attributes,
    stories: stories?.data?.data,
    blogs: blogs?.data?.data,
  });
  return {
    props: { res },
  };
}
