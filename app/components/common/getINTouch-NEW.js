import { useState, useRef, useEffect } from "react";
import { apiEndpoint } from "app/scripts/fetch";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import ReCAPTCHA from "react-google-recaptcha";
// import dynamic from "next/dynamic";

// const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"));
import { Button } from "flowbite-react";
import { useForm } from "react-hook-form";
import REQUEST from "app/helpers/http.service";
import { useSelector } from "react-redux";
import { zohoLeadApi } from "app/scripts/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./modal.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import Aos from "aos";
import "aos/dist/aos.css";

export default function GetInTouchModal({ isGetModal, isOpen, setIsOpen }) {
  const captcha = useRef(null);

  const [captchaError, setCaptchaError] = useState(false);
  const [email, setEmail] = useState(true);
  // const [phone, setPhone] = useState(true);
  const [isError, setIsError] = useState(null);
  const [active, setActive] = useState(false);
  const [startDate, setStartDate] = useState();
  // const [phone, setPhone] = useState(watch("countryCode"));

  function onChangeCaptcha(value) {
    if (captcha.current.getValue() && captcha.current.getValue() != "") {
      setCaptchaError(false);
    }
  }

  const Schema = yup.object().shape({
    phoneNumber: yup.string().required(),
    email: yup.string().email().required("Email is required"),
    fullName: yup.string().required("Full name  is required"),
    message: yup.string().required("message is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(Schema),
    defaultValues: {
      phoneNumber: "",
      fullName: "",
      message: "",
      email: "",
    },
  });

  const toast = useSelector((state) => state?.toast);

  const isValidEmail = (email) =>
    setEmail(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    );

  const isValidPhone = (phone) =>
    setPhone(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(phone));

  const ScheduleCall = async (data) => {
    if (
      captcha.current.getValue() &&
      captcha.current.getValue() != "" &&
      email &&
      phone
    ) {
      try {
        const formData = {
          ...data,
        };
        setActive(!active);
        const res = await REQUEST({
          method: "POST",
          url: API_ENDPOINTS.GETINTOUCH_MODAL_FORM,
          data: { data: formData },
        });

        if (res?.status === 200) {
          toast.success("Submitted successfully");
          setCaptchaError(false);
          captcha.current.reset();
          reset();
          zohoLeadApi({ ...data });
          setIsOpen(false);
          setIsError(true);
          setActive(active);
        } else toast.error(res?.data?.error?.message);
      } catch (err) {
        toast.error("failed");
        setIsOpen(false);
        setIsError(false);
      }
    } else {
      setCaptchaError(true);
    }
  };

  const [modal, setModal] = useState({});

  const getModal = async () => {
    try {
      const data = await REQUEST({
        method: "GET",
        url: API_ENDPOINTS.GETINTOUCH_MODAL,
      });
      setModal(data?.data?.data?.attributes);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getModal();
  }, []);

  if (!modal) return <p>{console.log(`GETINTOUCHMODAL ${data?.error}`)}</p>;
  return (
    <div
      toggle={setIsOpen}
      className="fixed top-0 right-0 left-0 bottom-0 z-50 h-full overflow-y-auto overflow-x-hidden bg-[rgba(0,_0,_0,_.5)] flex justify-center items-center"
    >
      <section className="bg-[#fff] rounded-[20px] overflow-hidden max-w-[1200px] relative">
        <div className="grid grid-cols-12">
          <div className="col-span-4 bg-[radial-gradient(79.7%_78.42%_at_30.94%_25.67%,_#022F78_0%,_#0B0924_100%)] p-[30px]">
            {/* <div className="rounded-[40px] overflow-hidden mx-auto mb-16">
              {modal && modal?.gifImage?.data?.attributes?.url && (
                <img
                  src={apiEndpoint(modal?.gifImage?.data?.attributes?.url)}
                  className="w-full"
                  alt="get modal gif"
                />
              )}
            </div> */}
            <div className="">
              <h6 className="text-[28px] text-[#FFFFFF] font-[600]">
                Explore opportunities to deploy best digital solutions!
              </h6>
            </div>

            <ul className="text-[#fff] my-[40px]">
              <li className="text-[14px] font-[600] flex flex-wap items-start mb-2">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="w-[20px] mr-2 mt-1"
                />{" "}
                <p>
                  400+ projects{" "}
                  <span className="text-[16px] font-[400] text-[rgba(255,_255,_255,_0.68)] ">
                    delivered and deployed successfully
                  </span>
                </p>
              </li>
              <li className="text-[14px] font-[600] flex flex-wap items-start mb-2">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="w-[20px] mr-2 mt-1"
                />{" "}
                <p>
                  450+ experts{" "}
                  <span className="text-[16px] font-[400] text-[rgba(255,_255,_255,_0.68)] ">
                    onboarded with innovative mindset
                  </span>
                </p>
              </li>
              <li className="text-[14px] font-[600] flex flex-wap items-start mb-2">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="w-[20px] mr-2 mt-1"
                />{" "}
                <p>
                  17+ years of services{" "}
                  <span className="text-[16px] font-[400] text-[rgba(255,_255,_255,_0.68)] ">
                    helping clients to nurture & grow.
                  </span>
                </p>
              </li>
              <li className="text-[14px] font-[600] flex flex-wap items-start mb-2">
                {" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="w-[20px] mr-2 mt-1"
                />{" "}
                <p>
                  98% customer satisfaction rate{" "}
                  <span className="text-[16px] font-[400] text-[rgba(255,_255,_255,_0.68)] ">
                    from global clients.
                  </span>
                </p>
              </li>
            </ul>

            <h6 className="text-[14px] text-[rgba(255,_255,_255,_0.68)] font-[400] text-center">
              {modal?.img_title}
            </h6>
            <div className="grid grid-cols-4 marquee mt-5 gap-3">
              <ul className="marquee__group">
                {modal?.companyLogos?.map((data, key) => (
                  <li key={key} className="flex items-center">
                    <img
                      src={apiEndpoint(data?.companyImg?.data?.attributes?.url)}
                      alt="compony logo"
                    />
                  </li>
                ))}
              </ul>
              <div aria-hidden="true" className="marquee__group">
                {modal?.companyLogos?.map((data, key) => (
                  <li key={key.id} className="flex items-center">
                    <img
                      src={apiEndpoint(data?.companyImg?.data?.attributes?.url)}
                      alt="company logo"
                    />
                  </li>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-8 ">
            <div className="p-[20px_40px]">
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white absolute right-[10px] top-[10px]"
                data-modal-hide="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="mb-7">
                <h4 className="text-[28px] text-[#00102B] font-[700] mb-0">
                  Have a project? Let's discuss
                </h4>
                <p className="text-[16px] text-[#565656] font-[400]">
                  Please fill in the form and our representative will get back
                  to you.
                </p>
              </div>
              <form className="w-full" onSubmit={handleSubmit(ScheduleCall)}>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <div className="w-full px-3 mb-3">
                      <label
                        className="block text-[#616161] text-[14px] font-[400] mb-2"
                        htmlFor="grid-first-name"
                      >
                        Name <span className="text-[#FF3D3D] ">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-[10px] inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 448 512"
                            fill="#0050D5"
                          >
                            <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                          </svg>
                        </div>
                        <input
                          className="pl-[35px] appearance-none block w-full text-[14px] border border-[#DADADA] rounded-[10px] text-[#00102B] py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#62207E_!important]"
                          type="text"
                          name="fullName"
                          placeholder="Name"
                          {...register("fullName")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <div className="w-full px-3 mb-3">
                      <label
                        className="block text-[#616161] text-[14px] font-[400] mb-2"
                        htmlFor="grid-first-name"
                      >
                        Contact Number{" "}
                        <span className="text-[#FF3D3D] ">*</span>
                      </label>
                      {/* <input
                              className="pl-[35px] appearance-none block w-full border text-[14px] border-[#DADADA] rounded-[0px_10px_10px_0px] text-[#00102B] py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#62207E_!important]"
                              id="phone-input"
                              type="number"
                              name="phoneNumber"
                              {...register("phoneNumber")}
                            /> */}
                      <PhoneInput
                        country={"us"}
                        // value={this.state.phone}
                        // onChange={phone => this.setState({ phone })}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <div className="w-full px-3 mb-3">
                      <label
                        className="block text-[#616161] text-[14px] font-[400] mb-2"
                        htmlFor="grid-first-name"
                      >
                        Email Id <span className="text-[#FF3D3D] ">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-[10px] inset-y-0 start-0 flex items-center ps-3 pointer-events-none w-[20px]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.75 3H22.25C23.216 3 24 3.784 24 4.75V18.75C24 19.2141 23.8156 19.6592 23.4874 19.9874C23.1592 20.3156 22.7141 20.5 22.25 20.5H1.75C1.28587 20.5 0.840752 20.3156 0.512563 19.9874C0.184374 19.6592 0 19.2141 0 18.75L0 4.75C0 3.784 0.784 3 1.75 3ZM1.5 7.412V18.75C1.5 18.888 1.612 19 1.75 19H22.25C22.3163 19 22.3799 18.9737 22.4268 18.9268C22.4737 18.8799 22.5 18.8163 22.5 18.75V7.412L12.98 13.845C12.388 14.245 11.612 14.245 11.02 13.845L1.5 7.412ZM1.5 4.75V5.602L11.86 12.602C11.9013 12.6299 11.9501 12.6449 12 12.6449C12.0499 12.6449 12.0987 12.6299 12.14 12.602L22.5 5.602V4.75C22.5 4.6837 22.4737 4.62011 22.4268 4.57322C22.3799 4.52634 22.3163 4.5 22.25 4.5H1.75C1.6837 4.5 1.62011 4.52634 1.57322 4.57322C1.52634 4.62011 1.5 4.6837 1.5 4.75Z"
                              fill="#0050D5"
                            />
                          </svg>
                        </div>
                        <input
                          className="pl-[35px] appearance-none block w-full border text-[14px] border-[#DADADA] rounded-[10px] text-[#00102B] py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#62207E_!important]"
                          type="email"
                          name="email"
                          placeholder="Email"
                          {...register("email")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <div className="w-full px-3 mb-3">
                      <label
                        className="block text-[#616161] text-[14px] font-[400] mb-2"
                        htmlFor="grid-first-name"
                      >
                        Select a it staffing
                      </label>

                      <div className="relative">
                        <div className="z-[9] absolute left-[10px] inset-y-0 start-0 flex items-center ps-3 pointer-events-none w-[20px]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_10169_3009)">
                              <path
                                d="M14.25 21.0003H2.25C1.005 21.0003 0 19.9953 0 18.7503V3.57031C0 2.32531 1.005 1.32031 2.25 1.32031H18.75C19.995 1.32031 21 2.32531 21 3.57031V14.4453C21 14.8653 20.67 15.1953 20.25 15.1953C19.83 15.1953 19.5 14.8653 19.5 14.4453V3.57031C19.5 3.15031 19.17 2.82031 18.75 2.82031H2.25C1.83 2.82031 1.5 3.15031 1.5 3.57031V18.7503C1.5 19.1703 1.83 19.5003 2.25 19.5003H14.25C14.67 19.5003 15 19.8303 15 20.2503C15 20.6703 14.67 21.0003 14.25 21.0003Z"
                                fill="#0050D5"
                              />
                              <path
                                d="M6 5.43C5.58 5.43 5.25 5.1 5.25 4.68V0.75C5.25 0.33 5.58 0 6 0C6.42 0 6.75 0.33 6.75 0.75V4.68C6.75 5.1 6.42 5.43 6 5.43ZM15.18 5.43C14.76 5.43 14.43 5.1 14.43 4.68V0.75C14.43 0.33 14.76 0 15.18 0C15.6 0 15.93 0.33 15.93 0.75V4.68C15.93 5.1 15.6 5.43 15.18 5.43ZM20.25 9H0.75C0.33 9 0 8.67 0 8.25C0 7.83 0.33 7.5 0.75 7.5H20.25C20.67 7.5 21 7.83 21 8.25C21 8.67 20.67 9 20.25 9ZM18.75 24C15.855 24 13.5 21.645 13.5 18.75C13.5 15.855 15.855 13.5 18.75 13.5C21.645 13.5 24 15.855 24 18.75C24 21.645 21.645 24 18.75 24ZM18.75 15C17.7554 15 16.8016 15.3951 16.0984 16.0984C15.3951 16.8016 15 17.7554 15 18.75C15 19.7446 15.3951 20.6984 16.0984 21.4016C16.8016 22.1049 17.7554 22.5 18.75 22.5C19.7446 22.5 20.6984 22.1049 21.4016 21.4016C22.1049 20.6984 22.5 19.7446 22.5 18.75C22.5 17.7554 22.1049 16.8016 21.4016 16.0984C20.6984 15.3951 19.7446 15 18.75 15Z"
                                fill="#0050D5"
                              />
                              <path
                                d="M20.25 21C20.1516 21.0012 20.0541 20.9818 19.9637 20.943C19.8733 20.9043 19.792 20.8471 19.725 20.775L18.225 19.275C18.085 19.1356 18.0044 18.9475 18 18.75V16.5C18 16.08 18.33 15.75 18.75 15.75C19.17 15.75 19.5 16.08 19.5 16.5V18.435L20.775 19.71C21.075 20.01 21.075 20.475 20.775 20.775C20.625 20.925 20.43 21 20.25 21Z"
                                fill="#0050D5"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_10169_3009">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <DatePicker
                          isClearable
                          // innerRef={register({ required: true })}
                          placeholderText="03 Nov 2023 at 4:00 PM"
                          name="datetime1"
                          className={
                            "pl-[35px] bg-colorr appearance-none block w-full border text-[14px] border-[#DADADA] rounded-[10px] text-[#00102B] py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#62207E_!important]"
                          }
                          selected={startDate}
                          onChange={(val) => {
                            setStartDate(val);
                            setValue("start", val);
                          }}
                          showTimeSelect
                          timeFormat="HH:mm"
                          timeIntervals={15}
                          timeCaption="time"
                          dateFormat="MM-dd-yyyy h:mm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <div className="w-full px-3 mb-3">
                      <label
                        className="block text-[#616161] text-[14px] font-[400] mb-2"
                        htmlFor="grid-first-name"
                      >
                        Select a budget range{" "}
                        <span className="text-[#FF3D3D] ">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-[10px] inset-y-0 start-0 flex items-center ps-3 pointer-events-none w-[20px]">
                          <svg
                            width="29"
                            height="29"
                            viewBox="0 0 29 29"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20.1846 11.9824C19.9499 10.1071 20.2189 8.20318 20.964 6.46636C21.0727 6.24886 21.2781 5.99511 21.0727 5.75948C20.8673 5.52386 20.5834 5.68698 20.3417 5.75948C19.7186 5.94073 19.1398 6.24902 18.6418 6.66494C18.1437 7.08086 17.7372 7.59539 17.4477 8.17615C17.2846 8.46011 17.1698 8.74407 16.7288 8.68365C15.2402 8.48941 13.7347 8.46105 12.2398 8.59907C11.1188 8.66663 10.0241 8.96704 9.02564 9.48115C7.48604 10.3286 6.27864 11.6723 5.60002 13.2934C5.56708 13.2137 5.54277 13.1307 5.52752 13.0457C5.35835 12.2603 4.92335 11.8374 4.24064 11.9401H4.22856C4.07278 11.9597 3.92263 12.0109 3.78732 12.0906C3.65201 12.1702 3.53438 12.2767 3.44162 12.4033C3.34887 12.53 3.28294 12.6743 3.24788 12.8274C3.21282 12.9804 3.20937 13.139 3.23773 13.2934C3.20126 13.962 3.32731 14.6294 3.60508 15.2386C3.88285 15.8478 4.30408 16.3807 4.83273 16.7916C5.0252 16.9234 5.16275 17.1211 5.21939 17.3474C5.57451 18.8423 6.39538 20.1858 7.56356 21.1839C7.77474 21.3567 7.94026 21.5788 8.0456 21.8305C8.15094 22.0823 8.19287 22.3561 8.16773 22.6278C8.0046 24.2712 8.6571 25.1049 10.4454 25.3466C10.5828 25.379 10.722 25.4032 10.8623 25.4191C12.0706 25.6668 11.9377 25.6607 12.1613 24.5612C12.3123 23.8241 12.6084 23.6066 13.3696 23.7214C13.986 23.8059 14.6087 23.8362 15.2304 23.812C16.7227 23.812 16.7288 23.812 17.1336 25.2076C17.2061 25.4614 17.2604 25.7393 17.6169 25.6728C18.444 25.5945 19.2568 25.4056 20.0336 25.1109C20.3284 25.0111 20.586 24.8243 20.7726 24.5752C20.9592 24.3261 21.0659 24.0263 21.0788 23.7153C20.9519 22.4284 21.3688 21.9028 22.1421 20.9422C22.2509 20.8153 22.4804 20.5918 22.6073 20.4105C22.8358 20.0475 23.1483 19.7449 23.5185 19.5283C23.8887 19.3116 24.3056 19.1874 24.734 19.1659C25.465 19.1297 25.7913 18.9062 25.7913 18.0664V15.5289C25.8185 15.2664 25.7411 15.0038 25.576 14.798C25.4109 14.5921 25.1713 14.4597 24.9092 14.4293C24.4958 14.3468 24.1091 14.1637 23.7834 13.896C23.4578 13.6283 23.2032 13.2843 23.0423 12.8947C22.4002 11.6358 21.4105 10.5874 20.1906 9.87386M21.1754 16.4351C20.8895 16.418 20.6221 16.2881 20.4318 16.0741C20.2415 15.86 20.1439 15.5792 20.1604 15.2932C20.176 15.0122 20.3025 14.7487 20.512 14.5607C20.7215 14.3727 20.997 14.2755 21.2781 14.2903C21.4247 14.2912 21.5695 14.322 21.7038 14.3806C21.8381 14.4392 21.9591 14.5245 22.0594 14.6312C22.1598 14.738 22.2373 14.8641 22.2875 15.0018C22.3376 15.1395 22.3592 15.2859 22.351 15.4322C22.3428 15.5785 22.305 15.7217 22.2398 15.8529C22.1746 15.9841 22.0834 16.1007 21.9718 16.1957C21.8601 16.2906 21.7304 16.3618 21.5904 16.4051C21.4504 16.4483 21.303 16.4626 21.1573 16.4472L21.1754 16.4351Z"
                              stroke="#0050D5"
                              stroke-width="1.2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10.2356 8.95483C9.7483 8.63984 9.36917 8.1831 9.14928 7.6461C8.92939 7.10911 8.87929 6.51764 9.00573 5.95131C9.13217 5.38498 9.42908 4.87099 9.85649 4.47851C10.2839 4.08604 10.8213 3.83393 11.3963 3.75612C11.9714 3.67831 12.5564 3.77853 13.0728 4.04331C13.5891 4.30808 14.0119 4.72469 14.2843 5.23704C14.5567 5.7494 14.6656 6.33292 14.5964 6.90904C14.5271 7.48516 14.283 8.02623 13.8969 8.45942"
                              stroke="#0050D5"
                              stroke-width="1.2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <select
                          id="countries"
                          className="pl-[35px] bg-colorr appearance-none block w-full border text-[14px] border-[#DADADA] rounded-[10px] text-[#00102B] py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#62207E_!important]"
                        >
                          <option selected>$10K - $25K</option>
                          <option value="US">$25K - $50K</option>
                          <option value="CA">$50K - $75K</option>
                          <option value="FR">$75K - $100K</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <div className="w-full px-3 mb-3">
                      <label
                        className="block text-[#616161] text-[14px] font-[400] mb-2"
                        htmlFor="grid-first-name"
                      >
                        Select a it staffing
                      </label>
                      <div className="relative">
                        <div className="absolute left-[10px] inset-y-0 start-0 flex items-center ps-3 pointer-events-none w-[20px]">
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.3333 14.293C15.468 14.293 14.6222 14.0364 13.9027 13.5556C13.1832 13.0749 12.6225 12.3916 12.2914 11.5922C11.9602 10.7928 11.8736 9.91312 12.0424 9.06445C12.2112 8.21578 12.6279 7.43623 13.2397 6.82438C13.8516 6.21252 14.6311 5.79585 15.4798 5.62704C16.3285 5.45822 17.2081 5.54486 18.0076 5.876C18.807 6.20713 19.4903 6.76789 19.971 7.48735C20.4517 8.20682 20.7083 9.05268 20.7083 9.91797C20.7083 11.0783 20.2474 12.1911 19.4269 13.0116C18.6065 13.832 17.4937 14.293 16.3333 14.293ZM16.3333 7.29297C15.8142 7.29297 15.3066 7.44692 14.875 7.73536C14.4433 8.0238 14.1068 8.43377 13.9081 8.91343C13.7095 9.39308 13.6575 9.92088 13.7588 10.4301C13.8601 10.9393 14.1101 11.407 14.4772 11.7741C14.8443 12.1412 15.312 12.3912 15.8212 12.4925C16.3304 12.5938 16.8582 12.5418 17.3379 12.3432C17.8175 12.1445 18.2275 11.808 18.5159 11.3763C18.8044 10.9447 18.9583 10.4371 18.9583 9.91797C18.9583 9.22178 18.6818 8.5541 18.1895 8.06182C17.6972 7.56953 17.0295 7.29297 16.3333 7.29297ZM24.5 22.4596C24.2689 22.4566 24.0481 22.3635 23.8846 22.2C23.7212 22.0366 23.628 21.8158 23.625 21.5846C23.625 19.3096 22.3883 17.793 16.3333 17.793C10.2783 17.793 9.04167 19.3096 9.04167 21.5846C9.04167 21.8167 8.94948 22.0393 8.78539 22.2034C8.62129 22.3675 8.39873 22.4596 8.16667 22.4596C7.9346 22.4596 7.71204 22.3675 7.54795 22.2034C7.38385 22.0393 7.29167 21.8167 7.29167 21.5846C7.29167 16.043 13.6267 16.043 16.3333 16.043C19.04 16.043 25.375 16.043 25.375 21.5846C25.372 21.8158 25.2788 22.0366 25.1154 22.2C24.9519 22.3635 24.7311 22.4566 24.5 22.4596ZM9.70667 15.238H9.33333C8.40508 15.1482 7.55048 14.6934 6.95756 13.9736C6.36463 13.2538 6.08193 12.3279 6.17167 11.3996C6.2614 10.4714 6.7162 9.61679 7.43603 9.02386C8.15586 8.43093 9.08174 8.14824 10.01 8.23797C10.129 8.24309 10.2457 8.27245 10.353 8.32427C10.4603 8.37609 10.5559 8.44927 10.6338 8.53932C10.7118 8.62937 10.7706 8.73441 10.8066 8.84798C10.8426 8.96155 10.855 9.08127 10.843 9.19981C10.8311 9.31834 10.7951 9.43319 10.7372 9.53731C10.6793 9.64144 10.6008 9.73265 10.5064 9.80535C10.412 9.87805 10.3038 9.93071 10.1883 9.96011C10.0729 9.9895 9.95265 9.99501 9.835 9.9763C9.60726 9.9536 9.37727 9.97702 9.15878 10.0452C8.94029 10.1133 8.73778 10.2248 8.56333 10.373C8.38615 10.5159 8.23919 10.6927 8.13103 10.893C8.02286 11.0933 7.95566 11.3131 7.93333 11.5396C7.90921 11.769 7.93097 12.0009 7.99736 12.2218C8.06375 12.4427 8.17344 12.6482 8.32002 12.8262C8.46661 13.0043 8.64717 13.1514 8.85119 13.259C9.0552 13.3666 9.27859 13.4326 9.50833 13.453C9.88813 13.4855 10.2683 13.3955 10.5933 13.1963C10.7914 13.0741 11.0298 13.0355 11.2563 13.0891C11.4827 13.1427 11.6786 13.2841 11.8008 13.4821C11.9231 13.6802 11.9616 13.9186 11.908 14.1451C11.8544 14.3715 11.713 14.5674 11.515 14.6896C10.9739 15.0348 10.3483 15.2244 9.70667 15.238ZM3.5 21.5846C3.26888 21.5816 3.04807 21.4885 2.88462 21.325C2.72118 21.1616 2.62802 20.9408 2.625 20.7096C2.625 17.5596 3.465 15.4596 7.58333 15.4596C7.8154 15.4596 8.03796 15.5518 8.20205 15.7159C8.36615 15.88 8.45833 16.1026 8.45833 16.3346C8.45833 16.5667 8.36615 16.7893 8.20205 16.9534C8.03796 17.1174 7.8154 17.2096 7.58333 17.2096C4.84167 17.2096 4.375 18.0846 4.375 20.7096C4.37198 20.9408 4.27882 21.1616 4.11538 21.325C3.95193 21.4885 3.73112 21.5816 3.5 21.5846Z"
                              fill="#0050D5"
                            />
                          </svg>
                        </div>
                        <select
                          id="countries"
                          className="pl-[35px] bg-colorr appearance-none block w-full border text-[14px] border-[#DADADA] rounded-[10px] text-[#00102B] py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#62207E_!important]"
                        >
                          <option selected>Website Development</option>
                          <option value="US">Mobile App Development</option>
                          <option value="CA">SEO</option>
                          <option value="FR">E-commerce Development</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <div className="w-full px-3 mb-3">
                      <label
                        className="block text-[#616161] text-[14px] font-[400] mb-2"
                        htmlFor="grid-first-name"
                      >
                        Select a project type{" "}
                        <span className="text-[#FF3D3D] ">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-[10px] inset-y-0 start-0 flex items-center ps-3 pointer-events-none w-[20px]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24 4.50098V19.501H0V4.50098H7.5V3.00098C7.5 2.79004 7.53906 2.59473 7.61719 2.41504C7.69531 2.23535 7.80078 2.0791 7.93359 1.94629C8.06641 1.81348 8.22656 1.7041 8.41406 1.61816C8.60156 1.53223 8.79688 1.49316 9 1.50098H15C15.2109 1.50098 15.4062 1.54004 15.5859 1.61816C15.7656 1.69629 15.9219 1.80176 16.0547 1.93457C16.1875 2.06738 16.2969 2.22754 16.3828 2.41504C16.4688 2.60254 16.5078 2.79785 16.5 3.00098V4.50098H24ZM9 4.50098H15V3.00098H9V4.50098ZM1.5 6.00098V8.16895L9 11.9072V10.501H15V11.9072L22.5 8.16895V6.00098H1.5ZM10.5 12.001V13.501H13.5V12.001H10.5ZM22.5 18.001V9.83301L15 13.5947V15.001H9V13.5947L1.5 9.83301V18.001H22.5Z"
                              fill="#0050D5"
                            />
                          </svg>
                        </div>
                        <select
                          id="countries"
                          className="pl-[35px] bg-colorr appearance-none block w-full border text-[14px] border-[#DADADA] rounded-[10px] text-[#00102B] py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#62207E_!important]"
                        >
                          <option selected>Mid term</option>
                          <option value="US">High term</option>
                          <option value="CA">Low term</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <div className="w-full px-3 mb-3">
                      <label
                        className="block text-[#616161] text-[14px] font-[400] mb-2"
                        htmlFor="grid-first-name"
                      >
                        Select a it staffing
                      </label>
                      <div className="relative">
                        <div className="absolute left-[10px] inset-y-0 start-0 flex items-center ps-3 pointer-events-none w-[20px]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect width="24" height="24" fill="white" />
                            <path
                              d="M4 20.25V18C4 17.8011 4.07902 17.6103 4.21967 17.4697C4.36032 17.329 4.55109 17.25 4.75 17.25C4.94891 17.25 5.13968 17.329 5.28033 17.4697C5.42098 17.6103 5.5 17.8011 5.5 18V20.25C5.5 20.388 5.612 20.5 5.75 20.5H18.25C18.3163 20.5 18.3799 20.4737 18.4268 20.4268C18.4737 20.3799 18.5 20.3163 18.5 20.25V18C18.5 17.8011 18.579 17.6103 18.7197 17.4697C18.8603 17.329 19.0511 17.25 19.25 17.25C19.4489 17.25 19.6397 17.329 19.7803 17.4697C19.921 17.6103 20 17.8011 20 18V20.25C20 20.7141 19.8156 21.1592 19.4874 21.4874C19.1592 21.8156 18.7141 22 18.25 22H5.75C5.28587 22 4.84075 21.8156 4.51256 21.4874C4.18437 21.1592 4 20.7141 4 20.25Z"
                              fill="#0050D5"
                            />
                            <path
                              d="M5.21975 9.52975C5.15009 9.46019 5.09482 9.37757 5.05712 9.28663C5.01941 9.19569 5 9.0982 5 8.99975C5 8.9013 5.01941 8.80382 5.05712 8.71288C5.09482 8.62194 5.15009 8.53932 5.21975 8.46975L11.4698 2.21975C11.5393 2.15009 11.6219 2.09482 11.7129 2.05712C11.8038 2.01941 11.9013 2 11.9998 2C12.0982 2 12.1957 2.01941 12.2866 2.05712C12.3776 2.09482 12.4602 2.15009 12.5298 2.21975L18.7798 8.46975C18.8494 8.53936 18.9046 8.62198 18.9422 8.71292C18.9799 8.80386 18.9993 8.90132 18.9993 8.99975C18.9993 9.09818 18.9799 9.19565 18.9422 9.28659C18.9046 9.37753 18.8494 9.46015 18.7798 9.52975C18.7102 9.59935 18.6275 9.65456 18.5366 9.69223C18.4457 9.7299 18.3482 9.74929 18.2498 9.74929C18.1513 9.74929 18.0539 9.7299 17.9629 9.69223C17.872 9.65456 17.7894 9.59935 17.7198 9.52975L12.7498 4.56075V16.7498C12.7498 16.9487 12.6707 17.1394 12.5301 17.2801C12.3894 17.4207 12.1987 17.4998 11.9998 17.4998C11.8008 17.4998 11.6101 17.4207 11.4694 17.2801C11.3288 17.1394 11.2498 16.9487 11.2498 16.7498V4.56075L6.27975 9.52975C6.21019 9.59942 6.12757 9.65469 6.03663 9.69239C5.94569 9.7301 5.8482 9.74951 5.74975 9.74951C5.6513 9.74951 5.55382 9.7301 5.46288 9.69239C5.37194 9.65469 5.28932 9.59942 5.21975 9.52975Z"
                              fill="#0050D5"
                            />
                          </svg>
                        </div>
                        <div className="flex items-center justify-center w-full">
                          <label
                            for="dropzone-file"
                            className="pl-[35px] bg-colorr appearance-none block w-full border text-[14px] border-[#DADADA] rounded-[10px] text-[#00102B] py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#62207E_!important]"
                          >
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Upload File
                            </p>
                            <input
                              id="dropzone-file"
                              type="file"
                              className="hidden"
                            />
                          </label>
                        </div>
                        {/* <select id="countries" className="pl-[35px] bg-colorr appearance-none block w-full border text-[14px] border-[#DADADA] rounded-[10px] text-[#00102B] py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#62207E_!important]">
                          <option selected>Website Development</option>
                          <option value="US">Mobile App Development</option>
                          <option value="CA">SEO</option>
                          <option value="FR">E-commerce Development</option>
                        </select> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full md:w-1/1 mb-6 md:mb-0">
                    <div className="w-full px-3 h-full">
                      <label
                        className="block text-[#616161] text-[14px] font-[400] mb-2"
                        htmlFor=""
                      >
                        Please describe your project requirements{" "}
                        <span className="text-[#FF3D3D] ">*</span>
                      </label>
                      <textarea
                        {...register("message")}
                        name="message"
                        id=""
                        rows={2}
                        className="bg-[rgba(218,_218,_218,_0.25)] text-[14px] rounded-[10px] text-[#00102B] py-2 px-4"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mt-4 mb-7">
                    <ReCAPTCHA
                      ref={captcha}
                      sitekey={`${process.env.NEXT_PUBLIC_CLIENT_SIDE_GOOGLE_CAPTCHA}`}
                      onChange={onChangeCaptcha}
                      className="w-full"
                    />
                    {captchaError && (
                      <span className="mt-2 font-normal text-sm text-red-700">
                        This field is required
                      </span>
                    )}
                  </div>
                  <Button
                    type="submit"
                    value={`submit`}
                    disabled={active}
                    className="bg-[#0050D5_!important] shadow-[0px_0px_20px_rgba(0,_80,_213,_0.13)] uppercase w-full text-[22px] font-[700]"
                  >
                    Submit
                  </Button>

                  {isError === true && (
                    <div id="getmodal_success">
                      Getintouch modal Submitted successfull!
                    </div>
                  )}
                  {isError === false && (
                    <div id="getmodal_error">Getintouch modal Error!</div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
