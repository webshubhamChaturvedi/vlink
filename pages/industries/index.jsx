import Head from "next/head";
import SuccessStories from "app/components/Home/SuccesStories";
import Testimonial from "app/components/Home/Testimonials";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import SectionHeader from "app/components/common/SectionHeader";
import IndustryVerticals from "app/components/Industries/IndustryVerticals";
import TellUsYourNeeds from "app/components/Industries/TellUsYourNeeds";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import CertificateBar from "app/components/Home/CertificateBar";
import HeroSection from "app/components/common/HeroSection";
import Blogs from "app/components/Home/Blogs";
import { useRouter } from "next/router";
import { apiEndpoint } from "app/scripts/fetch";
import Metatag from "app/components/metaTag";
import TestimonialData from "app/components/warehouse/TestimonialData";

export default function Industries({ res }) {
  const { asPath } = useRouter();
  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const header = [{ label: "Home", link: "/" }, { label: "Industries" }];
  const { industriesData, trusted, testimonial, stories, blogData } =
    JSON.parse(res);

  if (industriesData?.error) {
    return <div>{industriesData?.error}</div>;
  }
  return (
    <div>
      <Head>
        <title>
          {industriesData?.seo?.metaTitle || industriesData?.title || `VLink`}
        </title>
        <meta
          name="description"
          content={
            industriesData?.seo?.metaDescription ||
            industriesData?.description ||
            "Vlink Description"
          }
        />
        <meta
          property="og:title"
          content={
            industriesData?.seo?.metaTitle || industriesData?.title || `VLink`
          }
        />
        <meta
          property="og:description"
          content={
            industriesData?.seo?.metaDescription ||
            industriesData?.description ||
            "Vlink Description"
          }
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />
        <Metatag
          content={apiEndpoint(
            industriesData?.seo?.metaImage?.data?.attributes?.url ||
              industriesData?.image?.data?.attributes?.url
          )}
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <SectionHeader list={header} />

      <HeroSection data={industriesData} isService={true} />
      <CertificateBar
        isTrusted={true}
        section={Object.keys(trusted)?.length ? trusted : null}
      />
      <div className="py-[55px]">
        <IndustryVerticals section={industriesData?.section1} />
      </div>
      <TellUsYourNeeds section={industriesData?.section2} />
      <SuccessStories
        isService={true}
        section_content={stories}
        section_title={industriesData?.success_story}
      />
      <TestimonialData testimonials={testimonial} isNewTestimonial={true} />
      <div className="pt-[55px]">
        <Blogs
          section_title={industriesData?.industry_insights}
          homeBlog={blogData}
        />
      </div>
      <GetInTouchForm />
    </div>
  );
}

export async function getStaticProps() {
  const [industriesData, trusted, testimonial, stories, blogData] =
    await Promise.all([
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.INDUSTRIES,
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
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.COMMON_BLOGS,
      }),
    ]);
  const res = JSON.stringify({
    industriesData: industriesData?.data?.data?.attributes,
    trusted: trusted?.data?.data?.attributes,
    testimonial: testimonial?.data?.data?.attributes,
    stories: stories?.data?.data,
    blogData: blogData?.data?.data,
  });
  return {
    props: { res },
  };
}
