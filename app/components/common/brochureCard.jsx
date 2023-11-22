import { apiEndpoint } from "app/scripts/fetch";
import { download } from "app/scripts/utils";
import { useState } from "react";
import ModalDownload from "./ModalDownload";
import CloudinaryImage from "../common/CloudinaryImage";

export default function BroctureCard({ data = {}, key }) {
  const [show, setShow] = useState(false);
  const [modalDownload, setModalDownload] = useState(false);
  const showTooltip = (bool) => {
    setShow(bool);
  };
  return (
    <div
      key={key}
      className="bg-[#fff] relative cursor-pointer brochures_block drop-shadow-[0px_0px_15px_rgba(0,80,213,0.08)]"
      onMouseOver={() => showTooltip(true)}
      onMouseLeave={() => showTooltip(false)}
    >
      <figure>
        <CloudinaryImage
          backendImgUrl={data?.image?.data?.attributes?.url}
          alt={data?.image?.data?.attributes?.alternativeText}
          className={`w-full h-[250px] rounded-t-[10px] bg-cover bg-no-repeat bg-[#f9f9f9]`}
          type={"smallimg"}
        />
      </figure>
      <div className="bg-[#fff] px-[15px] py-[18px] rounded-b-[10px]">
        <h6 className="text-[#07274B] text-[18px] leading-[30px] font-[600] mb-[10px]">
          {data?.h}
        </h6>
        <p className="text-[#5C5C5C] text-[14px] leading-[19px] font-[400]">
          {data?.p}
        </p>
      </div>
      <div
        className="brochures_download flex bg-[rgba(0,80,213,0.71)] hidden absolute  top-0 left-0 rounded-[10px]  h-full w-full  items-center justify-center "
        style={{ display: show ? "flex" : "none" }}
        onClick={() => setModalDownload(true)}
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
          title={"Download Brochure Report"}
          downloadLink={apiEndpoint(data?.pdf?.data?.attributes?.url)}
        />
      )}
    </div>
  );
}
