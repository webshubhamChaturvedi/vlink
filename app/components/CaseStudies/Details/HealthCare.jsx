import Container from "app/components/common/Container";
import { apiEndpoint } from "app/scripts/fetch";

export default function HealthCare({ section }) {
  return (
    <div>
      <Container className="">
        <div className="flex flex-col md:flex-row md:justify-around items-center md:py-10 py-[30px]">
          <div className="succesful-team md:basis-full p-4">
            <h3 className="lg:text-4xl md:text-[32px] text-[22px] font-bold text-secondary text-center md:mb-4">
              {section?.h1}
            </h3>
            <p className="leading-8 text-sm text-center font-normal text-['#232323'] pt-4 ">
              {section?.p1}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
