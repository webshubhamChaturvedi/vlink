import Container from "app/components/common/Container";
import OurServicesCard from "app/components/Services/OurServicesCard";
import { apiEndpoint } from "app/scripts/fetch";

export default function Technology({ section }) {
  const items = section?.section6_content?.map((item) => ({
    icon: {
      src: apiEndpoint(item?.image?.data?.attributes?.url) ?? "/",
      alt: item?.image?.data?.attributes?.name,
      width: item?.image?.data?.attributes?.width,
      height: item?.image?.data?.attributes?.height,
    },
    h1: item.h,
    p: item?.p,
  }));
  return (
    <div
      className="bg-tell-us-your-needs bg-cover bg-no-repeat md:py-[55px] py-[30px]"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(74,12,100,0.96), rgba(74, 12, 100, 0.96)), url('https://res.cloudinary.com/dthpnue1d/image/upload/c_fill,g_faces,w_340/v1691470534/tell_us_your_needs_background_f008b0eb58.png')",
      }}
    >
      <div className="container">
        <div className="text-center md:mb-[55px] mb-[25px]">
          <h5 className="font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center mb-3 xl:leading-[50px] lg:leading-[40px] leading-[30px]">
            <span className="text-white">{section?.h}</span>
          </h5>
        </div>
      </div>
      <div className="">
        <OurServicesCard
          isService={true}
          list={items}
          center={true}
          rowItems={3}
          className="py-8 transition-colors ease-in duration-200 border border-transparent hover:border-primary"
        />
      </div>
    </div>
  );
}
