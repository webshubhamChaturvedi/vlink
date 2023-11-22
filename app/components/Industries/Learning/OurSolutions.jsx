import Container from "app/components/common/Container";
import { OurSolutionsItem } from "./OurSolutionsItem";
import { useMemo } from "react";

export default function OurSolutions({ section_title, section_content }) {
  const items = useMemo(() => {
    return section_content?.map((item) => ({
      image_url: item?.image?.data?.attributes?.url,
      alt: item?.image?.data?.attributes?.alternativeText,
      h: item.h,
      p: item.p,
    }));
  }, [section_content]);

  return (
    <div
      className="bg-our-solutions bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(236, 244, 254, 0.95), rgba(236, 244, 254, 0.95))," +
          "url('https://res.cloudinary.com/dwac0ziol/image/upload/c_fill,g_faces,w_1280/v1691474306/our_solutions_background_f0ec5ea877.png')",
      }}
    >
      <Container className="md:py-16 py-[30px] space-y-8">
        <div className="text-center space-y-4">
          <h5 className="text-center xl:text-4xl lg:text-[32px] text-[22px] mb-3 text-[#383838] font-[700] xl:leading-[50px] md:leading-[40px] leading-[30px]">
            {section_title?.h1_black}
            <span className="text-company">{section_title?.h1_purple}</span>
          </h5>
          <p className="text-[#6D6D6D] text-[14px] text-center md:block mt-0">
            {section_title?.p}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-14 md:mt-10 mt-[30px]">
          {items?.map((item, index) => (
            <OurSolutionsItem key={index} {...item} />
          ))}
        </div>
      </Container>
    </div>
  );
}
