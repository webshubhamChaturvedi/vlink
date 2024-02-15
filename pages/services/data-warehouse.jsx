import CertificateBar from "app/components/Home/CertificateBar";
import Faq from "app/components/Teams/Faq";
import GetInTouchModal from "app/components/common/GetInTouchModal";
import HeroSection from "app/components/common/HeroSection";
import SectionHeader from "app/components/common/SectionHeader";
import Metatag from "app/components/metaTag";
import CloudModernization from "app/components/warehouse/CloudModernization";
import DataResources from "app/components/warehouse/DataResources";
import DataWork from "app/components/warehouse/DataWork";
import GetInTouch from "app/components/warehouse/GetInTouch";
import Help from "app/components/warehouse/Help";
import { Infrastructure } from "app/components/warehouse/Infrastructure";
import TestimonialData from "app/components/warehouse/TestimonialData";
import WarehousePlatform from "app/components/warehouse/WarehousePlatform";
import WarehouseSolutions from "app/components/warehouse/WarehouseSolutions";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import { apiEndpoint } from "app/scripts/fetch";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function DataWarehouse({ warehouse, trusted, testimonial }) {
  const { asPath } = useRouter();
  const [modalScheduleCall, setModalScheduleCall] = useState(false);

  const header = [{ label: "Home", link: "/" }, { label: "Data Warehouse" }];

  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  if (warehouse?.error) {
    return <div>{warehouse?.error}</div>;
  }
  return (
    <div>
      <Head>
        <title>
          {warehouse?.title ? warehouse?.title : `VLink — Services`}
        </title>
        <meta
          name="description"
          content={warehouse?.description || "Vlink Description"}
        />

        <meta
          property="og:title"
          content={warehouse?.title ? warehouse?.title : `Vlink — Services`}
        />
        <meta
          property="og:description"
          content={warehouse?.description || "Vlink Description"}
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />

        <Metatag
          content={apiEndpoint(
            warehouse?.data_warehouse_hero?.image?.data?.attributes?.url
          )}
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <SectionHeader list={header} />
      <HeroSection
        data={warehouse?.data_warehouse_hero}
        isWarehouse={true}
        setModalCall={setModalScheduleCall}
      />

      <CertificateBar
        section={Object.keys(trusted)?.length ? trusted : null}
        isTrusted={true}
      />

      <WarehousePlatform data={warehouse?.warehouse_platform} />

      <WarehouseSolutions data={warehouse?.Solutions} />

      <DataWork data={warehouse?.dataflow} />

      <CloudModernization data={warehouse?.cloud} />

      <DataWork data={warehouse?.Limitless} isLimitless={true} />

      <Help help={warehouse?.help} />

      <Infrastructure infrastructure={warehouse?.infrastructure} />

      <TestimonialData testimonials={testimonial} isNewTestimonial={true} />

      <DataResources resources={warehouse?.resources} />

      <Faq section={warehouse?.warehouse_faq} isFaq={true} />

      <GetInTouch getintouch={warehouse?.Get_in_touch} />

      {modalScheduleCall && (
        <GetInTouchModal
          // modalData={modalData?.attributes}
          isOpen={modalScheduleCall}
          setIsOpen={setModalScheduleCall}
        />
      )}
    </div>
  );
}

export async function getStaticProps() {
  const [warehouse, trusted, testimonial] = await Promise.all([
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.DATA_WAREHOUSE,
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
      trusted: trusted?.data?.data?.attributes,
      warehouse: warehouse?.data?.data?.attributes,
      testimonial: testimonial?.data?.data?.attributes,
    },
  };
}
