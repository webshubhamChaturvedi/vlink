export default function ServicesStep({ steps }) {
  return (
    <section className="col-span-2 grid sm:grid-cols-2 gap-4 lg:pl-6">
      {steps && steps.length ?steps.map((step, key) => (
        <div key={key} className="mb-4 sm:mb-0">
          <p className="xl:text-5xl lg:text-[32px] text-[28px] text-black font-bold font-sans">
            {step.no.padStart('2', '0')}
          </p>
          <h6 className="text-primary font-semibold font-sans md:my-4 my-2 xl:text-[35px] lg:text-[24px] text-[22px]">{step.h1}</h6>
          <p className=" max-w-sm text-[#585858] lg:text-[16px] text-[14px]">{step.p1}</p>
        </div>
      )):<></>}
    </section>
  )
}
