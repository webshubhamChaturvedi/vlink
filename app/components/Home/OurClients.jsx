import Container from "app/components/common/Container";
import { apiEndpoint } from "app/scripts/fetch";
import OurClientsTable from "./OurClients/OurClientsTable";
import OurClientsText from "./OurClients/OurClientsText";

export default function OurClients({ section, setModalScheduleCall = true }) {
  const ourClientsTable = section?.image?.data?.map((data) => ({
    src: apiEndpoint(data.attributes.url),
    alt: data.attributes.alternativeText,
    width: data.attributes.width,
    height: data.attributes.height,
  }));
  return (
    <Container className="flex flex-col-reverse space-y-reverse space-y-2 lg:space-y-0 lg:flex-row lg:justify-center lg:items-center md:py-[55px] py-[30px] lg:space-x-16">
      <OurClientsTable data={ourClientsTable} />
      <OurClientsText
        setModalCall={setModalScheduleCall}
        title={section?.title}
        button_text={section?.button_text}
        h1_black={section?.h1_black}
        h1_purple={section?.h1_purple}
        p={section?.p}
      />
    </Container>
  );
}
