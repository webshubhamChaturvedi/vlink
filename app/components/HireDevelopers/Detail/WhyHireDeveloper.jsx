import Container from "app/components/common/Container";
import { apiEndpoint } from "app/scripts/fetch";
import LeftIconList from "app/components/common/LeftIconList";
import { createMarkup } from "app/scripts/utils";
import Image from "next/image";
import { useRouter } from "next/router";
import LINK from "app/components/common/LINK";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function WhyHireDevelopers({ section }) {
  const router = useRouter();
  return (
    <Container className="md:pb-10 md:pt-8 pb-[30px] pt-[30px]">
      <div className="flex flex-wrap flex-col md:flex-row md:justify-around items-center md:pt-0 pt-0 md:pb-10 pb-0">
        <div className="succesful-team lg:basis-3/5">
          <h2 className="xl:text-4xl lg:text-[32px] text-[22px] font-bold text-left mb-2">
            {section?.h1_black}
            <span className="text-company">{` ${section?.h1_purple}`}</span>
          </h2>
          <div
            className=" text-left p-4 p-2"
            dangerouslySetInnerHTML={createMarkup(section?.body)}
          ></div>
          <LeftIconList
            extraClassName="items-center "
            displayGrid={true}
            gridCols={1}
            list={section?.list1}
            customIcon={"circle-check-icon-primary.svg"}
          />
          <div className="flex md:flex-none flex-wrap space-x-2 justify-between items-center">
            <p
              className={`text-[#001231] md:text-[18px] lg:text-lg  text-left `}
            >
              {section?.p}
            </p>
            <LINK
              m_top={"0px"}
              reflink={`${"/hire-developers/process"}`}
              py={"py-2"}
              px={"px-5"}
              FAIcon={faArrowRight}
              bgColor={"#0050D5"}
              textColor={"#fff"}
              hoverBgColor={"#fff"}
              HOVERTextColor={"#000"}
              borderColor={"#0050D5"}
              textFont={"14px"}
            >
              {section?.tell_you_btn}
            </LINK>
          </div>
        </div>
        <div className="relative lg:basis-1/3 h-fit">
          <div className="image-container">
            <Image
              src={"/img/BestQuality.svg"}
              fill
              sizes="100%"
              alt={"Best Quality"}
              className={`relative image !w-full`}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
