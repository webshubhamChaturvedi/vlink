import Head from "next/head";
import "styles/Home.module.css";
import SectionHeader from "app/components/common/SectionHeader";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import { apiEndpoint } from "app/scripts/fetch";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import HeroSection from "app/components/common/HeroSection";
import CertificateBar from "app/components/Home/CertificateBar";
import { useRouter } from "next/router";
import SubscribeNewsletter from "app/components/common/SubscribeNewsletter";
import { GetParagraph, createMarkup, getPages } from "app/scripts/utils";
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

export default function NewsroomDetail({ res }) {
  const { asPath } = useRouter();
  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  const header = [
    { label: "Home", link: "/" },
    { label: "Newsroom", link: "/resources/newsroom" },
  ];
  const { newsroomDetail, trusted } = JSON.parse(res);
  return (
    <div>
      <Head>
        <title>{newsroomDetail?.title ? newsroomDetail?.title : `VLink`}</title>
        <meta
          name="description"
          content={newsroomDetail?.description || "Vlink Description"}
        />
        <meta
          name="og:description"
          content={newsroomDetail?.description || "Vlink Description"}
        />
        <meta name="og:title" content={newsroomDetail?.title || "Vlink"} />

        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />
        <Metatag content={`https://www.vlinkinfo.com/img/logopng.png`} />

        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <SectionHeader list={header} />
      <HeroSection data={newsroomDetail} isService={true} />
      <CertificateBar isTrusted={true} section={trusted} />
      <section className="py-[55px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="drop-shadow-[0px_0px_15px_rgba(0,0,0,0.1)] bg-[#fff] px-[20px] pt-4 pb-[20px]">
                <h2 className="text-[28px] text-[#62207E] font-[700] leading-[54px]  mb-[15px]">
                  Newsroom <span className="text-[#030303]"> Summary</span>
                </h2>
                <div
                  className="text-[#232323] leading-[25px] font-[400] text-[14px] font-sans mb-12 faq-ans"
                  dangerouslySetInnerHTML={createMarkup(newsroomDetail?.body_1)}
                />
                <figure>
                  <img
                    src={apiEndpoint(
                      newsroomDetail?.image?.data?.attributes?.url
                    )}
                    alt={
                      newsroomDetail?.image?.data?.attributes
                        ?.alternativeText ||
                      newsroomDetail?.image?.data?.attributes?.name
                    }
                  />
                </figure>
                <div
                  className="text-[#232323] leading-[25px] font-[400] text-[14px] font-sans mb-12 faq-ans"
                  dangerouslySetInnerHTML={createMarkup(newsroomDetail?.body_2)}
                />
              </div>
            </div>
            <div className="lg:col-span-4 subs_news">
              {/* <DownloadWhitepaper /> */}
              <SubscribeNewsletter />
            </div>
          </div>
        </div>
      </section>
      {/* <ToLearnMore {...leanData} isNewsRoom={true}/> */}
      <GetInTouchForm />
    </div>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const [newsroomDetail, trusted] = await Promise.all([
    REQUEST({
      method: "GET",
      url: `/api/newsroom-stories?[populate][0]=image&filters[slug][$eq]=${slug}`,
    }),
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.TRUSTED_BY_STARTUPS,
    }),
  ]);
  const res = JSON.stringify({
    newsroomDetail: newsroomDetail?.data?.data[0]?.attributes,
    trusted: trusted?.data?.data?.attributes,
  });
  return {
    props: { res },
  };
}

export async function getStaticPaths() {
  return await getPages(`/api/newsroom-stories`);
}
