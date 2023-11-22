import { useState } from "react";
import { createMarkup } from "app/scripts/utils";

export default function FaqData({ data = {} ,key}) {
  const [open, setOpen] = useState();

  return (
    <div className="faq-box mb-5" key={key}>
      <div
        className="flex items-center faq-qt bg-[#F5F5F5] p-4 border border-[#92929280] rounded-[4px] font-semibold cursor-pointer "
        onClick={() => setOpen((prev) => !prev)}
        style={{color:open?'#62207E':'#2B2B2D'}}
      >
        <span className="mr-5 inline-block">
          <img
            src={open ? "/img/faq/minus.svg" : "/img/faq/plus.svg"}
            alt="plus"
            srcSet=""
            className="min-w-[0.8rem] w-[0.8rem]"
          />
        </span>
        {data?.q}
      </div>
      <div
        style={{ display: open ? "" : "none" }}
        className="faq-content border border-[#92929280] py-4 px-8 faq-qt rounded-[4px] faq-ans"
        dangerouslySetInnerHTML={createMarkup(data?.a)}
      ></div>
    </div>
  );
}
