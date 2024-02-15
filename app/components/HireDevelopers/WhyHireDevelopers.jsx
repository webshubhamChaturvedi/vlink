import Container from "app/components/common/Container";
export default function WhyHireDevelopers({ section }) {
  return (
    <div>
      <Container className="md:pt-[55px] pt-[30px]">
        <div className="flex flex-col md:flex-row md:justify-around items-center">
          <div className="succesful-team md:basis-full">
            <h4 className="font-bold text-black xl:text-4xl lg:text-[32px] text-[22px] text-center xl:leading-[55px] lg:leading-[35px]">
              <span className="font-bold text-company">{section?.h1_purple}</span>
              {" "+section?.h1_blacktitle}
            </h4>
            <p className="lg:text-[18px] lg:text-[14px] font-semibold text-center text-[#7B7B7B] pt-4 font-sans">{section?.p}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}