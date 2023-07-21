import Footer from "../global/Footer";
import Head from "next/head";
import MobileNavbar from "../global/MobileNavbar";
import Navbar from "../global/Navbar";
import React, { ReactChildren } from "react";
import { DefaultSeoHeader } from "../seo-hoc/Index";
import { NEXT_SEO_DEFAULT } from "../seo-hoc/NEXT_SEO_SETTINGS";
import pg from "../../public/static/projects/grazac_academy.png";

function Page({ currentPage, meta: { title, desc }, children }: PageProps) {
  const pageTitle = `${
    currentPage === "Home"
      ? NEXT_SEO_DEFAULT.title
      : `${currentPage} - Mitchelinaju.com`
  }`;

  // console.log(currentPage);

  return (
    <div
      className="w-full m-auto flex flex-col items-center justify-center min-h-screen opening-box-animate-paddin text-white overflow-hidden md:overflow-visible"
      style={{ maxWidth: "1200px" }}
    >
      <Head>
        <title>{pageTitle}</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          // href="https://nextjs.org/favicon.ico"
          href="https://res.cloudinary.com/mitchelinaju/image/upload/v1689899976/mitchel-icon-32-bg_q6hrql.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta
          name="twitter:creator"
          content={NEXT_SEO_DEFAULT.twitter.handle}
          key="twhandle"
        />

        {/* Open Graph */}
        <meta
          property="og:url"
          content={NEXT_SEO_DEFAULT.openGraph.url}
          key="ogurl"
        />
        <meta
          property="og:image"
          content={NEXT_SEO_DEFAULT.image}
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content={NEXT_SEO_DEFAULT.title}
          key="ogsitename"
        />
        <meta
          property="og:title"
          content={NEXT_SEO_DEFAULT.title}
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={NEXT_SEO_DEFAULT.description}
          key="ogdesc"
        />
      </Head>
      {/* <DefaultSeoHeader
        title={NEXT_SEO_DEFAULT.title}
        description={NEXT_SEO_DEFAULT.description}
        url={NEXT_SEO_DEFAULT.openGraph.url}
        // canonical={NEXT_SEO_DEFAULT.canonical}
        image={NEXT_SEO_DEFAULT.image}
        authorName={NEXT_SEO_DEFAULT.authorName}
      /> */}

      <main className="p-5 w-full flex-1 text-center">
        <div className="hidden sm:block z-100">
          <Navbar currentPage={currentPage} />
        </div>
        <div className="-m-5 block sm:hidden z-100">
          <MobileNavbar />
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Page;

type PageProps = {
  currentPage: string;
  meta: {
    title?: string;
    desc: string;
  };
  children?: JSX.Element | JSX.Element[];
};
