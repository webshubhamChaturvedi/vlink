import Container from "app/components/common/Container";
import { Button } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/router";
import CloudinaryImage from "../common/CloudinaryImage";

export default function DiversityAndInclusion({ section, clickPopup }) {
  // const { p, text, label, h1_black, h1_purple } = section
  const router = useRouter();
  return (
    <Container className="flex flex-col md:flex-row space-x-0 md:space-x-8 items-center">
      <div className="md:basis-1/2 image-container relative">
        <Image
          className="z-10 absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4"
          alt="backdrop"
          src="/img/how-we-work-backdrop.png"
          width={218}
          height={230}
        />
        {/* <Image
          src={`/img/group-dinner.png`}
          fill
          sizes="100%"
          alt="group-dinner"
          className={`relative image !w-full`}
        /> */}
        <CloudinaryImage
          backendImgUrl={"/uploads/group_dinner_204b226a87.png"}
          className={`relative image !w-full`}
          alt="group-dinner"
          type="smallimg"
        />
      </div>
      <div className="flex flex-col justify-between md:basis-1/2 space-y-4 md:!ml-10 mt-10 md:mt-0">
        <div className=" leading-relaxed">
          <h5 className="font-bold xl:text-4xl lg:text-[32px] text-[22px] mb-5 xl:leading-[50px] lg:leading-[40px] leading-[30px]">
            <span className="text-company">{section?.h1_purple}</span>
            {section?.h1_black}
          </h5>
          <p className="mb-7 whitespace-pre-line md:text-[16px] text-[14px] font-sans">
            {section?.p}
          </p>
        </div>

        <div className="flex items-center justify-between bg-primary text-white bg-why-vlink-texture rounded-lg py-8 px-6">
          <p className="text-sm mr-2 font-sans">{section?.text}</p>
          <Button
            className="bg-white text-primary font-bold whitespace-nowrap"
            color="white"
            onClick={clickPopup}
          >
            {section?.label}
          </Button>
        </div>
      </div>
    </Container>
  );
}
