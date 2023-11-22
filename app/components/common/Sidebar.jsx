import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import Articles from "./Sidebar/Articles";
import BlogAuthor from "./Sidebar/BlogAuthor";
import Offerings from "./Sidebar/Offerings";
import Requirement from "./Sidebar/Requirement";
import Share from "./Sidebar/Share";
import Subscribe from "./Sidebar/Subscribe";
import SubscribeNewsletter from "./SubscribeNewsletter";
import Link from "next/link";
import REQUEST from "app/helpers/http.service";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import CloudinaryImage from "./CloudinaryImage";
const jsonFileData = require("../../../public/cloudinaryLinks.json");

export default function Sidebar({
  topCollapse = false,
  isIsSticky = false,
  topUnclollapse = false,
  blogAuthor = false,
  sidebar,
  relatedData,
}) {
  const [width, setWidth] = useState(1024);
  const author = {
    img: "/img/blog-author-1.png",
    name: "Nitin Nijhawan, CDO",
    p: "Nitin’s passion is creating and driving transformation and innovation for clients. He leads the delivery of VLink’s technology solutions, primarily through developing the firm’s Centers of Excellence around the globe.",
  };

  const sidebarRef = useRef();

  return (
    // <section ref={sidebarRef} className="space-y-6 pb-4" style={{ top: "0px", maxWidth: width<=1024?"unset":"19pc"}} >
    <section ref={sidebarRef} className="pb-4 h-[100%]">
      <Requirement />

      <div className="stickthis">
        {!blogAuthor ? (
          <>
            <Articles section={sidebar?.articles} />
          </>
        ) : (
          <>
            <section className="related-blog bg-white bg-white rounded-[10px] drop-shadow-[0px_0px_15px_rgba(0,0,0,0.1)] relative w-[100%] h-[auto] mb-5   space-y-3 rounded-md shadow-xl">
              <div className="bg-lighterGray text-[#002856] p-4  ">
                <h6 className="text-[#002856] text-[20px] font-[400] font-sans">
                  Related Post
                </h6>
              </div>
              <div className="!mt-0 py-5 px-5 ">
                {relatedData && relatedData.length > 0
                  ? relatedData?.map((item, index) => (
                      <div key={index}>
                        <div className="text-center w-full mb-5">
                          <div className="bg-white">
                            <div className="flex justify-start">
                              <div className="basis-3/4 pl-0 lg:pl-2 md:pl-0 w-fit pr-3 ">
                                <div className="flex justify-between font-sans mb-[5px]">
                                  {item?.attributes?.section?.post_date && (
                                    <span className="inline-block bg-[#E7EBF6] text-[12px] text-[#0050D5] p-[5px] leading-[12px]">
                                      {item?.attributes?.section?.post_date}
                                    </span>
                                  )}
                                </div>
                                <Link
                                  href={
                                    item?.id
                                      ? "/blog/" + item?.attributes?.slug
                                      : "#"
                                  }
                                  passHref={true}
                                  className=" hover:text-[#4152ee] "
                                >
                                  <p className="text-left text-[#0C2139] text-[12px] cursor-pointer font-[600] line-clamp-post pt-0 hover:text-[#0050D5]">
                                    {item?.attributes?.h1_black}
                                  </p>
                                </Link>
                                <div className="flex justify-between font-sans mb-[5px]">
                                  <span className="inline-block text-[#5E5C5C] text-[10px] font-[600] ">
                                    {item?.attributes?.section1?.read_time}
                                  </span>
                                  <span className="inline-block text-[#5E5C5C] text-[10px] font-[600]">
                                    122 views
                                  </span>
                                </div>
                                {/* <div className="flex related_blog text-left my-[10px]">
                                  <Link
                                    href={
                                      item?.id
                                        ? "/blog/" + item?.attributes?.slug
                                        : "#"
                                    }
                                    passHref={true}
                                    className="inline-block text-[12px] text-[#62207E] p-[0px] leading-[12px] font-[600] underline underline-offset-1"
                                  >
                                    Read More
                                  </Link>
                                </div> */}
                              </div>
                              <div className="basis-1/3 block h-[90px] w-[100%] rounded-[5px] overflow-hidden">
                                {/* <Link
                                  href={
                                    item?.id
                                      ? "/blog/" + item?.attributes?.slug
                                      : "#"
                                  }
                                  passHref={true}
                                  className="block h-[90px] w-[100%] rounded-[5px] overflow-hidden"
                                > */}
                                <CloudinaryImage
                                  backendImgUrl={
                                    item?.attributes?.section1?.image?.data
                                      ?.attributes?.url
                                  }
                                  className="object-cover w-[100%] h-[100%] object-left"
                                  alt={
                                    item?.attributes?.section1?.image?.data
                                      ?.attributes?.alternativeText ||
                                    item?.attributes?.section1?.image?.data
                                      ?.attributes?.name
                                  }
                                  type="icon"
                                />
                                {/* </Link> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  : null}
              </div>
            </section>
          </>
        )}
      </div>
    </section>
  );
}
