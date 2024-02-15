import Head from "next/head";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import SectionHeader from "app/components/common/SectionHeader";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import REQUEST from "app/helpers/http.service";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import { apiEndpoint } from "app/scripts/fetch";
import Image from "next/image";
import Metatag from "app/components/metaTag";

export default function CaseStudy({ aboutUsData }) {
  const { asPath } = useRouter();
  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const { slug } = router.query;
  const [data, setData] = useState({});
  const header = [
    { label: "About us", link: "/about-us" },
    { label: "Team", link: "#" },
  ];

  useEffect(() => {
    if (aboutUsData?.length) {
      const filterData = aboutUsData.find((val) => val.slug === slug);
      setData(filterData);
    }
  }, [aboutUsData]);
  return (
    <div>
      <Head>
        <title>{`VLink`}</title>

        <meta
          property="og:title"
          content={`${data?.name} - ${data?.designation}`}
        />
        <meta property="og:description" content={data?.description} />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />

        <Metatag content={"https://www.vlinkinfo.com/img/logopng.png"} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <SectionHeader list={header} />
      <section className="py-14 mt-10">
        <div className="container">
          <div className="md:grid lg:grid-cols-12 gap-6">
            <div className="col-span-9 lg:pr-12">
              <h1 className="xl:text-4xl lg:text-[32px] text-[28px] font-bold mb-4">
                Team
                <span className="text-company"> Details</span>
              </h1>
              <p className="text-[14px] text-[#232323] tracking-[0.04em] mb-12">
                {data?.intro}
              </p>
              <div className="md:flex">
                <div className="md:w-[25%]">
                  <figure>
                    <img
                      src={data?.image?.src}
                      className="w-full"
                      alt={data?.image?.alternativeText || data?.image?.name}
                    ></img>
                  </figure>
                  <p className="text-[#7F7D7D] tracking-[0.04em] my-4 text-[14px] font-[600]">
                    Contact Information
                  </p>
                  <div className="inline-flex flex-row items-center justify-center text-[14px]">
                    <Link
                      className="flex items-center mb-2 mr-3"
                      href={`mailto:${data?.email}`}
                    >
                      <img
                        src="/img/teams-detail/mail-icon.svg"
                        className="inline mr-2"
                        alt="Vlink mail-icon"
                      ></img>
                    </Link>
                    {data?.linkedin && !data?.linkedin.includes("#") && (
                      <Link
                        className="flex items-center break-all mb-2"
                        href={data?.linkedin}
                        target="_blank"
                      >
                        <img
                          src="/img/teams-detail/linkedin-icon.svg"
                          className="inline mr-2"
                          alt="Vlink linkedin"
                        />
                      </Link>
                    )}
                  </div>
                </div>
                <div className="md:ml-8 md:w-[75%] mt-10 md:mt-0">
                  <h2 className="text-[25px] text-[#353535] font-bold">
                    {data?.name}
                  </h2>
                  <h3 className="text-[18px] text-[#0050D5] font-semibold mt-2 mb-5">
                    {data?.designation}
                  </h3>
                  <p className="text-[#7F7D7D] text-[14px] mb-4 leading-[24px]">
                    {data?.para1}
                  </p>
                  <p className="text-[#7F7D7D] text-[14px] mb-4 leading-[24px]">
                    {data?.para2}
                  </p>
                  <p className="text-[#7F7D7D] text-[14px] mb-4 leading-[24px]">
                    {data?.para3}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-3 mt-10 md:mt-0">
              <div className="drop-shadow-[0px_0px_20px_rgba(0,0,0,0.1)] bg-[#fff] rounded-[4px]">
                <h3 className="bg-[rgba(0,40,86,0.04)] border-1 border-[#9CA2A8] px-6 py-3 text-[20px] text-[#002856]">
                  Our Team
                </h3>
                <div className="px-5 pb-7">
                  <ul>
                    {aboutUsData
                      ?.filter((value, index) => index < 7)
                      ?.map((val, index) => (
                        <Link
                          href={`/about-us/team/${val?.slug}`}
                          key={`team-${index}`}
                        >
                          <li className="flex mt-5">
                            <figure className="min-w-[55px]">
                              <img
                                src={val?.image?.src}
                                className="rounded-[4px] w-[50px] h-[50px]"
                                alt={
                                  val?.image?.alternativeText || val?.image?.src
                                }
                              ></img>
                            </figure>
                            <div className="ml-4">
                              <h4 className="text-[13px] text-[#0C2139] font-semibold">
                                {val?.name}
                              </h4>
                              <label className="text-[13px] text-[#777777] italic inline-block">
                                {val?.designation}
                              </label>
                            </div>
                          </li>
                        </Link>
                      ))}
                  </ul>
                </div>
              </div>
              <h4 className="my-6 text-[#232323] font-semibold">Follow Us</h4>
              <ul className="inline-flex">
                <li>
                  <Link
                    href={"https://www.linkedin.com/company/vlink-inc"}
                    target="_blank"
                    className="p-3 text-[20px] inline-block"
                  >
                    <img
                      className="w-[20px] h-[20px]"
                      width="20px"
                      height="20px"
                      alt="image"
                      type="icon"
                      src="https://res.cloudinary.com/dthpnue1d/image/upload/c_fill,g_faces,w_100/v1690804244/Shape_cf5d1a3d13.svg?_a=BAJFJtWI0"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://twitter.com/VLinkInc"}
                    target="_blank"
                    className="p-3 ml-2 text-[20px] inline-block"
                  >
                    <img
                      className="w-[20px] h-[20px]"
                      width="20px"
                      height="20px"
                      alt="image"
                      type="icon"
                      src="https://res.cloudinary.com/dthpnue1d/image/upload/c_fill,g_faces,w_991/v1690804247/Shape_1_18f8847b14.svg?_a=BAJFJtWI0"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://www.facebook.com/vlinkinc"}
                    target="_blank"
                    className="p-3 ml-2 text-[20px] inline-block"
                  >
                    <img
                      className="w-[20px] h-[20px]"
                      width="20px"
                      height="20px"
                      alt="image"
                      type="icon"
                      src="https://res.cloudinary.com/dthpnue1d/image/upload/c_fill,g_faces,w_991/v1690804249/Shape_2_eec75fb4a9.svg?_a=BAJFJtWI0"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://www.instagram.com/vlinkinc/"}
                    target="_blank"
                    className="p-3 ml-2 text-[20px] inline-block"
                  >
                    <img
                      className="w-[20px] h-[20px]"
                      width="20px"
                      height="20px"
                      alt="image"
                      type="icon"
                      src="https://res.cloudinary.com/dthpnue1d/image/upload/c_fill,g_faces,w_991/v1690804252/Shape_3_05a003ae83.svg?_a=BAJFJtWI0"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      "https://www.youtube.com/channel/UCIts-lcy_h9hhboDZnroLFg"
                    }
                    target="_blank"
                    className="p-3 ml-2 text-[20px] inline-block"
                  >
                    <img
                      className="w-[20px] h-[20px]"
                      width="20px"
                      height="20px"
                      alt="image"
                      type="icon"
                      src="https://res.cloudinary.com/dthpnue1d/image/upload/c_fill,g_faces,w_991/v1690804254/Vector_1_477597eb92.svg?_a=BAJFJtWI0"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <GetInTouchForm />
    </div>
  );
}

