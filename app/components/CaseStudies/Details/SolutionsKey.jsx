import Container from "app/components/common/Container";
import { apiEndpoint } from "app/scripts/fetch";
import LeftIconList from "app/components/common/LeftIconList";
import Image from "next/image";
import CloudinaryImage from "../../common/CloudinaryImage";

export default function SolutionsKey({ section }) {
  return (
    <Container className="md:py-[55px] py-[30px] bg-['#F5F5F5'">
      <div className="flex flex-col md:flex-row md:justify-around">
        <div className="succesful-team md:basis-1/2 md:mb-0 mb-3">
          <h4 className="lg:text-4xl md:text-[32px] text-[22px] text-secondary font-bold text-left mb-3">
            {section?.h}
          </h4>
          <p className=" text-sm text-left text-['#232323']">{section?.p}</p>
          <LeftIconList
            extraClassName="items-center "
            displayGrid={true}
            textClass="text-['#232323'] text-sm"
            gridCols={1}
            list={section?.section3_detail}
            customIcon={"check-secondary-icon.svg"}
          />
          <div className="flex px-6 py-2">
            <div className="flex-shrink-0 h-auto">
              <Image
                width={15}
                height={15}
                src={`/icons/download-arrow-company.svg`}
                className="block"
                alt={"download-arrow-company"}
              />
            </div>
            <p className={`pl-3 text-company `}>{section?.button_text}</p>
          </div>
        </div>
        <div className="relative md:basis-1/3 h-fit ">
          <div className="image-container">
            {section?.image?.data?.attributes?.url && (
              // <img
              //   src={apiEndpoint(section?.image?.data?.attributes?.url) ?? "/"}
              //   fill
              //   sizes="100%"
              //   alt={section?.image?.data?.attributes?.alternativeText || section?.image?.data?.attributes?.name}
              //   className={`relative image md:h-2/3 !w-full `}
              // />
              <CloudinaryImage
                backendImgUrl={section?.image?.data?.attributes?.url ?? "/"}
                className={`relative image md:h-2/3 !w-full  object-fill`}
                alt={section?.image?.data?.attributes?.alternativeText}
                type="smallimg"
              />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
