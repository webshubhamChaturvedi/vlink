import Container from "app/components/common/Container";
import Image from "next/image";
import { apiEndpoint } from "app/scripts/fetch";
import CloudinaryImage from "../common/CloudinaryImage";

export default function OurStory({ section }) {
  // const { title, p, h1_black, h1_purple, image } = section
  return (
    <Container className="flex flex-col md:flex-row py-6 items-center">
      <div className="md:basis-1/2 space-y-4">
        <h3 className="flex items-center">
          {section?.title}
          <span className="ml-6 font-bold inline-block w-[59px] h-[2px] bg-[#353535]"></span>
        </h3>
        <h1 className="text-[28px] md:text-[55px] font-extrabold leading-[42px] md:leading-[68px] !mt-0">
          <span className="text-company">{section?.h1_purple}</span>
          {section?.h1_black}
        </h1>
        <p className="text-base leading-relaxed">{section?.p}</p>
        <div className="grid grid-cols-12 gap-8">
          <div className="sm:col-span-6 col-span-12">
            <span className="inline-block mb-2">
              {/* <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/analytics_1_89f8ac156f.png`}
                width={40}
                height={40}
                alt="arrow-right-white"
              /> */}
              <CloudinaryImage
                backendImgUrl="/uploads/analytics_1_89f8ac156f.png"
                alt="arrow-right-white"
                className=" w-10 h-10"
                type="icon"
              />
            </span>
            <h4 className="text-[16px] text-[#000000] font-[600]">
              {section?.list[0]?.h}
            </h4>
            <hr className="my-4 border-t-2" />
            <p className="text-[14px] w-2/3">{section?.list[0]?.p}</p>
          </div>
          <div className="sm:col-span-6 col-span-12">
            <span className="inline-block mb-2">
              {/* <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/coach_1_f6b13cd76b.svg`}
                width={40}
                height={40}
                alt="arrow-right-white"
              /> */}
              <CloudinaryImage
                backendImgUrl="/uploads/coach_1_f6b13cd76b.svg"
                alt="arrow-right-white"
                className=" w-10 h-10"
                type="icon"
              />
            </span>
            <h4 className="text-[16px] text-[#000000] font-[600]">
              {section?.list[1]?.h}
            </h4>
            <hr className="my-4 border-t-2" />
            <p className="text-[14px] w-2/3">{section?.list[1]?.p}</p>
          </div>
        </div>
        {/* <Image
          src="/img/our-stories-certification.png"
          alt="our-stories"
          width={481}
          height={187}
        /> */}
      </div>
      <div className="md:basis-1/2 image-container">
        {section?.image.data?.attributes?.url && (
          // <img
          //   src={apiEndpoint(section?.image.data?.attributes?.url)}
          //   fill
          //   sizes="100%"
          //   alt={section?.image?.data?.attributes?.alternativeText || section?.image?.data?.attributes?.name}
          //   className={`image !w-full`}
          // />
          <CloudinaryImage
            backendImgUrl={section?.image.data?.attributes?.url}
            alt={section?.image?.data?.attributes?.alternativeText}
            className={`image !w-full`}
            type="smallimg"
          />
        )}
      </div>
    </Container>
  );
}
