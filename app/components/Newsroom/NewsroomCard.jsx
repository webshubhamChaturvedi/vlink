import React, { useState, useEffect } from "react";
import ReadMore from "app/components/common/ReadMore";
import BlogImage from "app/components/Blog/BlogImage";
import Link from "next/link";
import {
  GetParagraph,
  createMarkup,
  //formatDate
} from "./../../scripts/utils";

const NewsroomCard = ({
  item,
  shadow = true,
  rounded = true,
  bgWhite = true,
  isPodCast = false,
  hideBottomBorder = false,
}) => {
  const [subtitule, setSubTitule] = useState();
  useEffect(() => {
    setSubTitule(GetParagraph(item?.attributes?.body_1));
  }, []);

  return (
    <div>
      <div
        className={`text-left ${
          shadow ? "shadow-md sm:shadow-lg" : ""
        } h-full ${rounded ? "rounded-lg" : ""} ${bgWhite ? "bg-white" : ""}`}
      >
        <Link
          href={`/resources/newsroom/${item?.attributes?.slug}` || "#"}
          passHref={true}
        >
          <BlogImage
            image_url={
              process.env.NEXT_PUBLIC_API_URL +
              item?.attributes?.image?.data?.attributes?.url
            }
            showDate={true}
            rounded={rounded}
          />
        </Link>

        <div className="py-4 md:min-h-[307px] padd">
          <h6
            className={`${
              !isPodCast
                ? "font-bold md:text-[1.25rem] text-[1rem] leading-7 text-[#2B2B2D] line-clamp-2 md:h-[56px]"
                : "font-bold md:text-[1.25rem] text-[1rem] leading-7 text-secondary"
            }`}
          >
            <Link
              href={`/resources/newsroom/${item?.attributes?.slug}` || "#"}
              passHref={true}
              className="hover:text-[#4152ee]"
            >
              {item?.attributes?.h || item?.attributes?.h1_black}
            </Link>
          </h6>
          <p
            className={` ${
              !isPodCast
                ? "my-3 pt-[0px_!important] font-[600] text-[14px] text-[#353535] "
                : "my-3 pt-[0px_!important] font-[400] text-[14px] text-[#353535]"
            }`}
          >
            {/* {formatDate(item?.attributes?.date)} */}
            {item?.attributes?.date}
          </p>
          {subtitule && (
            <p
              className="font-normal lg:text-base text-[14px] line-clamp-3 leading-6 md:h-[72px] text-[#353535]"
              dangerouslySetInnerHTML={createMarkup(subtitule)}
            ></p>
          )}
          <div className="mt-[1rem]">
            {/* <ReadMore
                text={"Read More"}
                textColor={"text-company"}
                icon={"arrow-right-purple-icon.svg"}
              /> */}
          </div>

          {!hideBottomBorder && (
            <div className="border-b-2 border-[#337294] mt-6"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsroomCard;
