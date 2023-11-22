import { useRouter } from "next/router";
import LINK from "../common/LINK";

const AnalyticsColItem = ({ item, index }) => {
  const router = useRouter();
  return (
    <div
      className={`md:col-span-1 col-span-2 py-4 px-4 text-center ${
        index === 0 && "md:border-r-[1px] md:border-r-[#fff]"
      }`}
    >
      <h4 className="font-sans md:text-[32px] text-[24px] font-[600] text-[#ffffff] mb-3">
        {item?.h1}
      </h4>
      <p className="font-sans md:text-[18px] text-[16px] font-[600] text-[#ffffff] mb-10">
        {item?.body}
      </p>
      <LINK
        m_top={"0px"}
        reflink={`${item?.href}`}
        py={"py-2"}
        px={"px-7"}
        FAIcon={""}
        bgColor={"#fff"}
        textColor={"#000"}
        hoverBgColor={"#0050D5"}
        HOVERTextColor={"#fff"}
        borderColor={"#0050D5"}
      >
        {item?.link}
      </LINK>
    </div>
  );
};

export default AnalyticsColItem;
