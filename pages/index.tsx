import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Page from "@/components/utility/Page";
// import Posts from "@/components/home/Posts";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Testimonials from "@/components/home/Testimonials";
import { GetStaticProps } from "next";
import getUserDataAndPosts from "@/utils/getPosts";
import { PostType, blogData } from "@/data/content/blog";
import { Blog } from "@/components/Blog";
// import { allPosts } from "contentlayer/generated";
// import { GetStaticProps } from "next";

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//       allPosts: allPosts.sort(({date: dateA}: any, {date: dateB}: any) => dateB - dateA),
//     },
//   };
// }
interface IHomeProps {
  Posts: [PostType];
}

export default function Home({Posts}:IHomeProps) {
  return (
    <Page currentPage="Home" meta={{ desc: "I'm a passionate web developer coding beautiful websites and apps." }}>
      <Hero />
      <div className="mt-20 space-y-32">
        <Projects />
        <Skills />
        <Testimonials />
        <Blog Posts={Posts} />

        {/* <Posts allPosts={allPosts} /> */}
      </div>
      <CTA />
    </Page>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  
  const Posts = await getUserDataAndPosts(blogData[0].username);

  return {
      props: {
          Posts: Posts.publication.posts,
      },
      revalidate: 600,
  };
};
