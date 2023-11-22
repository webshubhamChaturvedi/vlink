import CertificateBar from "app/components/Home/CertificateBar";
import TechnologyStories from "app/components/TechnologyPodcast/TechnologyStories";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import HeroSection from "app/components/common/HeroSection";
import SectionHeader from "app/components/common/SectionHeader";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import { apiEndpoint } from "app/scripts/fetch";
import moment from "moment";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import "styles/Home.module.css";
import CloudinaryImage from "../../app/components/common/CloudinaryImage";
import Metatag from "app/components/metaTag";

const style = {
  episodesLists: {},
  li: {
    boxShadow: "0px 0px 58px rgba(0, 0, 0, 0.1)",
    borderRadius: "6px",
  },
  figure: {
    backgroundRepeat: "no-repeat",
    width: "213px",
    backgroundSize: "cover",
    height: "207px",
    borderRadius: "6px",
  },
};

export default function TechnologyPodcast({
  podcast,
  podcastDetail,
  trusted,
  newsData,
}) {
  const header = [
    { label: "Home", link: "/" },
    { label: "Technology Podcast" },
  ];
  const { push, asPath } = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` + (asPath === "/" ? "" : asPath)
  ).split("?")[0];
  return (
    <div>
      <Head>
        <title>{podcast?.title ? podcast?.title : `VLink`}</title>
        <meta
          name="description"
          content={podcast?.description || "Vlink Description"}
        />
        <meta
          property="og:title"
          content={podcast?.title ? podcast?.title : `Vlink`}
        />
        <meta
          property="og:description"
          content={podcast?.description || "Vlink Description"}
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />
        <Metatag
          content={apiEndpoint(
            podcastDetail[0]?.attributes?.playlist_data?.playlist_img?.data
              ?.attributes?.url
          )}
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="use-credentials"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <SectionHeader list={header} />
      <HeroSection data={podcast?.section1} isService={true} ishome={true} />
      <CertificateBar isTrusted={true} section={trusted} />
      <section className="font-sans md:py-[55px] py-[30px]">
        <div className=" mx-auto md:px-20 px-4">
          <div className="md:flex block flex-wrap justify-between">
            <h2 className="md:text-[36px] text-[22px] text-[#62207E] font-[700] md:leading-[54px] leading-[30px] mb-[5px] block">
              All <span className="text-[#030303]">Episodes</span>
            </h2>
            <div className="mb-[5px]">
              <h5 className="md:text-[22px] text-[18px] text-[#030303] font-[600] leading-[44px]  mb-[0px] md:inline-block block mr-6">
                Listen on these platforms
              </h5>
              <Link
                href="https://open.spotify.com/show/6XE8tFdFMtlQkg5bgaRB1d"
                target="_blank"
              >
                <img
                  src="/img/podcast/sportify.svg"
                  className="inline mr-6 w-[120px]"
                  alt="Vlink Sportify"
                />
              </Link>
              <Link
                href="https://www.youtube.com/watch?v=2Yoi5vj-16g&list=PLPmQQq35EZwPND05SrfBrOKFH0g3-zHOQ"
                target="_blank"
              >
                <img
                  src="/img/podcast/youtube.svg"
                  className="inline w-[120px]"
                  alt="Vlink Youtube"
                />
              </Link>
            </div>
          </div>
          <ul className="mt-[35px]" style={style.episodesLists}>
            {podcastDetail?.map((data, index) => (
              <li
                className="flex md:flex-nowrap flex-wrap  mt-5 border-transparent hover:border-[#62207E] border-2  
                rounded-[10px] overflow-hidden"
                style={style.li}
                key={`podcast-${index}`}
              >
                <div className="lg:basis-2/12 md:basis-4/12 md:mb-0 mb-3 episodes-content-img flex items-start">
                  <Link href={`/podcast/${data?.attributes?.slug}`}>
                    <CloudinaryImage
                      backendImgUrl={
                        data?.attributes?.playlist_data?.playlist_img?.data
                          ?.attributes?.url
                      }
                      alt={
                        data?.attributes?.playlist_data?.playlist_img?.data
                          ?.attributes?.alternativeText
                      }
                      className="w-[100%] md:max-h-[250px] w-full"
                      type={"smallimg"}
                    />
                  </Link>
                </div>
                <div className="lg:basis-5/6 md:basis-5/6 episodes-content-block p-4">
                  <h5 className="text-[#62207E] md:text-[19px] text-[16px] font-[700] md:tracking-[0.05em]">
                    <Link
                      href={`/podcast/${data?.attributes?.slug}`}
                      className="hover:text-[#4152ee]"
                    >
                      {data?.attributes?.playlist_data?.h1_purple}
                    </Link>
                  </h5>
                  <div className="flex flex-wrap text-[14px] text-[#353535] font-[600] leading-[14px]">
                    <label className="my-2">
                      {/* {data?.attributes?.playlist_data?.playlist_date} */}
                      {moment(
                        new Date(data?.attributes?.playlist_data?.playlist_date)
                      ).format("MMM D YYYY")}
                    </label>
                    <label className="my-2 border-l border-r border-[#353535] pl-5 pr-5 ml-5 mr-5">
                      {data?.attributes?.duration}
                    </label>
                    <label className="my-2 border-r border-[#353535] pr-5 mr-5">
                      <span className="text-[#62207E]">
                        {data?.attributes?.playlist_data?.host_purple} :
                      </span>
                      {data?.attributes?.playlist_data?.host_name_black}
                    </label>
                    <label className="my-2 block leading-6">
                      <span className="text-[#62207E]">
                        {data?.attributes?.playlist_data?.guest_purple} :
                      </span>
                      {data?.attributes?.playlist_data?.guest_name_black}
                    </label>
                  </div>
                  <div className="text-[14px] leading-[22px] tracking-[0.05em] mt-3">
                    <p>
                      {data?.attributes?.playlist_data?.playlist_body?.length >
                      250
                        ? `${data?.attributes?.playlist_data?.playlist_body.slice(
                            0,
                            250
                          )}`
                        : data?.attributes?.playlist_data?.playlist_body}
                      <span className="font-[600] text-[14px] ml-3 ">
                        Read More
                        <img
                          src="/img/podcast/arrow_right.png"
                          className="inline"
                          alt="Vlink right arrow"
                          width="7px"
                          height="4.63px"
                        />
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <TechnologyStories
        section_content={newsData}
        section_title={podcast?.section3}
        isDetail={false}
      />
      <GetInTouchForm />
    </div>
  );
}

export async function getStaticProps() {
  const [podcast, trusted, newsData] = await Promise.all([
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.TECHNOLOGY_PODCAST,
    }),
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.TRUSTED_BY_STARTUPS,
    }),
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.COMMON_NEWSROOM,
    }),
  ]);
  let page = 1;
  let limit = 20;
  let contentPages = [];
  let total = 0;
  do {
    const [res] = await Promise.all([
      REQUEST({
        method: "GET",
        url: `${API_ENDPOINTS.TECHNOLOGY_PODCAST_DETAIL}&pagination[page]=${page}&pagination[pageSize]=${limit}`,
      }),
    ]);
    contentPages = [...contentPages, ...res?.data?.data];
    if (res?.data?.meta?.pagination?.total) {
      total = res?.data?.meta?.pagination?.total;
      page = page + 1;
    } else break;
  } while (total > contentPages.length);

  return {
    props: {
      podcast: podcast?.data?.data?.attributes,
      podcastDetail: contentPages,
      trusted: trusted?.data?.data?.attributes,
      newsData: newsData?.data?.data,
    },
  };
}
