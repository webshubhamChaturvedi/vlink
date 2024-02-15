import Head from "next/head";
import "styles/Home.module.css";
import GetInTouchForm from "app/components/common/GetInTouchForm";
import SectionHeader from "app/components/common/SectionHeader";
import REQUEST from "app/helpers/http.service";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import HeroSection from "app/components/common/HeroSection";
import CertificateBar from "app/components/Home/CertificateBar";
import HighligthedStorie from "app/components/Newsroom/HighlightedStorie";
import NewsroomStories from "app/components/Newsroom/NewsroomStories";
import Blogs from "app/components/Home/Blogs";
import { useRouter } from "next/router";
import { apiEndpoint } from "app/scripts/fetch";
import Metatag from "app/components/metaTag";
export default function NewsRoom({
  newsRoomData,
  trusted,
  storiesRoom,
  stories,
}) {
  const { asPath } = useRouter();
  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  const header = [
    { label: "Home", link: "/" },
    { label: "Resources", link: "/podcast" },
    { label: "Newsroom ", link: null },
  ];

  if (newsRoomData?.error) {
    return <div>{newsRoomData?.error}</div>;
  }
  return (
    <div>
      <Head>
        <title>{newsRoomData?.title ? newsRoomData?.title : `VLink`}</title>
        <meta
          name="description"
          content={newsRoomData?.description || "Vlink Description"}
        />
        <meta
          name="og:description"
          content={
            newsRoomData?.Seo?.metaDescription ||
            newsRoomData?.description ||
            "Vlink Description"
          }
        />
        <meta
          name="og:title"
          content={
            newsRoomData?.Seo?.metaTitle || newsRoomData?.title || "Vlink"
          }
        />

        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />

        <Metatag
          content={apiEndpoint(
            newsRoomData?.Seo?.metaImage?.data?.attributes?.url ||
              newsRoomData?.image?.data?.attributes?.url
          )}
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="use-credentials"
        />

        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <SectionHeader list={header} />
      <HeroSection data={newsRoomData} isService={true} />
      <CertificateBar section={trusted} isTrusted={true} />
      <HighligthedStorie
        section={
          storiesRoom?.filter((data) => data?.attributes?.highlighted === true)
            ?.length
            ? storiesRoom?.filter((data) => data?.attributes?.highlighted)[0]
                ?.attributes
            : {}
        }
      />
      <div className="md:pt-0 pt-[30px]">
        <NewsroomStories
          section_title={newsRoomData?.section2}
          section_content={storiesRoom?.filter(
            (data) => !data?.attributes?.highlighted
          )}
        />
      </div>
      <Blogs section_title={newsRoomData?.section3} homeBlog={stories} />
      <GetInTouchForm />
    </div>
  );
}

export async function getStaticProps() {
  const [newsRoomData, trusted, stories] = await Promise.all([
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.NEWSROOM,
    }),
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.TRUSTED_BY_STARTUPS,
    }),
    REQUEST({
      method: "GET",
      url: API_ENDPOINTS.COMMON_BLOGS,
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
        url: `${API_ENDPOINTS.NEWSROOM_STORIES}&pagination[page]=${page}&pagination[pageSize]=${limit}`,
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
      newsRoomData: newsRoomData?.data?.data?.attributes,
      storiesRoom: contentPages,
      trusted: trusted?.data?.data?.attributes,
      stories: stories?.data?.data,
    },
  };
}
