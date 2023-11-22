import Container from "app/components/common/Container";
import { apiEndpoint } from "app/scripts/fetch";
import ItemTechnology from "./ItemTechnology";

export default function TechnologyStacks({ section }) {
  return (
    <div>
      <Container>
        <div className="flex flex-col md:flex-row md:justify-around items-center md:py-10 py-[30px]">
          <div className="succesful-team basis-[100%] w-[100%]">
            <h4 className="font-bold text-secondary lg:text-4xl md:text-[32px] text-[22px] text-center mb-3">
              {section?.h}
            </h4>
            <ItemTechnology
              isService={true}
              list={section?.section4_detail}
              center={true}
              rowItems={6}
              className="min-h-[185px] md:py-8 transition-colors ease-in duration-200 border border-transparent hover:border-primary"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
