import ButtonModal from "../common/ButtonModal";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import { useSelector } from "react-redux";
import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { timeZoneCityToCountry } from "app/helpers/timeZoneCityToCountry";

const ModalForwadFriends = ({ isOpen, setIsOpen }) => {
  const captcha = useRef(null);
  const [captchaError, setCaptchaError] = useState(false);
  const [emailTo, setEmailTo] = useState(true);
  const [emailFrom, setEmailFrom] = useState(true);

  const { asPath } = useRouter();

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
  const Schema = yup.object().shape({
    from: yup.string().email().required("Email is required"),
    to: yup.string().email().required("Email is required"),
    sub: yup.string().required("Subject  is required"),
    message: yup.string().required("Message is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(Schema),
    defaultValues: {
      from: "",
      to: "",
      message: "",
      sub: "",
      countryName: userCountry,
      sourceCode: asPath,
    },
  });
  const toast = useSelector((state) => state?.toast);
  const isValidTo = (email) =>
    setEmailTo(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    );
  const isValidFrom = (email) =>
    setEmailFrom(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    );
  const submitHandler = async (data) => {
    if (
      captcha.current.getValue() &&
      captcha.current.getValue() != "" &&
      emailFrom &&
      emailTo
    ) {
      try {
        const formData = {
          ...data,
        };
        const res = await REQUEST({
          method: "POST",
          url: API_ENDPOINTS.SAVE_FOWARD_FRIEND,
          data: { data: formData },
        });

        if (res?.status === 200) {
          toast.success("Submitted successfully");
          setCaptchaError(false);
          captcha.current.reset();
          reset();
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
            <div className="flex items-start justify-end">
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
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-[20px] text-gray-800 my-2">
                  Forward to a friend
                </h1>
                <form
                  className="flex flex-col items-center justify-center"
                  onSubmit={handleSubmit(submitHandler)}
                >
                  <input
                    type="text"
                    className="border-1 border-gray-300 rounded-sm w-full h-10 mt-4"
                    placeholder="From"
                    {...register("from")}
                    onChange={(e) => {
                      isValidFrom(e.target.value);
                    }}
                  />
                  {errors.from && (
                    <span className="mt-2 font-normal text-sm text-red-700">
                      {errors.email?.from}
                    </span>
                  )}
                  {!emailFrom && (
                    <span className="mt-2 font-normal text-sm text-red-700">
                      {"Email must be a valid"}
                    </span>
                  )}
                  <input
                    type="text"
                    className="border-1 border-gray-300 rounded-sm w-full h-10 mt-4"
                    placeholder="To"
                    {...register("to")}
                    onChange={(e) => {
                      isValidTo(e.target.value);
                    }}
                  />
                  {errors.to && (
                    <span className="mt-2 font-normal text-sm text-red-700">
                      {errors.to?.message}
                    </span>
                  )}
                  {!emailTo && (
                    <span className="mt-2 font-normal text-sm text-red-700">
                      {"Email must be a valid"}
                    </span>
                  )}
                  <input
                    type="text"
                    className="border-1 border-gray-300 rounded-sm w-full h-10 mt-4"
                    placeholder="Subject"
                    {...register("sub")}
                  />
                  {errors.sub && (
                    <span className="mt-2 font-normal text-sm text-red-700">
                      This field is required
                    </span>
                  )}
                  <textarea
                    className="border-1 border-gray-300 rounded-sm w-full h-20 mt-4"
                    placeholder="Message"
                    {...register("message")}
                  />
                  {errors.message && (
                    <span className="mt-2 font-normal text-sm text-red-700">
                      This field is required
                    </span>
                  )}

                  <input
                    type="text"
                    placeholder="countryName"
                    {...register("countryName")}
                    name="countryName"
                    className="hidden"
                  />
                  <input
                    type="text"
                    placeholder="SourceCode"
                    {...register("sourceCode")}
                    name="sourceCode"
                    className="hidden"
                  />

                  <div
                    id="botonera"
                    className="pt-5 flex flex-row items-center justify-center"
                  >
                    <div>
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

                    <button className="bg-blue-700 text-white px-4 py-2 rounded-md m-4">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        ),
      }}
    />
  );
};

export default ModalForwadFriends;
