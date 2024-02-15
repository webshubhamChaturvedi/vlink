import Head from "next/head";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import SectionHeader from "app/components/common/SectionHeader";
import HeroSection from "app/components/common/HeroSection";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import { useEffect, useState } from "react";
import REQUEST from "app/helpers/http.service";
import CertificateBar from "app/components/Home/CertificateBar";
import HealthCare from "app/components/CaseStudies/Details/HealthCare";
import OverView from "app/components/CaseStudies/Details/OverView";
import Challenge from "app/components/CaseStudies/Details/Challenge";
import SolutionsKey from "app/components/CaseStudies/Details/SolutionsKey";
import EndResult from "app/components/CaseStudies/Details/EndResult";
import TechnologyStacks from "app/components/CaseStudies/Details/TechnologyStacks";
import ToLearnMore from "app/components/CaseStudies/Details/ToLearnMore";
import DownloadIcon from "./../../public/icons/download-icon.svg";
import { getPages } from "app/scripts/utils";
import { apiEndpoint } from "app/scripts/fetch";
import { useRouter } from "next/router";
import Metatag from "app/components/metaTag";

import HeadText from "app/components/common/HeadText";
import ClientNeed from "app/components/common/ClientNeed";
import Challenges from "app/components/common/Challenges";
import ThemesElement from "app/components/common/ThemesElement";
import DevelopmentSteps from "app/components/common/DevelopmentSteps";
import TechStack from "app/components/common/TechStack";
import Results from "app/components/common/Results";
import CloudModernization from "app/components/warehouse/CloudModernization";
import DataResources from "app/components/warehouse/DataResources";
import Faq from "app/components/Teams/Faq";
import GetInTouch from "app/components/warehouse/GetInTouch";
import "./case-study.css";
import Solutions from "app/components/common/Solutions";
import TestimonialNew from "app/components/CaseStudies/TestimonialNew";
import Session from "app/components/CaseStudies/Session";
import AllCase from "app/components/CaseStudies/AllCase";
import DeliverProjects from "app/components/CaseStudies/DeliverProjects";
import ProcessTimeline from "app/components/common/ProcessTimeline";
import TimeLine from "app/components/common/TimeLine";
import GetInTouchModal from "app/components/common/GetInTouchModal";

