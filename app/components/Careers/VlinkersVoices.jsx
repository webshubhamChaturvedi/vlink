import Container from "../common/Container";
import PlayIcon from "./../../../public/icons/play-icon.svg";

export default function VlinkerVoices({ data }) {
  return (
    <section className="font-['Open_Sans'] py-16">
        <div className="container mx-auto px-4">
            <h2 className="font-[700] text-[36px] text-[#030303] text-center mb-16"> Vlinker's <span className="text-[#62207E]">Voices</span></h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-7">
                {data&&data?.section4_media?.map((item, i) =>
                    <div key={i} className="relative mb-4">
                        <figure className="relative before:rounded-[6px] before:w-full before:h-full before:top-0 before:left-0 before:absolute bg-vlinker">
                            <a href={item.link} className="absolute flex justify-center w-full h-full">
                                <img src={PlayIcon.src} alt={PlayIcon.alternativeText || "Icon"} width={105} height={105}/>
                            </a>
                            <img src={process.env.NEXT_PUBLIC_API_URL+item.image?.data?.attributes?.url} alt={item.image?.data?.attributes?.alternativeText || item.image?.data?.attributes?.name} className="w-full rounded-[6px]"/>
                        </figure>
                        <div className="absolute left-[35px] bottom-[15px]">
                            <h4 className="font-[700] text-[20px] text-[#fff]">{item.name}</h4>
                            <label className="font-[500] text-[14px] text-[#fff]">{item.designation}</label>
                        </div>
                    </div>
                )}
            </div>       
        </div>
    </section>
  );
}
