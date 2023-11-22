import Head from "next/head";
import Testimonial from "app/components/Home/Testimonials";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import SectionHeader from "app/components/common/SectionHeader";
import HeroSection from "app/components/common/HeroSection";
import CaseStudiesList from "app/components/CaseStudies/CaseStudiesList";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import CertificateBar from "app/components/Home/CertificateBar";
import { useRouter } from "next/router";
import Metatag from "app/components/metaTag";

export default function CaseStudy({
  caseStudyData,
  list,
  trusted,
  testimonials,
}) {
  const header = [{ label: "Home", link: "/" }, { label: "Case Studies" }];
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
        <title>{caseStudyData?.title ? caseStudyData?.title : `VLink`}</title>
        <meta
          name="description"
          content={caseStudyData?.description || "Vlink Description"}
        />
        <meta
          name="og:description"
          content={caseStudyData?.description || "Vlink Description"}
        />
        <meta name="og:title" content={caseStudyData?.title || "Vlink"} />
        <Metatag content={"https://www.vlinkinfo.com/img/logopng.png"} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <SectionHeader list={header} />
      <HeroSection data={caseStudyData} />
      <CertificateBar
        isTrusted={true}
        section={Object.keys(trusted)?.length ? trusted : null}
      />
      <div className="md:py-[55px] py-[30px]">
        <CaseStudiesList section_title={caseStudyData} list={list} />
      </div>
      <Testimonial
        section_title={testimonials?.Testimonial}
        section_content={testimonials?.testimonial_content}
      />
      <GetInTouchForm />
    </div>
  );
}

export async function getStaticProps() {
  const [caseStudyData, trusted, testimonials] = await Promise.all([
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.CASE_STUDIES,
    }),
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.TRUSTED_BY_STARTUPS,
    }),
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.TESTIMONIALS,
    }),
  ]);
  let page = 1;
  let limit = 20;
  let contentPages = [];
  let total = 0;
  do {
    const [res] = await Promise.all([
      REQUEST({
        method: "GET",
        url: `${API_ENDPOINTS.CASE_STUDIES_DETAILS_PAGE}&pagination[page]=${page}&pagination[pageSize]=${limit}&sort[0]=createdAt%3Adesc`,
      }),
    ]);
    contentPages = [...contentPages, ...res?.data?.data];
    if (res?.data?.meta?.pagination?.total) {
      total = res?.data?.meta?.pagination?.total;
      page = page + 1;
    } else break;
  } while (total > contentPages.length);

  return {
    props: {
      caseStudyData: caseStudyData?.data?.data?.attributes,
      list: contentPages,
      trusted: trusted?.data?.data?.attributes,
      testimonials: testimonials?.data?.data?.attributes,
    },
  };
}
