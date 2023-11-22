import Container from 'app/components/common/Container'
import Image from 'next/image'

export default function OurHistory({ section }) {
  // const { h1_black, h1_purple } = section
  return (
    <div className="my-16 space-y-10">
      <h1 className="text-center text-4xl font-bold">
        {section?.h1_black} <span className="text-company">{section?.h1_purple}</span>
      </h1>
      <div className="image-container">
        <Image
          src="/img/our-history-background.svg"
          className="image"
          fill
          sizes={100}
          alt='our-history-background'
        />
      </div>
    </div>
  )
}
