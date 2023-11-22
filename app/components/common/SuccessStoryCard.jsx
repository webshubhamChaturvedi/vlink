import Image from "next/image";
import ReadMore from "./ReadMore";
import { useState } from "react";
import ModalDownload from "./ModalDownload";
import CloudinaryImage from "../common/CloudinaryImage";
import Link from "next/link";

export default function SuccessStoryCard({
  item,
  slug,
  showDownload,
  Download_link,
}) {
  const [modalDownload, setModalDownload] = useState(false);

  const image_url =
    process.env.NEXT_PUBLIC_API_URL + item?.image?.data?.attributes?.url;

  return (
    <div className="group transation-custom flex flex-col border border-lightGray shadow-xl w-full h-full bg-white my-4 md:my-0 drop-shadow-[0px_0px_15px_rgba(0,80,213,0.08)] overflow-hidden">
      <div className="relative w-full h-[200px] overflow-hidden sucessstory">
        <Link href={`/case-study/${slug}`} className=" block h-full">
          <CloudinaryImage
            backendImgUrl={item?.image?.data?.attributes?.url ?? "/"}
            className="inline-block transation-custom9 group-hover:scale-125 object-cover w-full h-[200px]"
            alt={item?.image?.data?.attributes?.alternativeText}
            type="smallimg"
          />
        </Link>
      </div>

      <div className="px-3 py-5 text-center md:text-left flex flex-wrap flex-col gap-4 justify-between">
        <h6 className="min-h-[50px] font-sans font-[600] text-[16px] line-clamp-2 hover:text-[#4152ee] relative">
          <Link href={`/case-study/${slug}`} className="hover:text-[#4152ee]">
            {item?.h1 ||
              `${item?.attributes?.section?.h1_black} ${item?.attributes?.section?.h1_purple}`}
          </Link>
        </h6>
        <div className="flex  justify-between items-center">
          <div className="flex-column items-center card-story w-1/3 p-3">
            <p className="text-storiesText text-base text-center  font-semibold pb-4 ">
              {item?.text1}
            </p>
            <div className="mx-auto w-fit">
              {item?.icon?.data?.attributes?.url ? (
                <CloudinaryImage
                  backendImgUrl={item?.icon?.data?.attributes?.url}
                  className=" h-10 w-10"
                  alt={item?.icon?.data?.attributes?.alternativeText}
                  type="icon"
                />
              ) : (
                <Image
                  alt={
                    item?.icon?.data?.attributes?.alternativeText ||
                    "Mobileicon"
                  }
                  width={36}
                  height={36}
                  src={"/icons/pad-movil.svg"}
                />
              )}
            </div>
          </div>
          <div className="flex-column items-center justify-center card-story w-1/3 p-3">
            <p className="text-storiesText text-base  text-center font-semibold pb-3 ">
              {item?.text2}
            </p>
            <p className="text-storiesText text-base text-center  font-semibold ">
              {item?.no}
            </p>
            <p className="text-storiesText text-sm text-center  font-semibold ">
              {item?.text_month}
            </p>
          </div>
          <div className="flex-column justify-center items-center card-story w-1/3 p-3">
            <p className="text-storiesText text-base text-center  font-semibold pb-3 ">
              {item?.text3}
            </p>
            <p className="text-storiesText text-base text-center  font-semibold ">
              {item?.size}
            </p>
            <p className="text-storiesText text-sm text-center  font-semibold ">
              {item?.member}
            </p>
          </div>
        </div>
        <p className=" text-justify font-sans text-[#737272] text-[14px] font-[400] line-clamp-3">
          {item?.p}
        </p>
        <div className="flex justify-between align-center mt-3">
          {/* <ReadMore
            text={item?.label || "Read More"}
            textColor={"text-company"}
            icon={"arrow-right-purple-icon.svg"}
            link={`/case-study/${slug}`}
          ></ReadMore> */}
          {showDownload && (
            <div className="flex align-center">
              <span
                onClick={() => setModalDownload(true)}
                className="flex align-center text-[#0050D5] cursor-pointer text-[14px]"
              >
                <Image
                  src="/img/uil_file-download-alt.svg"
                  width={20}
                  height={15}
                  alt="download File Link"
                />
                Download
              </span>
            </div>
          )}
        </div>
      </div>
      {modalDownload && (
        <ModalDownload
          isOpen={modalDownload}
          setIsOpen={setModalDownload}
          title={"Download Case Study"}
          downloadLink={Download_link}
        />
      )}
    </div>
  );
}
