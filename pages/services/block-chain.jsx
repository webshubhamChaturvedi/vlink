import Container from "app/components/common/Container";
import Head from "next/head";
import SectionHeader from "app/components/common/SectionHeader";
import React, { useState } from "react";
import { useRouter } from "next/router";
import REQUEST from "app/helpers/http.service";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import HeroSection from "app/components/common/HeroSection";
import CertificateBar from "app/components/Home/CertificateBar";
import Industries from "app/components/Services/Industries";
import ProcessTimeline from "app/components/common/ProcessTimeline";
import ToolsTechnologies from "app/components/Services/ToolsTechnologies";
import Partner from "app/components/common/Partner";
import CloudModernization from "app/components/warehouse/CloudModernization";
import DataResources from "app/components/warehouse/DataResources";
import Faq from "app/components/Teams/Faq";
import GetInTouch from "app/components/warehouse/GetInTouch";
import BlockService from "app/components/Services/BlockService";
import Awards from "app/components/Services/Awards";
import GetInTouchModal from "app/components/common/GetInTouchModal";
import { apiEndpoint } from "app/scripts/fetch";
import Metatag from "app/components/metaTag";
import TimeLine from "app/components/common/TimeLine";

export default function BlockChain(blockChain) {
  const [modalScheduleCall, setModalScheduleCall] = useState(false);

  const header = [
    { label: "Home", link: "/" },
    { label: "Services", link: "/services" },
    { label: "Blockchain" },
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
          {blockChain?.blockChain?.seo?.title
            ? blockChain?.blockChain?.seo?.title
            : `VLink — Services`}
        </title>
        <meta
          name="description"
          content={
            blockChain?.blockChain?.seo?.description || "Vlink Description"
          }
        />
        <meta
          name="og:description"
          content={
            blockChain?.blockChain?.seo?.description || "Vlink Description"
          }
        />

        <meta
          property="og:title"
          content={
            blockChain?.blockChain?.seo?.title
              ? blockChain?.blockChain?.seo?.title
              : `Vlink — Services`
          }
        />
        <meta
          property="og:description"
          content={
            blockChain?.blockChain?.seo?.description || "Vlink Description"
          }
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />

        <Metatag
          content={apiEndpoint(
            blockChain?.blockChain?.seo?.test_image?.data?.attributes?.url ||
              blockChain?.blockChain?.crm_solution?.image?.data?.attributes?.url
          )}
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <SectionHeader list={header} isBreadcrumb={true} />
      <HeroSection
        data={blockChain?.blockChain?.Hero_section}
        isSupply={true}
        isBlock={true}
        setModalCall={setModalScheduleCall}
      />

      {Object.keys(blockChain?.trusted)?.length ? (
        <CertificateBar
          isTrusted={true}
          section={
            Object.keys(blockChain?.trusted)?.length
              ? blockChain?.trusted
              : null
          }
        />
      ) : (
        <></>
      )}

      <Industries industries={blockChain?.blockChain?.BlockChain} />

      <BlockService BlockService={blockChain?.blockChain?.service} />

      <Partner partner={blockChain?.blockChain?.Partner} isPartner={true} />

      <Awards awards={blockChain?.blockChain?.awards} />
      <TimeLine
        Process={blockChain?.blockChain?.Process}
        isBlockProcess={true}
        isColor={true}
      />

      <ToolsTechnologies
        tech={blockChain?.blockChain?.tech}
        isToolsTechnologies={true}
        isWeb={"Web"}
      />

      <CloudModernization
        data={blockChain?.blockChain?.Cloud}
        issupplyChain={true}
        isBlockChain={true}
      />

      <DataResources resources={blockChain?.blockChain?.resource} />
      {blockChain?.blockChain?.faqs && (
        <Faq
          section={blockChain?.blockChain?.faqs}
          isFaq={true}
          forCSS={true}
        />
      )}

      <GetInTouch
        getintouch={blockChain?.blockChain?.GetInTouch}
        isStaff={true}
      />

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
  const [blockChain, trusted] = await Promise.all([
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.BLOCK_CHAIN,
    }),
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.TRUSTED_BY_STARTUPS,
    }),
  ]);
  return {
    props: {
      blockChain: blockChain?.data?.data?.attributes,
      trusted: trusted?.data?.data?.attributes,
    },
  };
}
