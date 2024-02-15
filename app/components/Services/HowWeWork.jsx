import Container from 'app/components/common/Container';
import ServicesStep from './ServicesStep';
import WorkingProcess from './WorkingProcess';
import { CloudinaryImage } from 'app/components/common/CloudinaryImage';
import { apiEndpoint } from 'app/scripts/fetch';
import "./howwework.css"

export default function HowWeWork({ section, isEduHow = false }) {

  return (
    <section className={`${isEduHow ? "bg-[#F0F5FD] md:py-[55px] py-[35px] relative overflow-hidden" : "bg-how-we-work-texture bg-cover bg-no-repeat bg-right lg:pt-16 pt-[30px] lg:pb-10 pb-[30px]"}`}>
      <img src="https://backend.vlinkinfo.com/uploads/gg_8a2d9959f7.png" alt="" className='how-effect' />
      <Container>
        <div className="grid grid-cols-12 lg:gap-x-4 xl:gap-x-8">
          {isEduHow ? 
            <div className='xl:col-span-3 lg:col-span-4 md:col-span-6 col-span-12 md:mb-0 mb-10'>
              <h6 class="relative font-bold text-[#000] xl:text-4xl lg:text-[32px] text-[22px] text-left xl:leading-[45px] lg:leading-[35px] mb-3 max-w-[1100px] mx-auto">
                <span class="lg:text-[40px] text-[25px] font-[800] gradient_text block w-[100%] lg:leading-[80px] leading-[65px]">
                  {section?.bgText}
                </span>
                <span class="w-[100%] font-bold relative mt-[-30px] block">
                  {section?.h1_black}
                </span>
              </h6>
              <div className='bg-[#0050D5] p-[20px] text-[20px] text-[#FFFFFF] rounded-[20px] text-center mt-[40px]'>{section?.cardText}</div>
            </div>
          :
          <div className='lg:col-span-4 col-span-12 lg:mb-0 mb-5'>
            <WorkingProcess title={section?.title} label={section?.label} href={section?.href} target={section?.target} h1_black={section?.h1_black} h1_purple={section?.h1_purple} image={section?.image} />
          </div>
          }
          {isEduHow ?
              <div className='xl:col-span-9 lg:col-span-8 md:col-span-6 col-span-12 md:pl-6'>
                <div className='grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10'>
                  {section?.working_process_steps?.map((items, key)=>(
                    <div key={key} className='mb-10'>
                      <div className='mb-4 p-[10px] border-[2px] border-[#0050D5] w-[70px] h-[70px] bg-[#fff] rounded-[100%] flex items-center justify-center'>
                        {/* <CloudinaryImage 
                          backendImgUrl={items?.icon?.data?.attributes?.url}
                          alt={items?.icon?.data?.attributes?.alternativeText}
                          type="icon"
                          className="h-full object-position-top w-full"
                        /> */}
                        <img src={apiEndpoint(items?.icon?.data?.attributes.url)} alt="" />
                      </div>
                      <h6 className='text-[20px] text-[#000000] font-[600] mb-3'>{items?.h1}</h6>
                      <p className='text-[14px] text-[#5D5D5D] font-[400]'>{items?.p1}</p>
                    </div>
                  ))}
                </div>
              </div>
            :
              <ServicesStep steps={section?.working_process_steps}/>
          }
        </div>
      </Container>
    </section>
  )
}
