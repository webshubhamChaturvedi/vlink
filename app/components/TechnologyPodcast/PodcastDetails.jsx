import React from "react";
import Link from "next/link";
import moment from "moment";
import CloudinaryImage from "../../../app/components/common/CloudinaryImage";

export default function PodcastDetails({ podcastDetail }) {
  const style = {
    episodesLists: {},
  };
  return (
    <ul className="mt-[35px]" style={style.episodesLists}>
      {podcastDetail?.map((data, index) => (
        <Link
          href={`/podcast/${data?.attributes?.slug}`}
          key={`podcast-${index}`}
        >
          <li
            className="flex md:flex-nowrap flex-wrap  mt-5 border-transparent hover:border-[#62207E] border-2  rounded-[10px] overflow-hidden hover:cursor-pointer"
            style={style.li}
          >
            <div className="lg:basis-2/12 md:basis-4/12 md:mb-0 mb-3 episodes-content-img flex items-start">
              <CloudinaryImage
                backendImgUrl={
                  data?.attributes?.playlist_data?.playlist_img?.data
                    ?.attributes?.url
                }
                alt={
                  data?.attributes?.playlist_data?.playlist_img?.data
                    ?.attributes?.alternativeText
                }
                className="w-[100%] md:max-h-[250px] w-full"
                type={"smallimg"}
              />
            </div>
            <div className="lg:basis-5/6 md:basis-5/6 episodes-content-block p-4">
              <h5 className="text-[#62207E] md:text-[19px] text-[16px] font-[700] md:tracking-[0.05em]">
                {data?.attributes?.playlist_data?.h1_purple}
              </h5>
              <div className="flex flex-wrap text-[14px] text-[#353535] font-[600] leading-[14px]">
                <label className="my-2">
                  {/* {data?.attributes?.playlist_data?.playlist_date} */}
                  {moment(
                    new Date(data?.attributes?.playlist_data?.playlist_date)
                  ).format("MMM D YYYY")}
                </label>
                <label className="my-2 border-l border-r border-[#353535] pl-5 pr-5 ml-5 mr-5">
                  {data?.attributes?.duration}
                </label>
                <label className="my-2 border-r border-[#353535] pr-5 mr-5">
                  <span className="text-[#62207E]">
                    {data?.attributes?.playlist_data?.host_purple} :
                  </span>
                  {data?.attributes?.playlist_data?.host_name_black}
                </label>
                <label className="my-2 block leading-6">
                  <span className="text-[#62207E]">
                    {data?.attributes?.playlist_data?.guest_purple} :
                  </span>
                  {data?.attributes?.playlist_data?.guest_name_black}
                </label>
              </div>
              <div className="text-[14px] leading-[22px] tracking-[0.05em] mt-3">
                <p>
                  {data?.attributes?.playlist_data?.playlist_body?.length > 250
                    ? `${data?.attributes?.playlist_data?.playlist_body.slice(
                        0,
                        250
                      )}`
                    : data?.attributes?.playlist_data?.playlist_body}
                  <span className="font-[600] text-[14px] ml-3 ">
                    Read More
                    <img
                      src="/img/podcast/arrow_right.png"
                      className="inline"
                      alt="Vlink right arrow"
                      width="7px"
                      height="4.63px"
                    />
                  </span>
                </p>
              </div>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
