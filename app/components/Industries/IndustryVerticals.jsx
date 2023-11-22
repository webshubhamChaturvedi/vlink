import Container from 'app/components/common/Container'
import OurServicesCard from 'app/components/Services/OurServicesCard'
import { apiEndpoint } from 'app/scripts/fetch'
export default function IndustryVerticals({section}) {
  const items = section?.section1_detail?.map((item) => ({
    icon: {
      src: apiEndpoint(item?.image?.data?.attributes?.url) ?? '/',
      alt: item?.image?.data?.attributes?.name,
      width: item?.image?.data?.attributes?.width,
      height: item?.image?.data?.attributes?.height
    },
    h1: item?.h,
    p: item?.p,
    label: item?.label,
    href:item?.href
  }))
  return (
    <Container>
      <div className="flex justify-center items-center">
        <div className="mb-[55px]">
          <h2 className="font-bold text-center xl:text-4xl lg:text-[32px] text-[28px] mb-5">
           {section?.h1_black}
            <span className="text-company">
              {section?.h1_purple}
            </span>
          </h2>
          <p className="text-[16px] font-sans font-[400]"> {section?.p}</p>
        </div>
      </div>
      <OurServicesCard
      isService={true}
        center={true}
        list={items}
        plainBg={true}
        buttonText="Read More"
        viewMore={true}
        rowItems={4}
        wideGap={true}
        location='industry'
      />
    </Container>
  )
}
