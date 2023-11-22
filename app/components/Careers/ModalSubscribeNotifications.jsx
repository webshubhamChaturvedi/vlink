import { Button } from "flowbite-react";
import ButtonModal from "../common/ButtonModal";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import { useSelector } from "react-redux";
import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import dynamic from 'next/dynamic';
// const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'));

const ModalSuscribeNotifications = ({
  isOpen = false,
  setIsOpen,
  isApplyJob = false,
}) => {
  const captcha = useRef(null);
  const [captchaError, setCaptchaError] = useState(false);
  const [email, setEmail] = useState(true);
  const[file,setFile]=useState(null)
  // const file=useRef();

  function onChangeCaptcha(value) {
    if (captcha.current.getValue() && captcha.current.getValue() != "") {
      setCaptchaError(false);
    }
  }
  const Schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    name: yup.string().required("Name is required"),
    designation: yup.string().required("Designation  is required"),
    number: yup.string().required("number is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(Schema),
    defaultValues: {
      name: "",
      email: "",
      designation: "",
      file: "File",
      number: "",
    },
  });
  const toast = useSelector((state) => state?.toast);
  const isValidEmail = (email) =>
    setEmail(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    );
  const submitHandler = async (data) => {
    if (
      captcha.current.getValue() &&
      captcha.current.getValue() != "" &&
      email
    ) {
      try {
        // console.log(file.current.files)
        const formData = {
          ...data,
        };
        var data = new FormData();
        data.append(
          "files.upload",
          file
        );
        data.append('data', JSON.stringify({designation:formData?.designation,email: formData?.email,name: formData?.name,number: formData?.number}));
        const res = await REQUEST({
          method: "POST",
          url: API_ENDPOINTS.SAVE_APPLY_JOBS,
          data: data,
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
      buttonText="Notificacion"
      className="career-form-scroll"
      header={{
        className: "bg-[#fbfbfc] p-1 subscribe_notified",
        content: (
          <span className="text-[#002856] text-[18px] font-sans font-[600]">
            {isApplyJob
              ? "Apply for this job"
              : "Subscribe Get Notified of the Latest Job Openings"}
          </span>
        ),
      }}
      body={{
        content: (
          <div className="my-3 px-3">
            <form
              className="space-y-4 px-3"
              onSubmit={handleSubmit(submitHandler)}
            >
              <div className="flex flex-col space-y-2">
                <input
                  placeholder="Your Name*"
                  {...register("name")}
                  type="text"
                  className="!bg-white w-full border-[1px] border-[#d1d5db] rounded-[0.125rem] p-[0.75rem] text-[0.875rem] leading-[1.25rem]"
                />
                {errors.name && (
                  <span className="mt-2 font-normal text-sm text-red-700">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex flex-col space-y-2">
                <input
                  placeholder="Phone Number*"
                  type="text"
                  {...register("number")}
                  className="!bg-white w-full border-[1px] border-[#d1d5db] rounded-[0.125rem] p-[0.75rem] text-[0.875rem] leading-[1.25rem]"
                />
                {errors.number && (
                  <span className="mt-2 font-normal text-sm text-red-700">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex flex-col space-y-2">
                <input
                  placeholder="Email Address*"
                  type="text"
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
              <div className="flex flex-col space-y-2">
                <select
                  placeholder="Select Job Designation*"
                  {...register("designation")}
                  type="text"
                  className="!bg-white w-full border-[1px] border-[#d1d5db] rounded-[0.125rem] p-[0.75rem] text-[0.875rem] leading-[1.25rem]"
                >
                  <option value={""}>Select Job Designation*</option>
                  <option value={"frontend"}>Frontend</option>
                  <option value={"backend"}>Backend</option>
                  <option value={"fullstack"}>Full Stack</option>
                  <option value={"mobile"}>Mobile</option>
                </select>
                {errors.designation && (
                  <span className="mt-2 font-normal text-sm text-red-700">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label className="font-[400] text-[14px] text-[#002856] mb-3">
                  Upload Resume
                </label>
              
                <div
                  style={{ border: "1px dashed #d1d5db" }}
                  className="mt-0 flex items-center justify-center px-4 py-2 border border-[#d1d5db] rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <div className="flex flex-col items-center justify-center p-2 relative">
                    {file ? 
                      (<p className="text-[green] text-[18px] font-[600]">File Uploaded Successfully</p>)
                    :
                      <img src="/img/upload.svg" alt="upload" />
                    }
                    {/* <img src={CloudIcon.src} alt="upload" width={30} />
                    <span className="text-[#002856] mb-2">
                      Drag and drop your files here
                    </span>
                    <span className="text-xs mb-2">Max. file size 5MB</span> */}
                    <label
                      for="inputFile"
                      className="cursor-pointer absolute top-0 bottom-0 left-0 right-0"
                    >
                      <span className="text-[#002856] text-xs font-semibold">
                        {/* Browse Files */}
                      </span>
                    </label>
                  </div>
                  <input hidden id="inputFile" type="file" className="hidden" //ref={file}
                  onChange={(e)=>setFile(e.target.files[0])}
                  />
                </div>
              </div>
              <div className="flex-1 justify-center">
                <div className="mt-2 mb-6">
                  <ReCAPTCHA
                    sitekey={`${process.env.NEXT_PUBLIC_CLIENT_SIDE_GOOGLE_CAPTCHA}`}
                    onChange={onChangeCaptcha}
                    size={"normal"}
                    ref={captcha}
                  />

                  {captchaError && (
                    <span className="mt-2 font-normal text-sm text-red-700">
                      This field is required
                    </span>
                  )}
                </div>
                <Button
                  type="submit"
                  size={"lg"}
                  className={`bg-[#62207E] rounded-[2px] px-2 py-1 w-full hover:bg-[#62207E]`}
                >
                 <span className="text-[20px] text-[#ffffff] font-sans">SUBSCRIBE</span>
                </Button>
              </div>
            </form>
          </div>
        ),
      }}
    />
  );
};

export default ModalSuscribeNotifications;
