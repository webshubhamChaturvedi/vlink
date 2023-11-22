import React, { useState } from "react";
import ModalSubscribeNewsletter from "./ModalSubscribeNewsletter";
import ModalSuscribeNotifications from "./ModalSubscribeNotifications";
import ModalSubscribeIframe from "./ModalSubscribeIframe";
export default function SendResume({ country }) {
  const [modalSubscribeNewsletter, setModalSubscribeNewsletter] =
    useState(false);
  const [modalSuscribeNotifications, setModalSuscribeNotifications] =
    useState(false);
  const [modalSubscribeIframe, setModalSubscribeIframe] = useState(false);
  return (
    <div className="career_resume">
      {country != "ID" && country != "IN" ? (
        <div className="py-10 bg-[#0050D5] bg-[url('/img/wave1.png')] bg-[center_bottom_0rem] bg-[length:80%_80%] bg-no-repeat">
          <div className="container mx-auto xl:px-32 px-4 ">
            <div className="grid grid-cols-2 gap-0">
              <div className="md:col-span-1 col-span-2 py-4 px-4 text-center md:border-r-[1px] md:border-r-[#ffffff] md:border-b-[0px] md:border-b-transparent border-b-[1px] border-b-[#ffffff]">
                <h6 className="font-sans lg:text-[32px]  text-[24px] font-[600] text-[#ffffff] mb-8">
                  Subscribe to Get Notified of the <br /> Latest Job Openings
                </h6>
                <button
                  onClick={() => {
                    setModalSubscribeIframe(true);
                  }}
                  className="bg-[#ffffff] font-sans text-[16px] font-[600] text-[#0050D5] inline-flex items-center justify-center py-3 px-6 rounded-[4px] mb-3"
                >
                  Subscribe{" "}
                  <img src="/img/Vector.svg" alt="subscribe" className="ml-2" />
                </button>
              </div>
              <div className="md:col-span-1 col-span-2 py-4 px-4 text-center">
                <h6 className="font-sans lg:text-[32px] text-[24px] font-[600] text-[#ffffff] mb-8">
                  Want to be a part of the <br /> VLink team?
                </h6>
                <button
                  onClick={() => {
                    setModalSuscribeNotifications(true);
                  }}
                  className="bg-[#ffffff] font-sans text-[16px] font-[600] text-[#0050D5] inline-flex items-center justify-center py-3 px-6 rounded-[4px] mb-3"
                >
                  Send Resume{" "}
                  <img
                    src="/img/Vector.svg"
                    alt="send-resume"
                    className="ml-2"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          <div className="flex justify-between items-center flex-wrap px-8 py-[35px] bg-no-repeat  bg-[#0050D5] bg-[url('/img/wave1.png')] bg-cover bg-center">
            <h5 className="font-[600] xl:text-4xl lg:text-[32px] text-[22px] xl:leading-[50px] lg:leading-[30px] leading-[35px] text-[#fff] md:my-5 mb-6">
              Want to be part of VLink team?
            </h5>
            <button
              type="button"
              onClick={() => {
                setModalSuscribeNotifications(true);
              }}
              className="mr-5 md:my-5 flex items-center justify-between text-left md:py-3 py-2 pl-6 pr-4 bg-[#fff] rounded-[10px] drop-shadow-[0px_0px_6px_rgba(0,0,0,0.1)] text-[#0151D5] md:text-[18px] text-[14px] font-[700]"
            >
              Send Resume{" "}
              <img
                src="/icons/arrow-right-short.svg"
                alt="arrow right short"
                className="inline"
              />
            </button>
          </div>
        </div>
      )}
      {country ? (
        <ModalSubscribeIframe
          isOpen={modalSubscribeIframe}
          setIsOpen={setModalSubscribeIframe}
        />
      ) : (
        <></>
      )}
      {country ? (
        <ModalSubscribeNewsletter
          isOpen={modalSubscribeNewsletter}
          setIsOpen={setModalSubscribeNewsletter}
        />
      ) : (
        <></>
      )}
      {country ? (
        <ModalSuscribeNotifications
          isOpen={modalSuscribeNotifications}
          setIsOpen={setModalSuscribeNotifications}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
