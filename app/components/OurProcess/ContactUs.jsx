import { Button } from "flowbite-react";
import { useRouter } from "next/router";
import LINK from "../common/LINK";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ContactUs({ section }) {
  const router = useRouter();
  return (
    <div className="bg-primary bg-why-vlink-texture md:pb-9 md:pt-6 pb-[30px] pt-[30px] bg-cover bg-center bg-no-repeat">
      <div className="container">
        <div className="flex justify-between flex-wrap items-center">
          <p className="text-white font-bold md:text-[26px] text-[22px] md:mt-5">{section?.p}</p>
          <LINK
              m_top={"0px"}
              reflink={`${section.href}`}
              py={"py-2"}
              px={"px-5"}
              FAIcon={faArrowRight}
              bgColor={"#ffffff"}
              textColor={"#000000"}
              hoverBgColor={"#0050D5"}
              HOVERTextColor={"#ffffff"}
              borderColor={"#ffffff"}
              textFont={'16px'}
            >
              {section?.button_text}
            </LINK>
        </div>
      </div>
    </div>
  );
}
