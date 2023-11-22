import Container from "app/components/common/Container";
// import { apiEndpoint } from "app/scripts/fetch";
import CloudinaryImage from "../../common/CloudinaryImage";

export default function OverView({ section }) {
  return (
    <div>
      <Container className="bg-['#D9D9D9']">
        <div className="flex flex-col md:flex-row md:justify-around items-center md:py-10 py-[30px]">
          <div className="relative md:basis-2/3 h-fit md:mb-0 mb-[20px]">
            <div className="image-container">
              {section?.image?.data[0]?.attributes?.url ? (
                <CloudinaryImage
                  backendImgUrl={
                    section?.image?.data[0]?.attributes?.url ?? "/"
                  }
                  className={`relative z-20 image !w-full object-fill`}
                  alt={section?.image?.data[0]?.attributes?.alternativeText}
                />
              ) : (
                <CloudinaryImage
                  backendImgUrl={section?.image?.data?.attributes?.url ?? "/"}
                  className={`relative image !w-full object-fill`}
                  alt={section?.image?.data?.attributes?.alternativeText}
                />
              )}
            </div>
          </div>
          <div className="succesful-team md:basis-1/2">
            <h4 className="lg:text-4xl md:text-[32px] text-[22px] font-bold text-secondary text-left mb-3">
              {section?.h2}
            </h4>
            <p className="leading-8 font-normal text-['#353535'] text-[16px]">
              {section?.p2}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
