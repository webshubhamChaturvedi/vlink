import React, { useEffect } from "react";
import Container from "app/components/common/Container";
import LINK from "./LINK";
import CloudinaryImage from "../common/CloudinaryImage";

export default function SCMSolution({ crm }) {
  useEffect(() => {
    if (typeof document !== undefined) {
      const sidebarContentEl = document.querySelector("#some-id");
      const buttonnn = document.querySelectorAll(".buttonOpen");
      buttonnn.forEach((box) => {
        box.addEventListener("click", function () {
          sidebarContentEl.classList.add("mystyle");
        });
      });
      const removeButton1 = document.querySelectorAll(".buttonremove1");
      removeButton1.forEach((box) => {
        box.addEventListener("click", function () {
          sidebarContentEl.classList.remove("mystyle");
        });
      });
    }
  }, []);
  return (
    <section className="py-[55px] overflow-hidden">
      <Container>
        <div
          className={`max-w-[1300px] mx-auto flex flex-wrap rounded-[30px] py-[30px] px-[40px] shadow-[10px_10px_40px_10px_#0050D514]`}
          style={{ backgroundColor: crm?.bg_color }}
        >
          <div className="md:basis-7/12 flex items-center md:mb-0 mb-4">
            <div>
              <h5 className="text-[#01477A] font-bold lg:text-[50px] md:text-[40px] text-[24px] mb-5">
                {crm?.title}
              </h5>
              <button
                id={crm?.btn_text.split(" ").join("")}
                type="button"
                className={`buttonOpen m-0  py-3  px-9 text-[${crm?.btn_color}]
                 bg-[${crm?.btn_bgColor}] text-[18px] hover:bg-[#fff] hover:text-[#000] transition-all`}
              >
                {crm?.btn_text}
                <span className=" inline-block align-middle">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-right"
                    class="svg-inline--fa fa-arrow-right ml-2 font-[14px] w-[14px] "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className="md:basis-5/12 relative">
            <CloudinaryImage
              backendImgUrl={crm?.bg_image?.data?.attributes?.url}
              className="absolute top-[-30%] right-[-25%] w-[70%]"
              alt={crm?.bg_image?.data?.attributes?.alternativeText}
              type="smallimg"
            />
            <CloudinaryImage
              backendImgUrl={crm?.image.data?.attributes?.url}
              className="relative z-[0]"
              alt={crm?.image?.data?.attributes?.alternativeText}
              type="smallimg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
