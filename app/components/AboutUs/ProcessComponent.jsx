import Card from 'app/components/common/Card'
import Image from 'next/image'

export default function ProcessComponent({ img = { src: '', alt: '' }, h2, noPadding = false }) {
  return (
    <div className={`basis-1/4 ${noPadding ? 'py-5' : 'p-5'}`}>
      <Card
        className="space-y-6 text-center"
        containerClass="shadow-shadowGrid h-full"
      >
        <img
          src={img.src}
          alt={img.alternativeText || img.name}
          className="mx-auto"
          height={92}
          width={92}
        />
        <h2>{h2}</h2>
      </Card>
    </div>
  )
}
