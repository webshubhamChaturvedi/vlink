import Container from "app/components/common/Container";
import CallIcon from "app/components/icons/CallIcon";
import { apiEndpoint } from "app/scripts/fetch";
import BuildingTexture from "./../../../../public/img/building-texture.png";
import Comillas from "./../../../../public/icons/comillas-icons.png";
import ModalDownload from "app/components/common/ModalDownload";
import React, { useState } from "react";
export default function ToLearnMore({
  text,
  button,
  violetTarget,
  downloadLink,
  isNewsRoom,
}) {
  const [modalDownload, setModalDownload] = useState(false);

  return (
    <div className="bg-['#D9D9D9']">
      <div
        className="md:py-[60px] md:px-[30px] py-[30px] px-[5px]"
        style={{
          backgroundImage: `url(
            "https://res.cloudinary.com/dthpnue1d/image/upload/c_fill,g_faces,w_991/v1691470403/building_texture_7d168e409f.png"
          )`,
          height: "auto",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="flex flex-col md:flex-row md:justify-around items-center p-0">
            <div
              className="succesful-team md:basis-1/2 basis-1/2 justify-center"
              style={{ visibility: !isNewsRoom ? "visible" : "hidden" }}
            >
              <h6 className="xl:text-4xl lg:text-[32px] text-[22px] text-[#002856] font-[700] mb-6">
                {text && text}
              </h6>
              {button && (
                <div className="flex space-x-6">
                  <button
                    onClick={() => {
                      setModalDownload(true);
                    }}
                    href=""
                    className="bg-primary text-white flex justify-between items-center lg:px-6 px-3 py-[10px]"
                  >
                    <span className="mr-6 lg:text-[18px] text-[14px]">
                      {button?.text || "without text"}
                    </span>
                    <img
                      src="/icons/arrow-right-white-short.svg"
                      alt="arrow-right"
                      width={25}
                      height={25}
                    />
                  </button>
                </div>
              )}
            </div>
            <div
              className={
                "hidden lg:block md:basis-1/2 lg:basis-1/2  2xl:basis-1/2 p-8"
              }
            >
              <div
                className="bg-[#62207E] shadow-sm p-6 relative text-white pt-4"
                style={{ padding: "20px", borderRadius: "20px" }}
              >
                <img
                  src={Comillas?.src || ""}
                  className="m-2 block"
                  style={{ width: "40px" }}
                  alt={Comillas?.alternativeText || Comillas?.src}
                />
                <p className="text-[#ffffff] xl:text-[22px] lg:text-[20px] text-[16px] mb-2">
                  {violetTarget?.text && violetTarget.text}
                </p>
                <div id="white for" className="flex justify-end items-center">
                  <div className="flex flex-col items-end">
                    <span className="text-md font-bold text-right">
                      {violetTarget?.by && violetTarget?.by}
                    </span>
                    <span className="text-sm font-light text-right">
                      {violetTarget?.designation && violetTarget?.designation}
                    </span>
                  </div>
                  <img
                    src={Comillas?.src || ""}
                    className="rotate-180 m-4"
                    style={{ width: "40px" }}
                    alt={Comillas?.alternativeText || Comillas?.src}
                  />
                </div>
              </div>
            </div>
          </div>
          {modalDownload && (
            <ModalDownload
              isOpen={modalDownload}
              setIsOpen={setModalDownload}
              title={button?.text || "Download Report"}
              downloadLink={downloadLink}
            />
          )}
        </div>
      </div>
    </div>
  );
}
