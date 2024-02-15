import { useState } from "react";
import ModalDownload from "./ModalDownload";
import CloudinaryImage from "../common/CloudinaryImage";
import Link from "next/link";
import "./successstorycard.css";

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
    <div className="group transation-custom flex flex-col w-full h-full bg-white my-4 md:my-0 overflow-hidden">
      <div className="relative w-full overflow-hidden sucessstory rounded-[15px]">
        <Link
          href={`/case-study/${slug}`}
          className=" block successstoryimg h-full"
          title={
            item?.h1 ||
            `${item?.attributes?.section?.h1_black} ${item?.attributes?.section?.h1_purple}`
          }
        >
          <CloudinaryImage
            backendImgUrl={item?.image?.data?.attributes?.url ?? "/"}
            className="inline-block transation-custom9 group-hover:scale-125 object-cover w-full h-full"
            alt={item?.image?.data?.attributes?.alternativeText}
            type="smallimg"
          />
        </Link>
      </div>

      <div className="px-3 py-5 text-center md:text-left gap-4">
        <h6
          className="font-sans font-[700] text-[20px] line-clamp-1 hover:text-[#4152ee] relative mb-3"
          style={{ WebkitLineClamp: 1 }}
          title={
            item?.h1 ||
            `${item?.attributes?.section?.h1_black} ${item?.attributes?.section?.h1_purple}`
          }
        >
          <Link href={`/case-study/${slug}`} className="hover:text-[#000816]">
            {item?.h1 ||
              `${item?.attributes?.section?.h1_black} ${item?.attributes?.section?.h1_purple}`}
          </Link>
        </h6>
        <p className="md:text-left text-center font-sans text-[#1E1D1D] text-[16px] font-[400] line-clamp-3">
          {item?.p}
        </p>
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
