import Head from "next/head";
import "styles/Home.module.css";
import REQUEST from "app/helpers/http.service";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import { useRouter } from "next/router";
import SuccessStories from "app/components/Home/SuccesStories";
import OurServicesCard from "app/components/Services/OurServicesCard";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import SectionHeader from "app/components/common/SectionHeader";
import HowWeWork from "app/components/Services/HowWeWork";
import CertificateBar from "app/components/Home/CertificateBar";
import HeroSection from "app/components/common/HeroSection";
import { apiEndpoint } from "app/scripts/fetch";
import Metatag from "app/components/metaTag";
import TestimonialData from "app/components/warehouse/TestimonialData";

export default function Services({
  serviceData,
  trusted,
  testimonial,
  stories,
}) {
  const { asPath } = useRouter();
  const header = [{ label: "Home", link: "/" }, { label: "Services" }];
  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  if (serviceData?.error) {
    return <div>{serviceData?.error}</div>;
  }

  return (
    <div>
      <Head>
        <title>
          {serviceData?.title ? serviceData?.title : `VLink — Services`}
        </title>
        <meta
          name="description"
          content={serviceData?.description || "Vlink Description"}
        />

        <meta
          property="og:title"
          content={
            serviceData?.Seo?.metaTitle ||
            serviceData?.title ||
            `Vlink — Services`
          }
        />
        <meta
          property="og:description"
          content={
            serviceData?.Seo?.metaDescription ||
            serviceData?.description ||
            "Vlink Description"
          }
        />

        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />

        <Metatag
          content={apiEndpoint(
            serviceData?.Seo?.metaImage?.data?.attributes?.url ||
              serviceData?.image?.data[0]?.attributes?.url
          )}
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <SectionHeader list={header} />
      <HeroSection data={serviceData} isService={true} ishome={true} />
      <CertificateBar
        section={Object.keys(trusted)?.length ? trusted : null}
        isTrusted={true}
      />

      <div className="md:py-[55px] py-[30px]">
        <div className="py-[55px]">
          <OurServicesCard
            center={true}
            list={serviceData?.service_offering}
            rowItems={3}
            wideGap={true}
            viewMore={true}
            plainBg={false}
            location="service"
          />
        </div>

        <HowWeWork section={serviceData?.working_process} />
        <div className="lg:pt-[55px]">
          <SuccessStories
            isService={true}
            section_title={stories?.Success}
            section_content={stories}
          />
        </div>
        <TestimonialData testimonials={testimonial} isNewTestimonial={true} />
        <div className="lg:pt-0">
          <GetInTouchForm />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const [serviceData, trusted, testimonial, stories] = await Promise.all([
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.SERVICES_PAGE,
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
  return {
    props: {
      serviceData: serviceData?.data?.data?.attributes,
      trusted: trusted?.data?.data?.attributes,
      testimonial: testimonial?.data?.data?.attributes,
      stories: stories?.data?.data,
    },
  };
}
