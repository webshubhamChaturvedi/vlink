import Container from "app/components/common/Container";
import Offerings from "app/components/common/Sidebar/Offerings";
import CallIcon from "app/components/icons/CallIcon";
import { createMarkup } from "app/scripts/utils";
import { useRouter } from "next/router";
import LINK from "../common/LINK";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Solutions({
  section,
  isIndustries = false,
  sidebar,
  offering,
}) {
  const router = useRouter();
  const { asPath } = useRouter();
  return (
    <Container>
      <div className="md:py-[55px] py-[30px] grid lg:grid-cols-12 grid-cols-1">
        <div className="col-span-9 pr-0 lg:pr-[65px]">
          <h2 className="xl:text-4xl lg:text-[32px] text-[22px] font-bold md:mb-6 mb-[25px] xl:leading-[50px] md:leading-[40px] leading-[35px]">
            {section?.h1_black}
            <span className="text-company">{section?.h1_purple}</span>
          </h2>
          <div className="leading-relaxed whitespace-pre-line ">
            <p
              dangerouslySetInnerHTML={createMarkup(section?.body)}
              className="text-sm leading-[24px] text-[14px] font-sans mb-3"
            ></p>
            {section?.p && (
              <div className="flex md:flex-nowrap flex-wrap items-center justify-between">
                <p
                  className={`md:mr-10 pt-5 leading-[24px] md:text-[18px] text-[16px] font-sans font-[500]`}
                >
                  {section?.p}
                </p>
                <LINK
                  m_top={"20px"}
                  textFont={"14px"}
                  table={"table"}
                  nowrap={"whitespace-nowrap"}
                  reflink={`#get-in-touch`}
                  py={"py-2"}
                  px={"px-5"}
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
            )}
          </div>
        </div>
        <div className="col-span-3 border-l border-gray pl-10 mt-10 lg:mt-0">
          <div className="relative pt-7 h-full">
            {/* TODO populate offerings */}
            <Offerings isIndustries={isIndustries} offering={offering} />
          </div>
        </div>
      </div>
    </Container>
  );
}
