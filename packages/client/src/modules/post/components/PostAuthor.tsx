import Image from "next/image";
import type { FC } from "react";
import type { Post } from "types/post";
import { urlFor } from "utils/sanity";

interface PostAuthorProps {
  post: Post;
}

const PostAuthor: FC<PostAuthorProps> = ({ post }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative h-10 w-10">
        {post.author.image && (
          <Image
            src={urlFor(post.author.image).url()!}
            alt={post.author.name}
            layout="fill"
            objectFit="contain"
            className="rounded-full"
          />
        )}
      </div>
      <p className="font-extralight text-xs">
        Blog post by <span className="text-green-600">{post.author.name}</span>{" "}
        - Published at {new Date(post["_createdAt"]).toLocaleString()}
      </p>
    </div>
  );
};

export default PostAuthor;
