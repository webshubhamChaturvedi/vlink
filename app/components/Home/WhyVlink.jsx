import Container from "app/components/common/Container";
// import { apiEndpoint } from "app/scripts/fetch";
import IconText from "./WhyVlink/IconText";
export default function WhyVlink({ section_title, section_content }) {
  const features = section_content?.map((feature) => ({
    icon: {
      src: feature.image.data.attributes.url,
      width: feature.image.data.attributes.width,
      height: feature.image.data.attributes.height,
      alt: feature.image.data.attributes.alternativeText,
    },
    h1: feature.no,
    p: feature.p,
  }));
  return (
    <Container
      containBreakpoint="md"
      className="bg-ball-texture bg-no-repeat bg-bottom"
    >
      <div className="hidden md:block text-center text-dark md:py-[55px] py-[30px]">
        <h3 className="font-bold xl:text-4xl mb-4 font-sans lg:text-[32px] text-[22px]">
          {section_title?.h1_black}
          <span className="text-company">{section_title?.h1_purple}</span>
        </h3>
        <p className="max-w-[729px] mx-auto text-base leading-8 font-sans font-[400] text-[14px]">
          {section_title?.p}
        </p>
      </div>
      <div className="bg-primary bg-why-vlink-texture rounded-lg md:pt-[55px] pt-[30px] md:pb-[45px] pb-[20px]">
        <h4 className="md:hidden font-semibold md:mb-16 mb-[25px] xl:text-[40px] lg:text-[32px] text-[22px] text-white text-center">
          {section_title?.h1_black + section_title?.h1_purple}
        </h4>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {features && features.length ? (
            features.map((feature, key) => (
              <IconText
                icon={feature.icon}
                h1={feature.h1}
                p={feature.p}
                key={key}
                className={
                  key % 2 == 0
                    ? "border-r border-lightGrayTransparent md:border-r-0"
                    : ""
                }
              />
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </Container>
  );
}
