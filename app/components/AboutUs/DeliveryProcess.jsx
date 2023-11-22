import Container from 'app/components/common/Container'
import { apiEndpoint } from 'app/scripts/fetch'
import ProcessComponent from './ProcessComponent'

export default function DeliveryProcess({ section }) {
  // const { p, h1_black, h1_purple, steps } = section
  const items = section?.steps?.map((step) => {
    return {
      img: {
        src: apiEndpoint(step?.image?.data?.attributes?.url) ?? '/',
        alt: step?.image?.data?.attributes?.name || 'image'
      },
      h2: step?.name
    }
  })
  return (
    <Container className="py-8">
      <div className="flex justify-center items-center">
        <div className="py-16 space-y-3">
          <h1 className="font-bold text-center">
            {section?.h1_black}
            <span className="font-bold text-company"> {section?.h1_purple}</span>
          </h1>
          <p>{section?.p}</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {section?.items?.map((item, index) => (
          <ProcessComponent
            key={index}
            {...item}
            noPadding={
              index + 1 == 1 ||
              index + (1 % 4) == 0 ||
              index + (1 % 5) == 0 ||
              index + 1 == items.length
            }
          />
        ))}
      </div>
    </Container>
  )
}
