import Card from "app/components/common/Card";
import Container from "app/components/common/Container";
import ArrowIcon from "app/components/icons/ArrowIcon";
import { createMarkup } from "app/scripts/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
// import {
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
// } from "@material-tailwind/react";

export default function Faq({ section }) {

  const router = useRouter();
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Container>
      <div className="md:py-[55px] py-[30px]">
        <div className="text-center">
          <h5 className="font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center mb-3">
            {section?.h1_black}
            <span className="text-company">{section?.h1_purple}</span>
            {" " + section?.h2_black}
          </h5>
        </div>

        <div className="flex flex-wrap md:pt-[55px] pt-[25px]">
          <div className="lg:basis-3/4 lg:pr-8 mb-4 pr-0">
            <div>
              {section?.faqs?.map((item, key) => (
                <div className={key} key={key}>
                  <div className={`open=${open === key}`}>
                    <div onClick={() => handleOpen(key)}  className={`faq-question`} >
                      {item?.q || item?.title}
                    </div>
                    <div className="faq-answer">
                      {item.a || item?.body ? (
                        <div
                          dangerouslySetInnerHTML={createMarkup(
                            item.a || item?.body
                          )}
                        ></div>
                      ) : (
                        <p>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                // <AccordionItem key={key}>
                //   <AccordionItemHeading>
                //     <AccordionItemButton>
                //       {item?.q || item?.title}
                //     </AccordionItemButton>
                //   </AccordionItemHeading>
                //   <AccordionItemPanel>
                //     {item.a || item?.body ? (
                //       <div
                //         dangerouslySetInnerHTML={createMarkup(
                //           item.a || item?.body
                //         )}
                //       ></div>
                //     ) : (
                //       <p>
                //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
                //         Sit inventore ipsa commodi recusandae reprehenderit ut
                //         neque amet enim corrupti deserunt.
                //       </p>
                //     )}
                //   </AccordionItemPanel>
                // </AccordionItem>
              ))}
            </div>
          </div>
          {/* TODO pending card text */}
          <Card
            className="bg-lightGray px-6 py-8 "
            containerClass="lg:basis-1/4 w-[100%] shadow-none "
          >
            <p className="mb-3">Interested Fields</p>
            <p className="text-primary mb-2">
              <Link href="/hire-developers/react">React</Link>
            </p>
            <p className="text-primary mb-2">
              <Link href="/hire-developers/nodejs">Full Stack</Link>
            </p>
            <p className="text-primary mb-2">
              <Link href="/hire-developers/java">Java</Link>
            </p>
            <p className="text-primary mb-2">
              <Link href="/hire-developers/nodejs">Node Js</Link>
            </p>
            <p className="text-primary mb-2">
              <Link href="/hire-developers/angular">Angular</Link>
            </p>
            <div
              className="flex items-center cursor-pointer"
              onClick={() => router.push("/about-us/faq")}
            >
              <div className="font-bold">VIEW ALL FAQ</div>
              <button className="w-6 h-6 bg-primary text-white !rounded-full p-1 ml-5 flex items-center ">
                <ArrowIcon />
              </button>
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
}
