import Head from "next/head";
import "styles/Home.module.css";
import SectionHeader from "app/components/common/SectionHeader";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import { useEffect, useState } from "react";
import { apiEndpoint } from "app/scripts/fetch";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import HeroSection from "app/components/common/HeroSection";
import CertificateBar from "app/components/Home/CertificateBar";
import WhitepaperCard from "app/components/common/whitepaperCard";
import { useRouter } from "next/router";
import DownloadWhitepaper from "app/components/common/DownloadWhitepaper";
import SubscribeNewsletter from "app/components/common/SubscribeNewsletter";
import { createMarkup, getPages } from "app/scripts/utils";
import ToLearnMore from "app/components/CaseStudies/Details/ToLearnMore";
import DownloadIcon from "app/components/icons/DownloadIcon";
import Metatag from "app/components/metaTag";

const leanData = {
  text: "To learn more, please download the Whitepaper",
  button: {
    icon: DownloadIcon,
    text: "Download Whitepaper",
    onClick: () => {
      alert("Download Whitepaper");
    },
  },
  violetTarget: {
    text: "Over the years, VLink has successfully delivered numerous IT Projects across various challenging verticals and sectors. Here you can download the case study and look through and see VLink's potential for yourself.",
    by: "",
    designation: "",
  },
};

export default function WhitepaperDetail({ whitepaperDetail, trusted }) {
  const { asPath } = useRouter();
  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  const header = [
    { label: "Home", link: "/" },
    { label: "Whitepapers", link: "/resources/whitepapers" },
  ];
  return (
    <div>
      <Head>
        <title>
          {whitepaperDetail?.title ? whitepaperDetail?.title : `VLink`}
        </title>
        <meta
          name="description"
          content={whitepaperDetail?.description || "Vlink Description"}
        />
        <meta
          name="og:description"
          content={whitepaperDetail?.description || "Vlink Description"}
        />
        <meta name="og:title" content={whitepaperDetail?.title || "Vlink"} />

        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />
        <Metatag
          content={apiEndpoint(
            whitepaperDetail?.banner_image?.data?.attributes?.url
          )}
        />

        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <SectionHeader list={header} />
      <HeroSection
        data={{ ...whitepaperDetail, image: whitepaperDetail?.banner_image }}
        isService={true}
      />
      <CertificateBar isTrusted={true} section={trusted} id={"download"} />
      <section className="white-details py-[55px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="drop-shadow-[0px_0px_15px_rgba(0,0,0,0.1)] bg-[#fff] px-[20px] pt-8 pb-[30px]">
                <h2 className="md:text-[28px] text-[22px] text-[#62207E] font-[700] md:leading-[40px] leading-[30px]  mb-[15px]">
                  Whitepaper <span className="text-[#030303]"> Summary</span>
                </h2>
                <div
                  className="text-[#232323] leading-[25px] font-[400] text-[14px] font-sans md:mb-12 mb-6 faq-ans"
                  dangerouslySetInnerHTML={createMarkup(
                    whitepaperDetail?.body_1
                  )}
                />
                <figure>
                  <img
                    src={apiEndpoint(
                      whitepaperDetail?.image?.data?.attributes?.url
                    )}
                    alt={
                      whitepaperDetail?.image?.data?.attributes
                        ?.alternativeText ||
                      whitepaperDetail?.image?.data?.attributes?.name
                    }
                  />
                </figure>
                <div
                  className="text-[20px] text-[#001E4F] font-[600] tracking-[-0.4px] mt-[50px] mb-8 text-[18px] font-sans faq-ans"
                  dangerouslySetInnerHTML={createMarkup(
                    whitepaperDetail?.body_2
                  )}
                />
              </div>
            </div>
            <div className="lg:col-span-4">
              <DownloadWhitepaper
                downloadLink={apiEndpoint(
                  whitepaperDetail?.pdf?.data?.attributes?.url
                )}
              />
              <SubscribeNewsletter />
            </div>
          </div>
        </div>
      </section>
      <ToLearnMore
        {...leanData}
        downloadLink={apiEndpoint(whitepaperDetail?.pdf?.data?.attributes?.url)}
      />
      <GetInTouchForm />
    </div>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const [whitepaperDetail, trusted] = await Promise.all([
    REQUEST({
      method: "GET",
      url: `/api/whitepaper-details/?[populate][0]=image&populate[1]=banner_btn.icon&populate[2]=banner_image&populate[3]=pdf&filters[slug][$eq]=${slug}`,
    }),
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.TRUSTED_BY_STARTUPS,
    }),
  ]);
  return {
    props: {
      whitepaperDetail: whitepaperDetail?.data?.data[0]?.attributes,
      trusted: trusted?.data?.data?.attributes,
    },
  };
}

export async function getStaticPaths() {
  return await getPages(`/api/whitepaper-details`);
}
