import Head from "next/head";
import "styles/Home.module.css";
import SectionHeader from "app/components/common/SectionHeader";
import REQUEST from "app/helpers/http.service";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import HeroSection from "app/components/common/HeroSection";
import CrsResponsabilities from "app/components/Crs/CrsResponsabilities";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import VlinkResponsabilities from "app/components/Crs/VlinkInternalPromises";
import HumanRights from "app/components/Crs/HumanRights";
import CeoCard from "app/components/Home/CeoCard";
import Diversity from "app/components/Crs/Diversity";
import ACTION_TYPE from "store/action-type";
import { useRouter } from "next/router";
import { apiEndpoint } from "app/scripts/fetch";
import Metatag from "app/components/metaTag";

export default function CorporateSocialResponsibility({ crsData }) {
  const { asPath } = useRouter();
  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const header = [
    { label: "Home", link: "/" },
    { label: "About us ", link: "/about-us" },
    { label: "Corporate Social Responsibility" },
  ];
  if (crsData?.error) {
    return <div>{crsData?.error}</div>;
  }
  return (
    <div>
      <Head>
        <title>{crsData?.title ? crsData?.title : `VLink`}</title>
        <meta name="og:title" content={crsData?.title || "Vlink"} />
        <meta
          name="og:description"
          content={crsData?.description || "Vlink Description"}
        />
        <meta
          name="description"
          content={crsData?.description || "Vlink Description"}
        />

        <meta
          property="og:title"
          content={crsData?.title ? crsData?.title : `Vlink`}
        />
        <meta
          property="og:description"
          content={crsData?.description || "Vlink Description"}
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />

        <Metatag
          content={apiEndpoint(crsData?.section1?.image?.data?.attributes?.url)}
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <SectionHeader list={header} />
      <HeroSection
        data={crsData?.section1}
        isService={true}
        downloadLink={apiEndpoint(
          crsData?.section1?.banner_btn[1]?.icon?.data?.attributes?.url
        )}
      />
      <div className="md:pt-0 pt-[30px]">
        <CeoCard section={crsData?.image_section} />
      </div>
      <CrsResponsabilities
        section_title={crsData?.section2}
        section_content={crsData?.section2}
      />

      <HumanRights section={crsData?.section4} />
      <VlinkResponsabilities
        section_title={crsData?.section3}
        section_content={crsData?.section3_detail}
      />
      <Diversity section={crsData?.diversity_section} />
      <GetInTouchForm />
    </div>
  );
}

export async function getStaticProps() {
  const [crsData] = await Promise.all([
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.CRS,
    }),
  ]);
  return {
    props: { crsData: crsData?.data?.data?.attributes },
  };
}
