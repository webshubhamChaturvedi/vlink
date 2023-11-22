import Container from 'app/components/common/Container'
import ServicesStep from './ServicesStep'
import WorkingProcess from './WorkingProcess'

export default function HowWeWork({ section }) {
  return (
    <div className="bg-how-we-work-texture bg-cover bg-no-repeat bg-right lg:pt-16 pt-[30px] lg:pb-10 pb-[30px] ">
      <Container className="grid lg:grid-cols-3 lg:gap-x-8 xl:gap-x-16 ">
        <div className='md:mb-0 mb-3'>
          <WorkingProcess title={section?.title} label={section?.label} href={section?.href} target={section?.target} h1_black={section?.h1_black} h1_purple={section?.h1_purple} image={section?.image} />
        </div>
        <ServicesStep steps={section?.working_process_steps}/>
      </Container>
    </div>
  )
}
