import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReadMore from "./ReadMore";
import BlogImage from "app/components/Blog/BlogImage";
import Link from "next/link";
import { GetParagraph, createMarkup } from "app/scripts/utils";

const BlogCards = ({
  item,
  shadow = true,
  rounded = true,
  bgWhite = true,
  userIconSize = "lg",
}) => {
  const { image_url, date, h1, p, user, rol, link, time } = item;
  const userIcon = {
    lg: {
      src: `/icons/blog-card-avatar.svg`,
      width: 40,
      height: 40,
    },
    sm: {
      src: `/icons/blog-card-avatar-small.svg`,
      width: 17.5,
      height: 17.5,
    },
  };
  const [subtitule, setSubTitule] = useState();
  useEffect(() => {
    setSubTitule(GetParagraph(item?.attributes?.body));
  }, []);
  return (
    <article>
      <div className="mb-3">
        <div
          className={`text-left ${
            shadow ? "shadow-md sm:shadow-lg" : ""
          } h-full rounded-[10px] ${rounded ? "rounded-lg" : ""} ${
            bgWhite ? "bg-white" : ""
          }`}
        >
          <Link
            href={item?.id ? "/blog/" + item?.attributes?.slug : "#"}
            passHref={true}
          >
            <BlogImage
              image_url={`${item?.attributes?.section1?.image?.data?.attributes?.url}`}
              date={item?.attributes?.section?.post_date}
              rounded={rounded}
              alternativeText={`${item?.attributes?.section1?.image?.data?.attributes?.alternativeText}`}
            />
          </Link>

          <div className="p-6 space-y-3">
            <h6 className="md:text-xl font-medium mb-2 line-clamp-1 font-sans text-[18px]">
              <Link
                href={item?.id ? "/blog/" + item?.attributes?.slug : "#"}
                passHref={true}
                className="hover:text-[#4152ee]"
              >
                {item?.attributes?.h1_black}
              </Link>
            </h6>
            {subtitule && (
              <p
                className="line-clamp-2 text-[14px] font-sans"
                dangerouslySetInnerHTML={createMarkup(subtitule)}
              ></p>
            )}
            <div className="flex mb-2 items-center">
              <div className="  w-36 flex items-center">
                <Image
                  src={userIcon[userIconSize].src || userIcon.lg.src}
                  width={userIcon[userIconSize].width || userIcon.lg.width}
                  height={userIcon[userIconSize].height || userIcon.lg.height}
                  alt={
                    userIcon[userIconSize].alternativeText ||
                    userIcon[userIconSize].src
                  }
                />
                <span className="text-[#716F6F] text-[14px] font-sans font-[600] ml-2">
                  21 Views
                </span>
              </div>
              <div
                className={`p-1  w-full ${userIconSize == "sm" ? "ml-2" : ""}`}
              >
                <div className="flex justify-between w-full">
                  <p className="text-sm text-[#716F6F] font-semibold font-sans text-[14px]">
                    {item?.attributes?.section3?.title}
                  </p>
                  <p className=" mt-1 text-[#716F6F] font-medium font-sans text-[14px]">
                    {item?.attributes?.section1?.read_time}
                  </p>
                </div>
                <p className="text-[14px] text-[#716F6F] font-sans ">{rol}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              {/* <ReadMore
                  text={"Read More"}
                  textColor={"text-company"}
                  icon={"arrow-right-purple-icon.svg"}
                /> */}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCards;
