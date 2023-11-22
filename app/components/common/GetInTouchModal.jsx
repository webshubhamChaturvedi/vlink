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
          <div className="col-span-4 bg-[linear-gradient(157.06deg,_#7E25F9_-1.04%,_#4926FF_102.87%)] p-[30px]">
            <div className="rounded-[40px] overflow-hidden mx-auto mb-16">
              {modal && modal?.gifImage?.data?.attributes?.url && (
                <img
                  src={apiEndpoint(modal?.gifImage?.data?.attributes?.url)}
                  className="w-full"
                  alt="get modal gif"
                />
              )}
            </div>
            <h6 className="text-[16px] text-[rgba(255,_255,_255,_0.68)] font-[400] text-center">
              {modal?.img_title}
            </h6>
            <div className="grid grid-cols-4 marquee mt-10 gap-3">
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
                <h4 className="text-[40px] text-[#00102B] font-[700] mb-0">
                  {modal?.formTitle}
                </h4>
                <p className="text-[25px] text-[#565656] font-[400]">
                  {modal?.formSubtitle}
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
                        Full Name
                      </label>
                      <input
                        className="appearance-none block w-full text-[16px] border border-[#DADADA] rounded-[10px] text-[#00102B] py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#62207E_!important]"
                        type="text"
                        name="fullName"
                        {...register("fullName")}
                      />
                    </div>
                    <div className="w-full px-3 mb-3">
                      <label
                        className="block text-[#616161] text-[14px] font-[400] mb-2"
                        htmlFor="grid-last-name"
                      >
                        Email Id
                      </label>
                      <input
                        className="appearance-none block w-full border text-[16px] border-[#DADADA] rounded-[10px] text-[#00102B] py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#62207E_!important]"
                        type="email"
                        name="email"
                        {...register("email")}
                      />
                    </div>
                    <div className="w-full px-3 mb-3">
                      <label
                        className="block text-[#616161] text-[14px] font-[400] mb-2"
                        htmlFor="grid-password"
                      >
                        Contact Number
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
                  <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <div className="w-full px-3 h-full">
                      <label
                        className="block text-[#616161] text-[14px] font-[400] mb-2"
                        htmlFor=""
                      >
                        Message
                      </label>
                      <textarea
                        {...register("message")}
                        name="message"
                        id=""
                        rows={9}
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
                    className="bg-[#62207E_!important] shadow-[0px_0px_20px_rgba(0,_80,_213,_0.13)] uppercase w-full text-[22px] font-[700]"
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
