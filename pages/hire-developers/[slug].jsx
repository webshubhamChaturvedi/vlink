import CertificateBar from "app/components/Home/CertificateBar";
import Testimonial from "app/components/Home/Testimonials";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import SectionHeader from "app/components/common/SectionHeader";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import Head from "next/head";
import "styles/Home.module.css";
import DedicatedDevelopmentTeam from "app/components/HireDevelopers/Detail/DedicatedDevelopmentTeam";
import ExperiencedTeam from "app/components/HireDevelopers/Detail/ExperiencedTeam";
import HireDevelopersPricing from "app/components/HireDevelopers/Detail/HireDevelopersPricing";
import StepsToHire from "app/components/HireDevelopers/Detail/StepsToHire";
import WhyHireDevelopers from "app/components/HireDevelopers/Detail/WhyHireDeveloper";
import Faq from "app/components/HireDevelopers/Faq";
import WeWork from "app/components/HireDevelopers/WeWork";
import SuccesfulNumber from "app/components/Teams/SuccesfulNumber";
import HeroSection from "app/components/common/HeroSection";
import { getPages } from "app/scripts/utils";
import { useRouter } from "next/router";
import { apiEndpoint } from "app/scripts/fetch";
import ServiceOfferings from "app/components/Home/ServiceOfferings";
import TechStacks from "app/components/Home/TechStacks/TechStacks";
import Metatag from "app/components/metaTag";
import TestimonialData from "app/components/warehouse/TestimonialData";

export default function HireDevelopers({ res }) {
  const router = useRouter();

  const { hireDeveloperData, trusted, testimonials, successNumber } =
    JSON.parse(res);
  const { slug } = router.query;
  const { asPath } = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const header = [{ label: "Home", link: "/" }, { label: "Hire Developer" }];
  return (
    <div>
      <Head>
        <title>
          {hireDeveloperData?.title ? hireDeveloperData?.title : `VLink`}
        </title>
        <meta
          name="description"
          content={hireDeveloperData?.description || "Vlink Description"}
        />

        <meta
          property="og:title"
          content={
            hireDeveloperData?.seo?.metaTitle ||
            hireDeveloperData?.title ||
            `Vlink`
          }
        />
        <meta
          property="og:description"
          content={
            hireDeveloperData?.seo?.metaDescription ||
            hireDeveloperData?.description ||
            "Vlink Description"
          }
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />

        <Metatag
          content={apiEndpoint(
            hireDeveloperData?.seo?.metaImage?.data?.attributes?.url ||
              hireDeveloperData?.section1?.image?.data?.attributes?.url
          )}
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <SectionHeader list={header} />
      <HeroSection
        data={hireDeveloperData?.section1}
        isHireDeveloperDetail={true}
        typeButton={true}
      />
      <CertificateBar section={trusted} isTrusted={true} />
      <div>
        {hireDeveloperData?.dev_service_offering ? (
          <ServiceOfferings
            section_title={hireDeveloperData?.dev_service_offering}
            section_content={hireDeveloperData?.developer_service}
          />
        ) : (
          <ExperiencedTeam
            section={hireDeveloperData?.section2}
            isDetail={true}
          />
        )}
      </div>
      {hireDeveloperData?.dev_tech_stacks?.length > 0 && (
        <TechStacks
          section_title={hireDeveloperData?.dev_tech_header}
          section_content={hireDeveloperData?.dev_tech_stacks}
        />
      )}
      <WhyHireDevelopers section={hireDeveloperData?.section3} />
      <SuccesfulNumber data={successNumber} isHireDevelopers={true} />

      <StepsToHire section={hireDeveloperData?.section4} />
      <WeWork section={hireDeveloperData?.section5} />
      <DedicatedDevelopmentTeam section={hireDeveloperData?.section6} />
      <HireDevelopersPricing
        section_title={hireDeveloperData?.section7}
        section_content={hireDeveloperData?.section8}
      />
      <TestimonialData testimonials={testimonials} isNewTestimonial={true} />
      <Faq
        section={{
          ...hireDeveloperData?.section9,
          faqs: hireDeveloperData?.section9?.section9_detail,
        }}
      />
      <GetInTouchForm />
    </div>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const [hireDeveloperData, trusted, testimonials, successNumber] =
    await Promise.all([
      REQUEST({
        method: "GET",
        url: `${API_ENDPOINTS.HIRE_DEVELOPERS_DETAIL}&filters[slug][$eq]=${slug}`,
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
        url: API_ENDPOINTS.SUCCESS_NUMBER,
      }),
    ]);
  const res = JSON.stringify({
    hireDeveloperData: hireDeveloperData?.data?.data[0]?.attributes,
    trusted: trusted?.data?.data?.attributes,
    testimonials: testimonials?.data?.data?.attributes,
    successNumber: successNumber?.data?.data?.attributes,
  });
  return {
    props: { res },
  };
}

export async function getStaticPaths() {
  return await getPages(`/api/developer-details`);
}
