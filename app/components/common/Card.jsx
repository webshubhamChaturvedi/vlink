import Image from 'next/image'

export default function Card({
  children,
  head,
  blue = false,
  className = '',
  containerClass = '',
  img,
  headClassName = '',
  forCSS= false
}) {
  return (
    // <section
    //   className={`${
    //     blue ? 'bg-primary text-white' : (img || head) && 'bg-white'
    //   } shadow relative lg:mb-0 mb-8 ${blue ? 'rounded-md' : ''} ${containerClass}`}
    // >
    <section
      className={`${
        blue ? 'bg-primary text-white' : (img || head) && 'bg-white'
      } bg-white rounded-[10px] ${forCSS ? "" : "drop-shadow-[0px_0px_15px_rgba(0,0,0,0.1)]"} relative w-[100%] h-[auto] mb-5  ${blue ? 'rounded-md' : ''} ${containerClass}`}
    >
      {img && (
        <div className="pb-4 ">
          <img
            src={img}
            width={87}
            height={87}
            alt={alt || "card-img"}
            className="absolute rounded-lg -translate-y-1/2 left-1/2 -translate-x-1/2"
          />
        </div>
      )}
      {head && (
        <div className={`bg-lighterGray text-[#002856] p-4 ${headClassName} `}>
          <h6 className="text-[#002856] text-[20px] font-[400] font-sans">{head}</h6>
        </div>
      )}
      <div className={`!mt-0 py-5 px-5 ${className}`}>{children}</div>
    </section>
  )
}
