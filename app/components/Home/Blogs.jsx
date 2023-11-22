import Container from "../common/Container";
import BlogCards from "app/components/common/BlogCards";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"));
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import LINK from "../common/LINK";

export default function Blogs({ homeBlog, section_title }) {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white md:pb-[55px] pb-[30px]">
      <Container>
        <div className="flex justify-center items-center">
          <div className="md:pb-[45px] pb-[25px]">
            <h5 className=" text-center mb-3 font-sans font-[700] xl:text-4xl lg:text-[32px] text-[22px]">
              {section_title?.h1_black}
              <span className="text-company">{section_title?.h1_purple}</span>
            </h5>
            <p className=" font-[400] text-[14px] md:text-left text-center">
              {section_title?.p}
            </p>
          </div>
        </div>
        <>
          <div className="w-[100%] lxlpx-[10%] relative">
            <Slider {...settings}>
              {homeBlog && homeBlog.length
                ? homeBlog.map((item, index) => (
                    <BlogCards key={index} item={item} />
                  ))
                : []}
            </Slider>
          </div>
        </>
        <div className="flex justify-center">
          <LINK
            m_top={"20px"}
            reflink={`${section_title?.href || "/blog/"}`}
            py={"py-2"}
            px={"px-5"}
            FAIcon={faArrowRight}
            bgColor={"#0050D5"}
            textColor={"#fff"}
            hoverBgColor={"#fff"}
            HOVERTextColor={"#000"}
            borderColor={"#0050D5"}
          >
            {section_title?.button_text || "Read More Insights"}
          </LINK>
        </div>
      </Container>
    </div>
  );
}
