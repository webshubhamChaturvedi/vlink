import Metatag from "app/components/metaTag";
import Head from "next/head";
import Link from "next/link";

export default function Home({ homeData }) {
  return (
    <div>
      <Head>
        <title>VLink — Home</title>
        <Metatag content={`https://www.vlinkinfo.com/img/logopng.png`} />
        <meta name="robots" content="noindex, nofollow"></meta>
      </Head>
      <section className="py-14">
        <div className="container">
          <div className="md:grid grid-cols-12 gap-10 items-center">
            <div className="col-span-6">
              <h1 className="text-[#0C2139] font-bold text-[80px] leading-[70px] mb-1">
                404
              </h1>
              <label className="text-[#0C2139] font-semibold text-[22px] mb-5 block">
                This page does not exists :(
              </label>
              <p className="text-[#0C2139] text-[16px] mb-16 block max-w-[460px]">
                You can go to Vlink homepage or enjoy this pleasing remote
                location.
              </p>
              <Link
                href={"/"}
                className="w-full max-w-[340px] block p-4 text-center font-semibold rounded-[4px] bg-primary text-white text-[16px]"
              >
                Back to Vlink Homepage
              </Link>
            </div>
            <div className="col-span-6 mt-10 md:mt-0">
              <figure>
                <img src="/img/404.svg" alt="Vlink 404-image"></img>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
