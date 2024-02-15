import { apiEndpoint } from "app/scripts/fetch";
import CloudinaryImage from "../common/CloudinaryImage";

const style = {
  container: {
    // height: "264px",
    // width: "331px",
    borderRadius: "10px",
    background: "#FFFFFF",
    boxShadow: "0px 0px 40px rgba(0, 80, 213, 0.13)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    padding: "40px 20px",
  },
  text: {
    fontFamily: "'Open Sans', sans-serif",
    fontStyle: "normal",
    letterSpacing: "0.05em",
    margin: 0,
  },
  image: {
    width: "55px",
    height: "55px",
  },
  count: {
    fontWeight: 700,
    fontSize: "55px",
    color: "#000000",
  },
  desc: {
    fontSize: "17px",
    color: "#353535",
    fontWeight: 600,
    letterSpacing: "0.05em",
  },
};
export default function FeatureCard({ data }) {
  return (
    <div className="w-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-4 d">
      <div style={style.container} className="h-full">
        <CloudinaryImage
          type="icon"
          backendImgUrl={data?.icon?.data?.attributes?.url}
          alt={data?.icon?.data?.attributes?.alternativeText}
          className=" w-12 h-12"
        />
        <p style={{ ...style.count, ...style.text }}>{data?.no}</p>
        <p style={{ ...style.desc, ...style.text }}>{data?.text}</p>
      </div>
    </div>
  );
}
