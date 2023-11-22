import Head from "next/head";
import ServiceOfferings from "app/components/Home/ServiceOfferings";
import CertificateBar from "app/components/Home/CertificateBar";
import SuccessStories from "app/components/Home/SuccesStories";
import Blogs from "app/components/Home/Blogs";
import WhyVlink from "app/components/Home/WhyVlink";
import Testimonial from "app/components/Home/Testimonials";
import OurClients from "app/components/Home/OurClients";
import "styles/Home.module.css";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import CeoCard from "app/components/Home/CeoCard";
import REQUEST from "app/helpers/http.service";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import TechStacks from "app/components/Home/TechStacks/TechStacks";
import HeroSection from "app/components/common/HeroSection";
import { useRouter } from "next/router";
import { useState } from "react";
import dynamic from "next/dynamic";
import Metatag from "app/components/metaTag";
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
      <HeroSection
        data={homeData?.hero_section}
        ishome={true}
        headingSize="11.56vh"
      />
      <CertificateBar section={Object.keys(awards)?.length ? awards : null} />
      <OurClients
        section={homeData?.our_clients}
        setModalScheduleCall={setModalScheduleCall}
      />
      <WhyVlink
        section_title={homeData?.why_choose}
        section_content={homeData?.why_choose_content}
      />
      <ServiceOfferings
        section_title={homeData?.service_offering}
        section_content={homeData?.service_offering_fields}
      />
      <TechStacks
        section_title={homeData?.teach_stacks_header}
        section_content={homeData?.tech_stacks}
      />
      <CeoCard section={homeData?.sharad_patney} />
      <div className="lg:pt-0">
        <SuccessStories
          section_title={homeData?.success_story_blogs}
          section_content={stories}
        />
      </div>
      <Testimonial
        section_title={testimonials?.Testimonial}
        section_content={testimonials?.testimonial_content}
      />
      <div className="lg:pt-12 pt-[30px]">
        <Blogs section_title={homeData?.home_blogs} homeBlog={blogData} />
      </div>
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
