import PopularArticles from "app/components/Blog/PopularArticles";
import TopBlog from "app/components/Blog/TopBlog";
import CertificateBar from "app/components/Home/CertificateBar";
import CloudinaryImage from "app/components/common/CloudinaryImage";
import Container from "app/components/common/Container";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import SectionHeader from "app/components/common/SectionHeader";
import SubscribeNewsletter from "app/components/common/SubscribeNewsletter";
import Metatag from "app/components/metaTag";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import { apiEndpoint } from "app/scripts/fetch";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ACTION_TYPE from "store/action-type";
const BlogList = dynamic(() => import("../../app/components/Blog/BlogList"));
const SearchBar = dynamic(() => import("../../app/components/Blog/SearchBar"));
const baseUrl = process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL;

export default function Blogs({ res }) {
  const { trusted, blogs, blog_category, single_blog } = JSON.parse(res);

  const blogref = useRef(null);
  const topref = useRef(null);

  const [dataBlog, setDataBlog] = useState([]);
  const dispatch = useDispatch();
  const blogCategories = useSelector((state) => state?.blogCategories);
  const [selectedItem, setSelectedItem] = useState(0);
  const selectedText = useSelector((state) => state?.selectedBlog?.category);
  useEffect(() => {
    if (!Object.keys(blogCategories)?.length)
      REQUEST({
        method: "GET",
        url: API_ENDPOINTS.BLOG_CATEGORIES,
        callback: (res) =>
          dispatch({
            type: ACTION_TYPE.BLOG_CATEGORIES,
            payload: {
              ...res?.data?.data,
            },
          }),
      });
  }, []);

  useEffect(() => {
    setDataBlog(blogs);
  }, []);

  const select = (e, item) => {
    setSelectedItem(item);
    dispatch({
      type: ACTION_TYPE.SELECTED_BLOG_CATEGORY,
      payload: { [e.target.name]: e.target.value },
    });
  };

  const router = useRouter();
  const { asPath } = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  const header = [{ label: "Home", link: "/" }, { label: "Blog" }];
  return (
    <div>
      <Head>
        <title>VLink — Blog</title>

        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />
        <Metatag
          content={apiEndpoint(
            single_blog?.list[0]?.image?.data?.attributes?.url
          )}
        />

        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <SectionHeader list={header} />

      <SearchBar blogref={blogref} add={topref} />

      <section id="top_banner">
        <TopBlog data={single_blog} />
      </section>

      <PopularArticles data={single_blog} />

      <section className="lg:pt-[55px] pt-5" ref={blogref}>
        <Container className="bg-blog-page-texture bg-blog-position bg-no-repeat">
          <div className="grid grid-cols-1 lg:mb-[50px] mb-5">
            <h6 className="text-[#232323] lg:text-[40px] text-[24px] font-[700]">
              Latest
            </h6>
          </div>
          <div className="grid grid-cols-12 lg:gap-10 gap-5">
            <BlogList sidebar={dataBlog} />
            <div className="lg:col-span-4 col-span-12 order-first lg:order-last">
              <div className="stickthis">
                <h6 className="text-[#232323] lg:text-[24px] font-[600] pb-5 border-b-[1px] border-b-[rgba(12,_33,_57,_0.31)] mb-5 text-[22]">
                  Categories
                </h6>
                <ul className="flex flex-wrap">
                  {/* <li
                    className={`${
                      selectedText =="all"
                        ? "bg-[#0050D5] text-[#fff]"
                        : "text-[#020202] bg-[#EEF4FF]"
                    } rounded-[50px] py-2 px-4 mr-2 mb-3 lg:text-[14px] font-[400] cursor-pointer text-[13px]`}
                  >
                    <button name="category" className="p-0" value="all">
                      All Category
                    </button>
                  </li> */}
                  {Object?.keys(blogCategories)?.length &&
                    Object?.keys(blogCategories)?.map((data, key) => (
                      <>
                        <li
                          key={key}
                          className={`${
                            selectedText ==
                            blogCategories[data]?.attributes?.slug
                              ? "bg-[#0050D5] text-[#fff]"
                              : "text-[#020202] bg-[#EEF4FF]"
                          } rounded-[50px] py-2 px-4 mr-2 mb-3 lg:text-[14px] font-[400] cursor-pointer text-[13px]`}
                        >
                          <button
                            name="category"
                            className="p-0"
                            onClick={(e) => select(e, data)}
                            value={blogCategories[data]?.attributes?.slug}
                          >
                            {blogCategories[data]?.attributes?.title}
                          </button>
                        </li>
                      </>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="md:py-[55px] py-[30px] ">
        <div>
          <div className="container bg-[#0050D5] rounded-[15px] mdpy-[55px] py-[30px]">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:mb-[55px] mb-[30px]">
                <h6 className="lg:text-[50px] md:text-[45px] text-[22px] text-[#fff] font-[600] font-sans text-center">
                  Subscribe to Newsletter
                </h6>
              </div>
              <div className="xl:col-span-6 md:col-span-6 col-span-12 md:mb-0 mb-[25px]">
                <CloudinaryImage
                  backendImgUrl={
                    "/uploads/Mar_Business_18_Converted_1_30f9ed0dc2.png"
                  }
                  className=" max-w-[400px] mx-auto"
                  alt={"Subscribe Newsletter"}
                  type="smallimg"
                />
              </div>
              <div className="SubscribeNewsletter xl:col-span-6 md:col-span-6 col-span-12">
                <SubscribeNewsletter />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mb-8">
        <CertificateBar isTrusted={true} section={trusted} />
      </div>
      <GetInTouchForm />
    </div>
  );
}

export async function getStaticProps() {
  const [trusted, blogs, blog_category, single_blog] = await Promise.all([
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.TRUSTED_BY_STARTUPS,
    }),
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.BLOGS,
    }),
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.BLOG_CATEGORIES,
    }),
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.SINGLE_BLOG,
    }),
  ]);

  const res = JSON.stringify({
    trusted: trusted?.data?.data?.attributes,
    blogs: blogs?.data?.data,
    blog_category: blog_category?.data?.data,
    single_blog: single_blog?.data?.data?.attributes,
  });
  return {
    props: { res },
  };
}
