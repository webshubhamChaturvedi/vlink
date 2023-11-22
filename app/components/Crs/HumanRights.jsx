import { apiEndpoint } from "app/scripts/fetch";
import CloudinaryImage from "../common/CloudinaryImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { download } from "app/scripts/utils";
import Link from "next/link";
export default function HumanRights({ section }) {
  return (
    <div className="mb-10  bg-[#EEFCFC] p-8 md:p-0 md:px-14 ">
      {console.log(section, "section")}
      <div className="flex flex-col md:flex-row md:justify-around items-center">
        <div className="relative md:basis-1/4 h-fit">
          <div className="image-container">
            {section?.image?.data[0]?.attributes?.url ? (
              // <img
              //   src={
              //     apiEndpoint(section?.image?.data[0]?.attributes?.url) ?? "/"
              //   }
              //   fill
              //   sizes="100%"
              //   alt={section?.image?.data[0]?.attributes?.alternativeText || section?.image?.data[0]?.attributes?.name}
              //   className={`relative z-20 image !w-full`}
              // />
              <CloudinaryImage
                backendImgUrl={section?.image?.data[0]?.attributes?.url ?? "/"}
                alt={section?.image?.data[0]?.attributes?.alternativeText}
                className={`relative z-20 image !w-full object-fill`}
                type={"smallimg"}
              />
            ) : (
              // <img
              //   src={
              //     apiEndpoint(section?.image?.data?.attributes?.url) ?? "/"
              //   }
              //   fill
              //   sizes="100%"
              //   alt={section?.image?.data?.attributes?.alternativeText || section?.image?.data?.attributes?.name}
              //   className={`relative z-20 image !w-full`}
              // />
              <CloudinaryImage
                backendImgUrl={section?.image?.data?.attributes?.url ?? "/"}
                alt={section?.image?.data?.attributes?.alternativeText}
                className={`relative z-20 image !w-full object-fill`}
                type={"smallimg"}
              />
            )}
          </div>
        </div>
        <div className="succesful-team md:basis-3/4  xl:pl-28 md:pl-10 mb-[20px] mt-5 md:mt-0">
          <h5 className="xl:text-4xl lg:text-[32px] text-[22px] mb-5 xl:leading-[50px] lg:leading-[40px] leading-[30px] font-bold text-['#353535'] text-left">
            {section?.h1_black}
          </h5>
          <p className="leading-8 text-[14px] font-normal text-['#353535'] md:pt-4 ">
            {section?.p}
          </p>

          <Link
            className="text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 group flex h-min items-center justify-center text-center font-medium focus:z-10 text-[#ffffff_!important] white_btn relative rounded overflow-hidden text-center inline-block lg:px-5 px-2 py-1 mt-5  w-80"
            // onClick={() => download(apiEndpoint(section?.btn_link))}
            href={section?.btn_link}
            target="_blank"
          >
            <span className="flex items-center rounded-md text-sm px-4 py-2">
              <span
                className={`absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:h-full opacity-1  bg-[#fff]`}
              ></span>
              <span
                className={`font-[600] relative group-hover:text-black flex items-center`}
              >
                {section?.btn_text}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-2 font-[14px] w-[14px]"
                />
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
