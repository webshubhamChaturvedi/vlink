import Head from "next/head";
import "styles/Home.module.css";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import SectionHeader from "app/components/common/SectionHeader";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import CertificateBar from "app/components/Home/CertificateBar";
import Faq from "app/components/HireDevelopers/Faq";
import WhyHireDevelopers from "app/components/HireDevelopers/WhyHireDevelopers";
import BestQuality from "app/components/HireDevelopers/BestQuality";
import TechnologyStacks from "app/components/HireDevelopers/TechnologyStacks";
import WeWork from "app/components/HireDevelopers/WeWork";
import ExperiencedTeam from "app/components/HireDevelopers/Detail/ExperiencedTeam";
import HireDevelopersPricing from "app/components/HireDevelopers/Detail/HireDevelopersPricing";
import HeroSection from "app/components/common/HeroSection";
import { useRouter } from "next/router";
import { apiEndpoint } from "app/scripts/fetch";
import Metatag from "app/components/metaTag";
import TestimonialData from "app/components/warehouse/TestimonialData";

export default function HireDevelopers({
  hireDeveloperData,
  trusted,
  testimonials,
}) {
  const { asPath } = useRouter();
  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const header = [{ label: "Home", link: "/" }, { label: "Hire Developer" }];
  return (
    <div>
      <Head>
        <title>
          {hireDeveloperData?.Seo?.metaTitle ||
            hireDeveloperData?.title ||
            `VLink`}
        </title>
        <meta
          name="description"
          content={
            hireDeveloperData?.Seo?.metaDescription ||
            hireDeveloperData?.description ||
            "Vlink Description"
          }
        />

        <meta
          property="og:title"
          content={
            hireDeveloperData?.Seo?.metaTitle ||
            hireDeveloperData?.title ||
            `VLink`
          }
        />
        <meta
          property="og:description"
          content={
            hireDeveloperData?.Seo?.metaDescription ||
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
            hireDeveloperData?.Seo?.metaImage?.data?.attributes?.url ||
              hireDeveloperData?.section1?.image?.data?.attributes?.url
          )}
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <SectionHeader list={header} />
      <HeroSection
        data={hireDeveloperData?.section1}
        isService={true}
        typeButton={true}
      />
      <CertificateBar
        section={Object.keys(trusted)?.length ? trusted : null}
        isTrusted={true}
      />
      <WhyHireDevelopers section={hireDeveloperData?.section2} />
      <BestQuality
        section={hireDeveloperData?.section3}
        section_list={hireDeveloperData?.section3?.section3_detail}
      />
      <TechnologyStacks
        section_title={hireDeveloperData?.section4}
        section_content={hireDeveloperData?.section4_content}
      />
      <WeWork section={hireDeveloperData?.section5} />
      <ExperiencedTeam
        section={hireDeveloperData?.section6}
        isHireDevelopers={true}
      />
      <HireDevelopersPricing
        section_title={hireDeveloperData?.section7}
        section_content={hireDeveloperData?.hireDevPrices}
      />
      <TestimonialData testimonials={testimonials} isNewTestimonial={true} />
      <Faq section={hireDeveloperData?.section8} />
      <GetInTouchForm />
    </div>
  );
}

export async function getStaticProps() {
  const [hireDeveloperData, trusted, testimonials] = await Promise.all([
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.HIRE_DEVELOPERS,
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
      hireDeveloperData: hireDeveloperData?.data?.data?.attributes,
      trusted: trusted?.data?.data?.attributes,
      testimonials: testimonials?.data?.data?.attributes,
    },
  };
}
