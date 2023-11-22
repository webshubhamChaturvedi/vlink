import Card from 'app/components/common/Card'
import { Button } from 'flowbite-react'

export default function Brochures({ h1, p }) {
  return (
    <Card className='space-y-5'>
      <h2 className='font-bold text-secondary bg-white text-xl'>{h1}</h2>
      <p className='text-sm leading-relaxed'>{p}</p>
      <Button className="w-full text-center bg-company text-white font-bold text-lg" color="company" >
        DOWNLOAD NOW
      </Button>
    </Card>
  )
}
