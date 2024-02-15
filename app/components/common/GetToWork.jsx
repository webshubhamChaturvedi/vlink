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
import "./modal.css"

import Aos from "aos";
import "aos/dist/aos.css";

export default function GetInTouchModal({ isGetModal, isOpen, setIsOpen }) {
  const captcha = useRef(null);

  const [captchaError, setCaptchaError] = useState(false);
  const [email, setEmail] = useState(true);
  const [phone, setPhone] = useState(true);
  const [isError, setIsError] = useState(null);
  const [active, setActive] = useState(false);

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
        setActive(!active)
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
          setActive(active)
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
              <h6 className="text-[34px] text-[#FFFFFF] font-[600]">Explore opportunities to deploy best digital solutions!</h6>
            </div>

            <ul className="text-[#fff] my-[40px]">
              <li className="text-[16px] font-[600] flex flex-wap items-start mb-2"> <FontAwesomeIcon icon={faCircleCheck} className="w-[20px] mr-2 mt-1"/> <p>400+ projects <span className="text-[16px] font-[400] text-[rgba(255,_255,_255,_0.68)] ">delivered and deployed successfully</span></p></li>
              <li className="text-[16px] font-[600] flex flex-wap items-start mb-2"> <FontAwesomeIcon icon={faCircleCheck} className="w-[20px] mr-2 mt-1"/> <p>450+ experts <span className="text-[16px] font-[400] text-[rgba(255,_255,_255,_0.68)] ">onboarded with innovative mindset</span></p></li>
              <li className="text-[16px] font-[600] flex flex-wap items-start mb-2"> <FontAwesomeIcon icon={faCircleCheck} className="w-[20px] mr-2 mt-1"/> <p>17+ years of services <span className="text-[16px] font-[400] text-[rgba(255,_255,_255,_0.68)] ">helping clients to nurture & grow.</span></p></li>
              <li className="text-[16px] font-[600] flex flex-wap items-start mb-2"> <FontAwesomeIcon icon={faCircleCheck} className="w-[20px] mr-2 mt-1"/> <p>98% customer satisfaction rate <span className="text-[16px] font-[400] text-[rgba(255,_255,_255,_0.68)] ">from global clients.</span></p></li>
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
            <div className="p-[50px]">
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
                <h4 className="text-[34px] text-[#00102B] font-[700] mb-0">
                  Have a project?Let's discuss
                </h4>
                <p className="text-[18px] text-[#565656] font-[400]">
                  Please fill in the form and our representative will get back to you.
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
                        <div class="absolute left-[10px] inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#0050D5"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
                        </div>
                        <input
                          className="pl-[35px] appearance-none block w-full text-[16px] border border-[#DADADA] rounded-[10px] text-[#00102B] py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#62207E_!important]"
                          type="text"
                          name="fullName"
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
                        Contact Number <span className="text-[#FF3D3D] ">*</span>
                      </label>
                      <input
                        className="appearance-none block w-full border text-[16px] border-[#DADADA] rounded-[10px] text-[#00102B] py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#62207E_!important]"
                        id="grid-password"
                        type="number"
                        name="phoneNumber"
                        {...register("phoneNumber")}
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
                        <div class="absolute left-[10px] inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#0050D5"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                        </div>
                        <input
                          className="appearance-none block w-full border text-[16px] border-[#DADADA] rounded-[10px] text-[#00102B] py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#62207E_!important]"
                          type="email"
                          name="email"
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
                        <div class="absolute left-[10px] inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill="#0050D5"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/></svg>
                        </div>
                        <select id="countries" class="pl-[35px] bg-colorr appearance-none block w-full border text-[16px] border-[#DADADA] rounded-[10px] text-[#00102B] py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#62207E_!important]">
                          <option selected>Website Development</option>
                          <option value="US">Development</option>
                          <option value="CA">Development</option>
                          <option value="FR">Development</option>
                          <option value="DE">Development</option>
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
                        Select a budget range <span className="text-[#FF3D3D] ">*</span>
                      </label>
                      <div className="relative">
                        <div class="absolute left-[10px] inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#0050D5"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                        </div>
                        <input
                          className="appearance-none block w-full border text-[16px] border-[#DADADA] rounded-[10px] text-[#00102B] py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#62207E_!important]"
                          type="email"
                          name="email"
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
                        <div class="absolute left-[10px] inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill="#0050D5"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/></svg>
                        </div>
                        <select id="countries" class="pl-[35px] bg-colorr appearance-none block w-full border text-[16px] border-[#DADADA] rounded-[10px] text-[#00102B] py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#62207E_!important]">
                          <option selected>Website Development</option>
                          <option value="US">Development</option>
                          <option value="CA">Development</option>
                          <option value="FR">Development</option>
                          <option value="DE">Development</option>
                        </select>
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
                        Project description
                      </label>
                      <textarea
                        {...register("message")}
                        name="message"
                        id=""
                        rows={4}
                        className="bg-[rgba(218,_218,_218,_0.25)] text-[16px] rounded-[10px] text-[#00102B] py-3 px-4"
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