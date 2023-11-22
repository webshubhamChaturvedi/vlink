import Container from 'app/components/common/Container'
import OurServicesCard from 'app/components/Teams/OurServicesCard'
import { apiEndpoint } from 'app/scripts/fetch'

export default function ExperiencedTeam({ section, isProcess = false }) {
  // const { p, h1_black, h1_purple, team_section6detail } = section
  let items = !isProcess ? section?.team_section6detail?.map((item) => ({
    icon: {
      src: apiEndpoint(item?.image?.data?.attributes?.url) ?? '/',
      alt: item?.image?.data?.attributes?.name,
      width: item?.image?.data?.attributes?.width,
      height: item?.image?.data?.attributes?.height
    },
    h1: item.text
  })): section?.section3_content?.map((item) => ({
    icon: {
      src: apiEndpoint(item?.image?.data?.attributes?.url) ?? '/',
      alt: item?.image?.data?.attributes?.name,
      width: item?.image?.data?.attributes?.width,
      height: item?.image?.data?.attributes?.height
    },
    h1: item.h,
    p : item?.p
  }))
  return (
    <Container className='md:py-[55px] py-[30px]'>
      <div className="text-center">
        <h5 className="xl:text-4xl lg:text-[32px] text-[22px] font-bold font-sans mb-5 xl:leading-[50px] lg:leading-[40px] leading-[35px]">
        {section?.h1_black} <span className="text-company">{section?.h1_purple}</span> 
        </h5>
        <p className="max-w-5xl mx-auto md:text-[16px] text-[14px] mb-8 font-sans">{section?.p}</p>
      </div>
      <div>
        <OurServicesCard
        isService={true}
        isProcess={isProcess}
          list={items}
          center={true}
          rowItems={isProcess? 3:4}
          className="py-8 transition-colors ease-in duration-200 border border-transparent hover:border-primary"
        />
      </div>
    </Container>
  )
}
