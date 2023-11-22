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

export default function CaseStudy({ res }) {
  const { caseStudyData, leanData, trusted } = JSON.parse(res);

  // const [trusted, setTrustedData] = useState();
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
              <HeroSection isCaseStudy={true} data={caseStudyData?.section} />
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
            <SolutionsKey section={caseStudyData?.section3} />
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
          <HeroSection data={caseStudyData?.heroSection} isCase={true} />

          {Object.keys(trusted)?.length ? (
            <CertificateBar
              isTrusted={true}
              section={Object.keys(trusted)?.length ? trusted : null}
            />
          ) : (
            <></>
          )}

          <HeadText headText={caseStudyData?.Expectations} />

          <ClientNeed clientneed={caseStudyData?.Services} />

          <div
            style={{
              backgroundImage: `linear-gradient(144.54deg, #0A549F 2.16%, #95BC55 107.79%)`,
            }}
          >
            <Challenges challenges={caseStudyData?.Challenges} />

            <Solutions solutions={caseStudyData?.Solutions} />
          </div>

          <ThemesElement themeselement={caseStudyData?.themesElement} />

          <DevelopmentSteps steps={caseStudyData?.process} />

          <TechStack techstack={caseStudyData?.techStack} />

          <Results results={caseStudyData?.results} />

          <CloudModernization
            data={caseStudyData?.sessions}
            isCaseCloud={true}
          />

          <DataResources resources={caseStudyData?.casestudy} />

          {caseStudyData?.faqs && (
            <Faq section={caseStudyData?.faqs} isFaq={true} forCSS={true} />
          )}

          <GetInTouch getintouch={caseStudyData?.getInTouch} isStaff={true} />
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
      url: `/api/case-study-details?[populate][0]=section.image&populate[1]=section1.image&populate[2]=section2.image&populate[3]=section3.section3_detail&populate[4]=section3.image&populate[5]=section4.section4_detail.image&populate[6]=section5.section5_detail&populate[7]=section6&populate[8]=section7&populate[9]=section.banner_btn.icon&populate[10]=pdf&[populate][12]=heroSection.bgImg&[populate][13]=heroSection.image&[populate][14]=heroSection.banner_btn.icon&[populate][15]=heroSection.hero_tech.icon&[populate][16]=Expectations.image&[populate][17]=Services.serviceList&[populate][18]=Services.ReasonList&[populate][19]=Challenges.image&[populate][20]=Solutions.images.image&[populate][21]=themesElement.coloursList&[populate][22]=themesElement.fontFamily&[populate][23]=themesElement.styleName&[populate][24]=process.stepsList&[populate][25]=techStack.kitList.image&[populate][26]=techStack.featureList&[populate][27]=techStack.techApiList.image&[populate][28]=results.image&[populate][29]=results.bgImage&[populate][30]=sessions.image&[populate][31]=sessions.cloud_btn.icon&[populate][32]=casestudy.image&[populate][33]=casestudy.block.image&[populate][34]=casestudy.block.btn_icon&[populate][35]=getInTouch.bg_img&[populate][36]=getInTouch.gif_popup&[populate][37]=getInTouch.gif_bg_img&[populate][38]=getInTouch.gif_bg_img&[populate][39]=faqs.image&[populate][40]=faqs.viewFaqIcon&[populate][41]=faqs.viewFaq&[populate][42]=faqs.faq_list&[populate][43]=seo.test_image&[populate][44]=seoMeta.metaImage&[populate][45]=seoMeta.metaSocial.image&[populate][46]=techStack.uiuxlist.image&[populate][47]=Challenges.ReasonList&[populate][48]=Testimonial.icon&[populate][49]=Session.Images&[populate][50]=Gamification.Images&[populate][51]=Results.ResultList&[populate][52]=Results.Images&filters[slug][$eq]=${slug}`,
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
