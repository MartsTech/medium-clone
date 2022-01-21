import Home from "modules/home";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Post } from "types/post";
import { sanityClient } from "utils/sanity";

interface HomePageProps {
  posts: Post[];
}

const HomePage: NextPage<HomePageProps> = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <Head>
        <title>Mediun Clone - Home</title>
      </Head>
      <Home posts={posts} />
    </>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async () => {
  const query = `*[_type == "post"]{
  _id,
  title,
  description,
  mainImage,
  slug,
  author -> {
  name,
  image
}
}`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
