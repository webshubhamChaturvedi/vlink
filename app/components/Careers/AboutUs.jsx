import Container from "../common/Container";
import Image from "next/image";
import { createMarkup } from "app/scripts/utils";
import { useRouter } from "next/router";
import LINK from "../common/LINK";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function AboutUs({ section }) {
  const router = useRouter();
  return (
    <Container className="flex flex-col md:flex-row md:py-[55px] py-[30px] space-x-0 md:space-x-8">
      <div className="md:basis-1/2 image-container relative md:mb-0 mb-5">
        <Image
          className="z-10 absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4"
          alt="backdrop"
          src="/img/how-we-work-backdrop.png"
          width={218}
          height={230}
        />
        <Image
          src={`https://res.cloudinary.com/dwac0ziol/image/upload/c_fill,g_faces,w_480/v1691474277/group_dinner_204b226a87.png`}
          fill
          sizes="100%"
          alt="group-dinner"
          className={`relative z-20 image !w-full`}
        />
      </div>
      <div className="flex flex-col justify-between md:basis-1/2 space-y-4">
        <div className=" leading-relaxed">
          <h5 className="font-bold xl:text-4xl lg:text-[32px] text-[22px] md:mb-5 mb-3">
            {section?.title}
          </h5>
          <div dangerouslySetInnerHTML={createMarkup(section?.body)}></div>
          <LINK
            m_top={"30px"}
            reflink={`/about-us`}
            py={"py-2"}
            px={"px-5"}
            FAIcon={faArrowRight}
            bgColor={"#0050D5"}
            textColor={"#fff"}
            hoverBgColor={"#fff"}
            HOVERTextColor={"#000"}
            borderColor={"#0050D5"}
          >
            {section?.read_more_btn}
          </LINK>
        </div>
      </div>
    </Container>
  );
}
