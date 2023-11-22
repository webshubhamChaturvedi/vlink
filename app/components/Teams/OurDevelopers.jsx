import Container from "app/components/common/Container";
import LeftIconList from "../common/LeftIconList";
import CloudinaryImage from "../common/CloudinaryImage";
import Image from "next/image";
export default function OurDevelopers({ section }) {
  return (
    <Container className="md:py-[55px] py-[30px]">
      <div className="flex flex-col lg:flex-row md:justify-around items-center">
        <div className="succesful-team lg:basis-1/2">
          <h5 className="xl:text-4xl lg:text-[32px] text-[22px] font-bold text-left xl:leading-[48px] md:leading-[42px] leading-[30px] mb-5">
            {section?.h1_black}
            <span className="text-company">{section?.h1_purple}</span>
          </h5>
          <p className=" text-left pb-6 text-[#353535]  text-[14px] leading-[28px]">
            {section?.p}
          </p>
          <LeftIconList
            extraClassName="items-center md:p-3 mb-6"
            displayGrid={true}
            gridCols={2}
            list={section?.our_developer_points}
            customIcon={"purple-dot-icon.svg"}
            alt={section?.our_developer_points}
          />
        </div>
        <div className="relative lg:basis-1/3 h-fit">
          <Image
            className="z-10 absolute top-0 right-0 translate-x-1/6 -translate-y-12"
            src="https://res.cloudinary.com/dwac0ziol/image/upload/c_fill,g_faces,w_100/Our_Developers_Circle_4ea58bb9f2.svg"
            alt="Vlink OurDevelopersCircle"
            width={450}
            height={350}
            loading="lazy"
          />
          <div className="image-container">
            {section?.image?.data[0]?.attributes?.url && (
              <CloudinaryImage
                backendImgUrl={section?.image?.data[0]?.attributes?.url ?? "/"}
                className="relative z-20 image !w-full object-fill"
                alt={section?.image?.data[0]?.attributes?.alternativeText}
                type="smallimg"
              />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
