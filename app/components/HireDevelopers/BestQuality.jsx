import Container from "app/components/common/Container";
import { apiEndpoint } from "app/scripts/fetch";
import LeftIconList from "../common/LeftIconList";
import Image from "next/image";
import { useRouter } from "next/router";
import LINK from "../common/LINK";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function BestQuality({ section, section_list }) {
  const router = useRouter();
  return (
    <Container className="md:py-[55px] py-[30px]">
      <div className="flex flex-col md:flex-row md:justify-around items-center">
        <div className="succesful-team lg:basis-1/2 mb-4 lg:mb-0">
          <h5 className="xl:text-4xl lg:text-[32px] text-[22px] font-bold text-left mb-2">
            {section?.h1_black}
            <span className="text-company">{section?.h1_purple}</span>
          </h5>
          <p className="text-[#6D6D6D] text-left md:text-[16px] text-[14px] pt-2 pb-4 font-sans font-[400]">
            {section?.p}
          </p>
          <LeftIconList
            extraClassName="items-center "
            displayGrid={true}
            gridCols={1}
            list={section_list}
            customIcon={"circle-check-icon-primary.svg"}
          />
          <LINK
                  m_top={"20px"}
                  reflink={`${section?.button_link}`}
                  py={"py-2"}
                  px={"px-7"}
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
        <div className="relative lg:basis-1/3 lg:max-w-full sm:max-w-[400px] h-fit">
          <div className="image-container">
            <img
              src={"/img/BestQuality.svg"}
              fill
              sizes="100%"
              alt={"Vlink Info"}
              className={`relative z-20 image !w-full`}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
