import React from "react";
import { ArticleJsonLd, DefaultSeo, NextSeo } from "next-seo";
import pg from "../../public/static/mitchel-icon.png";

interface IDefaultSeoHeader {
  title: string;
  description: string;
  url: string;
  canonical?: string;
  image: string;
  authorName: string;
}

export const DefaultSeoHeader = (props: IDefaultSeoHeader) => {
  const openGraphData = {
    type: "website",
    locale: "en_IE",
    url: props.url,
    siteName: "Mitchel Inaju",
  };
  const twitterData = {
    handle: "@mitchelinaju",
    site: "@site",
    cardType: "summary_large_image",
  };

  return (
    <>
      {" "}
      <DefaultSeo
        title={props.title}
        description={props.description}
        openGraph={openGraphData}
        twitter={twitterData}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url={props.url}
        title={props.title}
        images={[props.image]}
        datePublished="2022-06-21T23:04:13Z"
        dateModified="2022-06-21T23:04:13Z"
        authorName={props.authorName}
        description={props.description}
      />
    </>
  );
};

// export const BlogSeoHeader = (props: Props) => {
//   return (
//     <div>
//       {" "}
//       <meta charSet="utf-8" />
//       <meta name="viewport" content="width=device-width" />
//       <NextSeo
//         title="Manage SEO in NextJS with Next SEO"
//         description="Next SEO packages simplifies the SEO management in Next Apps with less configurations"
//         canonical="www.example.com/next-seo-blog"
//         openGraph={{
//           type: "article",
//           article: {
//             publishedTime: "2022-06-21T23:04:13Z",
//             modifiedTime: "2022-01-21T18:04:43Z",
//             authors: [
//               "https://www.example.com/authors/@firstnameA-lastnameA",
//               "https://www.example.com/authors/@firstnameB-lastnameB",
//             ],
//             tags: ["Tag A", "Tag B", "Tag C"],
//           },
//           url: "www.example.com/next-seo-blog",
//           images: {
//             url: "https://www.test.ie/images/cover.jpg",
//             width: 850,
//             height: 650,
//             alt: "Photo of text",
//           },
//           site_name: "Next Blog",
//         }}
//       />
//       <ArticleJsonLd
//         type="BlogPosting"
//         url="https://example.com/blog"
//         title="Manage SEO in NextJS with Next SEO"
//         images={[
//           "https://example.com/photos/1x1/photo.jpg",
//           "https://example.com/photos/4x3/photo.jpg",
//           "https://example.com/photos/16x9/photo.jpg",
//         ]}
//         datePublished="2022-06-21T23:04:13Z"
//         dateModified="2022-06-21T23:04:13Z"
//         authorName="Author Name"
//         description="Next SEO packages simplifies the SEO management in Next Apps with less configurations"
//       />
//     </div>
//   );
// };
