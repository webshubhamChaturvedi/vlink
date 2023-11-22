import { getPages } from "app/scripts/utils";
import axios from "axios";

export default async function handler(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/xml");

  // Instructing the Vercel edge to cache the file
  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  // gather dynamic paths
  // const apiParams = {
  //   fkPartnerId: config.API.partner_id,
  //   page: 1,
  //   limit: 100,
  // };

  const caseStudyPages = await getPages(`/api/case-study-details`);
  const dynamicCaseStudyPaths = caseStudyPages?.paths.map(
    (item) => item.params.slug
  );

  const blogPages = await getPages(`/api/blog-details`);
  const dynamicBlogPaths = blogPages?.paths.map((item) => item.params.slug);

  const podcastPages = await getPages(`/api/podcast-details`);
  const dynamicPodcastPaths = podcastPages?.paths.map(
    (item) => item.params.slug
  );

  const webinarPages = await getPages(`/api/webinar-details`);
  const dynamicWebinarPaths = webinarPages?.paths.map((item) => item.params.slug);

  const whitepaperPages = await getPages(`/api/whitepaper-details`);
  const dynamicWhitepaperPaths = whitepaperPages?.paths.map((item) => item.params.slug);

  const newsroomPages = await getPages(`/api/newsroom-stories`);
  const dynamicNewsroomPaths = newsroomPages?.paths.map((item) => item.params.slug);

  const hireDevPages = await getPages(`/api/developer-details`);
  const dynamicHireDevPaths = hireDevPages?.paths.map((item) => item.params.slug);

  const generateSitemap = () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
       <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          <url>
            <loc>${baseUrl}/</loc>
          </url>
          <url>
            <loc>${baseUrl}/case-study</loc>
          </url>
          ${dynamicCaseStudyPaths
            .map((ids) => {
              return `
            <url>
                <loc>${baseUrl}/case-study/${ids}</loc>
            </url>
          `;
            })
            .join("")}
          <url>
            <loc>${baseUrl}/podcast</loc>
          </url>
          ${dynamicPodcastPaths
            .map((ids) => {
              return `
            <url>
                <loc>${baseUrl}/podcast/${ids}</loc>
            </url>
          `;
            })
            .join("")}
          <url>
            <loc>${baseUrl}/blog</loc>
          </url>
          ${dynamicBlogPaths
            .map((ids) => {
              return `
            <url>
                <loc>${baseUrl}/blog/${ids}</loc>
            </url>
          `;
            })
            .join("")}
          <url>
            <loc>${baseUrl}/webinars</loc>
          </url>
          ${dynamicWebinarPaths
            .map((ids) => {
              return `
            <url>
                <loc>${baseUrl}/webinars/${ids}</loc>
            </url>
          `;
            })
            .join("")}
          <url>
            <loc>${baseUrl}/resources/brochures</loc>
          </url>
          <url>
            <loc>${baseUrl}/resources/whitepapers</loc>
          </url>
          ${dynamicWhitepaperPaths
            .map((ids) => {
              return `
            <url>
                <loc>${baseUrl}/resources/whitepapers/${ids}</loc>
            </url>
          `;
            })
            .join("")}
          <url>
            <loc>${baseUrl}/resources/newsroom</loc>
          </url>
          ${dynamicNewsroomPaths
            .map((ids) => {
              return `
            <url>
                <loc>${baseUrl}/resources/newsroom/${ids}</loc>
            </url>
          `;
            })
            .join("")}
          <url>
            <loc>${baseUrl}/resources/career</loc>
          </url>
          <url>
            <loc>${baseUrl}/about-us</loc>
          </url>
          <url>
            <loc>${baseUrl}/about-us/our-process</loc>
          </url>
          <url>
            <loc>${baseUrl}/about-us/contact-us</loc>
          </url>
          <url>
            <loc>${baseUrl}/about-us/faq</loc>
          </url>
          <url>
            <loc>${baseUrl}/about-us/corporate-social-responsibility</loc>
          </url>
          <url>
            <loc>${baseUrl}/services</loc>
          </url>
          <url>
            <loc>${baseUrl}/services/dedicated-teams</loc>
          </url>
          <url>
            <loc>${baseUrl}/services/it-staff-augmentation</loc>
          </url>
          <url>
            <loc>${baseUrl}/services/it-consulting</loc>
          </url>
          <url>
            <loc>${baseUrl}/services/product-engineering</loc>
          </url>
          <url>
            <loc>${baseUrl}/services/web-development-services</loc>
          </url>
          <url>
            <loc>${baseUrl}/services/mobile-app-development</loc>
          </url>
          <url>
            <loc>${baseUrl}/services/software-maintenance-support-services</loc>
          </url>
          <url>
            <loc>${baseUrl}/services/qa-software-testing-services</loc>
          </url>
          <url>
            <loc>${baseUrl}/services/re-engineering-legacy-products-and-apps</loc>
          </url>
          <url>
            <loc>${baseUrl}/services/cloud-devops-automation-services</loc>
          </url>
          <url>
            <loc>${baseUrl}/services/machine-learning-ai-development</loc>
          </url>
          <url>
            <loc>${baseUrl}/services/internet-of-things-iot</loc>
          </url>
          <url>
            <loc>${baseUrl}/services/cloud-managed-infrastructure-services</loc>
          </url>
          <url>
            <loc>${baseUrl}/hire-developers</loc>
          </url>
          ${dynamicHireDevPaths
            .map((ids) => {
              return `
            <url>
                <loc>${baseUrl}/hire-developers/${ids}</loc>
            </url>
          `;
            })
            .join("")}
          <url>
            <loc>${baseUrl}/industries</loc>
          </url>
          <url>
            <loc>${baseUrl}/industries/healthcare</loc>
          </url>
          <url>
            <loc>${baseUrl}/industries/banking-financial-services</loc>
          </url>
          <url>
            <loc>${baseUrl}/industries/manufacturing</loc>
          </url>
          <url>
            <loc>${baseUrl}/industries/telecom</loc>
          </url>
          <url>
            <loc>${baseUrl}/industries/ecommerce</loc>
          </url>
          <url>
            <loc>${baseUrl}/industries/media-entertainment</loc>
          </url>
          <url>
            <loc>${baseUrl}/industries/consumer-technology</loc>
          </url>
          <url>
            <loc>${baseUrl}/industries/education</loc>
          </url>
       </urlset>`;
    return sitemap;
  };

  const xml = generateSitemap();

  res.end(xml);
}
