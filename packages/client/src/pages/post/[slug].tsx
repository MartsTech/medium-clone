import Post from "modules/post";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import type { Post as PostType } from "types/post";
import { sanityClient } from "utils/sanity";

interface PostPageProps {
  post: PostType;
}

const PostPage: NextPage<PostPageProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>Mediun Clone - Post</title>
      </Head>
      <Post post={post} />
    </>
  );
};

export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == "post"]{
  _id,
  slug {
  current
  }
}`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: PostType) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  _createdAt,
  author -> {
    name,
    image
  },
  'comments': *[
    _type == "comment" &&
    post._ref == ^._id &&
    approved == true
  ],
  description,
  mainImage,
  slug,
  body,
  title
}`;

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 3600,
  };
};
