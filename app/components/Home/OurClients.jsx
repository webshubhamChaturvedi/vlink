import Container from "app/components/common/Container";
import { apiEndpoint } from "app/scripts/fetch";
import OurClientsTable from "./OurClients/OurClientsTable";
import OurClientsText from "./OurClients/OurClientsText";

export default function OurClients({ section, setModalScheduleCall = true, isCaseClient = false, isHomeclient=false }) {
  const ourClientsTable = section?.image?.data?.map((data) => ({
    src: apiEndpoint(data.attributes.url),
    alt: data.attributes.alternativeText,
    width: data.attributes.width,
    height: data.attributes.height,
  }));
  return (
    <section
      className="bg-cover " 
      style={{background: isCaseClient ? `${section?.bgColor}` : `url('https://res.cloudinary.com/dthpnue1d/image/upload/c_fill,g_faces,w_768/ourclient_d245a012cd.png')`}}>
      <Container className="flex flex-col-reverse lg:flex-row lg:justify-center lg:items-center md:py-[70px] py-[30px] lg:space-x-16">
        <OurClientsTable 
          data={ourClientsTable} 
          caseClient={isCaseClient}
        />
        <OurClientsText
          isTxtClr={isCaseClient && "#fff"}
          setModalCall={setModalScheduleCall}
          title={section?.title}
          button_text={section?.button_text}
          h1_black={section?.h1_black}
          h1_purple={section?.h1_purple}
          p={section?.p}
          isHomeclient={false}
        />
      </Container>
    </section>
  );
}
