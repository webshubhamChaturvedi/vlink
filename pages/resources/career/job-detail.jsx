import Head from "next/head";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import SectionHeader from "app/components/common/SectionHeader";
import { useEffect, useState } from "react";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import SendResume from "app/components/Careers/SendResume";
import WeWork from "app/components/HireDevelopers/WeWork";
import VlinkerVoices from "app/components/Careers/VlinkersVoices";
import Employee from "app/components/Careers/Employee";
import AboutUs from "app/components/Careers/AboutUs";
import LifeAtVlink from "app/components/Careers/LifeAtVlink";
import { getLocaleCountry, JobdivaEmployers } from "app/scripts/utils";
import JobDetailComponent from "app/components/Careers/JobDetailComponent";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Metatag from "app/components/metaTag";

export default function JobDetail() {
  const { asPath } = useRouter();
  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const jobDetail = useSelector((state) => state?.jobDiva?.jobId);
  const [careersData, setCareersData] = useState();
  const [openings, setOpenings] = useState();
  const [locale, setLocale] = useState();
  const { push } = useRouter();
  const weWork = {
    id: 1,
    h1_black: "We Work With The ",
    h1_purple: "Best Companies  ",
    h2_black: "From Across The World",
    p: "We provide our valued customers with high-quality Python development services through our centers of excellence in major American tech and delivery centers worldwide.",
    button_text: "View Case Studies",
    button_link: null,
    section5_detail: [
      {
        id: 1,
        list: "98% Customer Satisfaction",
      },
      {
        id: 2,
        list: "150+ Fortune 500, Large & SMB clients",
      },
      {
        id: 3,
        list: "16+ Years of Service",
      },
    ],
    image: {
      data: [
        {
          id: 388,
          attributes: {
            name: "Home Page 6.svg",
            alternativeText: null,
            caption: null,
            width: 130,
            height: 99,
            formats: null,
            hash: "Home_Page_6_9cf1ab3b29",
            ext: ".svg",
            mime: "image/svg+xml",
            size: 25.34,
            url: "/uploads/Home_Page_6_9cf1ab3b29.svg",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2023-01-12T11:40:16.976Z",
            updatedAt: "2023-01-12T11:40:16.976Z",
          },
        },
        {
          id: 390,
          attributes: {
            name: "Schneider-Electric 4 (1).svg",
            alternativeText: null,
            caption: null,
            width: 165,
            height: 50,
            formats: null,
            hash: "Schneider_Electric_4_1_4bd6a44bbe",
            ext: ".svg",
            mime: "image/svg+xml",
            size: 22.74,
            url: "/uploads/Schneider_Electric_4_1_4bd6a44bbe.svg",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2023-01-12T11:40:17.633Z",
            updatedAt: "2023-01-12T11:40:17.633Z",
          },
        },
        {
          id: 389,
          attributes: {
            name: "Connecticare 3 (2).svg",
            alternativeText: null,
            caption: null,
            width: 197,
            height: 32,
            formats: null,
            hash: "Connecticare_3_2_2de6e6377f",
            ext: ".svg",
            mime: "image/svg+xml",
            size: 34.46,
            url: "/uploads/Connecticare_3_2_2de6e6377f.svg",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2023-01-12T11:40:17.632Z",
            updatedAt: "2023-01-12T11:40:17.632Z",
          },
        },
        {
          id: 391,
          attributes: {
            name: "Stanley-BD-logo 2 (2).svg",
            alternativeText: null,
            caption: null,
            width: 121,
            height: 65,
            formats: null,
            hash: "Stanley_BD_logo_2_2_c2082b0c57",
            ext: ".svg",
            mime: "image/svg+xml",
            size: 28.93,
            url: "/uploads/Stanley_BD_logo_2_2_c2082b0c57.svg",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2023-01-12T11:40:17.635Z",
            updatedAt: "2023-01-12T11:40:17.635Z",
          },
        },
        {
          id: 392,
          attributes: {
            name: "Deloitte (2).svg",
            alternativeText: null,
            caption: null,
            width: 174,
            height: 69,
            formats: null,
            hash: "Deloitte_2_8a926077c9",
            ext: ".svg",
            mime: "image/svg+xml",
            size: 14.91,
            url: "/uploads/Deloitte_2_8a926077c9.svg",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2023-01-12T11:40:17.660Z",
            updatedAt: "2023-01-12T11:40:17.660Z",
          },
        },
        {
          id: 393,
          attributes: {
            name: "carolina-crypto-logo-suite_logo-color-dark (2).svg",
            alternativeText: null,
            caption: null,
            width: 181,
            height: 64,
            formats: null,
            hash: "carolina_crypto_logo_suite_logo_color_dark_2_9cbc368602",
            ext: ".svg",
            mime: "image/svg+xml",
            size: 58.06,
            url: "/uploads/carolina_crypto_logo_suite_logo_color_dark_2_9cbc368602.svg",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2023-01-12T11:40:17.667Z",
            updatedAt: "2023-01-12T11:40:17.667Z",
          },
        },
        {
          id: 394,
          attributes: {
            name: "volvo_Eicher-3 4 (1).svg",
            alternativeText: null,
            caption: null,
            width: 160,
            height: 92,
            formats: null,
            hash: "volvo_Eicher_3_4_1_573752f351",
            ext: ".svg",
            mime: "image/svg+xml",
            size: 107.15,
            url: "/uploads/volvo_Eicher_3_4_1_573752f351.svg",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2023-01-12T11:40:17.801Z",
            updatedAt: "2023-01-12T11:40:17.801Z",
          },
        },
      ],
    },
  };

  const GetLocation = async () => {
    let data = await getLocaleCountry();
    setLocale(data.country);
  };
  const GetJobs = async (from, to) => {
    let data = await JobdivaEmployers(from, to);
    if (data?.outertag?.jobs?.job?.length > 0) {
      setOpenings(data?.outertag?.jobs?.job);
    }
    return data;
  };
  const header = [
    { label: "Home", link: "/" },
    { label: "Resources", link: "/" },
    { label: "Careers" },
  ];
  useEffect(() => {
    if (jobDetail === "") {
      push("/resources/career");
    }
  }, []);
  useEffect(() => {
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.CAREERS,
      callback: (res) => setCareersData({ ...res?.data?.data?.attributes }),
    });
  }, []);

  useEffect(() => {
    GetLocation();
  }, []);

  useEffect(() => {
    (async () => {
      await GetJobs(1, 3);
    })();
  }, []);
  if (careersData?.error) {
    return <div>{careersData?.error}</div>;
  }
  return (
    <div>
      <Head>
        <title>VLink — Careers</title>
        <meta
          name="og:description"
          content={careersData?.description || "Vlink Description"}
        />
        <meta name="og:title" content={careersData?.title || "Vlink Careers"} />

        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />

        <Metatag content={"https://www.vlinkinfo.com/img/logopng.png"} />

        <link rel="canonical" href={canonicalUrl} />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="use-credentials"
        />
      </Head>
      <SectionHeader list={header} />
      <JobDetailComponent section={jobDetail} opening={openings} />
      <div className="print-delete">
        <SendResume country={locale} />
        <WeWork section={weWork} />
        <VlinkerVoices data={careersData?.section4} />
        <Employee section={careersData?.section5} />
        <AboutUs section={careersData?.section6} />
        <LifeAtVlink />
        <GetInTouchForm />
      </div>
    </div>
  );
}
