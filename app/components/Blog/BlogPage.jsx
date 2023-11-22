import { useEffect, useRef, useState } from "react";
import ReplyForm from "app/components/BlogPost/ReplyForm";
import ShareSection from "app/components/BlogPost/ShareSection";
import Card from "app/components/common/Card";
import Container from "app/components/common/Container";
import Sidebar from "app/components/common/Sidebar";
import BlogImage from "./BlogImage";
import { createMarkup } from "./../../scripts/utils";
import SocialSticky from "./SocialSticky";
import AvatarSection from "./AvatarSection";
import { apiEndpoint } from "app/scripts/fetch";
import inSquareIcon from "./../../../public/icons/in-square-icon.png";

import InIcon from "./../../../public/icons/social/in-icon.svg";
import TwitterIcon from "./../../../public/icons/social/twitter-icon.svg";
import FacebookIcon from "./../../../public/icons/social/facebook-icon.svg";
import InstagramIcon from "./../../../public/icons/social/instagram-icon.svg";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage({ data, relatedPost }) {
  const { asPath, push } = useRouter();
  const ref = useRef();
  const tableRef = useRef();
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const list = [
    {
      image_url: "blog-card.svg",
      alt: "Blog Card",
      h1: "How to Hire Dedicated Developers",
      p: "Scaling a business is a mammoth task, especially when dealing with the need for the....",
      date: "2022/11/23",
      user: "By Shivisha Patel",
    },
    {
      image_url: "blog-card.svg",
      alt: "Blog Card",
      h1: "How to Hire Dedicated Developers",
      p: "Scaling a business is a mammoth task, especially when dealing with the need for the....",
      date: "2022/11/23",
      user: "By Shivisha Patel",
    },
    {
      image_url: "blog-card.svg",
      alt: "Blog Card",
      h1: "How to Hire Dedicated Developers",
      p: "Scaling a business is a mammoth task, especially when dealing with the need for the....",
      date: "2022/11/23",
      user: "By Shivisha Patel",
    },
    {
      image_url: "blog-card.svg",
      alt: "Blog Card",
      h1: "How to Hire Dedicated Developers",
      p: "Scaling a business is a mammoth task, especially when dealing with the need for the....",
      date: "2022/11/23",
      user: "By Shivisha Patel",
    },
  ];

  const comments = [
    {
      img: apiEndpoint(data?.section1?.avatar?.data?.attributes?.url),
      alt: "Avatar",
      referentIcon: data?.section1?.image?.data?.attributes?.url
        ? inSquareIcon.src
        : false,
      name: data?.section1?.title,
      subtitle: data?.section1?.body,
      date: data?.section1?.read_time,
      sufixTime: "read",
      linkedin_link: data?.section3?.linkedin_link,
    },
    {
      img: apiEndpoint(data?.section3?.avatar?.data?.attributes?.url),
      alt: "Avatar",
      referentIcon: data?.section1?.image?.data?.attributes?.url
        ? inSquareIcon.src
        : false,
      name: data?.section3?.title,
      subtitle: data?.section3?.body,
      date: data?.section1?.read_time,
      sufixTime: "read",
      linkedin_link: data?.section3?.linkedin_link,
    },
  ];

  const handleScroll = (blogContentRef, e) => {
    const good = tableRef.current;
    const el = good.getElementsByClassName("table_content");
    // Remove active class from other elements
    for (var i = 0; i < el.length; i++) {
      el[i].classList.remove("active-blog");
    }
    var element = document.getElementById(blogContentRef);
    e.target.classList.add("active-blog");
    element.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  useEffect(() => {
    if (typeof document !== "undefined") {
      const blogContentRef = ref.current;
      const array = blogContentRef.querySelectorAll(
        "h2, h3, h4, h5, h6, strong"
      );

      for (let heading of array) {
        heading.setAttribute("id", slugify(heading.innerText));
      }
    }
  }, []);

  // function createMarkup() {
  //   return {__html: 'First &middot; Second'};
  // }

  return (
    <div className="bg-blog-page-texture bg-blog-position bg-no-repeat">
      <Container className="md:py-[55px] py-[30px] relative">
        <div
          className={`sm:grid xl:grid-cols-12 ${
            data?.blog_details.length > 0 ? "gap-20" : "gap-10"
          } justify-center`}
        >
          {data?.tab_content && (
            <aside className="col-span-3">
              <div className="stickthis">
                <span className="block text-[20px] text-[#002856] font-[600]">
                  {data?.tab_content?.title}
                </span>
                <span className="block w-[100px] h-[1px] bg-[rgba(12,_33,_57,_0.31)] mt-1"></span>
                <ul className="pt-[20px_!important]" ref={tableRef}>
                  {data?.tab_content?.list.length > 0 &&
                    data?.tab_content?.list.map((item, index) => (
                      <li className="list-none mb-3" key={index}>
                        <Link
                          onClick={(e) => {
                            item?.link && handleScroll(item?.link, e);
                          }}
                          // href={`${item?.link}`}
                          href="javascript:void(0)"
                          className="table_content block text-[16px] underline text-[#535353] font-[400]"
                        >
                          {item?.text}
                        </Link>
                      </li>
                    ))}
                </ul>
                {data?.side_share && (
                  <>
                    <span className="block w-[100px] h-[0px] bg-[rgba(12,_33,_57,_0.31)] mt-10 mb-5"></span>
                    <span className="block text-[20px] text-[#002856] font-[600]">
                      {data?.side_share?.title}
                    </span>
                    <span className="block w-[100px] h-[1px]  bg-[rgba(12,_33,_57,_0.31)] mt-1"></span>
                    <ul className="pt-[20px_!important]">
                      {data?.side_share?.social_list.length > 0 &&
                        data?.side_share?.social_list.map((item, i) => (
                          <li className="inline-block" key={i}>
                            <Link
                              href={`${item.href}`}
                              target="_blank"
                              className="flex items-center justify-center cursor-pointer border-[1px] border-[#C9C9C9] w-[45px] h-[45px] rounded-[100%] leading-[45px] transation-custom hover:bg-[#0A66C2] hover:border-[#0A66C2] group"
                              style={{ marginLeft: "5px", marginRight: "5px" }}
                            >
                              <img
                                src={apiEndpoint(
                                  item?.icon?.data?.attributes?.url
                                )}
                                alt={item.alternativeText || item.name}
                                width="16"
                                height="16"
                                className="w-[auto] h-[16px] group-hover:invert"
                              />
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </>
                )}
              </div>
            </aside>
          )}
          {data?.old_subFrom == false ? (
            ""
          ) : (
            <article ref={ref} className={`flex xl:col-span-9`}>
              <div
                className="relative hidden md:block"
                style={{ minWidth: "70px" }}
              >
                <SocialSticky
                  data={[
                    {
                      src: InIcon.src,
                      alt: "linkedin",
                      href: `https://www.linkedin.com/company/vlink-inc`,
                    },
                    {
                      src: TwitterIcon.src,
                      alt: "twitter",
                      href: `https://twitter.com/VLinkInc`,
                    },
                    {
                      src: FacebookIcon.src,
                      alt: "facebook",
                      href: `https://www.facebook.com/vlinkinc`,
                    },
                    {
                      src: InstagramIcon.src,
                      alt: "instagram",
                      href: `https://www.instagram.com/vlinkinc/`,
                    },
                  ]}
                  datedata={data?.section?.post_date}
                />
              </div>

              <div id="card" className="md:ml-[1rem] ml-0 w-[100%]">
                <Card className="md:space-y-6 shadow-[0px_0px_15px_rgba(0,0,0,0.1)] p-[10px]">
                  <section className="blog-page webinars-hosts1 ">
                    <h1 className="xl:text-[38px] lg:text-[32px] text-[22px] text-[#002856] md:mb-6 mb-3 md:leading-[48px] leading-[30px] font-semibold font-sans">
                      {data?.h1_black}
                    </h1>
                    <div
                      dangerouslySetInnerHTML={createMarkup(data?.body)}
                      className="text-[#7F7D7D] md:tracking-[0.08em] font-sans"
                    ></div>
                    <div
                      id="title"
                      className="flex border-t border-b border-gray-300 font-sans mb-[10px_!important] py-[6px]"
                    >
                      <div className="flex items-center humb text-[#716F6F] text-[16px] font-[600]">
                        <Image
                          src="https://res.cloudinary.com/dwac0ziol/image/upload/c_fill,g_faces,w_20/carbon_view_8b9a9bb12d"
                          alt="eye icon"
                          className="mr-2"
                          height={18}
                          width={18}
                        />
                        201 Views
                      </div>
                      <div className="ml-auto humb">
                        <h6 className="reading-time text-[0.875rem] flex justify-end items-center text-[#716F6F] text-[16px] font-[400]">
                          {/* <img
                            src="/img/Clock-Circle.png"
                            alt="icon"
                            className="mr-2 w-[18px] h-[18px] object-cover"
                          /> */}
                          <Image
                            src="https://res.cloudinary.com/dwac0ziol/image/upload/c_fill,g_faces,w_20/Clock_Circle_66a6f2972b"
                            className="mr-2 w-[18px] h-[18px] object-cover"
                            height={18}
                            width={18}
                            alt="clock icon"
                          />
                          <span className="font-[600] mr-1">
                            {data?.section1?.read_time}
                          </span>
                        </h6>
                      </div>
                    </div>
                    <AvatarSection
                      classContainer="mb-1 font-sans"
                      data={comments[1]}
                      isAbout={true}
                    />
                    {data?.section1?.image?.data?.attributes?.url &&
                      data?.section1?.image?.data?.attributes?.url?.length >
                        0 && (
                        <BlogImage
                          dataAlt={
                            data?.section1?.image?.data?.attributes
                              ?.alternativeText
                          }
                          rounded={false}
                          showDate={true}
                          image_url={
                            process.env.NEXT_PUBLIC_API_URL +
                            data?.section1?.image?.data?.attributes?.url
                          }
                        />
                      )}
                    <div
                      dangerouslySetInnerHTML={createMarkup(
                        data?.section2?.body
                      )}
                      className="t-5 font-sans"
                    ></div>
                    {data.blog_faq !== null &&
                      data?.blog_faq?.blog_faqs?.length > 0 && (
                        <section className="blog-faqs">
                          <div className="text-center mb-[45px]">
                            <p className="text-[#212121] text-[24px] font-[600] font-sans mb-4">
                              FAQs
                            </p>
                            <h5 className="xl:text-4xl lg:text-[32px] text-[22px] font-bold">
                              Frequently Asked
                              <span className="text-company">Questions</span>
                            </h5>
                          </div>
                          <div className="xl:col-span-12 col-span-12">
                            <div className="bg-white rounded-[10px_!important] drop-shadow-[0px_0px_15px_rgba(0,0,0,0.1)]">
                              {data?.blog_faq?.blog_faqs?.map((item, key) => (
                                <div
                                  key={key}
                                  className="border-[rgba(0,0,0,.1)] border-b-[1px]"
                                >
                                  <div className={`open=${open === key}`}>
                                    <div
                                      onClick={() => handleOpen(key)}
                                      className={`faq-question`}
                                    >
                                      {item.question}
                                    </div>
                                    <div
                                      className="faq-answer"
                                      dangerouslySetInnerHTML={createMarkup(
                                        item.answer
                                      )}
                                    ></div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </section>
                      )}
                  </section>
                </Card>
              </div>
            </article>
          )}

          {data?.blog_details.length > 0 && (
            <article className="col-span-7">
              {data?.blog_details.map((item, key) => (
                <>
                  <div ref={ref} className="new_blog_detail" key={key}>
                    <ReactMarkdown
                      className="font-sans"
                      source={item?.text_detail}
                      transformImageUri={(uri) =>
                        uri.startsWith("http")
                          ? uri
                          : `${process.env.NEXT_PUBLIC_API_URL}${uri}`
                      }
                    >
                      {item?.text_detail}
                    </ReactMarkdown>
                    <div
                      ref={ref}
                      dangerouslySetInnerHTML={createMarkup(item?.blog_data)}
                      className="font-sans"
                    ></div>

                    {data.blog_faq !== null &&
                      data?.blog_faq?.blog_faqs?.length > 0 && (
                        <section className="blog-faqs">
                          <div className="relative mb-[45px]">
                            <span className="text-[110px] font-[800] gradient_text block w-[100%] leading-[100px]">
                              FAQs
                            </span>
                            <h5 className="flex w-[100%] font-bold absolute bottom-[0px] left-[50%] trans mb-[0px_!important]">
                              Frequently Asked Questions
                            </h5>
                          </div>
                          <div className="xl:col-span-12 col-span-12">
                            <div className="bg-white rounded-[10px_!important] drop-shadow-[0px_0px_15px_rgba(0,0,0,0.1)]">
                              {data?.blog_faq?.blog_faqs?.map((item, key) => (
                                <div
                                  key={key}
                                  className="border-[rgba(0,0,0,.1)] border-b-[1px]"
                                >
                                  <div className={`open=${open === key}`}>
                                    <div
                                      onClick={() => handleOpen(key)}
                                      className={`faq-question`}
                                    >
                                      {item.question}
                                    </div>
                                    <div
                                      className="faq-answer bg-[#F7FAFF]"
                                      dangerouslySetInnerHTML={createMarkup(
                                        item.answer
                                      )}
                                    ></div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </section>
                      )}
                  </div>
                </>
              ))}
            </article>
          )}

          {data?.ads_block.length > 0 && (
            <aside className="col-span-2">
              {data?.ads_block?.map((items, key) => (
                <div key={key} className="stickthis">
                  <img
                    src={apiEndpoint(items?.image?.data?.attributes?.url)}
                    alt=""
                  />
                  <p>
                    <a href={items?.link} className="inline-block">
                      {items?.title}
                    </a>
                  </p>
                </div>
              ))}
            </aside>
          )}

          {data?.old_subFrom == false ? (
            ""
          ) : (
            <div className="col-span-3 relative md:pl-20 lg:pl-0 xl:max-w-[100%] max-w-[600px] mx-auto">
              <Sidebar
                isIsSticky={true}
                topCollapse={196}
                topUnclollapse={2295}
                blogAuthor={true}
                relatedData={relatedPost}
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
