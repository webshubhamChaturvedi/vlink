import "styles/Home.module.css";
import { useState, useEffect } from "react";
import REQUEST from "app/helpers/http.service";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import SectionHeader from "app/components/common/SectionHeader";
import ExperiencedTeam from "app/components/Teams/ExperiencedTeam";
import SuccesfulTeams from "app/components/Teams/SuccesfulTeams";
import DedicatedDevelopmentTeam from "app/components/Teams/DedicatedDevelopmentTeam";
import SuccesfulNumber from "app/components/Teams/SuccesfulNumber";
import Solutions from "app/components/Teams/Solutions";
import Faq from "app/components/Teams/Faq";
import CertificateBar from "../Home/CertificateBar";
import OurDevelopers from "./OurDevelopers";
import HeroSection from "../common/HeroSection";
import TestimonialData from "../warehouse/TestimonialData";

export default function ServiceDetail({
  data,
  header,
  trusted,
  testimonials,
  offering,
  sucessnumbeer,
}) {
  const [reqdata, setData] = useState({});

  const fetchData = async () => {
    try {
      // const res = await REQUEST({
      //   method: "GET",
      //   url: API_ENDPOINTS.SUCCESS_NUMBER,
      // });
      setData(sucessnumbeer);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (data) {
      fetchData();
    }
  }, [data]);
  return (
    <div>
      <SectionHeader list={header} />
      <HeroSection data={data?.team_section1} isService={true} />
      {Object.keys(trusted)?.length ? (
        <CertificateBar
          isTrusted={true}
          section={Object.keys(trusted)?.length ? trusted : null}
        />
      ) : (
        <></>
      )}
      {data?.team_section3?.h1_black && (
        <Solutions section={data?.team_section3} offering={offering} />
      )}
      {data?.team_section4?.h2_black && (
        <DedicatedDevelopmentTeam section={data?.team_section4} />
      )}
      {data?.team_section5?.h1_black && (
        <SuccesfulTeams section={data?.team_section5} />
      )}
      {data?.team_section6?.h1_black && (
        <ExperiencedTeam
          section={data?.team_section6}
          section_content={data?.team_section6?.team_section6detail}
        />
      )}
      {reqdata && <SuccesfulNumber data={reqdata} />}
      {data?.team_section8?.h1_black && (
        <OurDevelopers section={data?.team_section8} />
      )}
      <TestimonialData testimonials={testimonials} isNewTestimonial={true} />
      {data?.faq?.h && <Faq section={data?.faq} />}
      <GetInTouchForm />
    </div>
  );
}

export async function getStaticProps() {
  const [sucessnumber] = await Promise.all([
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.SUCCESS_NUMBER,
    }),
  ]);
  return {
    props: {
      sucessnumbeer: sucessnumber?.data?.data?.attributes,
    },
  };
}
