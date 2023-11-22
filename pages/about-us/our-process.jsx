import Head from "next/head";
import Testimonial from "app/components/Home/Testimonials";
import OurWay from "app/components/AboutUs/OurWay";
import "styles/Home.module.css";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import SectionHeader from "app/components/common/SectionHeader";
import REQUEST from "app/helpers/http.service";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import HeroSection from "app/components/common/HeroSection";
import CertificateBar from "app/components/Home/CertificateBar";
import ExperiencedTeam from "app/components/OurProcess/ExperiencedTeam";
import ContactUs from "app/components/OurProcess/ContactUs";
import VlinkApart from "app/components/AboutUs/VlinkApart";
import Technology from "app/components/OurProcess/Technology";
import { useRouter } from "next/router";
import { apiEndpoint } from "app/scripts/fetch";
import Metatag from "app/components/metaTag";

export default function OurProcess({ ourProcessData, trusted, testimonial }) {
  const router = useRouter();
  const { asPath } = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  const header = [
    { label: "Home", link: "/" },
    { label: "About us", link: "/about-us" },
    { label: "Our Process" },
  ];

  if (ourProcessData?.error) {
    return <div>{ourProcessData?.error}</div>;
  }
  return (
    <div>
      <Head>
        <title>{ourProcessData?.title ? ourProcessData?.title : `VLink`}</title>
        <meta
          name="description"
          content={ourProcessData?.description || "Vlink Description"}
        />

        <meta
          property="og:title"
          content={ourProcessData?.title ? ourProcessData?.title : `Vlink`}
        />
        <meta
          property="og:description"
          content={ourProcessData?.description || "Vlink Description"}
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />

        <Metatag
          content={apiEndpoint(
            ourProcessData?.section1?.image?.data?.attributes?.url
          )}
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <SectionHeader list={header} />
      <HeroSection data={ourProcessData?.section1} isService={true} />
      <CertificateBar
        section={Object.keys(trusted)?.length ? trusted : null}
        isTrusted={true}
      />
      <OurWay section={ourProcessData?.section2} />
      <ExperiencedTeam section={ourProcessData?.section3} isProcess={true} />
      <ContactUs section={ourProcessData?.section5} />
      <VlinkApart
        data={ourProcessData?.section6}
        head="Team"
        justify="center"
        background="bg-vlink-apart"
        backgroundPosition="bg-vlink-apart-position"
      />
      <Testimonial
        section_title={testimonial?.Testimonial}
        section_content={testimonial?.testimonial_content}
      />
      <Technology section={ourProcessData?.sectiom6} />
      <div className="pt-8">
        <GetInTouchForm />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const [ourProcessData, trusted, testimonial] = await Promise.all([
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.OUR_PROCESS_PAGE,
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
      ourProcessData: ourProcessData?.data?.data?.attributes,
      trusted: trusted?.data?.data?.attributes,
      testimonial: testimonial?.data?.data?.attributes,
    },
  };
}
