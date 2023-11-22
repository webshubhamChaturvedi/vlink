import Head from "next/head";
import SuccessStories from "app/components/Home/SuccesStories";
import Testimonial from "app/components/Home/Testimonials";
import OurClients from "app/components/Home/OurClients";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import SectionHeader from "app/components/common/SectionHeader";
import HowWeWork from "app/components/Services/HowWeWork";
import Solutions from "app/components/Teams/Solutions";
import OurSolutions from "app/components/Industries/Learning/OurSolutions";
import { useEffect, useState } from "react";
import REQUEST from "app/helpers/http.service";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import HeroSection from "app/components/common/HeroSection";
import CertificateBar from "app/components/Home/CertificateBar";
import ACTION_TYPE from "store/action-type";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { apiEndpoint } from "app/scripts/fetch";
import Metatag from "app/components/metaTag";

export default function IndustriesCustomer({ res }) {
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
    { label: "Industries Customer" },
  ];

  const { industriesLearningData, offering, trusted, testimonial, stories } =
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
            industriesLearningData?.title
              ? industriesLearningData?.title
              : `Vlink`
          }
        />
        <meta
          property="og:description"
          content={industriesLearningData?.description || "Vlink Description"}
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />

        <Metatag
          content={apiEndpoint(
            industriesLearningData?.section1?.image?.data?.attributes?.url
          )}
        />
        <link rel="canonical" href={canonicalUrl} />
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
      <OurSolutions
        section_title={industriesLearningData?.section3}
        section_content={industriesLearningData?.section3?.section3_detail}
      />
      <HowWeWork section={industriesLearningData?.working_process} />
      <SuccessStories
        section_title={industriesLearningData?.success_story}
        section_content={stories}
      />
      <Testimonial
        section_title={testimonial?.Testimonial}
        section_content={testimonial?.testimonial_content}
      />
      {/* 
      
   
    
     */}
      <GetInTouchForm />
    </div>
  );
}

export async function getStaticProps() {
  const [industriesLearningData, offering, trusted, testimonial, stories] =
    await Promise.all([
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.INDUSTRIES_CUSTOMER,
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
        url: API_ENDPOINTS.TESTIMONIALS,
      }),
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.SUCESS_STORIES,
      }),
    ]);
  const res = JSON.stringify({
    industriesLearningData: industriesLearningData?.data?.data?.attributes,
    offering: offering?.data?.data?.attributes?.industry_offering,
    trusted: trusted?.data?.data?.attributes,
    testimonial: testimonial?.data?.data?.attributes,
    stories: stories?.data?.data,
  });
  return {
    props: { res },
  };
}
