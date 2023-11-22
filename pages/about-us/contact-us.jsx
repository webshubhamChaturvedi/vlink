import Head from "next/head";
import "styles/Home.module.css";
import SectionHeader from "app/components/common/SectionHeader";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";
import { subscribeEmail, zohoLeadApi } from "app/scripts/utils";
import CloudinaryImage from "../../app/components/common/CloudinaryImage";
import Metatag from "app/components/metaTag";

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
  const [email2, setEmail2] = useState(true);
  const [phone, setPhone] = useState(true);
  const [active, setActive] = useState(false);
  function onChangeCaptcha(value) {
    if (captcha.current.getValue() && captcha.current.getValue() != "") {
      setCaptchaError(false);
    }
  }
  const Schema = yup.object().shape({
    mobile: yup.string().required(),
    email: yup.string().email().required("Email is required"),
    name: yup.string().required("Full name  is required"),
    organization: yup.string().required("Organization is required"),
    message: yup.string().required("message is required"),
  });

  const Schema2 = yup.object().shape({
    email: yup.string().email().required("Email is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(Schema),
    defaultValues: {
      mobile: "",
      name: "",
      message: "",
      organization: "",
    },
  });

  const form2 = useForm({
    resolver: yupResolver(Schema2),
    defaultValues: {
      email: "",
    },
  });

  const header = [{ label: "Home", link: "/" }, { label: "Contact us" }];

  const isValidEmail = (email) =>
    setEmail(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    );

  const isValidEmail2 = (email) =>
    setEmail2(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    );

  const isValidPhone = (phone) =>
    setPhone(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(phone));

  const SubmitHandler = async (data) => {
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
      <section className="font-sans pt-[55px] lg:pb-[88px] pb-[55px] xl:pl-[5rem] xl:pr-[5rem]">
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
                          This field is required
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
                        onChange={(e) => {
                          isValidEmail(e.target.value);
                        }}
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
                  </div>
                  <div className="sm:flex flex-wrap sm:flex-nowrap">
                    <div className="sm:w-[50%] sm:mr-4 md:mb-[38px] mb-[25px]">
                      <input
                        type="text"
                        className="text-[16px] w-[100%] block outline-0 placeholder-[#898989] text-[#898989]"
                        placeholder="Enter Phone Number *"
                        {...register("mobile")}
                        style={style.inputField}
                        onChange={(e) => {
                          isValidPhone(e.target.value);
                        }}
                      />
                      {errors.mobile && (
                        <span className="mt-2 font-normal text-sm text-red-700">
                          This field is required
                        </span>
                      )}
                      {!phone && (
                        <span className="mt-2 font-normal text-sm text-red-700">
                          {"phone number must be a valid "}
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
                          This field is required
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
                        This field is required
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
                      src="https://res.cloudinary.com/dwac0ziol/image/upload/v1691389311/stanley_bd_logo_51cac0f24f.svg"
                      className="inline-block md:h-auto"
                      alt="stanley bdlogo"
                    />
                    {/* <Image
                      src="https://res.cloudinary.com/dwac0ziol/image/upload/v1691389311/stanley_bd_logo_51cac0f24f.svg"
                      alt="stanley bdlogo"
                      className="inline-block md:h-auto"
                      width="300" 
                      height="100"
                    /> */}
                  </figure>
                  <figure className="mb-[30px] mx-auto w-[200px]">
                    <img
                      src="https://res.cloudinary.com/dwac0ziol/image/upload/v1690803777/Connecticare_3_1_353490cad1.png"
                      className="inline-block md:h-auto "
                      alt="Vlink Connecticare"
                    />
                  </figure>
                  <figure className="mb-[30px] mx-auto w-[200px]">
                    <img
                      src="https://res.cloudinary.com/dwac0ziol/image/upload/v1690803873/Deloitte_a0b524eefe.png"
                      className="inline-block md:h-auto"
                      alt="Vlink Deloitte"
                    />
                  </figure>
                  <figure className="mb-[30px] mx-auto w-[200px]">
                    <img
                      src="https://res.cloudinary.com/dwac0ziol/image/upload/v1690804084/volvo_Eicher_3_4_cc93f0b4f9.png"
                      className="inline-block md:h-auto"
                      alt="Vlink volvo eicher"
                    />
                  </figure>
                  <figure className="mb-[30px] mx-auto w-[200px]">
                    <img
                      src="https://res.cloudinary.com/dwac0ziol/image/upload/v1690804134/Schneider_Electric_4_f4d8f6a31a.svg"
                      className="inline-block md:h-auto"
                      alt="Vlink schneider electric"
                    />
                  </figure>
                  <figure className="mb-[30px] mx-auto w-[200px]">
                    <img
                      src="https://res.cloudinary.com/dwac0ziol/image/upload/v1691389324/carolina_crypto_logo_587e888f46.svg"
                      className="inline-block md:h-auto"
                      alt="Vlink Carolina crypto logo"
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
              <p className="text-[16px] text-[#232323] font-[400] mb-[16px] leading-[22px]">
                {contactUsData?.section1?.p1}
              </p>
              <Link
                className="text-[16px] text-[#62207E] font-[400] mb-[8px] block"
                href={`mailto:${contactUsData?.section1?.Email}`}
              >
                {contactUsData?.section1?.Email}
              </Link>
              <Link
                className="text-[16px] text-[#62207E] font-[400]"
                href={`tel:${contactUsData?.section1?.number}`}
              >
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
                className="text-[16px] text-[#62207E] font-[600]"
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
                      className="w-full rounded-tl-[4px] rounded-bl-[4px] rounded-tr-[0px] rounded-br-[0px] outline-0 text-[14px]
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
                    {!email2 && (
                      <span className="mt-2 font-normal text-sm text-red-700">
                        {"email must be a valid email"}
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
                  src="https://res.cloudinary.com/dwac0ziol/image/upload/c_fill,g_faces,w_480/location_contact_us_6fe6af1f52"
                  alt="Vlink location"
                  className="w-full"
                />
              </figure>
            </div>
            <div className="sm:w-[50%] sm:ml-8 mt-10 sm:mt-0">
              {contactUsData?.section4?.length ? (
                <ul>
                  <li>
                    <h6 className="font-[600] text-[20px] leading-[24px] text-[#62207E] mb-[12px] flex  items-center">
                      <CloudinaryImage
                        backendImgUrl={
                          contactUsData?.section4[tab]?.address?.icon1?.data
                            ?.attributes?.url
                        }
                        alt={
                          contactUsData?.section4[tab]?.address?.icon1?.data
                            ?.attributes?.alternativeText
                        }
                        className="inline mr-[15px]"
                      />
                      {contactUsData?.section4[tab]?.address?.h1}
                    </h6>
                    <label className="font-[400] text-[16px] leading-[24px] text-[#353535]">
                      {contactUsData?.section4[tab]?.address?.p1}
                    </label>
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
