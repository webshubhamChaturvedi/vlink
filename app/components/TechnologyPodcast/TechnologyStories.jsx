import React from "react";
import NewsroomCard from "./../Newsroom/NewsroomCard";
import Container from "../common/Container";
import WhitepaperCard from "../common/whitepaperCard";
export default function TechnologyStories({
  section_title,
  section_content = [],
  isDetail = false,
}) {
  return (
    <section className="md:py-[55px] py-[30px]">
      <Container className="">
        <div className="flex justify-center items-center">
          <div className="mb-[45px]">
            <h5 className="font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] xl:leading-[50px] lg:leading-[40px] leading-[30px] text-center mb-3">
              {section_title?.h1_black}
              <span className="text-company ml-1">
                {section_title?.h1_purple}
              </span>
            </h5>
            <p className="font-sans font-[400] text-[14px] text-center">
              {section_title?.p}
            </p>
          </div>
        </div>
        <div
          className={`grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-8 ${section_title?.h1_purple}`}
        >
          {!isDetail
            ? section_content?.map((item, key) => (
                <NewsroomCard
                  shadow={false}
                  rounded={false}
                  bgWhite={true}
                  item={item}
                  key={key}
                  userIconSize={"sm"}
                  isPodCast={isDetail}
                  isDetail={isDetail}
                  hideBottomBorder={true}
                />
              ))
            : section_content?.map((item, index) => (
                <WhitepaperCard
                  data={item}
                  showDownload={false}
                  key={`webinar-${index}`}
                />
              ))}
        </div>
      </Container>
    </section>
  );
}
