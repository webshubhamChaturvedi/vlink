import Container from "app/components/common/Container";
import Image from "next/image";
import { apiEndpoint } from "app/scripts/fetch";
import CloudinaryImage from "../common/CloudinaryImage";

export default function OurMission({ section }) {
  // const { boldText, p1, h2, p2, h1_black, h1_purple, image, image1 } = section
  return (
    <div>
      <Container className="flex flex-col md:flex-row justify-center items-center md:pt-[6rem] md:pb-[10rem] pt-[30px] pb-[30px] gap-10">
        <div className="md:basis-1/2 md:text-left text-center">
          <h5 className="xl:text-4xl lg:text-[32px] text-[22px] font-bold mb-6 xl:leading-[50px] lg:leading-[40px] leading-[30px]">
            {section?.h1_black}
            <span className="text-company">{section?.h1_purple}</span>
          </h5>
          <h6 className="mb-6 font-semibold leading-relaxed tracking-[2px] md:text-2xl text-[14px]">
            {section?.boldText}
          </h6>
          <p className="leading-relaxed font-sans font-[400] text-[14px]">
            {section?.p1}
          </p>
        </div>
        <div className="md:basis-1/2 rounded-lg relative md:!ml-10 mt-5 md:mt-0 overflow-hidden">
          <Image
            className=" absolute top-0 right-0 translate-x-1/5 -translate-y-1/6"
            src="/img/ellipsis.svg"
            alt="ellipsis"
            width={678}
            height={678}
          />
          <div className="image-container">
            {section?.image?.data?.attributes?.url && (
              <CloudinaryImage
                backendImgUrl={section?.image?.data?.attributes?.url ?? "/"}
                alt={section?.image?.data?.attributes?.alternativeText}
                className={`z-10 relative image !w-full`}
                type="smallimg"
              />
            )}
          </div>

          <div className="items-center absolute z-20 left-1/2 bottom-[-20%] sm:bottom-0 sm:flex justify-between bg-white w-[84%] sm:w-3/4 mx-auto px-4 sm:px-6 py-5 -translate-x-1/2 translate-y-1/3 rounded-t-xl shadow-lg">
            {section?.image1?.data?.attributes?.url && (
              <img
                className="!h-full !w-[70px]"
                src={apiEndpoint(section?.image1?.data?.attributes?.url)}
                alt={
                  section?.image1?.data?.attributes?.alternativeText ||
                  section?.image1?.data?.attributes?.name
                }
                width={section?.image1.data.attributes.width}
                height={section?.image1.data.attributes.width}
              />
              // <CloudinaryImage
              //   backendImgUrl={section?.image1?.data?.attributes?.url}
              //   alt={section?.image1?.data?.attributes?.alternativeText}
              //   className="w-20 h-20 !h-full !w-[70px]"
              //   type="icon"
              // />
            )}
            <div className="sm:px-4 mt-2 sm:mt-0">
              <h4 className="font-bold text-[18px] leading-[26px] sm:text-[20px] text-[#000] mb-2">
                {section?.h2}
              </h4>
              <p className="text-[#7F7D7D] text-[14px]">{section?.p2}</p>
            </div>
          </div>
          {/* award */}
        </div>
      </Container>
    </div>
  );
}
