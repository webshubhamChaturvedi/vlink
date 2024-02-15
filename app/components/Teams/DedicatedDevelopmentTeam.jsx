import Image from "next/image";
import Card from "app/components/common/Card";
import Container from "app/components/common/Container";
import { apiEndpoint } from "app/scripts/fetch";
import { useMemo, useState } from "react";
import CloudinaryImage from "../common/CloudinaryImage";

export default function DedicatedDevelopmentTeam({ section }) {
  /**
   * ICONS HAVE TO BE SVG WITH fill-currentColor!
   */
  // const { h1_black, h1_purple, h2_black, team_section4detail } = section;
  const [hover, setHover] = useState(-1);

  const items = useMemo(() => {
    return section?.team_section4detail?.map(
      ({ h, p, image, image_hover }, index) => ({
        icon: {
          src:
            hover === index
              ? image_hover?.data?.attributes?.url
              : image?.data?.attributes?.url ?? "/",
          alt: image?.data?.attributes?.alternativeText,
          width: image?.data?.attributes?.width,
          height: image?.data?.attributes?.height,
        },
        h,
        p,
      })
    );
  }, [hover, section?.team_section4detail]);
  return (
    <div className="bg-dedicated-teams md:py-[55px] py-[30px]">
      <Container>
        <h5 className="xl:text-4xl lg:text-[32px] text-[22px] font-bold text-center max-w-[700px] m-auto md:mb-[45px] mb-[25px] md:leading-[48px]">
          {section?.h1_black}
          <span
            className="text-company whitespace-pre-line ml-1"
            style={{ margin: "0 0 0 10px" }}
          >
            {section?.h1_purple}
          </span>
          {section?.h2_black}
        </h5>
        <div className="grid xl:grid-cols-4 lg:grid-cols-2 gap-6">
          {items?.map(({ h, p, icon }, index) => (
            <span
              onMouseOver={() => setHover(index)}
              onMouseLeave={() => setHover(-1)}
              className="block h-[100%] w-[100%]"
              key={index}
            >
              <div
                className={`py-5 px-5 dedicated-teams-card rounded-lg h-full shadow-shadowGrid text-center bg-white flex flex-col w-[100%]`}
              >
                <div
                  className={`bg-primary text-white rounded-full md:p-4 p-3 w-fit mx-auto mb-3`}
                >
                  <CloudinaryImage
                    backendImgUrl={icon.src}
                    className="md:w-[45px] md:h-[45px] w-[35px] h-[35px]"
                    alt={icon.alt}
                    type="icon"
                  />
                </div>
                <h6 className="md:text-lg text-[18px] font-bold mb-3 font-sans">
                  {h}
                </h6>
                <p className={"text-gray font-sans text-[14px]"}>{p}</p>
              </div>
            </span>
          ))}
        </div>
      </Container>
    </div>
  );
}
