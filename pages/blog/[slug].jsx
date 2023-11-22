import BlogBanner from "app/components/Blog/BlogBanner";
import RelatedPost from "app/components/Blog/RelatedPost";
import CertificateBar from "app/components/Home/CertificateBar";
import CloudinaryImage from "app/components/common/CloudinaryImage";
import SectionHeader from "app/components/common/SectionHeader";
import Metatag from "app/components/metaTag";
import GetInTouch from "app/components/warehouse/GetInTouch";
import API_ENDPOINTS from "app/helpers/apiEndpoint";
import REQUEST from "app/helpers/http.service";
import { apiEndpoint } from "app/scripts/fetch";
import { generateFaqSchemas, getPages } from "app/scripts/utils";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
const BlogPage = dynamic(() => import("../../app/components/Blog/BlogPage"));
const SubscribeNewsletter = dynamic(() =>
  import("../../app/components/common/SubscribeNewsletter")
);

export default function BlogDetail({ res }) {
  const { blogsData, trusted, blogs } = JSON.parse(res);

  const router = useRouter();
  const canonicalUrl = (
    `${process.env.NEXT_PUBLIC_BASE_URL}` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  const { asPath } = useRouter();

  return (
    <main>
      <Head>
        <title>
          {blogsData?.attributes?.seo?.metaTitle ||
            blogsData?.attributes?.h1_black ||
            `VLink`}
        </title>
        <meta
          name="description"
          content={
            blogsData?.attributes?.seo?.metaDescription ||
            blogsData?.attributes?.description ||
            "Vlink Description"
          }
        />

        <meta
          property="og:title"
          content={
            blogsData?.attributes?.seo?.metaTitle ||
            blogsData?.attributes?.h1_black ||
            `Vlink`
          }
        />
        <meta
          property="og:description"
          content={
            blogsData?.attributes?.seo?.metaDescription ||
            blogsData?.attributes?.description ||
            "Vlink Description"
          }
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${asPath}`}
        />

        <Metatag
          content={apiEndpoint(
            blogsData?.attributes.seo?.metaImage?.data?.attributes?.url ||
              blogsData?.attributes?.section1?.image?.data?.attributes?.url
          )}
        />

        <link rel="canonical" href={canonicalUrl} />
      </Head>
      {blogsData?.attributes?.blog_faq !== null &&
        blogsData?.attributes?.blog_faq?.blog_faqs?.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                generateFaqSchemas(blogsData?.attributes?.blog_faq?.blog_faqs)
              ),
            }}
          />
        )}
      <SectionHeader
        isBreadcrumb={true}
        list={[
          { label: "Home", link: "/" },
          { label: "Blog", link: "/blog" },
          { label: "Blog Details" },
        ]}
      />
      {blogsData?.attributes?.banner && (
        <BlogBanner bannerData={blogsData?.attributes?.banner} />
      )}
      <section className="blog_detail_page">
        <BlogPage data={blogsData?.attributes} relatedPost={blogs} />
      </section>
      {blogsData?.attributes?.relatedPost == true ? (
        <RelatedPost relateddata={blogs} />
      ) : (
        ""
      )}
      <section className="md:py-[55px] py-[30px] ">
        <div className="bg-[url('/img/why-vlink-texture.svg')] bg-no-repeat bg-center bg-cover">
          <div className="container bg-[#0050D5] rounded-[15px] mdpy-[55px] py-[30px]">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:mb-[55px] mb-[30px]">
                <h6 className="lg:text-[50px] md:text-[45px] text-[22px] text-[#fff] font-[600] font-sans text-center">
                  Subscribe to Newsletter
                </h6>
              </div>
              <div className="xl:col-span-6 md:col-span-6 col-span-12 md:mb-0 mb-[25px]">
                <CloudinaryImage
                  backendImgUrl={
                    "/uploads/Mar_Business_18_Converted_1_30f9ed0dc2.png"
                  }
                  className=" max-w-[400px] mx-auto"
                  alt={"Subscribe Newsletter image"}
                  type="smallimg"
                />
              </div>
              <div className="SubscribeNewsletter xl:col-span-6 md:col-span-6 col-span-12">
                <SubscribeNewsletter />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-8">
        <CertificateBar isTrusted={true} section={trusted} />
      </section>
      <GetInTouch
        getintouch={blogsData?.attributes?.Get_in_touch}
        isBlog={true}
      />
    </main>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const [blogsData, trusted, blogs, blogdata] = await Promise.all([
    REQUEST({
      method: "GET",
      url: `/api/blog-details?[populate][0]=section1.avatar&populate[1]=section1.image&populate[2]=section.blog_links&populate[3]=section2&populate[4]=section3.avatar&populate[5]=section4&populate[6]=blog_faq.blog_faqs&populate[7]=banner.img&populate[8]=banner.auth_img&populate[9]=tab_content.list&populate[10]=side_share.social_list.icon&populate[11]=blog_details&populate[12]=ads_block.image&populate[13]=Get_in_touch.bg_img&populate[14]=Get_in_touch.gif_popup&populate[15]=Get_in_touch.gif_bg_img&populate[16]=seo.metaImage&filters[slug][$eq]=${slug}`,
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
  const res = JSON.stringify({
    blogsData: blogsData?.data?.data[0],
    trusted: trusted?.data?.data?.attributes,
    blogs: blogs?.data?.data,
  });
  return {
    props: { res },
  };
}

export async function getStaticPaths() {
  return await getPages(`/api/blog-details`);
}
