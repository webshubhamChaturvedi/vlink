import CertificateBar from "app/components/Home/CertificateBar";
import Expertise from "app/components/Services/Expertise";
import WhyChoose from "app/components/Services/ItStaff";
import HeroSection from "app/components/common/HeroSection";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Benefits from "app/components/Services/Benefits";
import CaseStudySection from "app/components/Services/CaseStudySection";
import Industries from "app/components/Services/Industries";
import ToolsTechnologies from "app/components/Services/ToolsTechnologies";
import Faq from "app/components/Teams/Faq";
import AugmentationProcess from "app/components/common/AugmentationProcess";
import GetInTouchModal from "app/components/common/GetInTouchModal";
import CloudModernization from "app/components/warehouse/CloudModernization";
import DataResources from "app/components/warehouse/DataResources";
import GetInTouch from "app/components/warehouse/GetInTouch";
import Help from "app/components/warehouse/Help";
import TestimonialData from "app/components/warehouse/TestimonialData";
import { apiEndpoint } from "app/scripts/fetch";
import Metatag from "app/components/metaTag";
import SectionHeader from "app/components/common/SectionHeader";

export default function ItStaffService({ res }) {
  const { itStaff, trusted } = JSON.parse(res);

  const [modalScheduleCall, setModalScheduleCall] = useState(false);

  const header = [
    { label: "Home", link: "/" },
    { label: "Services", link: "/services" },
    { label: "IT Staff Augmentation" },
  ];

  const { asPath } = useRouter();
  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  return (
    <div>
      <Head>
        <title>{itStaff?.title ? itStaff?.title : `VLink — Services`}</title>
        <meta
          name="description"
          content={itStaff?.description || "Vlink Description"}
        />

        <meta
          property="og:title"
          content={itStaff?.title ? itStaff?.title : `Vlink — Services`}
        />
        <meta
          property="og:description"
          content={itStaff?.description || "Vlink Description"}
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />

        <Metatag
          content={apiEndpoint(itStaff?.hero.image?.data?.attributes?.url)}
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      <SectionHeader list={header} isBreadcrumb={true} />

      <HeroSection data={itStaff?.hero} isStaff={true} />
      <CertificateBar
        section={Object.keys(trusted)?.length ? trusted : null}
        isTrusted={true}
      />
      <WhyChoose data={itStaff?.choose} />
      <CaseStudySection data={itStaff?.C_study} />

      <Help help={itStaff?.hiring} isHiring={true} />
      <AugmentationProcess
        section={itStaff?.process}
        setModalCall={setModalScheduleCall}
      />

      <CloudModernization data={itStaff?.cloud} />

      <Expertise data={itStaff?.expert} />

      <ToolsTechnologies
        tech={itStaff?.tech}
        isStaff={true}
        isWeb={"Web development"}
      />

      <Industries industries={itStaff?.industries} isAug={true} />

      <Benefits benefits={itStaff?.benefits} />

      <TestimonialData customers={itStaff?.customer} />

      <DataResources resources={itStaff?.resouce} />

      {itStaff?.faqs && <Faq section={itStaff?.faqs} isFaq={true} />}

      <GetInTouch getintouch={itStaff?.Get_in_touch} isStaff={true} />

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
  const [itStaff, trusted] = await Promise.all([
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.IT_SERVICE_SERVICE,
    }),
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.TRUSTED_BY_STARTUPS,
    }),
  ]);
  const res = JSON.stringify({
    itStaff: itStaff?.data?.data?.attributes,
    trusted: trusted?.data?.data?.attributes,
  });
  return {
    props: { res },
  };
}
