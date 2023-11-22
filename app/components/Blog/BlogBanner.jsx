import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import Link from "next/link";
import CloudinaryImage from "../common/CloudinaryImage";
export default function BlogBanner({ bannerData }) {
  const luxonDate = DateTime.fromJSDate(new Date(bannerData?.postDate));
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section
      className=" bg-cover bg-center bg-no-repeat bg-[red]"
      style={{
        // backgroundImage: `url(${apiEndpoint(bannerData?.bgImg?.data?.attributes?.url)})`,
        backgroundImage: `linear-gradient(140deg, ${bannerData?.bgColor} 0%, ${bannerData?.bgColor2} 75%)`,
      }}
    >
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="lg:col-span-8 col-span-12">
            <div className="md:py-[55px] py-[30px]">
              <h1
                className="text-[#fff] text-[23px] md:text-[32px] xl:text-[65px] font-[700] leading-[35px] 
              xl:leading-[78px] md:leading-[44px] lg:text-[26px]"
              >
                {bannerData?.h1}
              </h1>
              <span className="w-[230px] h-[3px] bg-[#FFD100] block mt-[20px]"></span>
              <div className="mt-10">
                <p className="text-[14px] font-[600] text-[rgba(255,_255,_255,_0.8)] mb-3">
                  {bannerData?.auth_title}
                </p>
                <div className="text-[16px] text-[#FFFFFF] font-[600] flex items-center gap-2 flex-wrap">
                  <div className=" inline-flex items-center">
                    <CloudinaryImage
                      backendImgUrl={
                        bannerData?.auth_img?.data?.attributes?.url
                      }
                      className="rounded-[100%] max-w-10 max-h-10"
                      alt={
                        bannerData?.auth_img?.data?.attributes?.alternativeText
                      }
                      type="icon"
                    />
                    <span className="  ml-2">{bannerData?.auth_name}</span>
                  </div>
                  <div className=" inline-flex">
                    <Link
                      href={`${bannerData?.linkedin_link}`}
                      className=" inline-block ml-1 mr-1"
                    >
                      <span className="hidden">LinkedIn</span>

                      <CloudinaryImage
                        backendImgUrl={`/uploads/mdi_linkedin_7142cdcaf1.png`}
                        className=" w-6 h-6"
                        alt={"LinkedIn"}
                        type="icon"
                      />
                    </Link>
                    |
                    <span className=" inline-block ml-1 mr-1">
                      {luxonDate.day.toLocaleString({
                        minimumIntegerDigits: 2,
                      })}
                      {luxonDate.toFormat("MMM")} {luxonDate.toFormat("yyyy")}
                    </span>
                    <span className=" inline-block ml-1 mr-1">
                      {bannerData?.read_time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {windowWidth > 768 && (
            <div className="col-span-4 flex flex-wrap items-center py-[20px]">
              <CloudinaryImage
                backendImgUrl={bannerData?.img?.data?.attributes?.url}
                alt={bannerData?.img?.data?.attributes?.alternativeText}
                type="smallimg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
