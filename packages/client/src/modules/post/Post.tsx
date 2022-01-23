import Header from "components/header";
import Image from "next/image";
import { FC, useState } from "react";
import { Post } from "types/post";
import { urlFor } from "utils/sanity";
import PostAuthor from "./components/PostAuthor";
import PostBody from "./components/PostBody";
import PostComment from "./components/PostComment";
import PostForm from "./components/PostForm";

interface PostProps {
  post: Post;
}

const Post: FC<PostProps> = ({ post }) => {
  const [submitted, setSubmitted] = useState(false);

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
            priority={true}
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
      {!submitted ? (
        <PostForm
          post={post}
          setSubmitted={(state: boolean) => setSubmitted(state)}
        />
      ) : (
        <div
          className="flex flex-col p-10 my-10 bg-yellow-500 
          text-white max-w-2xl mx-auto"
        >
          <h3 className="text-3xl font-bold">
            Thank you for submitting your comment!
          </h3>
          <p>Once it has been approved, it will apprear below!</p>
        </div>
      )}
      <div
        className="flex flex-col p-10 my-10 max-w-2xl mx-auto 
        shadow-yellow-500 shadow space-y-2"
      >
        <h3 className="text-4xl">Comments</h3>
        <hr className="pb-2" />
        {post.comments.map((comment) => (
          <PostComment key={comment["_id"]} comment={comment} />
        ))}
      </div>
    </main>
  );
};

export default Post;
