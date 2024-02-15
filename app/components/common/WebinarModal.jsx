import ButtonModal from "../common/ButtonModal";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";

const WebinarModal = ({ isOpen, setIsOpen, title, setOpenVideo }) => {
  const captcha = useRef(null);
  const [captchaError, setCaptchaError] = useState(false);
  const [active, setActive] = useState(false);

  function onChangeCaptcha(value) {
    if (captcha.current.getValue() && captcha.current.getValue() != "") {
      setCaptchaError(false);
    }
  }

  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const Schema = yup.object().shape({
    company: yup.string().required("Company is a required field"),
    email: yup
      .string()
      .required("Email is required")
      .matches(emailRegex, "Email must be a valid"),
    name: yup
      .string()
      .required("Full name  is required")
      .matches(nameRegex, "Name can not contain number and special character"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(Schema),
    defaultValues: {
      company: "",
      name: "",
      email: "",
    },
  });
  const toast = useSelector((state) => state?.toast);

  const SubmitHandler = async (data) => {
    if (captcha.current.getValue() && captcha.current.getValue() != "") {
      try {
        const formData = {
          ...data,
        };
        setActive(!active);
        const res = await REQUEST({
          method: "POST",
          url: API_ENDPOINTS.SAVE_WEBINAR_FORM,
          data: { data: formData },
        });
        if (res?.status === 200) {
          toast.success("Submitted successfully");
          setCaptchaError(false);
          captcha.current.reset();
          reset();
          setIsOpen(false);
          setOpenVideo(true);
          setActive(active);
        } else toast.error(res?.data?.error?.message);
      } catch (err) {
        toast.error("failed");
      }
    } else {
      setCaptchaError(true);
    }
  };

  return (
    <ButtonModal
      isOpen={isOpen}
      toggle={setIsOpen}
      size="lg"
      body={{
        content: (
          <>
            <div className="bg-[#fff] drop-shadow-[0px_0px_15px_rgba(0,0,0,0.1)] p-[1px]">
              <div className="flex justify-between bg-[rgb(0,40,86,0.04)]">
                <h4 className="font-[400] text-[18px] leading-[27px] text-[#002856] px-[18px] py-4 ">
                  {title}
                </h4>
                <div className="flex items-start justify-end ">
                  <button
                    onClick={() => setIsOpen(false)}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
                </div>
              </div>

              <div className="px-[18px] py-6">
                <form onSubmit={handleSubmit(SubmitHandler)}>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Name*"
                      name="name"
                      {...register("name")}
                      className="text-[16px] placeholder:text-[#777] placeholder:text-[14px]   rounded-[2px] px-[12px] py-[6px] h-[46px] border  w-full outline-0 text-[#777]  bg-[#fff] border-[#7F7D7D]"
                    />
                    {errors.name && (
                      <span className="mt-2 font-normal text-sm text-red-700">
                        {errors?.name?.message}
                      </span>
                    )}
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="email"
                      {...register("email")}
                      placeholder="Work Email*"
                      className="text-[16px] placeholder:text-[#777] placeholder:text-[14px] border-[#7F7D7D]   rounded-[2px]   px-[12px] py-[6px] h-[46px] border  w-full outline-0 text-[#777]  bg-[#fff]"
                    />
                    {errors.email && (
                      <span className="mt-2 font-normal text-sm text-red-700">
                        {errors?.email?.message}
                      </span>
                    )}
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="company"
                      {...register("company")}
                      placeholder="Company"
                      className="text-[16px] placeholder:text-[#777] placeholder:text-[14px]   rounded-[2px] px-[12px] py-[6px] h-[46px] border  w-full outline-0 text-[#777]  bg-[#fff] border-[#7F7D7D]"
                    />
                    {errors.company && (
                      <span className="mt-2 font-normal text-sm text-red-700">
                        {errors?.company?.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-2 mb-4">
                    <ReCAPTCHA
                      ref={captcha}
                      sitekey={`${process.env.NEXT_PUBLIC_CLIENT_SIDE_GOOGLE_CAPTCHA}`}
                      onChange={onChangeCaptcha}
                    />
                    {captchaError && (
                      <span className="mt-2 font-normal text-sm text-red-700">
                        This field is required
                      </span>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={active}
                    className="font-[600] text-[16px] tracking-[-0.4px] uppercase text-[#fff] bg-[#62207E] rounded-[2px] h-[44px] text-center w-full font-sans"
                  >
                    Watch Now
                  </button>
                </form>
              </div>
            </div>
          </>
        ),
      }}
    />
  );
};

export default WebinarModal;
