import Container from "app/components/common/Container";
import { apiEndpoint } from "app/scripts/fetch";
import LeftIconList from "../common/LeftIconList";
import CloudinaryImage from "../common/CloudinaryImage";

export default function VlinkResponsabilities({
  section_title,
  section_content,
}) {
  return (
    <div className="lg:flex flex-row">
      <div className="lg:w-[50%] bg-[#F7FAFF]">
        <div className="flex flex-col pr-8 py-10 pl-14  text-[14px]">
          <h5 className="xl:text-4xl lg:text-[32px] text-[22px] mb-5 xl:leading-[50px] lg:leading-[40px] leading-[35px] mb-3 font-bold text-left">
            {section_title?.h1_black}
            <span className="text-company"> {section_title?.h1_purple}</span>
          </h5>
          <p className="md:my-6 mb-[20px] text-[#001E4F] font-semibold tracking-[0.06em] text-[14px]">
            {section_title?.p}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            {section_content?.map((item, index) => {
              return (
                <div key={index}>
                  <p className="text-[#353535] font-semibold text-[20px] w-full pb-4">
                    {item?.title}
                  </p>
                  <p className="text-[#565656] font-semibold w-full pb-8">
                    {item?.p}
                  </p>
                  <LeftIconList
                    extraClassName="items-center md:p-1"
                    displayGrid={true}
                    gridCols={1}
                    list={item?.section3_list}
                    customIcon={"check-company-icon.svg"}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={`bg-[#F7FAFF] relative lg:w-[50%]`}>
        {section_title?.image?.data[0]?.attributes?.url ? (
          <CloudinaryImage
            backendImgUrl={
              section_title?.image?.data[0]?.attributes?.url ?? "/"
            }
            alt={section_title?.image?.data[0]?.attributes?.alternativeText}
            className={`absolute h-full w-full object-cover`}
          />
        ) : (
          <CloudinaryImage
            backendImgUrl={section_title?.image?.data?.attributes?.url ?? "/"}
            alt={section_title?.image?.data?.attributes?.alternativeText}
            className={`absolute h-full w-full object-cover`}
          />
        )}
      </div>
    </div>
  );
}
