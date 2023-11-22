import Head from "next/head";
import "styles/Home.module.css";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import ServiceDetail from "app/components/Teams/ServiceDetail";
import { useRouter } from "next/router";
import { generateFaqSchemas } from "app/scripts/utils";
import { apiEndpoint } from "app/scripts/fetch";
import Metatag from "app/components/metaTag";

export default function DedicatedTeams({
  dedicatedTeamsData,
  offering,
  trusted,
  testimonials,
}) {
  const header = [
    { label: "Home", link: "/" },
    { label: "Services", link: "/services" },
    { label: "Web Development Services" },
  ];
  const { asPath } = useRouter();
  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  if (dedicatedTeamsData?.error) {
    return <div>{dedicatedTeamsData?.error}</div>;
  }
  return (
    <div>
      <Head>
        <title>
          {dedicatedTeamsData?.title
            ? dedicatedTeamsData?.title
            : `VLink — Services`}
        </title>
        <meta
          name="description"
          content={dedicatedTeamsData?.description || "Vlink Description"}
        />
        <meta
          name="og:description"
          content={dedicatedTeamsData?.description || "Vlink Description"}
        />

        <meta
          property="og:title"
          content={
            dedicatedTeamsData?.title
              ? dedicatedTeamsData?.title
              : `Vlink — Services`
          }
        />
        <meta
          property="og:description"
          content={dedicatedTeamsData?.description || "Vlink Description"}
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />

        <Metatag
          content={apiEndpoint(
            dedicatedTeamsData?.team_section1?.image?.data?.attributes?.url
          )}
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateFaqSchemas(dedicatedTeamsData?.faq?.faq_detail)
          ),
        }}
      />
      <ServiceDetail
        data={
          Object.keys(dedicatedTeamsData)?.length ? dedicatedTeamsData : null
        }
        offering={offering}
        header={header}
        trusted={trusted}
        testimonials={testimonials}
      />
    </div>
  );
}

export async function getStaticProps() {
  const [dedicatedTeamsData, offering, trusted, testimonials] =
    await Promise.all([
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.SERVICES_WEB_DEVELOPMENT_SERVICES,
      }),
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.SERVICE_OFFERINGS,
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
      dedicatedTeamsData: dedicatedTeamsData?.data?.data?.attributes,
      offering: offering?.data?.data?.attributes?.service_offering,
      trusted: trusted?.data?.data?.attributes,
      testimonials: testimonials?.data?.data?.attributes,
    },
  };
}
