import Card from "app/components/common/Card";
import Container from "app/components/common/Container";
import ArrowIcon from "app/components/icons/ArrowIcon";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { apiEndpoint } from "app/scripts/fetch";
export default function Faq({ section, isFaq = false, id, forCSS = false }) {
  let faqlist = isFaq
    ? section?.faq_list?.map((list, key) => ({
        question: list?.question,
        answer: list?.answer,
      }))
    : section?.faq_detail?.map((list, key) => ({
        question: list?.question,
        answer: list?.answer,
      }));

  const router = useRouter();

  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Container>
      <div
        className="md:py-[55px] py-[30px]"
        data-aos="fade"
        data-aos-easing="linear"
      >
        {isFaq ? (
          <div className="text-center">
            <h4 className="font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[45px] lg:leading-[35px] mb-5">
              <span
                className="inline-block font-bold bg-no-repeat bg-[center_top_30%] bg-size-40 pt-16 max-w-[800px]"
                style={{
                  backgroundImage: `url(${apiEndpoint(
                    section?.image?.data?.attributes?.url
                  )})`,
                }}
              >
                {section?.title}
              </span>
            </h4>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-primary font-semibold mb-4">{section?.h}</p>
            <h5 className="xl:text-4xl lg:text-[32px] text-[22px] font-bold">
              {section?.h1_black}
              <span className="text-company">{section?.h1_purple}</span>
            </h5>
          </div>
        )}

        <div className="flex md:pt-[55px] pt-[25px] flex-wrap">
          <div className="md:basis-3/4 md:pr-8">
            {faqlist?.map((item, key) => (
              <div
                className={`shadow-[0px_0px_2px_rgba(0,_0,_0,_0.25)] ${
                  key === 0
                    ? "rounded-[10px_10px_0px_0px] overflow-hidden"
                    : key === 3
                    ? "rounded-[0px_0px_10px_10px]"
                    : ""
                }`}
                key={key}
              >
                <div className={`open=${open === key}`}>
                  <div
                    onClick={() => handleOpen(key)}
                    className={`faq-question ${
                      key === 0
                        ? "rounded-[10px_10px_0px_0px] overflow-hidden"
                        : key === 3
                        ? "rounded-[0px_0px_10px_10px]"
                        : "shadow-[0px_-1px_0px_rgba(0,_0,_0,_0.1)]"
                    }`}
                  >
                    {item?.question}
                  </div>
                  <div className="faq-answer ">{item?.answer}</div>
                </div>
              </div>
            ))}
          </div>
          {/* TODO pending card text */}
          <Card
            className="bg-lightGray px-7 py-10"
            containerClass={`md:basis-1/4 basis-1/1 w-[100%] shadow-none md:pl-8 ${
              forCSS ? "pt-0" : "pt-5"
            }`}
            forCSS={true}
          >
            <h5 className="mb-3 font-semibold">Interested Fields</h5>
            <h5 className="text-primary mb-16 font-normal">
              {isFaq ? (
                section?.view_faqs?.map((item, key) => (
                  <Link
                    href={`${item.link !== null && item?.link}`}
                    key={key}
                    className="block"
                  >
                    {item?.text}
                  </Link>
                ))
              ) : (
                <Link
                  href="/services/cloud-managed-infrastructure-services"
                  className="block"
                >
                  Cloud Managed Services
                </Link>
              )}
              {isFaq
                ? section?.viewFaq?.map((item, key) => (
                    <Link href={`${item?.link}`} key={key} className="block">
                      {item?.text}
                    </Link>
                  ))
                : ""}
            </h5>
            <div
              className="flex items-center cursor-pointer"
              onClick={() => router.push("/about-us/faq")}
            >
              <h4 className="font-semibold" style={{ fontSize: "18px" }}>
                VIEW ALL FAQ
              </h4>
              <button
                className="w-6 h-6 bg-primary text-white !rounded-full p-1 ml-5 flex items-center"
                id="allFaq"
              >
                <ArrowIcon />
              </button>
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
}
