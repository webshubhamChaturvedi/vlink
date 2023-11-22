import Head from "next/head";
import React, { useState } from "react";
import { useRouter } from "next/router";
import SectionHeader from "app/components/common/SectionHeader";
import CertificateBar from "app/components/Home/CertificateBar";
import REQUEST from "app/helpers/http.service";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import HeroSection from "app/components/common/HeroSection";
import GetInTouch from "app/components/warehouse/GetInTouch";
import GetInTouchModal from "app/components/common/GetInTouchModal";
import Faq from "app/components/Teams/Faq";
import DataResources from "app/components/warehouse/DataResources";
import SCMSolution from "app/components/common/SCMSolution";
import SCMPartner from "app/components/common/SCMPartner";
import BlockChain from "app/components/common/BlockChain";
import SCMTechnologies from "app/components/common/SCMTechnologies";
import ToolsTechnologies from "app/components/Services/ToolsTechnologies";
import CloudModernization from "app/components/warehouse/CloudModernization";
import Partner from "app/components/common/Partner";
import ProcessTimeline from "app/components/common/ProcessTimeline";
import { apiEndpoint } from "app/scripts/fetch";
import Metatag from "app/components/metaTag";

export default function SupplyChain({ supplyChain, trusted }) {
  const [modalScheduleCall, setModalScheduleCall] = useState(false);

  const header = [
    { label: "Home", link: "/" },
    { label: "Services", link: "/services" },
    { label: "Supplychain" },
  ];

  const { asPath } = useRouter();
  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  return (
    <>
      <Head>
        <title>
          {supplyChain?.title ? supplyChain?.title : `VLink — Services`}
        </title>
        <meta
          name="description"
          content={supplyChain?.description || "Vlink Description"}
        />
        <meta
          name="og:description"
          content={supplyChain?.description || "Vlink Description"}
        />

        <meta
          property="og:title"
          content={supplyChain?.title ? supplyChain?.title : `Vlink — Services`}
        />
        <meta
          property="og:description"
          content={supplyChain?.description || "Vlink Description"}
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />

        <Metatag
          content={apiEndpoint(
            supplyChain?.crm_solution?.image?.data?.attributes?.url
          )}
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      <SectionHeader list={header} isBreadcrumb={true} />

      <HeroSection
        data={supplyChain?.hero_section}
        isSupply={true}
        setModalCall={setModalScheduleCall}
      />

      {Object.keys(trusted)?.length ? (
        <CertificateBar
          isTrusted={true}
          section={Object.keys(trusted)?.length ? trusted : null}
        />
      ) : (
        <></>
      )}

      <BlockChain isBlockChain={true} blockchain={supplyChain.blockchain} />

      <SCMSolution crm={supplyChain?.crm_solution} />

      <ProcessTimeline Process={supplyChain?.Process} />

      <SCMPartner crmPartner={supplyChain?.chooseUs} />

      <SCMTechnologies SCMTechnologies={supplyChain.technologies} />

      <ToolsTechnologies
        tech={supplyChain?.tech_stack}
        isToolsTechnologies={true}
        isWeb={'Frame works'}
      />

      <Partner partner={supplyChain?.Partner} isPartnerSuply={true} />

      <CloudModernization data={supplyChain?.cloudBlock} issupplyChain={true} />

      <DataResources resources={supplyChain?.resouces} />

      {supplyChain?.Faqs && (
        <Faq section={supplyChain?.Faqs} isFaq={true} forCSS={true} />
      )}

      {/* {data?.faq?.h && <Faq section={data?.faq} />} */}

      <GetInTouch getintouch={supplyChain?.Get_in_touch} isStaff={true} />

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
  const [supplyChain, trusted, testimonials] = await Promise.all([
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.SUPPLY_CHAIN,
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
      supplyChain: supplyChain?.data?.data?.attributes,
      trusted: trusted?.data?.data?.attributes,
      testimonials: testimonials?.data?.data?.attributes,
    },
  };
}
