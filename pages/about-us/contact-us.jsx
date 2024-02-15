import Head from "next/head";
import "styles/Home.module.css";
import SectionHeader from "app/components/common/SectionHeader";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";
import { subscribeEmail, zohoLeadApi } from "app/scripts/utils";
import CloudinaryImage from "../../app/components/common/CloudinaryImage";
import Metatag from "app/components/metaTag";
import { timeZoneCityToCountry } from "app/helpers/timeZoneCityToCountry";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./contact-form.css";

const style = {
  formWrapper: { boxShadow: " 0px 0px 25px rgba(0, 0, 0, 0.1)" },
  inputField: {
    backgroundColor: "#F9F9F9",
    border: "0.5px solid rgba(146, 146, 146, 0.5)",
    borderRadius: "4px",
    padding: "8px 16px",
    height: "55px",
  },
  btnBlue: {
    background: "#0050D5",
    boxshadow: "0px 0px 6px rgba(0, 0, 0, 0.1)",
    bordeRadius: "4px",
    color: "#fff",
    maxWidth: "283px",
    width: "100%",
    height: "58px",
    textAlign: "center",
    fontWeight: 600,
    fontSize: "17px",
    lineHeight: "23px",
  },
  whiteCard: { boxShadow: "0px 0px 25px rgba(0, 0, 0, 0.1)" },
  selectArrow: {
    backgroundImage: "url(../img/contact-us/Vector.svg)",
    backgroundPosition: "calc(100% - 15px) center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "16px",
  },
};
export default function ContactUs({ contactUsData }) {
  const { asPath } = useRouter();
  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const dispatch = useDispatch();
  const toast = useSelector((state) => state?.toast);
  const [tab, setTab] = useState(0);
  const captcha = useRef(null);
  const [captchaError, setCaptchaError] = useState(false);
  const [email, setEmail] = useState(true);
  // const [email2, setEmail2] = useState(true);
  const [phone, setPhone] = useState(true);
  const [active, setActive] = useState(false);

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
    mobile: yup
      .string()
      .required("Numbar is required")
      .min(5, "Number is not valid"),
    email: yup
      .string()
      .email()
      .required("Email is required")
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Invalid email format"
      ),
    name: yup
      .string()
      .required("Name is required")
      .matches(/^[a-zA-Z\s]*$/, "Name must contain only letters and spaces"),
    organization: yup.string().required("organization Name is required"),
    message: yup.string().required("Message is required"),
  });

  const Schema2 = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email address")
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Invalid email format"
      )
      .required("Email is required"),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(Schema),
    defaultValues: {
      mobile: "",
      name: "",
      message: "",
      organization: "",
      email: "",
      countryName: userCountry,
      sourceCode: asPath,
    },
  });

  const form2 = useForm({
    resolver: yupResolver(Schema2),
    defaultValues: {
      email: "",
      countryName: userCountry,
      sourceCode: asPath,
      type: "newsletter",
    },
  });

  const header = [{ label: "Home", link: "/" }, { label: "Contact us" }];

  const isValidEmail2 = (email) =>
    setEmail2(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    );

  const SubmitHandler = async (data) => {
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
          url: API_ENDPOINTS.SAVE_CONTACT_US,
          data: { data: formData },
        });

        if (res?.status === 200) {
          toast.success("Submitted successfully");
          setCaptchaError(false);
          captcha.current.reset();
          reset();
          zohoLeadApi({ ...data, firstName: data?.name });
          subscribeEmail({ ...data });
          setActive(active);
        } else toast.error(res?.data?.error?.message);
      } catch (err) {
        toast.error("failed");
      }
    } else {
      setCaptchaError(true);
    }
  };

  const Submit = async (data) => {
    const formData = {
      ...data,
    };
    try {
      setActive(!active);
      const res = await REQUEST({
        method: "POST",
        url: API_ENDPOINTS.SAVE_SUBSCRIBE,
        data: { data: formData },
      });
      if (res?.status === 200) {
        toast.success("Submitted successfully");
        form2?.reset();
        setActive(active);
      } else toast.error(res?.data?.error?.message);
    } catch (err) {
      toast.error("failed");
    }
  };
  
  return (
    <div>
      <Head>
        <title>{contactUsData?.title ? contactUsData?.title : `VLink`}</title>
        <meta
          name="description"
          content={contactUsData?.description || "Vlink Description"}
        />

        <meta
          property="og:title"
          content={contactUsData?.title ? contactUsData?.title : `Vlink`}
        />
        <meta
          property="og:description"
          content={contactUsData?.description || "Vlink Description"}
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />

        <Metatag content={`https://www.vlinkinfo.com/img/logopng.png`} />
      </Head>
      <SectionHeader list={header} />
      <section className="font-sans pt-[55px] lg:pb-[88px] pb-[55px] xl:pl-[5rem] xl:pr-[5rem] mt-20">
        {/* <ToastContainer/> */}
        <div className="container mx-auto px-4">
          <h1 className="md:text-[50px] text-[22px] text-[#62207E] font-bold  mb-8">
            {contactUsData?.h1_purple}
            <span className="text-[#000]">{contactUsData?.h1_black}</span>
          </h1>
          <div className="sm:flex mt-[37px] form-trusted-block md:flex-nowrap flex-wrap">
            <div className="md:w-[70%] md:mr-5   sm:w-full ">
              <div
                className="bg-[#fff] md:px-[38px] md:py-[63px] px-[25px] py-[40px] md:h-full "
                style={style.formWrapper}
              >
                <form onSubmit={handleSubmit(SubmitHandler)}>
                  <div className="sm:flex flex-wrap sm:flex-nowrap">
                    <div className="sm:w-[50%] sm:mr-4 md:mb-[38px] mb-[25px]">
                      <input
                        type="text"
                        className="text-[16px] w-[100%] block outline-0 placeholder-[#898989] text-[#898989]"
                        placeholder="Enter Full Name *"
                        {...register("name")}
                        name="name"
                        style={style.inputField}
                      />
                      {errors.name && (
                        <span className="mt-2 font-normal text-sm text-red-700">
                          {`${errors.name.message}`}
                        </span>
                      )}
                    </div>
                    <div className="sm:w-[50%] sm:ml-4 md:mb-[38px] mb-[25px]">
                      <input
                        type="email"
                        className="text-[16px] w-[100%] block outline-0 placeholder-[#898989] text-[#898989]"
                        placeholder="Enter Work Email *"
                        {...register("email")}
                        name="email"
                        style={style.inputField}
                      />
                      {errors.email && (
                        <span className="mt-2 font-normal text-sm text-red-700">
                          {errors.email?.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="sm:flex flex-wrap sm:flex-nowrap">
                    <div className="sm:w-[50%] sm:mr-4 md:mb-[38px] mb-[25px]">
                      <Controller
                        name="mobile" // Name of the field in the form data
                        control={control}
                        defaultValue="" // Initial value for the field
                        render={({ field }) => (
                          <PhoneInput
                            country={"us"}
                            value={field.mobile} // Set the value from react-hook-form
                            onChange={(phone) => {
                              field.onChange(phone); // Update react-hook-form value on change
                            }}
                            style={style.inputField}
                            className="p-[0px_!important] phonenumber react-tel-input focus:ring-0 placeholder-[#343434] text-[#343434] bg-[#F9F9F9]"
                          />
                        )}
                      />
                      {errors.mobile && (
                        <span className="mt-2 font-normal text-sm text-red-700">
                          {`${errors.mobile.message}`}
                        </span>
                      )}
                    </div>
                    <div className="sm:w-[50%] sm:ml-4 md:mb-[38px] mb-[25px]">
                      <input
                        type="text"
                        className="text-[16px] w-[100%] block outline-0 placeholder-[#898989] text-[#898989]"
                        placeholder="Enter Organization Name *"
                        {...register("organization")}
                        style={style.inputField}
                      />
                      {errors.organization && (
                        <span className="mt-2 font-normal text-sm text-red-700">
                          {`${errors.organization.message}`}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-[100%]">
                    <textarea
                      rows="5"
                      className="text-[16px] w-[100%] block h-auto resize-none outline-0 placeholder-[#898989] text-[#898989] h-[144px] bg-[#F9F9F9] border-[0.5px solid rgba(146, 146, 146, 0.5)]"
                      placeholder="How can we help you? *"
                      {...register("message")}
                      name="message"
                    ></textarea>
                    {errors.message && (
                      <span className="mt-2 font-normal text-sm text-red-700">
                        {errors.message.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-4 ">
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
                    className="md:mt-[60px] mt-[40px]"
                    style={style.btnBlue}
                    disabled={active}
                  >
                    Submit
                    <img
                      src="/img/contact-us/button-arrow.svg"
                      className="inline ml-4"
                      alt="Vlink arrow"
                    />
                  </button>
                </form>
              </div>
            </div>
            <div className="md:w-[30%] md:ml-5 md:mt-0 sm:w-full mt-10">
              <div
                className="bg-[#fff] px-[15px] py-[18px] text-center"
                style={style.whiteCard}
              >
                <h5 className="text-[26px] text-[#62207E] font-[700] mb-[20px] tracking-[0.04em]">
                  Trusted By
                </h5>

                <div className="flex md:block flex-wrap justify-around items-center">
                  <figure className="mb-[30px] mx-auto w-[200px]">
                    <img
                      src="https://res.cloudinary.com/dthpnue1d/image/upload/v1691389311/stanley_bd_logo_51cac0f24f.svg"
                      className="inline-block md:h-auto"
                      alt="stanley bdlogo"
                    />
                  </figure>
                  <figure className="mb-[30px] mx-auto w-[200px]">
                    <img
                      src="https://res.cloudinary.com/dthpnue1d/image/upload/v1690803777/Connecticare_3_1_353490cad1.png"
                      className="inline-block md:h-auto "
                      alt="Vlink Connecticare"
                    />
                  </figure>
                  <figure className="mb-[30px] mx-auto w-[200px]">
                    <img
                      src="https://res.cloudinary.com/dthpnue1d/image/upload/v1690803873/Deloitte_a0b524eefe.png"
                      className="inline-block md:h-auto"
                      alt="Vlink Deloitte"
                    />
                  </figure>
                  <figure className="mb-[30px] mx-auto w-[200px]">
                    <img
                      src="https://res.cloudinary.com/dthpnue1d/image/upload/v1690804084/volvo_Eicher_3_4_cc93f0b4f9.png"
                      className="inline-block md:h-auto"
                      alt="Vlink volvo eicher"
                    />
                  </figure>
                  <figure className="mb-[30px] mx-auto w-[200px]">
                    <img
                      src="https://res.cloudinary.com/dthpnue1d/image/upload/v1690804134/Schneider_Electric_4_f4d8f6a31a.svg"
                      className="inline-block md:h-auto"
                      alt="Vlink schneider electric"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  lg:mt-[100px] mt-[60px] card-blocks">
            <div className="pr-10">
              <h5 className="text-[20px] text-[#002856] font-[600] mb-[16px] leading-[27px]">
                {contactUsData?.section1?.h1}
              </h5>
              <p className="text-[16px] text-[#232323] font-[400] mb-[20px] leading-[22px]">
                {contactUsData?.section1?.p1}
              </p>
              <Link
                className="flex items-center font-[600] text-[16px] text-[#62207E] mb-[10px] underline underline-offset-1"
                href={`mailto:${contactUsData?.section1?.Email}?subject=Subject%20Here&body=Body%20Text%20Here`}
              >
                <svg
                  className="mr-1"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="#62207E"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.16666 15.8334C2.73124 15.8334 2.35863 15.6785 2.04883 15.3687C1.73849 15.0584 1.58333 14.6855 1.58333 14.2501V4.75008C1.58333 4.31466 1.73849 3.94205 2.04883 3.63225C2.35863 3.32191 2.73124 3.16675 3.16666 3.16675H15.8333C16.2687 3.16675 16.6416 3.32191 16.952 3.63225C17.2618 3.94205 17.4167 4.31466 17.4167 4.75008V14.2501C17.4167 14.6855 17.2618 15.0584 16.952 15.3687C16.6416 15.6785 16.2687 15.8334 15.8333 15.8334H3.16666ZM9.49999 10.2917L3.16666 6.33341V14.2501H15.8333V6.33341L9.49999 10.2917ZM9.49999 8.70841L15.8333 4.75008H3.16666L9.49999 8.70841ZM3.16666 6.33341V4.75008V14.2501V6.33341Z"
                    fill="#62207E"
                  ></path>
                </svg>
                {contactUsData?.section1?.Email}
              </Link>
              <Link
                className="flex items-center font-[600] text-[16px] text-[#62207E] underline underline-offset-1"
                href={`tel:${contactUsData?.section1?.number}`}
              >
                <svg
                  className="mr-1"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="#62207E"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.1869 7.74102C16.2623 7.72127 16.3331 7.68665 16.395 7.6392C16.457 7.59175 16.5088 7.53242 16.5475 7.46468C16.5862 7.39694 16.611 7.32216 16.6205 7.24472C16.6299 7.16727 16.6238 7.08872 16.6025 7.01367C16.3056 5.90684 15.7228 4.89759 14.9125 4.08728C14.1022 3.27697 13.0929 2.69412 11.9861 2.39727C11.911 2.37596 11.8325 2.36985 11.755 2.37929C11.6776 2.38873 11.6028 2.41353 11.5351 2.45223C11.4673 2.49094 11.408 2.54278 11.3605 2.60471C11.3131 2.66664 11.2785 2.73741 11.2587 2.81289C11.2441 2.86355 11.2366 2.91601 11.2365 2.96875C11.2372 3.0998 11.2813 3.22691 11.3619 3.33028C11.4424 3.43366 11.5549 3.50747 11.6818 3.54023C12.5856 3.78715 13.4093 4.26545 14.0718 4.92793C14.7343 5.59042 15.2126 6.4142 15.4595 7.31797C15.4785 7.39411 15.5125 7.46568 15.5596 7.52844C15.6067 7.59119 15.6659 7.64386 15.7337 7.68331C15.8016 7.72276 15.8766 7.74819 15.9544 7.7581C16.0323 7.76802 16.1113 7.76221 16.1869 7.74102ZM13.1662 7.93398C13.0286 7.43161 12.7626 6.97372 12.3943 6.60542C12.026 6.23712 11.5681 5.97111 11.0658 5.83359C10.9382 5.802 10.825 5.72849 10.7443 5.62486C10.6635 5.52123 10.6199 5.39348 10.6205 5.26211C10.62 5.21176 10.6275 5.16166 10.6427 5.11367C10.6617 5.03753 10.6957 4.96596 10.7428 4.9032C10.7899 4.84045 10.8491 4.78778 10.9169 4.74833C10.9848 4.70888 11.0598 4.68345 11.1376 4.67354C11.2155 4.66362 11.2945 4.66943 11.3701 4.69063C12.0755 4.87806 12.7189 5.24861 13.235 5.76474C13.7511 6.28087 14.1217 6.92425 14.3091 7.62969C14.3373 7.70714 14.3491 7.78961 14.3437 7.87187C14.3383 7.95412 14.3158 8.03434 14.2777 8.10743C14.2396 8.18053 14.1867 8.24488 14.1224 8.2964C14.058 8.34793 13.9837 8.38549 13.904 8.40669C13.8243 8.4279 13.7411 8.43229 13.6597 8.41958C13.5783 8.40687 13.5004 8.37734 13.4309 8.33288C13.3615 8.28841 13.3022 8.22998 13.2566 8.1613C13.211 8.09263 13.1802 8.01521 13.1662 7.93398ZM6.00405 1.81094C5.00179 1.94223 4.08132 2.43302 3.41376 3.19204C2.74619 3.95107 2.37698 4.92668 2.37475 5.9375C2.37475 11.8305 7.16928 16.625 13.0623 16.625C14.0731 16.6228 15.0487 16.2536 15.8077 15.586C16.5667 14.9184 17.0575 13.998 17.1888 12.9957C17.2171 12.7402 17.1633 12.4823 17.0352 12.2595C16.9071 12.0366 16.7114 11.8603 16.4763 11.7562L12.9955 10.2645C12.8148 10.1871 12.6176 10.156 12.4219 10.1742C12.2262 10.1923 12.0381 10.2591 11.8748 10.3684L9.98959 11.6004C8.85739 11.0425 7.94337 10.1233 7.39194 8.98789L8.63139 7.125C8.7414 6.9618 8.80799 6.77325 8.82488 6.57715C8.84176 6.38106 8.80837 6.1839 8.72788 6.0043L7.2435 2.52344C7.1394 2.2884 6.96314 2.09263 6.74028 1.96451C6.51742 1.8364 6.25954 1.78261 6.00405 1.81094ZM6.15248 2.99102L7.63686 6.47188L6.39741 8.32734C6.28454 8.49807 6.21771 8.69507 6.20341 8.89923C6.1891 9.10339 6.22781 9.30778 6.31577 9.49258C6.98464 10.8753 8.09789 11.9938 9.47748 12.6691C9.66165 12.7582 9.8657 12.7981 10.0699 12.7851C10.274 12.7721 10.4713 12.7066 10.6427 12.5949L12.5279 11.3555L16.0087 12.8473C15.9167 13.5635 15.5667 14.2216 15.0243 14.6984C14.4819 15.1752 13.7844 15.438 13.0623 15.4375C10.5433 15.4355 8.12808 14.434 6.34691 12.6528C4.56574 10.8717 3.56422 8.45645 3.56225 5.9375C3.56177 5.21536 3.82453 4.5178 4.30132 3.97544C4.77811 3.43307 5.43624 3.08309 6.15248 2.99102Z"
                    fill="#62207E"
                  ></path>
                </svg>
                {contactUsData?.section1?.number}
              </Link>
            </div>
            <div className="sm:border-l sm:border-r border-[#B8B8B8]  sm:pl-10  sm:pr-10 mt-10 sm:mt-0">
              <h5 className="text-[20px] text-[#002856] font-[600] mb-[16px] leading-[27px]">
                {contactUsData?.section1?.h2}
              </h5>
              <p className="text-[16px] text-[#232323] font-[400] mb-[16px] leading-[22px]">
                {contactUsData?.section1?.p2}
              </p>
              <Link
                className="text-[16px] text-[#62207E] font-[600] underline underline-offset-1"
                href={contactUsData?.section1?.link}
              >
                {contactUsData?.section1?.label}
              </Link>
            </div>
            <div className="lg:pl-10 mt-10 lg:mt-0">
              <h5 className="text-[20px] text-[#002856] font-[600] mb-[16px] leading-[27px]">
                {contactUsData?.section1?.h3}
              </h5>
              <p className="text-[16px] text-[#232323] font-[400] mb-[16px] leading-[22px]">
                {contactUsData?.section1?.p3}
              </p>
              <div className="flex">
                <form onSubmit={form2?.handleSubmit(Submit)} className="flex">
                  <div>
                    <input
                      type="email"
                      placeholder="Enter Email Id"
                      className="w-full rounded-[4px_0px_0px_4px_!important] outline-0 text-[14px]
                  bg-[rgb(249_249_249)] border-[0.5px] border-[rgba(146,_146,_146,_0.5)] p-[8px_16px] h-[55px]"
                      {...form2?.register("email")}
                      name="email"
                      style={style.inputField}
                      onChange={(e) => {
                        isValidEmail2(e.target.value);
                      }}
                    />
                    {form2?.formData?.errors.email && (
                      <span className="mt-2 font-normal text-sm text-red-700">
                        {form2?.formData?.errors.email?.message}
                      </span>
                    )}
                    {!email && (
                      <span className="mt-2 font-normal text-sm text-red-700">
                        {"Email must be a valid"}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={active}
                    className="px-6 pt-[0.5rem_!important] inline-flex  justify-center items-center  rounded-tl-[0px_!important] rounded-bl-[0px_!important] rounded-tr-[4px_!important] rounded-br-[4px_!important] bg-[#62207E] border border-[#62207e]  text-white text-[14px] h-[55px]"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F7FAFF] pt-[55px] lg:pb-[80px] pb-[55px] font-sans xl:pl-[5rem] xl:pr-[5rem]">
        <div className="container mx-auto px-4">
          <h5 className="font-[700] md:text-[36px] text-[22px] md:leading-[54px] leading-[35px] mb-[24px] text-[#62207E] text-center">
            {contactUsData?.section2?.h1_purple}
            <span className="text-[#383838]">
              {contactUsData?.section2?.h1_black}
            </span>
          </h5>
          <p className="text-[18px] font-[400] leading-[23px] text-[#353535] mb-[50px] text-center">
            {contactUsData?.section2?.p}
          </p>
          <div className="flex justify-around flex-wrap locations-lists">
            {contactUsData?.section4?.map((data, index) =>
              tab === index ? (
                <label
                  className="text-[#000] text-[18px] font-[700] leading-[34px] p-2 border-b-2 border-[#000]"
                  key={`location-contact-${index}`}
                >
                  {`${index + 1}.  ${data?.text}`}
                </label>
              ) : (
                <label
                  className="text-[#000] text-[18px] font-[400] leading-[34px] p-2 cursor-pointer"
                  key={`location-contact-${index}`}
                  onClick={() => setTab(index)}
                >
                  {`${index + 1}.  ${data?.text}`}
                </label>
              )
            )}
          </div>
          <div className="sm:flex mt-[50px] items-center address-details">
            <div className="sm:w-[50%] sm:mr-10">
              <figure>
                <img
                  src="https://res.cloudinary.com/dthpnue1d/image/upload/c_fill,g_faces,w_480/location_contact_us_6fe6af1f52"
                  alt="Vlink location"
                  className="w-full"
                />
              </figure>
            </div>
            <div className="sm:w-[50%] sm:ml-8 mt-10 sm:mt-0">
              {contactUsData?.section4?.length ? (
                <ul>
                  <li>
                    <ul className="grid grid-cols-2 gap-6">
                      {contactUsData?.section4[tab]?.addresses && contactUsData?.section4[tab]?.addresses?.map((items,key)=>(
                        <li key={key} className={`${key % 2 === 0 && "border-r-[1px] border-[#ddd]"} && `}>
                          <h6 className="font-[600] text-[20px] leading-[24px] text-[#62207E] mb-[12px] flex  items-center">
                            {items?.icon1?.data?.attributes?.url &&
                              <CloudinaryImage
                                  backendImgUrl={
                                    items?.icon1?.data?.attributes?.url
                                  }
                                  alt={
                                    items?.icon1?.data?.attributes?.alternativeText
                                  }
                                  className="inline mr-[15px]"
                                />
                            }
                            {items?.h1}
                          </h6>
                          <label className="font-[400] text-[16px] leading-[24px] text-[#353535]">
                            {items?.p1}
                          </label>
                        </li>
                      ))}
                    </ul>
                  {/* // <>
                  //     <h6 className="font-[600] text-[20px] leading-[24px] text-[#62207E] mb-[12px] flex  items-center">
                  //       <CloudinaryImage
                  //         backendImgUrl={
                  //           contactUsData?.section4[tab]?.address?.icon1?.data
                  //             ?.attributes?.url
                  //         }
                  //         alt={
                  //           contactUsData?.section4[tab]?.address?.icon1?.data
                  //             ?.attributes?.alternativeText
                  //         }
                  //         className="inline mr-[15px]"
                  //       />
                  //       {contactUsData?.section4[tab]?.address?.h1}
                  //     </h6>
                  //     <label className="font-[400] text-[16px] leading-[24px] text-[#353535]">
                  //       {contactUsData?.section4[tab]?.address?.p1}
                  //     </label>
                  //   </> */}
                  </li>

                  <li className="my-[40px]">
                    <h6 className="font-[600] text-[20px] leading-[24px] text-[#62207E] mb-[12px] flex  items-center">
                      <CloudinaryImage
                        backendImgUrl={
                          contactUsData?.section4[tab]?.address?.icon2?.data[0]
                            ?.attributes?.url
                        }
                        alt={
                          contactUsData?.section4[tab]?.address?.icon2?.data[0]
                            ?.attributes?.alternativeText
                        }
                        className="inline mr-[15px]"
                      />
                      {contactUsData?.section4[tab]?.address?.h2}
                    </h6>
                    <label className="font-[400] text-[16px] leading-[24px] text-[#353535]">
                      {contactUsData?.section4[tab]?.address?.number}
                    </label>
                  </li>
                  <li>
                    <h6 className="font-[600] text-[20px] leading-[24px] text-[#62207E] mb-[12px] flex  items-center">
                      <CloudinaryImage
                        backendImgUrl={
                          contactUsData?.section4[tab]?.address?.icon3?.data
                            ?.attributes?.url
                        }
                        alt={
                          contactUsData?.section4[tab]?.address?.icon2?.data[0]
                            ?.attributes?.alternativeText
                        }
                        className="inline mr-[15px]"
                      />
                      {contactUsData?.section4[tab]?.address?.h3}
                    </h6>
                    <label className="font-[400] text-[16px] leading-[24px] text-[#353535]">
                      {contactUsData?.section4[tab]?.address?.Email}
                    </label>
                  </li>
                </ul>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const [contactUsData] = await Promise.all([
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.CONTACT_US,
    }),
  ]);
  return {
    props: { contactUsData: contactUsData?.data?.data?.attributes },
  };
}
