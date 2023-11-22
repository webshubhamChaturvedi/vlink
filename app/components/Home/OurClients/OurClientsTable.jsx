// import Image from "next/image";
// import { chunk } from "lodash";
import CloudinaryImage from "../../common/CloudinaryImage";

export default function OurClientsTable({ data = [] }) {
  // const items = chunk(data, 3); // 3 items per row
  return (
    <div className="w-full" id="our-clients">
      <div className="grid grid-cols-3 row">
        <div className="col h-8 md:p-[2rem] p-[.6rem]"></div>
        <div className="col h-8 md:p-[2rem] p-[.6rem]"></div>
        <div className="col h-8 md:p-[2rem] p-[.6rem]"></div>
      </div>

      {/* {items?.length > 0 &&
        items?.map((item, key) => ( */}
      <div className="grid grid-cols-3 row">
        {data.map(({ src, alt, width, height }, key) => (
          <div
            className={`border-[1px] border-[rgb(209_213_219_/_1)] col p-[.6rem] md:p-[2rem] transition-all duration-300 ease-in hover:shadow-shadowGrid ${
              key === 0
                ? "border-l-0"
                : key === 2
                ? "border-r-0"
                : key === 3
                ? "border-l-0"
                : key === 5
                ? "border-r-0"
                : key === 6
                ? "border-l-0"
                : ""
            }`}
            key={key}
          >
            <CloudinaryImage
              backendImgUrl={src}
              className="md:h-auto  w-[100px]"
              alt={alt}
              type="icon"
            />
          </div>
        ))}
      </div>
      {/* ))} */}

      <div className="grid grid-cols-3 row">
        <div className="col h-8 md:p-[2rem] p-[.6rem]"></div>
        <div className="col h-8 md:p-[2rem] p-[.6rem]"></div>
        <div className="col h-8 md:p-[2rem] p-[.6rem]"></div>
      </div>
    </div>
  );
}
