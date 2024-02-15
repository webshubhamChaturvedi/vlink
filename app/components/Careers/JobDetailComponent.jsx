import React, { useState } from "react";
import moment from "moment";
import ModalForwadFriends from "./ModalForwadFriends";
import ModalSuscribeNotifications from "./ModalSubscribeNotifications";
import Container from "../common/Container";
import { createMarkup } from "app/scripts/utils";
import OtherOpeningsCard from "../common/OtherOpeningsCard";
import { useRouter } from "next/router";
import { monthes } from "app/helpers/monthes";
import Link from "next/link";

const JobDetailComponent = ({ section, opening }) => {
  const { asPath } = useRouter();

  const { push } = useRouter();
  const [modalFowardFriend, setModalFowardFriend] = useState(false);
  const [modalSuscribeNotifications, setModalSuscribeNotifications] =
    useState(false);

  {
    var dates = new Date();
    var displaydate =
      dates.getDate() +
      "/" +
      monthes[dates.getMonth()] +
      "/" +
      dates.getFullYear();
  }
  return (
    <Container className="mt-20">
      <div className="flex flex-row justify-between items-center py-6 print-delete print-pt">
        <span className="flex  flex-1 items-center">
          <Link
            className="flex justify-center align-center rounded-full cursor-pointer"
            href={`/resources/career`}
          >
            <img
              src={"/icons/job-arrow-back.svg"}
              alt="Vlink"
              width={30}
              height={30}
            />
          </Link>
          <Link
            className="text-[18px] ml-3 text-[#1D1D1D] font-sans font-[400] cursor-pointer"
            href={`/resources/career`}
          >
            Back to Jobs
          </Link>
        </span>

        <span className="flex justify-end flex-1 items-center">
          <span
            className="flex justify-center align-center rounded-full cursor-pointer"
            onClick={() => {
              window.print();
            }}
          >
            {/* <PhoneCallOurlineIcon width={12} height={12} /> */}
            <img
              width={30}
              height={30}
              src="/icons/printer-job.svg"
              alt="print-icon"
            />
          </span>
          <span
            className="text-[18px] ml-3 text-company text-[#62207E] font-sans font-[400] cursor-pointer"
            onClick={() => {
              window.print();
            }}
          >
            Print this job
          </span>
        </span>
      </div>

      <div className="job-link-date-end">
        <div className="flex justify-between job-link-date mb-3">
          <div className="job-date">
            <input
              type="text"
              value={displaydate}
              readOnly="true"
              className="font-[20px] text-[#000] font-sans"
            />
          </div>
          <div className="Job-link font-[20px] text-[#000] font-sans text-company">
            {`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
          </div>
        </div>
      </div>

      <div className="border border-[#B5B5B5] bg-[#ffffff] rounded-[10px] py-8 px-6 mb-8">
        <div className="grid grid-cols-12 gap-0">
          <div className="lg:col-span-8 col-span-12 lg:mb-0 mb-4">
            <h6 className="font-sans text-[24px] font-[600] text-[#1D1D1D] mb-3">
              {section?.title?._cdata} – J{section?.jobdiva_no?._text}
            </h6>
            <p className="inline-block text-[#0C2139] text-[16px] font-sans font-[600] border-l-[1px]  px-3 leading-[21px]">
              Required Experience:
              <span className="font-sans text-[16px] font-[400] text-[#353535]">
                {section?.experience_level?._text}
              </span>
            </p>
            <ul className="mt-3">
              <li className="inline-block text-[#0C2139] text-[16px] font-sans font-[600] px-2 leading-[21px]">
                <a href="">
                  {section?.city?._text +
                    " ," +
                    section?.state?._text +
                    " ," +
                    section?.countryid?._text}
                </a>
              </li>
              <li className="inline-block text-[#0C2139] text-[16px] font-sans font-[600] border-l-[1px] border-l-[#0C2139] px-3 leading-[21px]">
                Date of Posting:
                {moment(section?.issuedate?._text).format("MM-DD-YYYY")}
              </li>
              <li className="inline-block text-[#0C2139] text-[16px] font-sans font-[400] py-1 px-4 border border-[#62207E] rounded-[40px] ">
                <a href="" className="">
                  {section?.positiontype?._text}
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-4 col-span-12 lg:text-right text-left">
            <button
              onClick={() => {
                setModalFowardFriend(true);
              }}
              className="border border-[#B5B5B5] font-sans text-[12px] font-[600] text-[#1D1D1D] inline-flex items-center justify-center px-4 py-2 mr-2 mb-2"
            >
              Forward to a Friend
              <img src="/img/Icon.svg" alt="Icon" className="ml-2" />
            </button>
            <button
              onClick={() => {
                setModalSuscribeNotifications(true);
              }}
              className="bg-[#0050D5] font-sans text-[12px] font-[600] text-[#ffffff] rounded-[4px] px-4 py-2"
            >
              APPLY NOW
            </button>
          </div>
        </div>
      </div>
      <section className="sm:grid lg:grid-cols-12 gap-6 justify-center py-[55px]">
        <div className="col-span-8 flex">
          <div
            className="py-0 px-8 font-[400] text-[14px] leading-[24px] text-[#353535] font-sans"
            dangerouslySetInnerHTML={createMarkup(
              section?.jobdescription?._cdata
            )}
          ></div>
        </div>
        <div className="col-span-4 mr-4">
          <OtherOpeningsCard section={opening} />
        </div>
      </section>
      {modalFowardFriend ? (
        <ModalForwadFriends
          isOpen={modalFowardFriend}
          setIsOpen={setModalFowardFriend}
        />
      ) : (
        <></>
      )}
      {modalSuscribeNotifications ? (
        <ModalSuscribeNotifications
          isOpen={modalSuscribeNotifications}
          isApplyJob={true}
          setIsOpen={setModalSuscribeNotifications}
        />
      ) : (
        <></>
      )}
    </Container>
  );
};

export default JobDetailComponent;
