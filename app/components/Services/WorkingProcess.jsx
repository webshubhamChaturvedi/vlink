import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import LINK from "../common/LINK";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function WorkingProcess({
  title,
  label,
  h1_black,
  h1_purple,
  href,
  target,
  image,
}) {
  return (
    <div className="relative">
      <Image
        className="z-10 absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3"
        src="https://res.cloudinary.com/dwac0ziol/image/upload/c_fill,g_faces,w_100/v1690806569/ellipsis_116e6ce403.svg"
        width={391}
        height={391}
        alt="backdrop"
      />
      <Image
        alt="backdrop"
        className="z-10 absolute top-0 right-0 translate-x-1/4 -translate-y-1/4"
        src="https://res.cloudinary.com/dwac0ziol/image/upload/c_fill,g_faces,w_100/v1690806569/how_we_work_backdrop_e040e74ada.png"
        width={218}
        height={230}
      />
      <div className="relative rounded-lg z-20 bg-how-we-work-background bg-cover bg-no-repeat md:p-12 p-8">
        <p className="md:mb-4 mb-2 text-[1.25rem] font-[400] font-sans">
          {title}
        </p>
        <h5 className="font-bold xl:text-[42px] lg:text-[28px] xl:leading-[52px] lg:leading-[42px] text-[22px] md:mb-8 mb-5">
          <span className="text-company">{h1_purple}</span> - {h1_black}
        </h5>
        <LINK
          m_top={"mt-3"}
          reflink={`${href ?? "/about-us/contact-us"}`}
          py={"py-2"}
          px={"px-5"}
          FAIcon={faArrowRight}
          bgColor={"#0050D5"}
          textColor={"#fff"}
          hoverBgColor={"#fff"}
          HOVERTextColor={"#000"}
          borderColor={"#0050D5"}
        >
          {label}
        </LINK>
      </div>
    </div>
  );
}
