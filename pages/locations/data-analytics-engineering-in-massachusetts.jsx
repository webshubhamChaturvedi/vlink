import Head from "next/head";
import SuccessStories from "app/components/Home/SuccesStories";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import SectionHeader from "app/components/common/SectionHeader";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import CertificateBar from "app/components/Home/CertificateBar";
import HeroSection from "app/components/common/HeroSection";
import { createMarkup } from "app/scripts/utils";
import PartneringCard from "app/components/ItMassachusetss/PartneringCard";
import Advantage from "app/components/ItMassachusetss/Advantage";
import OurDevelopers from "app/components/Teams/OurDevelopers";
import Blogs from "app/components/Home/Blogs";
import { apiEndpoint } from "app/scripts/fetch";
import { useRouter } from "next/router";
import CloudinaryImage from "../../app/components/common/CloudinaryImage";
import Image from "next/image";
import Metatag from "app/components/metaTag";
import TestimonialData from "app/components/warehouse/TestimonialData";
export default function Massachusets({
  massachusetsData,
  trusted,
  testimonials,
  stories,
  blogData,
}) {
  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const blogTitle = {
    h1_black: "Digital Vlink",
    h1_purple: "Blog",
    p: "Explore Topics & Thought Leadership from IT Experts at VLink",
  };
  const header = [
    { label: "Home", link: "/" },
    {
      label: "Data Analytics Engineering in Massachusetts",
      link: "/locations/data-analytics-engineering-in-massachusetts",
    },
  ];

  if (massachusetsData?.error) {
    return <div>{massachusetsData?.error}</div>;
  }
  return (
    <div>
      <Head>
        <title>
          {massachusetsData?.title ? massachusetsData?.title : `VLink`}
        </title>
        <meta
          name="description"
          content={massachusetsData?.description || "Vlink Description"}
        />
        <meta
          name="og:description"
          content={massachusetsData?.description || "Vlink Description"}
        />
        <meta name="og:title" content={massachusetsData?.title || "Vlink"} />
        <Metatag
          content={apiEndpoint(
            massachusetsData?.section1?.image?.data?.attributes?.url
          )}
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <SectionHeader list={header} />
      <HeroSection data={massachusetsData?.section1} />
      <CertificateBar isTrusted={true} section={trusted} />

      <>
        <section className="font-sans py-[60px] lg:px-[4rem]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <figure>
                  <CloudinaryImage
                    backendImgUrl={
                      massachusetsData?.section2?.image?.data?.attributes?.url
                    }
                    alt={
                      massachusetsData?.section2?.image?.data?.attributes
                        ?.alternativeText
                    }
                  />
                </figure>
              </div>
              <div>
                <h5 className="font-[400] text-[20px] leading-[29px] text-[#353535]">
                  {massachusetsData?.section2?.title}
                  <span className="inline-block ml-4 bg-[#353535] w-[50px] h-[2px] align-middle"></span>
                </h5>
                <h2 className="font-[700] text-[35px] leading-[50px] text-[#62207E] tracking-[0.04em] my-5">
                  {massachusetsData?.section2?.h1_purple} <br />
                  <span className="text-[#000]">
                    {massachusetsData?.section2?.h1_black}
                  </span>
                </h2>
                <div
                  className="font-[400] text-[14px] leading-[24px] text-[#353535] tracking-[0.03em]"
                  dangerouslySetInnerHTML={createMarkup(
                    massachusetsData?.section2?.p
                  )}
                ></div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#F7FAFF] font-sans">
          <div className="container mx-auto px-4 md:ml-auto md:pl-4 md:mr-0 md:pr-0">
            <div className="md:flex">
              <div className="md:w-[68%] md:pr-10 py-10 md:pr-4">
                <h2 className="font-[700] text-[34px] leading-[46px] text-[#000] tracking-[0.04em] mb-10">
                  Partnering with an
                  <span className="text-[#62207E]">IT Staffing Agency</span> in
                  Massachusets?
                </h2>
                <div className="grid lg:grid-cols-2 gap-8">
                  {massachusetsData?.section3?.section3_content &&
                    massachusetsData?.section3?.section3_content.map(
                      (item, index) => {
                        return <PartneringCard key={index} item={item} />;
                      }
                    )}
                </div>
              </div>
              <div
                className={`w-[32%] bg-no-repeat  bg-cover bg-center hidden md:block`}
                style={{
                  backgroundImage: `url("https://res.cloudinary.com/dthpnue1d/image/upload/c_fill,g_faces,w_991/v1690806058/Microsoft_Teams_image_12_2201b5e48c.jpg")`,
                }}
              ></div>
            </div>
          </div>
        </section>
        <section className="font-sans py-[60px] lg:px-[4rem]">
          <div className="container mx-auto px-4">
            <h2 className="text-center font-[700] text-[34px] leading-[46px] text-[#000] tracking-[0.04em] mb-4">
              {massachusetsData?.section6?.h1_black + " "}
              <span className="text-[#62207E]">
                {massachusetsData?.section6?.h1_purple + " "}
              </span>
              {massachusetsData?.section6?.h1_black2}
            </h2>
            <p className="text-center font-[400] text-[16px] text-[#000]">
              {massachusetsData?.section6?.p}
            </p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-10">
              {massachusetsData?.section6?.section6_detail &&
                massachusetsData?.section6?.section6_detail?.map(
                  (item, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full bg-[#fff] mt-5 rounded-[10px] drop-shadow-[0px_0px_15px_rgba(0,80,213,0.08)]"
                      >
                        <figure>
                          <CloudinaryImage
                            backendImgUrl={item?.image?.data?.attributes?.url}
                            className="w-full"
                            alt={item?.image?.data?.attributes?.alternativeText}
                          />
                        </figure>
                        <div className="px-4 py-7">
                          <h5 className="font-[600] text-[24px] text-[#1D1D1D] mb-3">
                            {item?.h1_black}
                          </h5>
                          <p className="font-[400] text-[16px] text-[#5C5C5C] leading-[22px]">
                            {item?.p}
                          </p>
                        </div>
                      </div>
                    );
                  }
                )}
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-12 flex justify-center">
                <button
                  className="text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg bg-primary mt-10 hidden md:block"
                  type="button"
                >
                  <span className="flex items-center rounded-md text-base px-5 py-2.5">
                    <span className="mr-2 items-center">More Services</span>
                    <Image
                      alt="Vlink Arrow-right-white"
                      srcSet="/icons/arrow-right-white-short.svg 1x, /icons/arrow-right-white-short.svg 2x"
                      src="/icons/arrow-right-white-short.svg"
                      width="20"
                      height="16"
                      decoding="async"
                      data-nimg="1"
                      loading="lazy"
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="font-sans py-[60px]">
          <div className="container mx-auto pr-4 bg-[#F7FAFF]">
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4 ">
                <CloudinaryImage
                  backendImgUrl={
                    massachusetsData?.section4?.image?.data?.attributes?.url
                  }
                  alt={
                    massachusetsData?.section4?.image?.data?.attributes
                      ?.alternativeText
                  }
                  className="w-full"
                />
              </div>
              <div className="lg:col-span-8 pt-5">
                <h2 className="font-sans text-[35px] font-[700] text-[#222222] mb-4 leading-[42px]">
                  {massachusetsData?.section4?.h1_black + " "}
                  <span className="text-[#62207E]">
                    {massachusetsData?.section4?.h1_purple}
                  </span>
                </h2>
                {massachusetsData?.section4?.section4_content &&
                  massachusetsData?.section4?.section4_content.map(
                    (item, index) => {
                      return <Advantage key={index} item={item} />;
                    }
                  )}
              </div>
            </div>
          </div>
        </section>
        <section className="font-sans py-[60px] lg:px-[4rem]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              <div className="col-span-1 flex  flex-col gap-[15px]">
                <h6 className="flex items-center color-[#353535] font-[Roboto] text-[25px] font-[400]">
                  {massachusetsData?.section5?.title + " "}
                  <span className="bg-[#353535] h-[1px] w-[60px] inline-block ml-2"></span>
                </h6>
                <h2 className="font-sans text-[35px] font-[700] text-[#222222] leading-[42px]">
                  <span className="text-[#62207E] mb-[10px]">
                    {massachusetsData?.section5?.h1_purple}
                  </span>
                </h2>
                <h2 className="font-sans text-[40px] font-[700] text-[#222222] leading-[42px]">
                  {massachusetsData?.section5?.h1_black}
                </h2>
                <div
                  className="font-[Roboto] text-[16px] font-[400] text-[#353535] mb-3"
                  dangerouslySetInnerHTML={createMarkup(
                    massachusetsData?.section5?.p
                  )}
                ></div>
              </div>
              <div className="col-span-1">
                <CloudinaryImage
                  backendImgUrl={
                    massachusetsData?.section5?.image?.data?.attributes?.url
                  }
                  alt={
                    massachusetsData?.section5?.image?.data?.attributes
                      ?.alternativeText
                  }
                />
              </div>
            </div>
          </div>
        </section>
      </>

      <SuccessStories
        isService={true}
        // section_title={successStory?.Success}
        section_content={stories}
      />
      <OurDevelopers section={massachusetsData?.team_section8} />
      <TestimonialData testimonials={testimonials} isNewTestimonial={true} />
      <div className="pt-12">
        <Blogs section_title={blogTitle} homeBlog={blogData} />
      </div>
      <GetInTouchForm />
    </div>
  );
}

export async function getStaticProps() {
  const [massachusetsData, trusted, testimonials, stories, blogData] =
    await Promise.all([
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.MASSACHUSETS_DATA,
      }),
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.TRUSTED_BY_STARTUPS,
      }),
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.TESTIMONIALS,
      }),
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.SUCESS_STORIES,
      }),
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.COMMON_BLOGS,
      }),
    ]);
  return {
    props: {
      massachusetsData: massachusetsData?.data?.data?.attributes,
      trusted: trusted?.data?.data?.attributes,
      testimonials: testimonials?.data?.data?.attributes,
      stories: stories?.data?.data,
      blogData: blogData?.data?.data,
    },
  };
}
