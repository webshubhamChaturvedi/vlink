import Image from "next/image";
import { apiEndpoint } from "app/scripts/fetch";
import CloudinaryImage from "../../common/CloudinaryImage";

export function OurSolutionsItem({ image_url, alt, h, p }) {
  return (
    <div className="group bg-white p-3 flex flex-wrap rounded-lg hover:bg-[#0050D5] transition-all">
      <div className="lg:basis-1/4 rounded-lg lg:pr-3 w-[100%] lg:mb-[0px] mb-[10px]">
        <div className="w-20 h-20 m-auto rounded-full p-4 bg-[#0050D5] group-hover:bg-[#006dff]">
          <CloudinaryImage
            backendImgUrl={image_url}
            alt={alt}
            className={`image w-full rounded-lg h-full`}
            type="smallimg"
          />
        </div>
      </div>
      <div className="group-hover:text-white space-y-3 md:pl-3 pl-0 md:mt-0 mt-3 lg:basis-2/3 lg:pr-8 lg:text-left text-center">
        <div className="text-[18px] font-[600] font-sans">{h}</div>
        <p className="text-[#6D6D6D] text-[14px] font-sans group-hover:text-white">
          {p}
        </p>
      </div>
    </div>
  );
}
