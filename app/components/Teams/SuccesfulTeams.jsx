import Container from "app/components/common/Container";
import CallIcon from "app/components/icons/CallIcon";
import Image from "next/image";
import Link from "next/link";
import { apiEndpoint } from "app/scripts/fetch";
import { createMarkup } from "app/scripts/utils";
import { Button } from "flowbite-react";
import { useRouter } from "next/router";
import LINK from "../common/LINK";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CloudinaryImage from "../common/CloudinaryImage";

export default function SuccesfulTeams({ section }) {
  // const { body, h1_black, h1_purple, image } = section
  const router = useRouter();

  return (
    <Container className="md:py-[55px] py-[30px]">
      <h4 className="xl:text-4xl lg:text-[32px] text-[22px] font-bold text-center max-w-[700px] m-auto md:mb-[45px] mb-[25px] md:leading-[48px] leading-[30px]">
        {section?.h1_black}
        <span className="text-company">{section?.h1_purple}</span>
      </h4>
      <div className="flex flex-col lg:flex-row md:justify-around items-center">
        <div className="succesful-team lg:basis-1/2 mb-[2rem]">
          <ol className="relative border-l-2 border-lightGray">
            <li className="relative mb-8 pl-8">
              {/* body has to be formatted in an array instead of a string */}
              <div className="absolute w-3 h-3 bg-primary shadow-dotShadow rounded-full left-0 top-1.5 -translate-x-1/2 border border-white dark:border-gray-900 dark:bg-gray-700;"></div>
              <p className="font-bold mb-3 text-[16px]">{section?.title1}</p>
              <div
                className="text-sm"
                dangerouslySetInnerHTML={createMarkup(section?.body1)}
              ></div>
            </li>
            <li className="relative mb-8 pl-8">
              <div className="absolute w-3 h-3 bg-primary shadow-dotShadow rounded-full left-0 top-1.5 -translate-x-1/2  border border-white dark:border-gray-900 dark:bg-gray-700;"></div>
              <h3 className="font-bold mb-3 text-[16px]">{section?.title2}</h3>
              <div
                className="text-sm"
                dangerouslySetInnerHTML={createMarkup(section?.body2)}
              ></div>
            </li>
            <li className="relative mb-8 pl-8">
              <div className="absolute w-3 h-3 bg-primary shadow-dotShadow rounded-full left-0 -translate-x-1/2 top-1.5 border border-white dark:border-gray-900 dark:bg-gray-700;"></div>
              <p className="font-bold mb-3 text-[16px]">{section?.title3}</p>
              <div
                className="text-sm"
                dangerouslySetInnerHTML={createMarkup(section?.body3)}
              ></div>
            </li>
            <li className="relative flex mb-0 pl-8">
              <div className="absolute w-3 h-3 bg-red-600 shadow-dotShadow rounded-full left-0 top-1.5 -translate-x-1/2 border border-white dark:border-gray-900 dark:bg-gray-700;"></div>
              <p>Have a question?</p>
              <div className="pl-4 mt-[-8px]">
                <LINK
                  m_top={"0px"}
                  reflink={`/about-us/contact-us/`}
                  py={"py-1"}
                  px={"px-3"}
                  FAIcon={faArrowRight}
                  bgColor={"#0050D5"}
                  textColor={"#fff"}
                  hoverBgColor={"#fff"}
                  HOVERTextColor={"#000"}
                  borderColor={"#0050D5"}
                >
                  {section?.button_text}
                </LINK>
              </div>
            </li>
          </ol>
        </div>
        <div className="relative md:basis-1/3 h-fit">
          <img
            className="z-10 absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4"
            src="https://res.cloudinary.com/dwac0ziol/image/upload/c_fill,g_faces,w_100/how_we_work_backdrop_e040e74ada.png"
            alt="how-we-work-backdrop"
            width={218}
            height={230}
          />
          <div className="image-container">
            {section?.image?.data?.attributes?.url && (
              <CloudinaryImage
                backendImgUrl={section?.image?.data?.attributes?.url ?? "/"}
                className=" object-cover relative z-20 image !w-full"
                alt={section?.image.data.attributes.alternativeText}
                type="smallimg"
              />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
