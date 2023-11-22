import Container from "app/components/common/Container";
import OurServicesCard from "app/components/Teams/OurServicesCard";
import { apiEndpoint } from "app/scripts/fetch";

export default function ExperiencedTeam({
  section,
  isHireDevelopers = false,
  isDetail,
}) {
  let items = isHireDevelopers
    ? section?.section6_detail?.map((item) => ({
        icon: {
          src: item?.image?.data?.attributes?.url ?? "/",
          alt: item?.image?.data?.attributes?.alternativeText,
          width: item?.image?.data?.attributes?.width,
          height: item?.image?.data?.attributes?.height,
        },
        h: item?.h,
        p: item?.p,
      }))
    : section?.section2_detail?.map((item) => ({
        icon: {
          src: item?.image?.data?.attributes?.url ?? "/",
          alt: item?.image?.data?.attributes?.alternativeText,
          width: item?.image?.data?.attributes?.width,
          height: item?.image?.data?.attributes?.height,
        },
        p: item?.p,
      }));
  return (
    <div className={`${isHireDevelopers && "bg-dedicated-teams"}`}>
      <Container
        className={` ${
          isDetail ? "md:pt-[55px] pt-[30px]" : "md:py-[55px] py-[30px]`"
        }`}
      >
        <div className="text-center md:mb-[45px] mb-[25px]">
          <h5 className="font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center mb-3">
            {section?.h1_black}
            <span className="text-company">{" " + section?.h1_purple}</span>
          </h5>
        </div>
        <div className="pb-0">
          <OurServicesCard
            isService={true}
            isHireDevelopers={true}
            isHireDevelopersDetails={true}
            list={items}
            center={true}
            rowItems={4}
            isDetail={isDetail}
            className={`py-8 px-4 text-xs ${
              isHireDevelopers
                ? "md:min-w-[330px] w-[100%]"
                : "md:min-w-[250px] w-[100%]"
            } transition-colors ease-in duration-200 border-[2px] border-['#fff'] hover:border-[#0050D5]`}
          />
        </div>
      </Container>
    </div>
  );
}
