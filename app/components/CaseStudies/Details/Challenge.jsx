import Container from "app/components/common/Container";
import { apiEndpoint } from "app/scripts/fetch";
import CloudinaryImage from "../../common/CloudinaryImage";

export default function Challenge({ section }) {
  return (
    <div>
      <Container className="bg-['#F5F5F5']">
        <div className="flex flex-col md:flex-row md:justify-around items-center md:py-10 py-[30px]">
          <div className="succesful-team md:basis-1/2 md:mb-0 mb-4">
            <h4 className="lg:text-4xl md:text-[32px] text-[22px] font-bold text-secondary text-left mb-3">
              {section?.h}
            </h4>
            <p className="leading-8 text-sm font-normal text-['#353535']">
              {section?.p}
            </p>
          </div>
          <div className="relative md:basis-1/3 h-fit">
            <div className="image-container">
              {section?.image?.data[0]?.attributes?.url ? (
                <CloudinaryImage
                  backendImgUrl={
                    section?.image?.data[0]?.attributes?.url ?? "/"
                  }
                  className={`relative image !w-full object-fill`}
                  alt={section?.image?.data[0]?.attributes?.alternativeText}
                  type="smallimg"
                />
              ) : (
                <CloudinaryImage
                  backendImgUrl={section?.image?.data?.attributes?.url ?? "/"}
                  className={`relative z-20 image !w-full object-fill`}
                  alt={section?.image?.data?.attributes?.alternativeText}
                  type="smallimg"
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
