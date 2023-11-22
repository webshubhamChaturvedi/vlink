import Head from "next/head";
import "styles/Home.module.css";
import SectionHeader from "app/components/common/SectionHeader";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import { useState } from "react";
import { apiEndpoint } from "app/scripts/fetch";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import { useRouter } from "next/router";
import SubscribeNewsletter from "app/components/common/SubscribeNewsletter";
import { createMarkup, getPages } from "app/scripts/utils";
import WatchWebinar from "app/components/common/WatchWebinar";
import WebinarIframeModal from "app/components/common/WebinarIframeModal";
import WebinarModal from "app/components/common/WebinarModal";
import RegisterWebinar from "app/components/common/RegisterWebinar";
import TechnologyStories from "app/components/TechnologyPodcast/TechnologyStories";
import { changeTimeZone } from "app/scripts/utils";
import { DateTime } from "luxon";
import CloudinaryImage from "../../app/components/common/CloudinaryImage";
import Image from "next/image";
import Metatag from "app/components/metaTag";

export default function WhitepaperDetail({
  whitepaperDetail,
  trusted,
  techStories,
}) {
  const luxonDate = DateTime.fromJSDate(new Date(whitepaperDetail.date));

  const { asPath } = useRouter();
  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const [showVideo, setShowVideo] = useState(false);
  const [modalWebinar, setModalWebinar] = useState(false);
  const header = [
    { label: "Home", link: "/" },
    { label: "Webinars", link: "/webinars" },
  ];

  var overrideZone = DateTime.fromISO(whitepaperDetail.date, {
    zone: "America/New_York",
  });
  overrideZone.zoneName;
  let showTime = overrideZone.toLocaleString(DateTime.DATETIME_HUGE);

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
          name="og:title"
          content={whitepaperDetail?.title ? whitepaperDetail?.title : `Vlink`}
        />

        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />

        <link rel="canonical" href={canonicalUrl} />
        <Metatag
          content={
            apiEndpoint(whitepaperDetail?.image?.data?.attributes?.url) ||
            "Vlink Image"
          }
        />
      </Head>
      <>
        <SectionHeader list={header} />
      </>
      <section
        className={`md:py-16 py-[30px] xl:px-[4rem] ${
          changeTimeZone(new Date(), "America/New_York") <
          changeTimeZone(new Date(whitepaperDetail?.date), "America/New_York")
            ? "bg-[#f1f4f9]"
            : ""
        }`}
        id="register-now"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {changeTimeZone(new Date(), "America/New_York") <
              changeTimeZone(
                new Date(whitepaperDetail?.date),
                "America/New_York"
              ) && (
              <div className="lg:col-span-4">
                <RegisterWebinar webinar={whitepaperDetail?.slug} />
              </div>
            )}
            <div className="lg:col-span-8">
              <div
                className={`${
                  changeTimeZone(new Date(), "America/New_York") <
                  changeTimeZone(
                    new Date(whitepaperDetail?.date),
                    "America/New_York"
                  )
                    ? "webinars-hosts-live"
                    : "drop-shadow-[0px_0px_15px_rgba(0,0,0,0.1)] bg-[#fff] px-[20px] py-4 webinars-hosts"
                }`}
              >
                {changeTimeZone(new Date(), "America/New_York") >
                  changeTimeZone(
                    new Date(whitepaperDetail?.date),
                    "America/New_York"
                  ) && (
                  <h1 className="text-[28px] text-[#62207E] font-[700] leading-[54px]  mb-[5px]">
                    Webinars <span className="text-[#030303]"> Summary</span>
                  </h1>
                )}

                <p
                  className={`${
                    changeTimeZone(new Date(), "America/New_York") >
                    changeTimeZone(
                      new Date(whitepaperDetail?.date),
                      "America/New_York"
                    )
                      ? "goouu text-[#7F7D7D] leading-[25px] font-[400] text-[14px] font-sans mb-6 uppercase"
                      : "gooff text-primary leading-[28px] font-[400] text-[18px] font-sans mb-6 uppercase"
                  }`}
                >
                  {/* {moment(whitepaperDetail?.date).format(
                    "dddd, MMMM Do, YYYY| hh:mm a"
                  )} ET */}
                  {showTime}
                </p>
                {changeTimeZone(new Date(), "America/New_York") <
                  changeTimeZone(
                    new Date(whitepaperDetail?.date),
                    "America/New_York"
                  ) && (
                  <div className="mb-4">
                    <h1 className="font-semibold text-[#000102bf] mt-2 mb-2 text-[29px] left-9">
                      {whitepaperDetail?.h1_black}:
                    </h1>
                    <h2 className="font-semibold text-[#173041] mb-2 text-[19px] leading-7">
                      {whitepaperDetail?.h1_purple}
                    </h2>
                  </div>
                )}
                {changeTimeZone(new Date(), "America/New_York") >
                  changeTimeZone(
                    new Date(whitepaperDetail?.date),
                    "America/New_York"
                  ) && (
                  <h2 className="text-[28px] text-[#62207E] font-[700] leading-[54px]  mb-[5px]">
                    <div
                      className="webinar-detail text-[#232323] leading-[25px] font-[400] text-[14px] font-sans mb-6 faq-ans"
                      dangerouslySetInnerHTML={createMarkup(
                        whitepaperDetail?.section?.body_1
                      )}
                    />
                  </h2>
                )}

                {changeTimeZone(new Date(), "America/New_York") <
                changeTimeZone(
                  new Date(whitepaperDetail?.date),
                  "America/New_York"
                ) ? (
                  <div>
                    <h4 className="text-[18px] text-[#455F70] font-sans font-[400]">
                      WEBINAR HOSTS & PANELISTS:
                    </h4>
                    <div className="py-[10px] grid xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 gap-5">
                      {whitepaperDetail?.host_participant?.map((val, index) => (
                        <div
                          className="xl:col-span-4 lg:col-span-6 md:col-span-6 text-center  py-[30px] px-[10px] "
                          key={`${index}-webinar`}
                        >
                          <CloudinaryImage
                            backendImgUrl={val?.image?.data?.attributes?.url}
                            alt={val?.image?.data?.attributes?.alternativeText}
                            className="w-[100px] h-[100px] rounded-[100%] mx-auto mb-3 object-cover"
                          />
                          <h4 className="text-[#383838] font-[600] text-[15px] font-sans mb-1">
                            {val?.name}
                          </h4>
                          <p className="text-[#0E70D1] font-[400] text-[12px] font-sans">
                            {val?.designation}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <figure>
                    <CloudinaryImage
                      backendImgUrl={
                        whitepaperDetail?.image?.data?.attributes?.url
                      }
                      alt={
                        whitepaperDetail?.image?.data?.attributes
                          ?.alternativeText
                      }
                    />
                  </figure>
                )}
                {changeTimeZone(new Date(), "America/New_York") <
                  changeTimeZone(
                    new Date(whitepaperDetail?.date),
                    "America/New_York"
                  ) && (
                  <h2 className="text-[28px] text-[#62207E] font-[700] leading-[54px]  mb-5px]">
                    <div
                      className="webinar-detail text-[#232323] leading-[25px] font-[400] text-[14px] font-sans mb-6 faq-ans"
                      dangerouslySetInnerHTML={createMarkup(
                        whitepaperDetail?.section?.body_1
                      )}
                    />
                  </h2>
                )}
                <div
                  className="webinar-detail text-[#232323] leading-[25px] font-[400] text-[14px] font-sans mb-6 faq-ans"
                  dangerouslySetInnerHTML={createMarkup(
                    whitepaperDetail?.section?.body_2
                  )}
                />
              </div>
            </div>
            {changeTimeZone(new Date(), "America/New_York") >
              changeTimeZone(
                new Date(whitepaperDetail?.date),
                "America/New_York"
              ) && (
              <div className="lg:col-span-4">
                <WatchWebinar video={whitepaperDetail?.watch_link} />
                <SubscribeNewsletter />
              </div>
            )}
          </div>
        </div>
      </section>
      {changeTimeZone(new Date(), "America/New_York") >
        changeTimeZone(
          new Date(whitepaperDetail?.date),
          "America/New_York"
        ) && (
        <>
          <section
            className="md:py-10 py-[30px] lg:px-[4rem]  bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dwac0ziol/image/upload/c_fill,g_faces,w_991/v1691420145/webinar_video_i_f001d5a7ea.png",
            }}
          >
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-6 flex flex-wrap items-center">
                  <div>
                    <h5 className="xl:text-4xl lg:text-[32px] text-[22px] text-[#002856] font-[700] mb-6">
                      To learn more, Watch the webinar video
                    </h5>
                    <button
                      onClick={() => {
                        setModalWebinar(true);
                      }}
                      className="bg-primary text-white flex justify-between items-center lg:px-6 px-3 py-[10px]"
                    >
                      <span className="mr-6 lg:text-[18px] text-[14px]">
                        Watch Webinars
                      </span>
                      <Image
                        alt="arrow-right-white"
                        srcSet="/icons/arrow-right-white-short.svg 1x, /icons/arrow-right-white-short.svg 2x"
                        src="/icons/arrow-right-white-short.svg"
                        width="25"
                        height="25"
                        decoding="async"
                        data-nimg="1"
                        loading="lazy"
                      />
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="bg-[#62207E] lg:p-8 p-4 rounded-[20px] ">
                    <img
                      src="/img/cort.svg"
                      alt="Vlink Cart"
                      className="mb-2 lg:w-[50px] lg:h-[50px] w-[30px] h-[30px]"
                    />
                    <p className="text-[#ffffff] xl:text-[22px] lg:text-[20px] text-[16px] mb-2">
                      {
                        "Over the years, VLink has successfully delivered numerous IT Projects across various challenging verticals and sectors. Here you can download the case study and look through and see VLink's potential for yourself."
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <GetInTouchForm />
        </>
      )}
      {changeTimeZone(new Date(), "America/New_York") <
        changeTimeZone(
          new Date(whitepaperDetail?.date),
          "America/New_York"
        ) && (
        <div className="pt-10">
          <TechnologyStories
            section_content={techStories}
            section_title={{
              h1_black:
                changeTimeZone(new Date(), "America/New_York") >
                changeTimeZone(
                  new Date(whitepaperDetail?.date),
                  "America/New_York"
                )
                  ? "Latest"
                  : "Watch Past Webinars",
              h1_purple:
                changeTimeZone(new Date(), "America/New_York") >
                changeTimeZone(
                  new Date(whitepaperDetail?.date),
                  "America/New_York"
                )
                  ? "Webinars"
                  : " On-demand",
              p:
                changeTimeZone(new Date(), "America/New_York") >
                changeTimeZone(
                  new Date(whitepaperDetail?.date),
                  "America/New_York"
                )
                  ? "Explore Topics & Thought Leadership from IT Experts at VLink"
                  : "",
            }}
            isDetail={true}
          />
        </div>
      )}
      {showVideo && (
        <WebinarIframeModal
          isOpen={showVideo}
          setIsOpen={setShowVideo}
          video={whitepaperDetail?.watch_link}
        />
      )}
      {modalWebinar && (
        <WebinarModal
          title={"Watch the webinar video"}
          isOpen={modalWebinar}
          setIsOpen={setModalWebinar}
          setOpenVideo={setShowVideo}
        />
      )}
    </div>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const [whitepaperDetail, trusted, techStories] = await Promise.all([
    REQUEST({
      method: "GET",
      url: `/api/webinar-details/?[populate][0]=image&[populate][1]=section&populate[2]=banner_btn.icon&populate[3]=host_participant&populate[4]=host_participant.image&filters[slug][$eq]=${slug}`,
    }),
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.TRUSTED_BY_STARTUPS,
    }),
    REQUEST({
      method: "GET",
      url: "/api/webinar-details?[populate][0]=image&pagination[page]=1&pagination[pageSize]=3",
    }),
  ]);
  return {
    props: {
      whitepaperDetail: whitepaperDetail?.data?.data[0]?.attributes,
      trusted: trusted?.data?.data?.attributes,
      techStories: techStories?.data?.data,
    },
  };
}

export async function getStaticPaths() {
  return await getPages(`/api/webinar-details`);
}