export async function getStaticProps() {
  const [aboutUsData] = await Promise.all([
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.ABOUT_US_PAGE,
    }),
  ]);
  const getMembers = (items) =>
    items?.map(
      ({
        name,
        designation,
        image,
        label,
        p,
        target,
        linkedin = "#",
        email = "#",
        href = "#",
        slug,
        para1,
        para2,
        para3,
        intro,
      }) => {
        return {
          name,
          designation,
          image: {
            src: apiEndpoint(image?.data?.attributes?.url) ?? "/",
            width: image?.data?.attributes?.width || 0,
            height: image?.data?.attributes?.height || 0,
          },
          label,
          linkedin: linkedin ?? "#",
          email: email ?? "#",
          p,
          target,
          slug,
          para1,
          para2,
          para3,
          intro,
        };
      }
    );

  const team = aboutUsData?.data?.data?.attributes?.our_team?.team_member
    ? getMembers(aboutUsData?.data?.data?.attributes?.our_team?.team_member)
    : [];
  const advisors = aboutUsData?.data?.data?.attributes?.our_advisors
    ?.advisors_details
    ? getMembers(
        aboutUsData?.data?.data?.attributes?.our_advisors?.advisors_details
      )
    : [];
  return {
    props: {
      aboutUsData: [...team, ...advisors],
    },
  };
}

export async function getStaticPaths() {
  const [aboutUsData] = await Promise.all([
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.ABOUT_US_PAGE,
    }),
  ]);
  const getMembers = (items) =>
    items?.map(
      ({
        name,
        designation,
        image,
        label,
        p,
        target,
        linkedin = "#",
        email = "#",
        href = "#",
        slug,
      }) => {
        return {
          name,
          designation,
          image: {
            src: apiEndpoint(image?.data?.attributes?.url) ?? "/",
            width: image?.data?.attributes?.width || 0,
            height: image?.data?.attributes?.height || 0,
          },
          label,
          linkedin: linkedin ?? "#",
          email: email ?? "#",
          p,
          target,
          slug: slug,
        };
      }
    );

  const team = aboutUsData?.data?.data?.attributes?.our_team?.team_member
    ? getMembers(aboutUsData?.data?.data?.attributes?.our_team?.team_member)
    : [];
  const advisors = aboutUsData?.data?.data?.attributes?.our_advisors
    ?.advisors_details
    ? getMembers(
        aboutUsData?.data?.data?.attributes?.our_advisors?.advisors_details
      )
    : [];
  const paths = [...team, ...advisors]?.map((c) => {
    return { params: { slug: c.slug } };
  });
  return {
    paths,
    fallback: false,
  };
}
