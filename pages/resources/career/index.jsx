import Head from "next/head";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import SectionHeader from "app/components/common/SectionHeader";
import { useEffect, useState } from "react";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import CertificateBar from "app/components/Home/CertificateBar";
import HeroSection from "app/components/common/HeroSection";
import FindYourDreamJob from "app/components/Careers/FindYourDreamJob";
import SendResume from "app/components/Careers/SendResume";
import WeWork from "app/components/HireDevelopers/WeWork";
import Employee from "app/components/Careers/Employee";
import AboutUs from "app/components/Careers/AboutUs";
import LifeAtVlink from "app/components/Careers/LifeAtVlink";
import { JobdivaEmployers, getLocaleCountry } from "app/scripts/utils";
import { useDispatch, useSelector } from "react-redux";
import ACTION_TYPE from "store/action-type";
import { useRouter } from "next/router";
import { apiEndpoint } from "app/scripts/fetch";
import Metatag from "app/components/metaTag";

export default function Industries({ res }) {
  const [award, setAwardData] = useState();
  const [loading, setLoading] = useState(false);
  const { asPath } = useRouter();
  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  const country = useSelector((state) => state?.country);
  const dispatch = useDispatch();
  const { careersData, jobs } = JSON.parse(res);

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
    if (!country) {
      let data = await getLocaleCountry();
      dispatch({
        type: ACTION_TYPE.GET_COUNTRY,
        payload: data.country,
      });
    }
  };

  const header = [
    { label: "Home", link: "/" },
    { label: "Resources", link: "/" },
    { label: "Careers" },
  ];

  useEffect(() => {
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.AWARDS,
      callback: (res) => setAwardData(res?.data?.data?.attributes),
    });
  }, []);
  useEffect(() => {
    (async () => {
      await GetLocation();
    })();
  }, []);

  if (careersData?.error) {
    return <div>{careersData?.error}</div>;
  }
  return (
    <div className="carrer_p">
      <Head>
        <title>{careersData?.title ? careersData?.title : `VLink`}</title>
        <meta
          name="description"
          content={careersData?.description || "Vlink Description"}
        />
        <meta
          name="og:description"
          content={careersData?.description || "Vlink Description"}
        />
        <meta name="og:title" content={careersData?.title || "Vlink"} />

        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />

        <link rel="canonical" href={canonicalUrl} />
        <meta
          name="description"
          content={careersData?.description || "Vlink Description"}
        />
        <Metatag
          content={apiEndpoint(
            careersData?.section1?.image?.data?.attributes?.url
          )}
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="use-credentials"
        />
      </Head>
      <SectionHeader list={header} />
      <HeroSection data={careersData?.section1} isService={true} />
      <CertificateBar section={award} />
      <FindYourDreamJob country={country} section={jobs} loading={loading} />
      <SendResume country={country} />
      <WeWork section={weWork} />
      <div className="md:mb-[55px] mb-[30px]">
        <Employee section={careersData?.section5} />
      </div>
      <AboutUs section={careersData?.section6} />
      <LifeAtVlink />
      <GetInTouchForm />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const [careersData, jobs] = await Promise.all([
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.CAREERS,
      }),
      JobdivaEmployers(1, 1000),
    ]);
    const res = JSON.stringify({
      careersData: careersData?.data?.data?.attributes,
      jobs: jobs?.outertag?.jobs?.job,
    });
    return {
      props: {
        res,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}
