import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Link from "next/link";

const Faq = ({ faqs }) => {
  return (
    <section className="md:py-[55px] py-[30px]">
      <div className="container">
        <div className="text-center mb-[45px]">
          <p className="text-[#212121] text-[24px] font-[600] font-sans mb-4">
            FAQs
          </p>
          <h5 className="xl:text-4xl lg:text-[32px] text-[22px] font-bold">
            Frequently Asked <span className="text-company">Questions</span>
          </h5>
        </div>
        <div className="grid grid-cols-12">
          <div className="xl:col-span-9 col-span-12 xl:pr-8 xl:mb-0 mb-4">
            <Accordion className="bg-white rounded-[10px_!important] drop-shadow-[0px_0px_15px_rgba(0,0,0,0.1)]">
              {faqs?.map((item, index) => (
                <AccordionItem key={item?.id}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {index + 1} - {item?.question}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>{item?.answer}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <section className="xl:col-span-3 col-span-12 undefined bg-white rounded-[10px]  relative mb-8 w-[100%] h-[100%] w-[100%] shadow-none xl:pl-8">
            <div className="!mt-0 py-5 px-5 bg-lightGray px-7 py-10">
              <h5 className="mb-3 font-semibold">Interested Fields</h5>
              <h5 className="text-primary mb-16 font-normal">
                <Link href="/services/cloud-managed-infrastructure-services/">
                  Cloud Managed Services
                </Link>
              </h5>
              <div className="flex items-center cursor-pointer">
                <h4 className="font-semibold" style={{ fontSize: "18px" }}>
                  VIEW ALL FAQ
                </h4>
                <button className="w-6 h-6 bg-primary text-white !rounded-full p-1 ml-5 flex items-center">
                  <svg
                    width="14"
                    height="18"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7H17M17 7L11 1M17 7L11 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Faq;
