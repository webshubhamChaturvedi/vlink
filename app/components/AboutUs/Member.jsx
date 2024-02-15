import Card from "app/components/common/Card";
import MemberEmailIcon from "app/components/icons/MemberEmailIcon";
import MemberLinkedinIcon from "app/components/icons/MemberLinkedinIcon";
// import Image from 'next/image'
import Link from "next/link";
import CloudinaryImage from "../common/CloudinaryImage";

export default function Member({
  name,
  designation,
  p,
  image,
  email,
  linkedin,
  label,
  target,
  href,
  noPadding = false,
  paddingLeft = false,
  paddingRight = false,
}) {
  return (
    <div
      className={`sm:basis-1/2 md:basis-1/3 lg:basis-1/4 ${
        noPadding ? "" : "px-0 mb-[50px]"
      } ${paddingLeft ? "px-0  mb-[60px]" : ""} ${
        paddingRight ? "px-0" : ""
      }  py-0  mb-[60px]`}
    >
      <Card
        containerClass="member-card bg-lighterGray rounded-lg shadow-lg h-full relative"
        className="text-center p-4"
      >
        <CloudinaryImage
          backendImgUrl={image.src}
          className="rounded-lg  m-auto mt-[-70px] relative  w-72 h-72"
          type={"smallimg"}
          width={image.width}
          height={image.height}
          alt={image?.alternativeText}
        />
        <h6 className="text-[20px] font-bold text-[#353535] mt-3 mb-3">
          {name}
        </h6>
        <p className="text-[16px] font-semibold mb-3 text-[#565656] leading-[24px]">
          {designation}
        </p>
        <span className="text-[14px] mb-3 text-[#7F7D7D] block">
          <span className=" line-clamp-3">{p}</span>
          <Link href={href} className="text-black font-bold">
            {label}
          </Link>
        </span>

        <div className="left-0 right-0 bottom-6 flex items-center justify-center text-primary space-x-3">
          {!linkedin.includes("#") && (
            <Link href={linkedin} target="_blank" rel="noreferrer">
              <span className="hidden">LinkedIn</span>
              <MemberLinkedinIcon height={44} width={44} />
            </Link>
          )}
          <Link href={`mailto:${email}`} target="_blank" rel="noreferrer">
            <MemberEmailIcon height={44} width={44} />
          </Link>
        </div>
      </Card>
    </div>
  );
}
