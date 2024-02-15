import Container from "app/components/common/Container";
import { apiEndpoint } from "app/scripts/fetch";
import CloudinaryImage from "../common/CloudinaryImage";

export default function SuccesfulNumber({ data }) {
  const URL = data.image?.data?.attributes?.url;
  return (
    <>
      {URL?.length > 0 ? (
        <div
          className=" bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url("https://res.cloudinary.com/dthpnue1d/image/upload/v1690804887/Rectangle_94_691b125d07.svg")`,
          }}
        >
          <Container className="grid md:grid-cols-12 grid-cols-1">
            <div className="bg-white px-9 lg:py-16 py-8 col-span-4">
              <h5 className="font-bold xl:text-[28px] text-[22px] md:mb-5 mb-3 font-sans xl:leading-[38px] leading-[30px]">
                {data.h1_black}
                <span className="text-company ml-2">{data.h1_purple}</span>
              </h5>
              <p className="text-[#4B4B4B] md:text-[16px] text-[14px] font-sans">
                {data.p ? data.p : data.body}
              </p>
            </div>
            <div className="flex flex-wrap justify-around w-full col-span-8 items-center md:py-0 py-8">
              {data.section1?.map((experience, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-white sm:base-1/3 base-1/1 md:p-8 p-4"
                >
                  <CloudinaryImage
                    backendImgUrl={experience?.image?.data?.attributes?.url}
                    className="mb-5 h-[30px]"
                    alt={
                      experience?.image?.data?.attributes?.url.alternativeText
                    }
                    type="icon"
                  />
                  <div className="w-1/2 border-t border-white"></div>
                  <p className="text-[24px] font-bold pt-8 mb-3">{`${experience?.num}+`}</p>
                  <p className="uppercase">{experience?.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      ) : null}
    </>
  );
}
