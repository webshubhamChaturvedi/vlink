import Container from "app/components/common/Container";
import { apiEndpoint } from "app/scripts/fetch";
import LeftIconList from "../common/LeftIconList";
import Image from "next/image";
import { useRouter } from "next/router";
import LINK from "../common/LINK";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function WeWork({ section }) {
  const router = useRouter();
  return (
    <Container className="md:py-[55px] py-[30px]">
      <div className="flex flex-wrap flex-col md:flex-row md:justify-around items-center py-0 bg-no-repeat bg-[url('/img/dot-circle.svg')] bg-[length:300px_300px]">
        <div className="succesful-team lg:basis-1/2 lg:mb-0 mb-5">
          <h6 className="xl:text-4xl lg:text-[32px] text-[22px] font-bold text-left xl:leading-[50px] font-sans lg:leading-[40px] leading-[30px] mb-3">
            {section?.h1_black}
            <span className="text-company">{" " + section?.h1_purple}</span>
            {" " + section?.h2_black}
          </h6>
          <p className="text-[#545454] text-left text-[16px] pt-2 pb-2 mb-3 font-sans font-[400]">
            {section?.p ? section?.p : section?.body}
          </p>
          <LeftIconList
            extraClassName="items-center "
            displayGrid={true}
            gridCols={1}
            list={
              section?.section5_detail
                ? section?.section5_detail
                : section?.list2
            }
            customIcon={"circle-check-icon-primary.svg"}
          />
          <LINK
            m_top={"20px"}
            reflink={`${section?.button_link || "/case-study/"}`}
            py={"py-2"}
            px={"px-7"}
            FAIcon={faArrowRight}
            bgColor={"#0050D5"}
            textColor={"#fff"}
            hoverBgColor={"#fff"}
            HOVERTextColor={"#000"}
            borderColor={"#0050D5"}
          >
            {section?.button_text || "View Case Studies"}
          </LINK>
        </div>
        <div className="relative lg:basis-1/3 h-fit">
          <div className="image-container">
            {/* <img
              src={"/img/WeWork.svg"}
              fill
              sizes="100%"
              alt={"Vlink Info"}
              className={`relative image !w-full`}
            /> */}
          </div>
        </div>
      </div>
    </Container>
  );
}
