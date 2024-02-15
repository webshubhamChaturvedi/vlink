import { useState, useRef, useEffect } from "react";
import { apiEndpoint } from "app/scripts/fetch";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "flowbite-react";
import REQUEST from "app/helpers/http.service";
import { useSelector } from "react-redux";
import { zohoLeadApi } from "app/scripts/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./modal.css";

import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import { timeZoneCityToCountry } from "app/helpers/timeZoneCityToCountry";
import { getHours, getMinutes } from "date-fns";
import Link from "next/link";

export default function ItBenchRequirement({isOpen, setIsOpen}) {
  const captcha = useRef(null);

  const [captchaError, setCaptchaError] = useState(false);
  const [email, setEmail] = useState(true);
  const [isError, setIsError] = useState(null);
  const [active, setActive] = useState(false);
  const [phone, setPhone] = useState("countryCode");

  const { asPath } = useRouter();

  const [isDefaultChecked, setIsDefaultChecked] = useState(true);
  const handleCheckboxChange = (e) => {
    setIsDefaultChecked(e.target.checked);
  };

  let userCity;
  let userCountry;
  let userTimeZone;
  if (Intl) {
    userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    var tzArr = userTimeZone.split("/");
    userCity = tzArr[tzArr.length - 1];
    timeZoneCityToCountry.map((coun, key) => (
      <>{(userCountry = coun[userCity])}</>
    ));
  }

  function onChangeCaptcha(value) {
    if (captcha.current.getValue() && captcha.current.getValue() != "") {
      setCaptchaError(false);
    }
  }
  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const Schema = yup.object().shape({
    Work_Email: yup
      .string()
      .required("Email is required")
      .matches(emailRegex, "Email must be a valid"),
    Name: yup
      .string()
      .required("Full name  is required")
      .matches(nameRegex, "Name can not contain number and special character"),
    Requirements_Details: yup.string().required("Message is required"),
    phoneNumber: yup
      .string()
      .required("Number is required")
      .min(5, "Number is not valid"),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(Schema),
    defaultValues: {
      Name: "",
      Work_Email: "",
      phoneNumber: "",
      Requirements_Details: "",
      country: userCountry,
      sourceCode: asPath,
      subscribeCheckbox: isDefaultChecked,
    },
  });
  const toast = useSelector((state) => state?.toast);

  const ScheduleCall = async (data) => {

    if (
      captcha.current.getValue() &&
      captcha.current.getValue() != ""
    ) {
      try {
        const formData = {
          ...data,
        };
        setActive(!active);
        const res = await REQUEST({
          method: "POST",
          url: API_ENDPOINTS.IT_BENCH_REQUIREMENT,
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
      const dataapi = await REQUEST({
        method: "GET",
        url: API_ENDPOINTS.HIRETOPTALENT_MODAL,
      });
      setModal(dataapi?.data?.data?.attributes);
    } catch (error) {
      console.log(error.message);
    }
  };

  const [modals, setModals] = useState({});

  const getModals = async () => {
    try {
      const datamodel = await REQUEST({
        method: "GET",
        url: API_ENDPOINTS.GETINTOUCH_MODAL,
      });
      setModals(datamodel?.data?.data?.attributes);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getModal();
    getModals();
  }, []);

  return (
    <div
      toggle={setIsOpen}
      className="fixed top-0 right-0 left-0 bottom-0 z-50 h-full overflow-y-auto overflow-x-hidden bg-[rgba(0,_0,_0,_.5)] flex justify-center items-center"
    >
      <section className="bg-[#fff] rounded-[20px] overflow-hidden max-w-[1200px] relative">
        <div className="grid grid-cols-12">
          <div className="col-span-4 bg-[radial-gradient(79.7%_78.42%_at_30.94%_25.67%,_#022F78_0%,_#0B0924_100%)] p-[30px]">
            <div className="">
              <h6 className="text-[28px] text-[#FFFFFF] font-[600]">
                Why VLink Resources?
              </h6>
            </div>

            <ul className="text-[#fff] my-[40px]">
              <li className="text-[14px] font-[600] flex flex-wap items-start mb-2">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="w-[20px] mr-2 mt-1"
                />
                <p>
                  400+ projects
                  <span className="text-[16px] font-[400] text-[rgba(255,_255,_255,_0.68)] ml-1">
                    delivered and deployed successfully
                  </span>
                </p>
              </li>
              <li className="text-[14px] font-[600] flex flex-wap items-start mb-2">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="w-[20px] mr-2 mt-1"
                />
                <p>
                  450+ experts
                  <span className="text-[16px] font-[400] text-[rgba(255,_255,_255,_0.68)] ml-1">
                    onboarded with innovative mindset
                  </span>
                </p>
              </li>
              <li className="text-[14px] font-[600] flex flex-wap items-start mb-2">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="w-[20px] mr-2 mt-1"
                />
                <p>
                  18+ years of services
                  <span className="text-[16px] font-[400] text-[rgba(255,_255,_255,_0.68)] ml-1">
                    helping clients to nurture & grow.
                  </span>
                </p>
              </li>
              <li className="text-[14px] font-[600] flex flex-wap items-start mb-2">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="w-[20px] mr-2 mt-1"
                />
                <p>
                  98% customer satisfaction rate
                  <span className="text-[16px] font-[400] text-[rgba(255,_255,_255,_0.68)] ml-1">
                    from global clients.
                  </span>
                </p>
              </li>
            </ul>

            <h6 className="text-[14px] text-[rgba(255,_255,_255,_0.68)] font-[400] text-center">
              {modals?.img_title}
            </h6>
            <div className="grid grid-cols-4 marquee mt-5 gap-3">
              <ul className="marquee__group">
                {modals?.companyLogos?.map((data, key) => (
                  <li key={key} className="flex items-center">
                    <img
                      src={apiEndpoint(data?.companyImg?.data?.attributes?.url)}
                      alt="compony logo"
                    />
                  </li>
                ))}
              </ul>
              <div aria-hidden="true" className="marquee__group">
                {modals?.companyLogos?.map((data, key) => (
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
                type="button"
                onClick={() => setIsOpen(false)}
                className="buttonremove1 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white absolute right-[10px] top-[10px]"
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
                  Have resources requirement? Let's discuss 
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
                        Full Name <span className="text-[#FF3D3D] ">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-[10px_!important] inset-y-0 start-0 flex items-center  pointer-events-none">
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
                          name="Name"
                          {...register("Name")}
                        />
                      </div>
                      {errors.Name && (
                        <span className="mt-2 font-normal text-sm text-red-700">
                          {`${errors.Name.message}`}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <div className="w-full px-3 mb-3">
                      <label
                        className="block text-[#616161] text-[14px] font-[400] mb-2"
                        htmlFor="grid-first-name"
                      >
                        Contact Number
                        <span className="text-[#FF3D3D] ">*</span>
                      </label>
                      <Controller
                        name="phoneNumber"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <PhoneInput
                            country={"us"}
                            value={field.phoneNumber}
                            onChange={(phone) => {
                              field.onChange(phone);
                            }}
                          />
                        )}
                      />
                      {errors.phoneNumber && (
                        <span className="mt-2 font-normal text-sm text-red-700">
                          {`${errors.phoneNumber.message}`}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full md:w-1/1 mb-6 md:mb-0">
                    <div className="w-full px-3 mb-3">
                      <label
                        className="block text-[#616161] text-[14px] font-[400] mb-2"
                        htmlFor="grid-first-name"
                      >
                        Work Email Id <span className="text-[#FF3D3D] ">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute left-[10px_!important] inset-y-0 start-0 flex items-center  pointer-events-none w-[18px]">
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
                          name="Work_Email"
                          {...register("Work_Email")}
                        />
                      </div>
                      {errors.Work_Email && (
                        <span className="mt-2 font-normal text-sm text-red-700">
                          {`${errors.Work_Email.message}`}
                        </span>
                      )}
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
                        Details of Your Hiring Requirements?
                        <span className="text-[#FF3D3D] ">*</span>
                      </label>
                      <textarea
                        {...register("Requirements_Details")}
                        name="Requirements_Details"
                        id=""
                        rows={3}
                        className="bg-[rgba(218,_218,_218,_0.25)] text-[14px] rounded-[10px] text-[#00102B] py-2 px-4"
                      ></textarea>
                      {errors.Requirements_Details && (
                        <span className="mt-2 font-normal text-sm text-red-700">
                          {`${errors.Requirements_Details.message}`}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="country"
                  {...register("country")}
                  name="country"
                  className="hidden"
                />
                <input
                  type="text"
                  placeholder="SourceCode"
                  {...register("sourceCode")}
                  name="sourceCode"
                  className="hidden"
                />
                <div className="mb-[30px_!important] mt-[10px_!important]">
                    <label className="flex items-center space-x-1">
                      <Controller
                        name="subscribeCheckbox"
                        control={control}
                        render={({ field }) => (
                          <input
                            type="checkbox"
                            className="form-checkbox rounded-full text-[#fff] bg-[#fff] border-[#fff]"
                            {...field}
                            onChange={(e) => {
                              field.onChange(e);
                              handleCheckboxChange(e);
                            }}
                            defaultChecked={isDefaultChecked}
                          />
                        )}
                      />
                      <span className="text-[#000] text-[12px] font-sans font-[400]">
                        By subscribing I accept the
                        <Link
                          href="/privacy-policy"
                          className="underline ml-2 inline-block"
                        >
                          Privacy Policy
                        </Link>
                      </span>
                    </label>
                    {errors.subscribeCheckbox && (
                      <span className="mt-2 font-semibold text-sm text-red-700">
                        {errors?.subscribeCheckbox?.message}
                      </span>
                    )}
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
