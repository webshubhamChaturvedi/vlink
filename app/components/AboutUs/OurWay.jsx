import Container from "app/components/common/Container";
// import Image from 'next/image'
import CloudinaryImage from "../common/CloudinaryImage";

export default function OurWay({ section }) {
  // const { p1, h1_black, h1_purple } = section
  return (
    <div>
      <Container className="flex flex-col md:flex-row md:py-[55px] py-[30px] items-center gap-10">
        <div className="lg:basis-1/2 ">
          <h6 className="xl:text-4xl lg:text-[32px] text-[22px] font-bold mb-5 xl:leading-[50px] lg:leading-[40px] leading-[35px]">
            <span className="text-company block mb-2 mr-1">
              {section?.h1_purple}
            </span>
            {section?.h1_black}
          </h6>
          <p className="md:text-[16px] text-[14px] leading-[30px] whitespace-pre-line">
            {section?.p}
          </p>
        </div>
        <div className="lg:basis-1/2 image-container pt-10 pr-10 rounded-lg mt-5 md:mt-0 bg-[url('/img/testimonial-bg.png')] bg-[120px] bg-no-repeat bg-right-top">
          {/* <img
            src={process.env.NEXT_PUBLIC_API_URL+section?.image?.data?.attributes?.url}
            fill
            sizes="100%"
            alt={section?.image?.data?.attributes?.alternativeText || section?.image?.data?.attributes?.name}
            className={`image !w-full`}
          /> */}
          <CloudinaryImage
            backendImgUrl={section?.image?.data?.attributes?.url}
            type="smallimg"
            className="image !w-full object-fill"
            alt={section?.image?.data?.attributes?.alternativeText}
          />
        </div>
      </Container>
    </div>
  );
}
