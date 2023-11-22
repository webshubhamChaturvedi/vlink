import Head from "next/head";
import "styles/Home.module.css";
import SectionHeader from "app/components/common/SectionHeader";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import { useEffect, useState } from "react";
import { apiEndpoint } from "app/scripts/fetch";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import FaqData from "app/components/AboutUs/FaqData";
import SubscribeNewsletter from "app/components/common/SubscribeNewsletter";
import { useRouter } from "next/router";
import Link from "next/link";
import CloudinaryImage from "../../app/components/common/CloudinaryImage";
import Metatag from "app/components/metaTag";

export default function Faq() {
  const { asPath } = useRouter();
  const [search, setSearch] = useState();
  const [faqData, setFaqData] = useState();
  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const filterData = () => {
    const temp = { ...faqData };
    if (search && temp?.section1) {
      temp.section1.ques_ans = [
        ...faqData.section1.ques_ans.filter((data) =>
          data?.q.toLowerCase().includes(search.toLowerCase())
        ),
      ];
      setFaqData({ ...temp });
    } else getData();
  };

  const getData = () => {
    let url = API_ENDPOINTS.FAQ;
    REQUEST({
      method: "GET",
      url: url,
      callback: (res) => setFaqData(res?.data?.data?.attributes),
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const header = [{ label: "Home", link: "/" }, { label: "FAQ's" }];

  return (
    <div>
      <Head>
        <title>{faqData?.title ? faqData?.title : `VLink`}</title>
        <meta
          name="description"
          content={faqData?.description || "Vlink Description"}
        />

        <meta
          property="og:title"
          content={faqData?.title ? faqData?.title : `Vlink`}
        />
        <meta
          property="og:description"
          content={faqData?.description || "Vlink Description"}
        />
        <Metatag content={`https://www.vlinkinfo.com/img/logopng.png`} />

        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />

        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <SectionHeader list={header} />
      <div className="faq py-12">
        <div className="container">
          <div className="grid grid-cols-3 gap-10">
            <div className="lg:col-span-2 col-span-3">
              <div className="columns mb-8">
                <h1 className="font-[700] color-[#030303] md:text-[40px] text-[22px] md:leading-[48px] leading-[30px]">
                  {faqData?.section1?.h1_black}
                  <span className="text-[#62207E]">
                    {faqData?.section1?.h1_purple}
                  </span>
                </h1>
                <p className="font-[400] color-[#232323] mt-5">
                  {faqData?.section1?.p}
                </p>
              </div>
              {faqData?.section1?.ques_ans?.map((data, index) => (
                <FaqData data={data} key={`faq-${index}`} />
              ))}
            </div>
            <div className="lg:col-span-1 md:col-span-2 col-span-3">
              <div className="search-bar flex rounded mb-10">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search Keyword"
                  className="bg-[#F9F9F9] border border-[#92929280] rounded-[4px] rounded-r-none text-[14px] font-[400] w-full h-12"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  type="text"
                  className="bg-[#62207E] text-[#FFFFFF] px-6 leading-[22px] !rounded-[4px] !rounded-l-none text-[14px] font-[600] h-12"
                  onClick={() => filterData()}
                >
                  Search
                </button>
              </div>
              <SubscribeNewsletter title={"Suscribe for Updates"} />
              <div className="social-icon mt-10">
                <h2 className="mb-4 font-sans font-[600] text-[16px]">
                  {faqData?.follow?.h4}
                </h2>
                <ul className="flex space-x-4 ...">
                  {faqData?.follow?.image?.data?.map((data, index) => (
                    <li
                      className="w-12 h-12 flex items-center justify-center"
                      key={`faq-ans-img-${index}`}
                    >
                      <Link
                        href={
                          data?.attributes?.alternativeText
                            ? data?.attributes?.alternativeText
                            : ""
                        }
                      >
                        {/* <img
                          src={apiEndpoint(data?.attributes?.url)}
                          alt={data?.attributes?.alternativeText || data?.attributes?.name}
                          srcSet=""
                        /> */}
                        <CloudinaryImage
                          backendImgUrl={data?.attributes?.url}
                          alt={data?.attributes?.alternativeText}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GetInTouchForm />
    </div>
  );
}

// export async function getStaticProps() {
//   const [faqData] = await Promise.all([
//     REQUEST({
//       method: "GET",
//       url: API_ENDPOINTS.FAQ,
//     }),
//   ]);
//   return {
//     props: { faqData: faqData?.data?.data?.attributes },
//   };
// }
