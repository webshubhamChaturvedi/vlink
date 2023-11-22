import React from "react";

const Banner = ({ section }) => {
  return (
    <section className="md:py-[55px] py-[30px]">
      <div className="container">
        <div className="bg-financial-image bg-why-vlink-texture bg-primary p-[60px] rounded-[10px]">
          <div className="flex justify-center items-center flex-wrap max-w-[1000px] mx-auto">
            <div className="text-white text-left border-r border-lightGrayTransparent md:border-r-0 mb-6 flex flex-col gap-[5px] flex-1">
              <h3 className="xl:text-[42px] lg:text-[28px] text-[22px] font-[700] mb-[5px] xl:leading-[55px]  leading-[26px]">
                {section?.professionals}
              </h3>
              <p className="xl:text-[15px] lg:text-[13px] text-[12px] max-w-sm   font-sans font-[600] xl:leading-[20px]  leading-[16px]  ">
                {section?.professionals_text}
              </p>
            </div>
            <div className="text-white text-left border-r border-lightGrayTransparent md:border-r-0 mb-6 flex flex-col gap-[5px] justify-center items-center text-center flex-1">
              <h3 className="xl:text-[42px] lg:text-[28px] text-[22px] font-[700] mb-[5px] xl:leading-[55px] leading-[26px]">
                {section?.delivered_text}
              </h3>
              <p className="xl:text-[15px] lg:text-[13px] text-[12px] max-w-[165px] md:max-w-none  font-sans font-[600] xl:leading-[20px]  leading-[16px] text-center">
                {section?.delivered}
              </p>
            </div>
            <div className="text-white text-left border-r border-lightGrayTransparent md:border-r-0 mb-6 flex flex-col gap-[5px] flex-1 text-center">
              <h3 className="xl:text-[42px] lg:text-[28px] text-[22px] font-[700] mb-[5px] xl:leading-[55px] xl:leading-[35px] leading-[26px]">
                {section?.satisfactions}
              </h3>
              <p className="xl:text-[15px] lg:text-[13px] text-[12px] max-w-[165px] md:max-w-none  font-sans font-[600] xl:leading-[20px] xl:leading-[16px] leading-[16px]">
                {section?.satisfactions_test}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
