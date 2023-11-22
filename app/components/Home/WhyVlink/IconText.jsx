// import Image from 'next/image'
import CloudinaryImage from "../../common/CloudinaryImage";

export default function IconText({ icon, h1, p, className = "" }) {
  return (
    <div
      className={`text-white text-center ${className} mb-6 flex flex-col gap-[5px]`}
    >
      <CloudinaryImage
        backendImgUrl={icon.src}
        className="mx-auto md:mb-4 mb-2 md:w-[50px] md:h-[50px] w-[30px] h-[30px]"
        alt={icon.alt}
        type="icon"
      />
      <h4 className="xl:text-[42px] lg:text-[28px] text-[22px] font-[700] mb-[5px] xl:leading-[55px] xl:leading-[35px] leading-[26px]">
        {h1}
      </h4>
      <p className="xl:text-[15px] lg:text-[13px] text-[12px] max-w-[165px] md:max-w-none mx-auto  font-sans  font-[600] xl:leading-[20px] xl:leading-[16px] leading-[16px]">
        {p}
      </p>
    </div>
  );
}
