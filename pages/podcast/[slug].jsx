import TechnologyStories from "app/components/TechnologyPodcast/TechnologyStories";
import AudioPlayer from "app/components/common/AudioPlayer/Audioplayer";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import SectionHeader from "app/components/common/SectionHeader";
import SubscribeNewsletter from "app/components/common/SubscribeNewsletter";
import Metatag from "app/components/metaTag";
import REQUEST from "app/helpers/http.service";
import { apiEndpoint } from "app/scripts/fetch";
import { getPages } from "app/scripts/utils";
import moment from "moment";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "styles/Home.module.css";

export default function PodcastDetail({ res }) {
  const { podcastDetail, episodes, techStories } = JSON.parse(res);
  const router = useRouter();
  const { asPath } = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const icons = [
    {
      id: 305,
      attributes: {
        name: "fb_logo.svg",
        alternativeText: `https://www.facebook.com/share.php?u=${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`,
        caption: null,
        width: 9,
        height: 19,
        formats: null,
        hash: "fb_logo_214e1b5097",
        ext: ".svg",
        mime: "image/svg+xml",
        size: 0.39,
        url: "/uploads/fb_logo_214e1b5097.svg",
        previewUrl: null,
        provider: "local",
        provider_metadata: null,
        createdAt: "2023-01-10T16:17:46.876Z",
        updatedAt: "2023-02-20T19:52:53.435Z",
      },
    },
    {
      id: 306,
      attributes: {
        name: "twitter_logo.svg",
        alternativeText: `https://twitter.com/share?url=${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`,
        caption: null,
        width: 17,
        height: 14,
        formats: null,
        hash: "twitter_logo_abcac7c307",
        ext: ".svg",
        mime: "image/svg+xml",
        size: 1.49,
        url: "/uploads/twitter_logo_abcac7c307.svg",
        previewUrl: null,
        provider: "local",
        provider_metadata: null,
        createdAt: "2023-01-10T16:17:46.882Z",
        updatedAt: "2023-02-20T19:53:22.848Z",
      },
    },
    {
      id: 307,
      attributes: {
        name: "insta_logo.svg",
        alternativeText: `https://www.instagram.com/sharer.php?u=${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`,
        caption: null,
        width: 20,
        height: 20,
        formats: null,
        hash: "insta_logo_bb74cf40cc",
        ext: ".svg",
        mime: "image/svg+xml",
        size: 14.32,
        url: "/uploads/insta_logo_bb74cf40cc.svg",
        previewUrl: null,
        provider: "local",
        provider_metadata: null,
        createdAt: "2023-01-10T16:17:47.022Z",
        updatedAt: "2023-02-20T19:53:55.414Z",
      },
    },
    {
      id: 304,
      attributes: {
        name: "ln_logo.svg",
        alternativeText: `https://linkedin.com/shareArticle?mini=true&url=${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`,
        caption: null,
        width: 19,
        height: 18,
        formats: null,
        hash: "ln_logo_9653274846",
        ext: ".svg",
        mime: "image/svg+xml",
        size: 0.77,
        url: "/uploads/ln_logo_9653274846.svg",
        previewUrl: null,
        provider: "local",
        provider_metadata: null,
        createdAt: "2023-01-10T16:17:46.875Z",
        updatedAt: "2023-02-20T19:54:23.686Z",
      },
    },
  ];
  const { slug } = router.query;
  const [loading, setLoading] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const [share, setShare] = useState(false);
  const [initialDuration, setInitialDuration] = useState();
  const podcastTitle = {
    h1_black: "Tech",
    h1_purple: "Webinars",
    p: "Explore Topics & Thought Leadership from IT Experts at VLink",
  };

  const header = [
    { label: "Home", link: "/" },
    { label: "Technology Podcast", link: "/podcast" },
  ];
  useEffect(() => {
    (async () => {
      const audio = document.getElementById("audio");
      await setInitialDuration(audio?.duration);
      await setShowPlayer(true);
    })();
  }, []);
  return (
    <div>
      <Head>
        <title>{podcastDetail?.title ? podcastDetail?.title : `VLink`}</title>
        <meta
          name="description"
          content={podcastDetail?.description || "Vlink Description"}
        />

        <meta
          property="og:title"
          content={podcastDetail?.title ? podcastDetail?.title : `Vlink`}
        />
        <meta
          property="og:description"
          content={podcastDetail?.description || "Vlink Description"}
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />

        <Metatag
          content={
            apiEndpoint(
              podcastDetail?.playlist_data?.playlist_img?.data?.attributes?.url
            ) || "Vlink Image"
          }
        />

        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <SectionHeader list={header} />
      <section className="font-['Open_Sans'] py-10">
        <div className="container mx-auto px-4">
          <div className="md:mb-[45px] mb-[25px]">
            <label className="md:text-[18px] text-[16px] font-[700] text-[#030303] md:leading-[27px] leading-[20px] mb-2 block">
              {podcastDetail?.h1_black}
            </label>
            <h1 className="font-[700] md:text-[40px] text-[22px] md:leading-[54px] leading-[30px] text-[#62207E] mb-3">
              {podcastDetail?.h1_purple}
            </h1>
            <p className="font-[400] text-[14px] leading-[19px] text-[#232323] tracking-[0.04em]">
              {podcastDetail?.p}
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-12 xl:gap-9">
            <div className="xl:col-span-9 xl:mb-0 mb-5">
              <div className="border border-[rgba(146,146,146,0.5)] rounded-[10px]">
                {!share ? (
                  <div
                    className={`md:flex rounded-[10px] overflow-hidden md:p-0  bg-[#0050D5]`}
                  >
                    <div className="lg:basis-4/12 md:basis-4/12 episodes-content-img  items-center min-h-full">
                      {/* <figure
                        className={`md:m-0 mx-auto w-[300px] md:rounded-[6px] rounded-[6px] h-[277.5px] bg-no-repeat   bg-cover`}
                        style={{
                          backgroundImage: `url('${apiEndpoint(
                            podcastDetail?.playlist_data?.playlist_img?.data
                              ?.attributes?.url
                          )}')`,
                        }}
                      ></figure> */}
                      <img
                        src={apiEndpoint(
                          podcastDetail?.playlist_data?.playlist_img?.data
                            ?.attributes?.url
                        )}
                        alt={
                          podcastDetail?.playlist_data?.playlist_img?.data
                            ?.attributes?.alternativeText ||
                          podcastDetail?.playlist_data?.playlist_img?.data
                            ?.attributes?.name
                        }
                        className="w-[100%] rounded-tl-[10px] md:rounded-bl-[10px] md:rounded-tr-[0px] rounded-tr-[10px]"
                      />
                    </div>
                    <div className="lg:basis-8/12 md:basis-8/12 episodes-content-block  p-5 w-full md:mt-[10px] md:m-0">
                      <h5 className="text-[#fff] md:text-[21px] text-[18px] font-[700] md:tracking-[0.05em]">
                        {podcastDetail?.playlist_data?.h1_purple}
                      </h5>
                      <div className="mt-6 flex flex-wrap items-end justify-end">
                        {showPlayer && (
                          <div className="w-full ">
                            <AudioPlayer
                              initialDuration={initialDuration}
                              song={apiEndpoint(
                                podcastDetail?.audio?.data?.attributes?.url
                              )}
                              share={share}
                              setShare={setShare}
                            />
                          </div>
                        )}
                      </div>
                      <div></div>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`md:flex rounded-[10px] overflow-hidden p-4 md:p-0  bg-[#0000008a]`}
                  >
                    <div className="lg:basis-4/12 md:basis-4/12 episodes-content-img  items-center min-h-full">
                      {/* <figure
                        className={`md:m-0 mx-auto w-[300px] md:rounded-[6px] blur rounded-[6px] h-[277.5px] bg-no-repeat   bg-cover`}
                        style={{
                          backgroundImage: `url('${apiEndpoint(
                            podcastDetail?.playlist_data?.playlist_img?.data
                              ?.attributes?.url
                          )}')`,
                        }}
                      ></figure> */}
                      <img
                        src={apiEndpoint(
                          podcastDetail?.playlist_data?.playlist_img?.data
                            ?.attributes?.url
                        )}
                        alt={
                          podcastDetail?.playlist_data?.playlist_img?.data
                            ?.attributes?.alternativeText ||
                          podcastDetail?.playlist_data?.playlist_img?.data
                            ?.attributes?.name
                        }
                        className="w-[100%] rounded-tl-[10px] md:rounded-bl-[10px] md:rounded-tr-[0px] rounded-tr-[10px]"
                      />
                    </div>
                    <div className="lg:basis-8/12 md:basis-8/12 episodes-content-block  md:p-5 w-full mt-[10px] md:m-0">
                      <div className="flex justify-end items-center cursor-pointer text-2xl  text-[#0000003d] mb-4">
                        <span
                          onClick={() => {
                            setShare(false);
                          }}
                        >
                          x
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <h5 className="text-[#fff] text-[16px] font-[700] tracking-[0.05em]">
                          Share this podcast:
                        </h5>
                        <div className="social-icon ">
                          <ul className="flex space-x-2 ...">
                            {icons.map((data, index) => (
                              <li
                                className="w-4 h-4 flex items-center justify-center brightness-[500]"
                                key={`faq-ans-img-${index}`}
                              >
                                <Link
                                  href={
                                    data?.attributes?.alternativeText
                                      ? data?.attributes?.alternativeText
                                      : ""
                                  }
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <img
                                    src={apiEndpoint(data?.attributes?.url)}
                                    alt={
                                      data?.attributes?.alternativeText ||
                                      data?.attributes?.name
                                    }
                                    srcSet=""
                                  />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex space-x-2 mt-10">
                        <span className="text-[#fff] text-lg">URL </span>
                        <input
                          className="w-full h-[30px] pl-2 text-[#000]"
                          value={`${process.env.NEXT_PUBLIC_BASE_URL}/podcast/${podcastDetail?.slug}`}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex flex-wrap text-[14px] text-[#353535] font-[600] leading-[14px]">
                    <label className="my-2">
                      {podcastDetail?.playlist_data?.playlist_date}
                    </label>
                    {podcastDetail?.duration && (
                      <label className="my-2 border-l border-r border-[#353535] pl-4 pr-4 ml-4 mr-4">
                        <span className="text-[#62207E]">Duration:</span>
                        {podcastDetail?.duration?.split(":")[0]} min
                        {podcastDetail?.duration?.split(":")[1]} sec
                      </label>
                    )}
                    <label className="my-2 border-r border-[#353535] pr-4 mr-4">
                      <span className="text-[#62207E]">
                        {podcastDetail?.playlist_data?.host_purple}:
                      </span>
                      {podcastDetail?.playlist_data?.host_name_black}
                    </label>
                    <label className="my-2">
                      <span className="text-[#62207E]">
                        {podcastDetail?.playlist_data?.guest_purple} :
                      </span>
                      {podcastDetail?.playlist_data?.guest_name_black}
                    </label>
                  </div>
                  <h5 className="mt-5 mb-3 md:text-[22px] text-[18px] text-[#2B2B2D] font-[700] md:leading-[33px] tracking-[0.05em]">
                    {podcastDetail?.playlist_data?.h1_purple}
                  </h5>
                  <p className="md:text-[16px] text-[14px] text-[#353535] font-[400] md:leading-[22px]  tracking-[0.05em] ">
                    {podcastDetail?.playlist_data?.playlist_body}
                  </p>
                  <h4 className="mt-10 md:text-[24px] text-[20px] text-[#2B2B2D] font-[700] md:leading-[33px]  mb-10 tracking-[0.05em] uppercase relative  after:absolute after:bottom-[-5px] after:left-0 after:bg-[#DADADA] after:h-[2px] after:w-[64px]">
                    More Episodes
                  </h4>
                  <ul className="mb-5 episodes-lists">
                    {episodes &&
                      episodes.length > 0 &&
                      episodes.map(
                        (
                          {
                            attributes: {
                              h1_purple,
                              p,
                              publishedAt,
                              playlist_data,
                              slug,
                            },
                          },
                          i
                        ) => (
                          <Link href={`/podcast/${slug}`} key={slug}>
                            <li className="cursor-pointer drop-shadow-[0px_0px_12px_rgba(0,0,0,0.1)] md:flex items-start mt-5 border-transparent hover:border-[#62207E] border-2  rounded-[10px] bg-[#fff]">
                              <div className="lg:basis-4/12 md:basis-4/12 episodes-content-img flex items-center min-h-full">
                                <img
                                  src={apiEndpoint(
                                    playlist_data?.playlist_img?.data
                                      ?.attributes?.url
                                  )}
                                  alt={
                                    playlist_data?.playlist_img?.data
                                      ?.attributes?.alternativeText ||
                                    playlist_data?.playlist_img?.data
                                      ?.attributes?.name
                                  }
                                  className="w-[100%] rounded-tl-[10px] md:rounded-bl-[10px] md:rounded-tr-[0px] rounded-tr-[10px]"
                                />
                              </div>
                              <div className="lg:basis-8/12 md:basis-8/12 episodes-content-block  p-4 w-full mt-[10px] md:m-0">
                                <h5 className="text-[#2B2B2D] md:text-[22px] text-[18px] font-[700] md:tracking-[0.05em] mb-2 ">
                                  <span className="text-[#62207E] mr-1">
                                    [{h1_purple}]
                                  </span>
                                  {p}
                                </h5>
                                <div className="flex flex-wrap text-[14px] text-[#353535] font-[600] leading-[14px]">
                                  <label className="my-2">
                                    {moment(new Date(publishedAt)).format(
                                      "MMMM DD, YYYY"
                                    )}
                                  </label>
                                  <label className="my-2 border-l border-r border-[#353535] pl-5 pr-5 ml-5 mr-5">
                                    {playlist_data?.link_show}
                                  </label>
                                  <label className="my-2 border-r border-[#353535] pr-5 mr-5">
                                    <span className="text-[#62207E]">
                                      {playlist_data?.host_purple} :
                                    </span>
                                    {playlist_data?.host_name_black}
                                  </label>
                                  <label className="my-2 leading-6 block">
                                    <span className="text-[#62207E]">
                                      {playlist_data?.guest_purple} :
                                    </span>
                                    {playlist_data?.guest_name_black}
                                  </label>
                                </div>
                                <p className="text-[14px] leading-[22px] tracking-[0.05em] mt-3">
                                  {playlist_data?.playlist_body}
                                </p>
                              </div>
                            </li>
                          </Link>
                        )
                      )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 xl:max-w-[100%] max-w-[600px] md:py-[0px] py-[30px]">
              <h5 className="text-[19px] text-[#2B2B2D] font-[700] leading-[33px]  mb-5 tracking-[0.05em]">
                Listen on these platforms
              </h5>
              <Link
                href="https://www.youtube.com/watch?v=IeqXGPDAnAU"
                target="_blank"
              >
                <img
                  src="/img/podcast/youtube.svg"
                  className="inline w-[110px] mr-4"
                  alt="Vlink Youtube"
                />
              </Link>
              <Link
                href="https://open.spotify.com/show/6XE8tFdFMtlQkg5bgaRB1d"
                target="_blank"
              >
                <img
                  src="/img/podcast/sportify.svg"
                  className="inline  w-[110px]"
                  alt="Vlink Sportify"
                />
              </Link>
              <div className="mt-[-20px]">
                <SubscribeNewsletter isDefaultChecked={true} />
              </div>
              <div className="mt-7">
                <h5 className="text-[16px] font-[600] leading-[22px] text-[#232323] mb-4">
                  Follow Me
                </h5>
                <div className="flex items-center gap-4">
                  <Link
                    href="https://www.linkedin.com/company/vlink-inc/mycompany/"
                    target="_blank"
                    className="flex items-center"
                  >
                    <span className="hidden">LinkedIn</span>
                    <img
                      src="/img/faq/in.svg"
                      alt="Vlink Linkedin"
                      className="h-[20px]"
                    />
                  </Link>
                  <Link
                    href="https://twitter.com/VLinkInc"
                    target="_blank"
                    className="mx-3 flex items-center  ml-4"
                  >
                    <img
                      src="/img/faq/twiter.svg"
                      alt="Vlink Twitter"
                      className="h-[20px]"
                    />
                  </Link>
                  <Link
                    href="https://www.facebook.com/vlinkinc"
                    target="_blank"
                    className="mx-3 flex items-center"
                  >
                    <img
                      src="/img/faq/facebook.svg"
                      alt="Vlink Facebook"
                      className="h-[20px]"
                    />
                  </Link>
                  <Link
                    href="https://www.instagram.com/vlinkinc"
                    target="_blank"
                    className="mx-3 flex items-center"
                  >
                    <img
                      src="/img/faq/insta.svg"
                      alt="Vlink Instagram"
                      className="h-[20px]"
                    />
                  </Link>
                  <Link
                    href="https://www.youtube.com/channel/UCIts-lcy_h9hhboDZnroLFg"
                    target="_blank"
                    className="mx-3 flex items-center"
                  >
                    <img
                      src="/img/youtube.svg"
                      alt="Vlink Youtube"
                      className="h-[20px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:pt-10">
          <TechnologyStories
            section_content={techStories}
            section_title={podcastTitle}
            isDetail={true}
          />
        </div>
        <GetInTouchForm />
      </section>
    </div>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const [podcastDetail, episodes, techStories] = await Promise.all([
    REQUEST({
      method: "GET",
      url: `/api/podcast-details?%5Bpopulate%5D%5B0%5D=playlist_data.playlist_img&populate%5B1%5D=section.image&populate%5B2%5D=audio&filters[slug][$eq]=${slug}`,
    }),
    REQUEST({
      method: "GET",
      url: `/api/podcast-details?%5Bpopulate%5D%5B0%5D=playlist_data.playlist_img&populate%5B1%5D=section.image&sort[0]=playlist_data.episode%3Adesc&filters[slug][$ne]=${slug}&pagination[page]=1&pagination[pageSize]=4`,
    }),
    REQUEST({
      method: "GET",
      url: "/api/webinar-details?[populate][0]=image&pagination[page]=1&pagination[pageSize]=3",
    }),
  ]);
  const res = JSON.stringify({
    podcastDetail: podcastDetail?.data?.data[0]?.attributes,
    episodes: episodes?.data?.data,
    techStories: techStories?.data?.data,
  });
  return {
    props: { res },
  };
}

export async function getStaticPaths() {
  return await getPages(`/api/podcast-details`);
}
