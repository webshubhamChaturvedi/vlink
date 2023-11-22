import Container from "app/components/common/Container";
import JourneyCard from "./JourneyCard";

const style = {
  container: {
    paddingTop: "10px",
    marginBottom: "40px",
  },
  section: {
    alignItems: "flex-end",
    backgroundColor: "rgba(249, 249, 249, 0.75)",
    padding: "20px 0",
    maxWidth: "100vw",
    overflowX: "auto",
  },
};

export default function Journey({
  data = {},
  background, // = "bg-vlink-apart",
  backgroundPosition = "center",
}) {
  return (
    <div
      className={`!pt-10 ${background} ${backgroundPosition} bg-no-repeat`}
      style={style.container}
    >
      <div className="text-center">
        <h6 className="xl:text-4xl lg:text-[28px] text-[22px] font-sans font-bold mb-[45px] xl:leading-[55px] lg:leading-[40px] leading-[30px]">
          {data?.h1_black}
          <span className="text-company">{data?.h1_purple}</span>
        </h6>
        <section className={`flex`} style={style.section}>
          {data?.Our_Journey_content?.length > 0 &&
            data?.Our_Journey_content?.map((cardData, index) => (
              <JourneyCard
                key={index}
                data={cardData}
                position={48 * index}
                index={index}
                max={data?.Our_Journey_content?.length}
              />
            ))}
        </section>
      </div>
    </div>
  );
}
