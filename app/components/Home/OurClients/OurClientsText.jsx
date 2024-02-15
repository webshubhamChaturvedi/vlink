import { useRouter } from "next/router";

export default function OurClientsText({
  title,
  h1_black,
  h1_purple,
  p,
  button_text,
  setModalCall = true,
  isTxtClr,
  isHomeclient=false
}) {
  const router = useRouter();
  return (
    <div className="w-full gap-10 mb-8">
      <h2
        className={`font-[400] flex items-center md:text-[20px] text-[18px] mb-2`}
        style={{ color: isTxtClr ? isTxtClr : "#353535" }}
      >
        {title}
        <span
          className="ml-6 font-bold inline-block w-[59px] h-[2px]"
          style={{ background: isTxtClr ? isTxtClr : "#353535" }}
        ></span>
      </h2>
      <h3
        className="font-sans font-[700] xl:text-[40px] lg:text-[32px] text-[22px] xl:leading-[62px] lg:leading-[42px] mb-3"
        style={{ color: isTxtClr ? isTxtClr : "#353535" }}
      >
        {h1_black}
        <span className="text-company">{h1_purple}</span>
      </h3>
      <p
        className="hidden md:block text-base font-roboto text-[16px]"
        style={{ color: isTxtClr ? isTxtClr : "#353535" }}
      >
        {p}
      </p>
      {isHomeclient ? 
      <div className="flex justify-start mt-6">
        <button
          size={"lg"}
          className="text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 focus:!ring-2 group flex h-min items-center justify-center text-center font-medium focus:z-10 text-[#ffffff_!important] white_btn relative rounded overflow-hidden text-center inline-block px-5 py-2"
          onClick={setModalCall}
        >
          <span className="">
            <span
              className={`absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:h-full opacity-1  bg-[#fff]`}
            ></span>
            <span className={`font-[600] relative group-hover:text-black`}>
              {button_text}
            </span>
          </span>
        </button>
      </div>
      :
      ""
}
    </div>
  );
}
