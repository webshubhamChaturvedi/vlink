import Container from "app/components/common/Container";
import CallIcon from "app/components/icons/CallIcon";
import { useRouter } from "next/router";
import LINK from "../common/LINK";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function TellUsYourNeeds({ section }) {
  const router = useRouter();
  return (
    <div
      className="bg-tell-us-your-needs bg-cover bg-no-repeat pt-20 pb-16 mb-5"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(74,12,100,0.96), rgba(74, 12, 100, 0.96)), url('https://res.cloudinary.com/dthpnue1d/image/upload/c_fill,g_faces,w_991/v1691470534/tell_us_your_needs_background_f008b0eb58.png')",
      }}
    >
      <Container className="text-center text-white space-y-10">
        <p className="leading-loose text-xl">{section?.body}</p>
        <LINK
          m_top={"0px"}
          reflink={`${section?.href}`}
          py={"py-3"}
          px={"px-7"}
          FAIcon={faPhone}
          bgColor={"#"}
          textColor={"#fff"}
          hoverBgColor={"#fff"}
          HOVERTextColor={"#000"}
          borderColor={"#ffffff"}
          textFont={"16px"}
        >
          {section?.label}
        </LINK>
      </Container>
    </div>
  );
}
