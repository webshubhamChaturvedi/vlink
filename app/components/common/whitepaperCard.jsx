import { apiEndpoint } from "app/scripts/fetch";
import { useState } from "react";
import moment from "moment";
import { useRouter } from "next/router";
import { download } from "app/scripts/utils";
import ModalDownload from "./ModalDownload";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function WhitepaperCard({
  data = {},
  showDownload = true,
  key,
}) {
  const { router, push } = useRouter();
  const [show, setShow] = useState(false);
  const [modalDownload, setModalDownload] = useState(false);
  const showTooltip = (bool) => {
    setShow(bool);
  };

  return (
    <div
      className="mb-4 relative brochures_block drop-shadow-[0px_0px_15px_rgba(0,80,213,0.08)]"
      key={key}
    >
      <figure>
        <div
          style={{
            backgroundImage: `url("${apiEndpoint(
              data?.attributes?.image?.data?.attributes?.url
            )}")`,
          }}
          className={`w-full h-[230px] rounded-t-[10px] bg-cover bg-no-repeat bg-[#f9f9f9]`}
        />
      </figure>
      <div className="bg-[#fff] px-[15px] py-[18px] rounded-b-[10px]">
        <h6
          className={`text-[#07274B] lg:text-[18px] text-[16px] lg:leading-[30px] leading-[24px] font-[600] mb-[10px] ${
            showDownload ? "line-clamp-2" : "line-clamp-2 h-[60px]"
          }`}
        >
          {showDownload
            ? data?.attributes?.title
            : `${data?.attributes?.h1_black} ${data?.attributes?.h1_purple}`}
        </h6>
        {showDownload && (
          <p className="text-[#5C5C5C] text-[14px] leading-[19px] font-[400] line-clamp-2  h-[60px]">
            {data?.attributes?.p}
          </p>
        )}
        {!showDownload && (
          <p className="text-[#7F7D7D] text-[14px] leading-[19px] font-[400] ">
            {moment(data?.attributes?.date).format("MMMM DD, YYYY")}
          </p>
        )}
        <div className="flex justify-between mt-6 items-center">
          <p className="">
            {!showDownload ? (
              <Link
                rel="stylesheet"
                href={`/webinars/${data?.attributes?.slug}`}
                className="flex items-center font-sans text-[#62207E] text-[14px] font-[600] cursor-pointer"
              >
                Read More
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-2 font-[14px] w-[14px]"
                />
              </Link>
            ) : (
              <Link
                rel="stylesheet"
                href={`/resources/whitepapers/${data?.attributes?.slug}`}
                className="flex items-center font-sans text-[#62207E] text-[14px] font-[600] cursor-pointer"
              >
                Read More
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-2 font-[14px] w-[14px]"
                />
              </Link>
            )}
          </p>
          {showDownload && (
            <p
              className="flex align-center text-[#0050D5] cursor-pointer text-[14px] font-sansfont-[600] cursor-pointer"
              onClick={() => setModalDownload(true)}
            >
              <img
                src="/img/uil_file-download-alt.svg"
                alt="download"
                width="15"
                height="15"
              />
              Download
            </p>
          )}
        </div>
      </div>
      <div
        className="brochures_download flex bg-[rgba(0,80,213,0.71)] hidden absolute  top-0 left-0 rounded-[10px]  h-full w-full  items-center justify-center "
        style={{ display: show ? "flex" : "none" }}
      >
        <span className="bg-[#fff] w-[60px] h-[60px] flex items-center justify-center rounded-full z-[1] relative cursor-pointer">
          <img
            src="/img/brochure/download.svg"
            alt="download"
            className="rounded w-[30px]"
          />
        </span>
      </div>
      {modalDownload && (
        <ModalDownload
          isOpen={modalDownload}
          setIsOpen={setModalDownload}
          title={"Download Whitepaper"}
          downloadLink={apiEndpoint(
            data?.attributes?.pdf?.data?.attributes?.url
          )}
        />
      )}
    </div>
  );
}
