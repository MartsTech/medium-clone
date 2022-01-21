import Header from "components/header";
import Image from "next/image";
import { FC } from "react";
import { Post } from "types/post";
import { urlFor } from "utils/sanity";
import PostAuthor from "./components/PostAuthor";
import PostBody from "./components/PostBody";
import PostForm from "./components/PostForm";

interface PostProps {
  post: Post;
}

const Post: FC<PostProps> = ({ post }) => {
  return (
    <main>
      <Header />
      <div className="relative w-full h-40">
        {post.mainImage && (
          <Image
            src={urlFor(post.mainImage).url()!}
            alt={post.slug.current}
            layout="fill"
            objectFit="cover"
          />
        )}
      </div>
      <article className="max-w-3xl mx-auto p-5">
        <h1 className="text-3xl mt-10 mb-3">{post.title}</h1>
        <h2 className="text-xl font-light text-gray-500 mb-2">
          {post.description}
        </h2>
        <PostAuthor post={post} />
        <PostBody post={post} />
      </article>
      <hr className="max-w-lg my-5 mx-auto border border-yellow-500" />
      <PostForm post={post} />
    </main>
  );
};

export default Post;