export default function CaseStudy({ res }) {
  const { caseStudyData, leanData, trusted } = JSON.parse(res);
  const [modalScheduleCall, setModalScheduleCall] = useState(false);
  const header = [
    { label: "Home", link: "/" },
    { label: "Case Studies", link: "/case-studies" },
    { label: "Case Studies Details" },
  ];
  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  if (caseStudyData?.error) {
    return <div>{caseStudyData?.error}</div>;
  }
  return (
    <div>
      <Head>
        <title>
          {caseStudyData?.seo?.title || caseStudyData?.title || `VLink`}
        </title>
        <meta
          name="description"
          content={caseStudyData?.seo?.description || "Vlink Description"}
        />
        <meta
          name="og:description"
          content={caseStudyData?.seo?.description || "Vlink Description"}
        />
        <meta name="og:title" content={caseStudyData?.title || "Vlink"} />
        <Metatag
          content={
            apiEndpoint(
              caseStudyData?.seo?.test_image?.data?.attributes?.url
            ) || "https://www.vlinkinfo.com/img/logopng.png"
          }
        />

        <link rel="canonical" href={canonicalUrl} />
      </Head>
      {caseStudyData?.caseStudyOld == true ? (
        <>
          <SectionHeader list={header} />
          <div>
            {caseStudyData?.section ? (
              <HeroSection
                isCaseStudy={true}
                data={caseStudyData?.section}
                downloadLink={caseStudyData?.Download_link}
              />
            ) : (
              ""
            )}
          </div>
          <div>
            <CertificateBar isTrusted={true} section={trusted} />
          </div>
          {caseStudyData?.section1 ? (
            <HealthCare section={caseStudyData?.section1} />
          ) : (
            ""
          )}
          {caseStudyData?.section1 ? (
            <OverView section={caseStudyData?.section1} />
          ) : (
            ""
          )}
          {caseStudyData?.section2[0] ? (
            <Challenge section={caseStudyData?.section2[0]} />
          ) : (
            ""
          )}
          {caseStudyData?.section3 ? (
            <SolutionsKey
              section={caseStudyData?.section3}
              downloadLink={apiEndpoint(
                caseStudyData?.pdf?.data?.attributes?.url
              )}
            />
          ) : (
            ""
          )}
          {caseStudyData?.section4 ? (
            <TechnologyStacks section={caseStudyData?.section4} />
          ) : (
            ""
          )}
          {caseStudyData?.section5?.h1_black && (
            <EndResult section={caseStudyData?.section5} />
          )}
          <ToLearnMore
            {...leanData}
            downloadLink={apiEndpoint(
              caseStudyData?.pdf?.data?.attributes?.url
            )}
          />
          <GetInTouchForm />
        </>
      ) : (
        ""
      )}

      {caseStudyData?.caseStudyNew == true ? (
        <>
          <SectionHeader list={header} isBreadcrumb={true} />
          <HeroSection
            data={caseStudyData?.heroSection}
            isCase={true}
            downloadLink={caseStudyData?.pdf?.data?.attributes?.url}
          />

          {Object.keys(trusted)?.length ? (
            <CertificateBar
              isTrusted={true}
              section={Object.keys(trusted)?.length ? trusted : null}
            />
          ) : (
            <></>
          )}

          <HeadText headText={caseStudyData?.Expectations} />
          <div
            className="pb-[400px] bg-cover bg-no-repeat bg-top bg-local relative"
            style={{
              backgroundImage: `linear-gradient(144.54deg, #0A549F 20%, #95BC55 107.79%)`,
            }}
          >
            <div
              className="bg-no-repeat bg-[right_-300px]"
              style={{ backgroundImage: `url()` }}
            >
              <img
                src="https://backend.vlinkinfo.com/uploads/bg_gra_cab2cffc58.png"
                alt=""
                className="bg-gra"
              />

              <ClientNeed clientneed={caseStudyData?.Services} />

              <Challenges challenges={caseStudyData?.Challenges} />
            </div>

            <Solutions solutions={caseStudyData?.Solutions} />

            <TestimonialNew testimonial={caseStudyData?.Testimonial} />
          </div>

          <ThemesElement themeselement={caseStudyData?.themesElement} />

          <TimeLine Process={caseStudyData?.process} isBlockProcess={true} />

          <TechStack techstack={caseStudyData?.techStack} />

          <Results results={caseStudyData?.results} />

          <Session
            setModalCall={setModalScheduleCall}
            session={caseStudyData?.Session}
          />

          <AllCase allcase={caseStudyData?.Gamification} />

          <DeliverProjects deliverproducts={caseStudyData?.Results} />

          <DataResources resources={caseStudyData?.casestudy} />

          {caseStudyData?.faqs && (
            <Faq section={caseStudyData?.faqs} isFaq={true} forCSS={true} />
          )}

          <GetInTouch getintouch={caseStudyData?.getInTouch} isStaff={true} />

          {modalScheduleCall && (
            <GetInTouchModal
              // modalData={modalData?.attributes}
              isOpen={modalScheduleCall}
              setIsOpen={setModalScheduleCall}
            />
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const [caseStudyData, trusted] = await Promise.all([
    REQUEST({
      method: "GET",
      url: `${API_ENDPOINTS.CASE_STUDY_DETAILS}&filters[slug][$eq]=${slug}`,
    }),
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.TRUSTED_BY_STARTUPS,
    }),
  ]);
  const leanData = {
    text: "To learn more, please download the case study",
    button: {
      icon: DownloadIcon,
      text: "Download Case Study",
    },
    violetTarget: {
      text: caseStudyData?.data?.data[0]?.attributes?.section7?.p,
      by: caseStudyData?.data?.data[0]?.attributes?.section7?.Author,
      designation:
        caseStudyData?.data?.data[0]?.attributes?.section7?.designation,
    },
  };
  const res = JSON.stringify({
    caseStudyData: caseStudyData?.data?.data[0]?.attributes,
    leanData,
    trusted: trusted?.data?.data?.attributes,
  });
  return {
    props: {
      res,
    },
  };
}

export async function getStaticPaths() {
  return await getPages(`/api/case-study-details`);
}
