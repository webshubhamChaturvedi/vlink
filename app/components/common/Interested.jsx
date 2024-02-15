import React from "react";
import Container from "./Container";
import Link from "next/link";

export default function Interested({ interested, setModalCall }) {
  return (
    <section className="lg:py-[55px] py-[35px] ">
      <Container>
        <div className="flex flex-wrap items-center justify-center">
          <div className="lg:mr-14 lg:mb-0 mb-5">
            <p className="text-[#353535] md:text-[40px] text-[30px] font-[600] text-center">
              {interested?.text}
            </p>
          </div>
          <div>
            {interested?.btnLink ? (
              <Link
                color="gray"
                href={`${interested?.btnLink}`}
                style={{
                  backgroundColor: interested?.btnColor,
                  color: interested?.btnIcon,
                }}
                className="text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 blue_btn text-[#ffffff_!important] white_btn relative rounded overflow-hidden text-center inline-block shadow-[10px_20px_40px_0px_#00000033]"
              >
                <span className="flex items-center rounded-md text-sm px-7 py-4">
                  <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#fff] group-hover:h-full opacity-1"></span>
                  <span className="font-[600] relative group-hover:text-black flex items-center text-[20px]">
                    {interested?.btnText}
                    <svg
                      className={`ml-2 stroke-[white] group-hover:stroke-[black]`}
                      width="16"
                      height="16"
                      viewBox="0 0 18 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.5 1.5L16 10.3684L8.5 19.2368"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.09375 1.5L9.59375 10.3684L2.09375 19.2368"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </span>
              </Link>
            ) : (
              <button
                id={interested?.btnText.split(" ").join("")}
                className={`buttonOpen bg-[#0029FF] text-white border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 group flex h-min items-center justify-center text-center font-medium focus:z-10 relative rounded overflow-hidden text-center inline-block px-7 py-3 shadow-[10px_20px_40px_0px_#00000033]`}
                // onClick={setModalCall}
              >
                <span
                  className={`bg-[#fff] absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:h-full opacity-1`}
                ></span>
                <span
                  className={`text-[20px] group-hover:text-black flex items-center font-[600] relative`}
                >
                  {interested?.btnText}
                  <svg
                    className={`ml-2 stroke-[white] group-hover:stroke-[black]`}
                    width="16"
                    height="16"
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 1.5L16 10.3684L8.5 19.2368"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.09375 1.5L9.59375 10.3684L2.09375 19.2368"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
