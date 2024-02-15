import Head from "next/head";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import SectionHeader from "app/components/common/SectionHeader";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import CertificateBar from "app/components/Home/CertificateBar";
import HeroSection from "app/components/common/HeroSection";
import Faq from "app/components/Teams/Faq";
import { createMarkup } from "app/scripts/utils";
import GridService from "app/components/Services/GridService";
import AnalyticsColItem from "app/components/Services/AnalyticsColItem";
import Tools from "app/components/Services/Tools";
import ExperiencedTeam from "app/components/Teams/ExperiencedTeam";
import { useRouter } from "next/router";
import Container from "app/components/common/Container";
import LeftIconList from "app/components/common/LeftIconList";
import { apiEndpoint } from "app/scripts/fetch";
import Offerings from "app/components/common/Sidebar/Offerings";
import LINK from "app/components/common/LINK";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CloudinaryImage from "../../app/components/common/CloudinaryImage";
import Metatag from "app/components/metaTag";
import TestimonialData from "app/components/warehouse/TestimonialData";

export default function DataAnalytics({
  dataAnalyticsData,
  offering,
  trusted,
  testimonials,
}) {
  const router = useRouter();
  const { asPath } = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  const header = [
    { label: "Home", link: "/" },
    { label: "Services", link: "/services" },
    { label: "Data Analytics", link: "/services/data-analytics" },
  ];
  if (dataAnalyticsData?.error) {
    return <div>{dataAnalyticsData?.error}</div>;
  }
  return (
    <div>
      <Head>
        <title>
          {dataAnalyticsData?.title
            ? dataAnalyticsData?.title
            : `VLink — Services`}
        </title>
        <meta
          name="description"
          content={dataAnalyticsData?.description || "Vlink Description"}
        />

        <meta
          property="og:title"
          content={
            dataAnalyticsData?.Seo?.metaTitle ||
            dataAnalyticsData?.title ||
            `Vlink — Services`
          }
        />
        <meta
          property="og:description"
          content={
            dataAnalyticsData?.Seo?.metaDescription ||
            dataAnalyticsData?.description ||
            "Vlink Description"
          }
        />
        <Metatag
          content={apiEndpoint(
            dataAnalyticsData?.Seo?.metaImage?.data?.attributes?.url ||
              dataAnalyticsData?.section1?.image?.data?.attributes?.url
          )}
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />

        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <SectionHeader list={header} />
      <HeroSection data={dataAnalyticsData?.section1} isService={true} />
      <CertificateBar isTrusted={true} section={trusted} />
      <>
        <div className="md:py-10 py-[55px]">
          <div className="container">
            <div className="grid lg:grid-cols-12 grid-cols-1">
              <div className="col-span-9 pr-0 lg:pr-[65px]">
                <h2 className="xl:text-[40px] lg:text-[32px] text-[28px] xl:leading-[62px] lg:leading-[42px] font-[700] text-[#222222] md:mb-5 mb-3">
                  {dataAnalyticsData?.section2?.title_black}
                  <span className="text-[#62207E] ml-2">
                    {dataAnalyticsData?.section2?.title_purple}
                  </span>
                </h2>
                <div
                  className="color-[#232323] text-[14px] font-[400] mb-3"
                  dangerouslySetInnerHTML={createMarkup(
                    dataAnalyticsData?.section2?.body
                  )}
                ></div>

                <div className="sm:grid md:grid-cols-12 items-center">
                  <div className="col-span-8 pt-4">
                    <GridService
                      cols={2}
                      item={dataAnalyticsData?.section3?.section3_detail}
                    />
                  </div>
                  <div className="col-span-4 pt-4 md:text-right">
                    <LINK
                      m_top={"0px"}
                      reflink={`${"/about-us/contact-us"}`}
                      py={"py-1"}
                      px={"px-3"}
                      FAIcon={faArrowRight}
                      bgColor={"#0050D5"}
                      textColor={"#fff"}
                      hoverBgColor={"#fff"}
                      HOVERTextColor={"#000"}
                      borderColor={"#0050D5"}
                    >
                      {dataAnalyticsData?.section2?.button_text}
                    </LINK>
                  </div>
                </div>
              </div>
              <div className="col-span-3 border-l border-gray pl-10 mt-10 lg:mt-0">
                <div className="relative pt-7 h-full">
                  {/* TODO populate offerings */}
                  <Offerings offering={offering} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="md:pb-20 md:pt-10 "> */}
        <ExperiencedTeam
          section={dataAnalyticsData?.section5}
          section_content={dataAnalyticsData?.section5?.list}
        />
        {/* </div> */}
        <div className="md:py-10 py-[55px] bg-[#0050D5] bg-[url('/img/dataAnalytics/wave1.png')] bg-[center_bottom_0rem] bg-[length:80%_80%] bg-no-repeat">
          <div className="container">
            <div className="grid grid-cols-2 gap-0">
              <div className="col-span-2 text-center mb-12">
                <h2 className="font-sans xl:text-[40px] lg:text-[32px] text-[28px] xl:leading-[62px] lg:leading-[42px] font-[700] text-[#fff]">
                  {dataAnalyticsData?.section6?.title}
                </h2>
              </div>
              {dataAnalyticsData?.section6?.section6_detail &&
                dataAnalyticsData?.section6?.section6_detail.map(
                  (item, index) => {
                    return (
                      <AnalyticsColItem item={item} index={index} key={index} />
                    );
                  }
                )}
            </div>
          </div>
        </div>
        <div className="md:py-20 py-[55px]">
          <div className="container">
            <div className="grid grid-cols-2 gap-7">
              <div className="col-span-2 text-center mb-5">
                <h6 className="font-sans xl:text-[40px] lg:text-[32px] text-[24px] xl:leading-[62px] lg:leading-[42px] font-[700] text-[#222222]">
                  <span className="text-[#62207E] mr-2">
                    {dataAnalyticsData?.section7?.h1_purple}
                  </span>
                  {dataAnalyticsData?.section7?.h1_black}
                </h6>
                <p className="font-sans md:text-[18px] text-[16px] font-[400] pt-4  text-[#353535]">
                  {dataAnalyticsData?.section7?.body}
                </p>
              </div>
              {dataAnalyticsData?.section8 &&
                dataAnalyticsData?.section8.map((item, index) => {
                  return <Tools item={item} key={index} index={index} />;
                })}
            </div>
          </div>
        </div>
      </>
      <Container className="md:pt-16 pt-[55px]">
        <div className="flex flex-col md:flex-row md:justify-around items-center lg:py-10">
          <div className="succesful-team md:basis-1/2">
            <h6 className="xl:text-4xl lg:text-[32px] text-[28px] xl:leading-[62px] lg:leading-[42px] font-bold text-left">
              {dataAnalyticsData?.section9?.h1_black + " "}
              <span className="text-company">
                {dataAnalyticsData?.section9?.h1_purple}
              </span>
            </h6>
            <div
              className=" text-left py-6 text-[#353535] leading-[32px]"
              dangerouslySetInnerHTML={createMarkup(
                dataAnalyticsData?.section9?.body
              )}
            ></div>
            <LeftIconList
              extraClassName="items-center md:p-3 mb-6"
              displayGrid={true}
              gridCols={2}
              list={dataAnalyticsData?.section9_content[0]?.section9_list}
              alt={dataAnalyticsData?.section9_content[0]?.section9_list}
              customIcon={"purple-dot-icon.svg"}
            />
          </div>
          <div className="relative md:basis-1/3 h-fit">
            <img
              className="z-10 absolute top-0 right-0 translate-x-1/6 -translate-y-12 md:block hidden"
              src="/img/OurDevelopersCircle.svg"
              alt="Vlink OurDevelopersCircle"
              width={450}
              height={350}
            />
            <div className="image-container">
              {dataAnalyticsData?.section9?.image?.data[0]?.attributes?.url && (
                <CloudinaryImage
                  backendImgUrl={
                    dataAnalyticsData?.section9?.image?.data[0]?.attributes
                      ?.url ?? "/"
                  }
                  alt={
                    dataAnalyticsData?.section9?.image?.data[0]?.attributes
                      ?.alternativeText
                  }
                  className=" relative z-20 image !w-full object-fill"
                  type="smallimg"
                />
              )}
            </div>
          </div>
        </div>
      </Container>
      <TestimonialData testimonials={testimonials} isNewTestimonial={true} />
      <Faq section={dataAnalyticsData?.section11} />
      <GetInTouchForm />
    </div>
  );
}

export async function getStaticProps() {
  const [dataAnalyticsData, offering, trusted, testimonials] =
    await Promise.all([
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.SERVICES_DATA_AND_ANALYTICS,
      }),
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.SERVICE_OFFERINGS,
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
      dataAnalyticsData: dataAnalyticsData?.data?.data?.attributes,
      offering: offering?.data?.data?.attributes?.service_offering,
      trusted: trusted?.data?.data?.attributes,
      testimonials: testimonials?.data?.data?.attributes,
    },
  };
}
