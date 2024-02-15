import Container from "app/components/common/Container";
import { OurSolutionsItem } from "./OurSolutionsItem";
import { useMemo } from "react";
import CloudinaryImage from "app/components/common/CloudinaryImage";
import "./oursolutions.css";

export default function OurSolutions({
  section_title,
  section_content,
  isEduSol = false,
}) {
  const items = useMemo(() => {
    return section_content?.map((item) => ({
      image_url: item?.image?.data?.attributes?.url,
      alt: item?.image?.data?.attributes?.alternativeText,
      h: item.h,
      p: item.p,
    }));
  }, [section_content]);

  return (
    <>
      <section
        className={`bg-our-solutions bg-cover bg-no-repeat bg-center md:py-[55px] py-[35px]`}
        style={{
          backgroundImage: isEduSol
            ? `linear-gradient(0deg, ${section_title?.bgColor}, ${section_title?.bgColor})`
            : "linear-gradient(0deg, rgba(236, 244, 254, 0.95), rgba(236, 244, 254, 0.95))," +
              "url('https://res.cloudinary.com/dthpnue1d/image/upload/c_fill,g_faces,w_1280/v1691474306/our_solutions_background_f0ec5ea877.png')",
        }}
      >
        <Container>
          {isEduSol ? (
            <div className="pb-[55px]">
              <h4 className="relative max-w-[1200px] mx-auto font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-3">
                <span className="md:text-[100px] text-[50px] font-[800] gradient_text block w-[100%] md:leading-[100px] leading-[50px]">
                  {section_title?.bgText}
                </span>
                <span className="w-[100%] font-bold relative mt-[-30px] block">
                  {section_title?.h1_black}
                </span>
              </h4>
              <p className="text-center font-sans font-[600] text-[16px] text-[#7F7D7D] max-w-[1000px] mx-auto">
                {section_title?.p}
              </p>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <h5 className="text-center xl:text-4xl lg:text-[32px] text-[22px] mb-3 text-[#383838] font-[700] xl:leading-[50px] md:leading-[40px] leading-[30px]">
                {section_title?.h1_black}
                <span className="text-company">{section_title?.h1_purple}</span>
              </h5>
              <p className="text-[#6D6D6D] text-[14px] text-center md:block mt-0">
                {section_title?.p}
              </p>
            </div>
          )}
          {isEduSol ? (
            <div className="flex flex-wrap justify-center gap-10">
              {section_title?.section3_detail?.map((items, key) => (
                <div
                  key={key}
                  className={`solutation_div relative lg:p-[30px] p-[20px] shadow-[0px_0px_40px_0px_#0050D521] rounded-[20px] flex md:flex-nowrap flex-wrap md:gap-6 gap-3 bg-[${items?.bgColor}] sx-icon-bx-1 group`}
                >
                  <div className="lg:max-w-[100px] lg:max-h-[100px] max-w-[70px] max-h-[70px] w-full h-full flex items-center justify-center rounded-[100%] bg-[#004AC6] group-hover:bg-[#fff] lg:p-[20px] p-[15px]">
                    <CloudinaryImage
                      backendImgUrl={items?.image?.data?.attributes?.url}
                      className={`group-hover:brightness-0`}
                      alt={items?.image?.data?.attributes?.alternativeText}
                      type="icon"
                    />
                  </div>
                  <div className="md:w-[70%] w-full">
                    <h6 className="text-[#00102B] md:text-[22px] text-[18px] font-[600] mb-3 group-hover:text-[#fff]">
                      {items?.h}
                    </h6>
                    <p className="text-[#00102B] md:text-[16px] text-[14px] font-[400] group-hover:text-[#fff]">
                      {items?.p}
                    </p>
                  </div>
                  <div className="text-[#D9D9D933] text-[150px] font-[600] absolute right-[10px] leading-[150px]">
                    {items?.num}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-8 md:mt-10 mt-[30px]">
              {items?.map((item, index) => (
                <OurSolutionsItem key={index} {...item} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
