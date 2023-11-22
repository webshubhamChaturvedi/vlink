import Image from "next/image";
import Card from "app/components/common/Card";
import Container from "app/components/common/Container";
import { apiEndpoint } from "app/scripts/fetch";
import { createMarkup } from "app/scripts/utils";
import CloudinaryImage from "../../common/CloudinaryImage";

export default function DedicatedDevelopmentTeam({ section }) {
  /**
   * ICONS HAVE TO BE SVG WITH fill-currentColor!
   */
  // const { h1_black, h1_purple, h2_black, team_section4detail } = section;
  const items = section?.section6_detail?.map(({ title, body, image }) => ({
    icon: {
      src: image?.data?.attributes?.url ?? "/",
      alt: image?.data?.attributes?.alternativeText,
      width: image?.data?.attributes?.width,
      height: image?.data?.attributes?.height,
    },
    h: title,
    p: body,
  }));

  return (
    <div className="bg-dedicated-teams md:py-[55px] py-[30px]">
      <Container>
        <h3 className="font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center mb-3 xl:leading-[50px] lg:leading-[40px] leading-[30px]">
          {section?.h1_black}
          <span className="text-company"> {section?.h1_purple}</span>
        </h3>
        <p className="text-[#6D6D6D] text-[14px] text-center">
          {section?.body}
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 md:pt-12 pt-10 pb-0">
          {items?.map(({ h, p, icon }, index) => (
            <Card
              key={index}
              className={`py-10 px-6 rounded-lg h-full shadow-shadowGrid text-center bg-white ease-in duration-200 border-[2px] border-['#fff'] hover:border-[#0050D5]`}
            >
              <div className={` text-white w-fit mx-auto mb-3`}>
                {/* <img
                  {...icon}
                  className="md:w-[80px] md:h-[80px] w-[60px] h-[60px]"
                  alt="card"
                /> */}
                <CloudinaryImage
                  backendImgUrl={icon.src}
                  className="md:w-[80px] md:h-[80px] w-[60px] h-[60px]"
                  alt={icon.alt}
                />
              </div>
              <h5 className="text-[#0050D5] mb-3 text-[20px] font-bold text-[#0050D5] mb-3 text-[20px] font-bold">
                {h}
              </h5>
              <p
                className={
                  "mx-auto text-[#353535] text-center text-[14px] leading-5 "
                }
                dangerouslySetInnerHTML={createMarkup(p)}
              ></p>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
