import Container from "app/components/common/Container";
import FeatureCard from "./FeatureCard";

const style = {
  para: {
    fontFamily: "'Open Sans', sans-serif",
    fontStyle: "normal",
    margin: 0,
    fontSize: "16px",
    fontWeight: 400,
    color: "#353535",
    textAlign: "center",
    maxWidth: "729px",
    display: "inline-block",
  },
};

export default function VlinkApart({
  data = {},
  head = "Team",
  justify = "center",
  background = "bg-vlink-apart",
  backgroundPosition = "center",
}) {
  const justification = {
    center: "justify-center",
    start: "justify-start",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  };
  return (
    <div
      className={`${background} ${backgroundPosition} bg-no-repeat md:py-[55px] py-[30px]`}
      style={style.container}
    >
      <Container className="text-center">
        <div className="md:mb-[40px] mb-[20px]">
          <h5 className="xl:text-4xl lg:text-[32px] text-[22px] font-bold mb-3 xl:leading-[55px] lg:leading-[40px] leading-[35px]">
            {data?.h1_black}
            <span className="text-company">{data?.h1_purple}</span>
          </h5>
          <div>
            <p style={style.para}>{data?.p}</p>
          </div>
        </div>

        <section className={`flex flex-wrap  ${justification[justify]}`}>
          {data?.VLink_Apart_Content?.length > 0 &&
            data?.VLink_Apart_Content?.map((cardData, index) => (
              <FeatureCard key={index} data={cardData} />
            ))}
        </section>
      </Container>
    </div>
  );
}
