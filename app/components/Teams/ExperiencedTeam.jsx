import Container from "app/components/common/Container";
import OurServicesCard from "app/components/Services/OurServicesCard";
import { apiEndpoint } from "app/scripts/fetch";
import { createMarkup } from "app/scripts/utils";

export default function ExperiencedTeam({
  section,
  section_content,
  isProcess = false,
  isDataAnalytics = false,
}) {
  // const { p, h1_black, h1_purple, team_section6detail } = section
  let items = section_content?.map((item) => ({
    icon: {
      src: apiEndpoint(item?.image?.data?.attributes?.url) ?? "/",
      alt: item?.image?.data?.attributes?.name,
      width: item?.image?.data?.attributes?.width,
      height: item?.image?.data?.attributes?.height,
    },
    h1: item.h || item.text,
    p: item?.p,
    link: item?.link,
  }));
  return (
    <Container className="md:py-[55px] py-[30px]">
      <div className="text-center md:mb-[55px] mb-[30px]">
        <h4 className="xl:text-4xl lg:text-[32px] text-[22px] font-bold md:mb-5 mb-3 md:leading-[48px] leading-[30px]">
          <span className="text-company mr-1">{section?.h1_purple}</span>
          {section?.h1_black}
        </h4>
        {section?.body ? (
          <div
            className="font-sans text-[14px] font-[400]  text-[#000]"
            dangerouslySetInnerHTML={createMarkup(section?.body)}
          ></div>
        ) : (
          <p className="max-w-5xl mx-auto text-sm">{section?.p}</p>
        )}
      </div>
      <div>
        <OurServicesCard
          isService={true}
          list={items}
          center={true}
          rowItems={isProcess ? 3 : 4}
          className="py-8 transition-colors ease-in duration-200 border border-transparent hover:border-primary"
        />
      </div>
    </Container>
  );
}
