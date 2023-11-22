import ButtonModal from "../common/ButtonModal";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { download } from "app/scripts/utils";
// import dynamic from 'next/dynamic';
// const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'));

const ModalDownload = ({ isOpen, setIsOpen, title, downloadLink }) => {
  const captcha = useRef(null);
  const [captchaError, setCaptchaError] = useState(false);
  const [email, setEmail] = useState(true);
  const [active, setActive] = useState(false);

  function onChangeCaptcha(value) {
    if (captcha.current.getValue() && captcha.current.getValue() != "") {
      setCaptchaError(false);
    }
  }
  const Schema = yup.object().shape({
    company: yup.string().required(),
    email: yup.string().email().required("Email is required"),
    name: yup.string().required("Full name  is required"),
    // requirement: yup.string().required("Requirement is required"),
    // message: yup.string().required("message is required"),
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
      message: "",
      requirement: "",
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
  const SubmitHandler = async (data) => {
    if (captcha.current.getValue() && captcha.current.getValue() != "") {
      try {
        const formData = {
          ...data,
        };
        setActive(!active);
        const res = await REQUEST({
          method: "POST",
          url: API_ENDPOINTS.SAVE_GOT_A_REQUIREMENTS,
          data: { data: formData },
        });
        if (res?.status === 200) {
          toast.success("Submitted successfully");
          setCaptchaError(false);
          captcha.current.reset();
          if (downloadLink) {
            download(downloadLink);
          }
          reset();
          setIsOpen(false);
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
              <form
                className="space-y-4"
                onSubmit={handleSubmit(SubmitHandler)}
              >
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
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Name*"
                      {...register("name")}
                      className="!bg-white w-full border-[1px] border-[#d1d5db] rounded-[0.125rem] p-[0.75rem] text-[0.875rem] leading-[1.25rem]"
                    />
                    {errors.name && (
                      <span className="mt-2 font-normal text-sm text-red-700">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Work Email*"
                      {...register("email")}
                      onChange={(e) => {
                        isValidEmail(e.target.value);
                      }}
                      className="!bg-white w-full border-[1px] border-[#d1d5db] rounded-[0.125rem] p-[0.75rem] text-[0.875rem] leading-[1.25rem]"
                    />

                    {errors.email && (
                      <span className="mt-2 font-normal text-sm text-red-700">
                        {errors.email?.message}
                      </span>
                    )}
                    {!email && (
                      <span className="mt-2 font-normal text-sm text-red-700">
                        {"email must be a valid email"}
                      </span>
                    )}
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Company*"
                      {...register("company")}
                      className="!bg-white w-full border-[1px] border-[#d1d5db] rounded-[0.125rem] p-[0.75rem] text-[0.875rem] leading-[1.25rem]"
                    />
                    {errors.company && (
                      <span className="mt-2 font-normal text-sm text-red-700">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div className="mt-2 mb-6">
                    <ReCAPTCHA
                      ref={captcha}
                      sitekey={`${process.env.NEXT_PUBLIC_CLIENT_SIDE_GOOGLE_CAPTCHA}`}
                      onChange={onChangeCaptcha}
                      size={"normal"}
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
                    Download Now
                  </button>
                </div>
              </form>
            </div>
          </>
        ),
      }}
    />
  );
};

export default ModalDownload;
