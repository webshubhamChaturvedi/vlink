import Container from 'app/components/common/Container'
import Member from './Member'
export default function OurMembers({
  members = [],
  head = 'Team',
  justify = 'center',
  background = 'bg-our-team',
  backgroundPosition = 'center'
}) {
  const justification = {
    center: 'justify-center',
    start: 'justify-start',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly'
  }
  return (
    <div className={`${background} ${backgroundPosition} bg-no-repeat md:pt-[55px] p-[30px]`}>
      <Container className="text-center">
        <h5 className="font-bold text-black xl:text-4xl lg:text-[28px] text-[22px] text-center mb-[100px]">
          Our <span className="text-company">{head}</span>
        </h5>
        <section className={`flex flex-wrap justify-center gap-10`}>
          {members.length > 0 &&
            members.map((member, index) => (
              <Member
                key={index}
                {...member}
                noPadding={
                  index + 1 == 1 ||
                  (index + 1) % 4 == 0 ||
                  (index + 1) % 5 == 0 ||
                  index + 1 == members.length
                }
                paddingRight={index + 1 == 1 || (index + 1) % 5 == 0}
                paddingLeft={
                  index + 1 == members.length || (index + 1) % 4 == 0
                }
              />
            ))}
        </section>
      </Container>
    </div>
  )
}
