import { createMarkup } from "app/scripts/utils";
import CloudinaryImage from "../common/CloudinaryImage";

export default function Diversity({ section }) {
  return (
    <div className="flex flex-col lg:flex-row md:py-8 pt-[30px] space-x-0 ">
      <div className="image-container relative lg:w-[40%] bg-[#f9f9f9]">
        {/* <img
          src={
            process.env.NEXT_PUBLIC_API_URL +
            section?.image?.data?.attributes?.url
          }
          fill
          sizes="100%"
          alt={
            section?.image?.data?.attributes?.alternativeText ||
            section?.image?.data?.attributes?.name
          }
          className={`relative z-20 image !w-full`}
        /> */}
        <CloudinaryImage
          backendImgUrl={section?.image?.data?.attributes?.url}
          className={`relative z-20 image !w-full object-fill`}
          alt={section?.image?.data?.attributes?.alternativeText}
        />
      </div>
      <div className="flex flex-col bg-company justify-between lg:w-[60%] md:space-y-4 md:pb-0 pb-10 md:pt-0 pt-[20px]">
        <div className=" leading-relaxed">
          <h5 className="font-bold font-roboto text-white xl:text-4xl lg:text-[32px] text-[22px] mb-5 xl:leading-[50px] lg:leading-[40px] leading-[30px] px-8 md:mt-6 leading-10">
            {section?.title}
          </h5>
          <div
            className="px-8 font-normal text-white font-sans leading-8 text-[14px]"
            dangerouslySetInnerHTML={createMarkup(section?.p)}
          ></div>
        </div>
      </div>
    </div>
  );
}
