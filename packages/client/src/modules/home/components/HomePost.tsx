import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Post } from "types/post";
import { urlFor } from "utils/sanity";

interface HomePostProps {
  post: Post;
}

const HomePost: FC<HomePostProps> = ({ post }) => {
  return (
    <Link href={`/post/${post.slug.current}`} passHref>
      <div
        className="group cursor-pointer border rounded-lg 
        overflow-hidden"
      >
        {/* Main Image*/}
        <div
          className="relative h-60 w-full group-hover:scale-105
          transition-transform duration-200 ease-in-out"
        >
          {post.mainImage && (
            <Image
              src={urlFor(post.mainImage).url()!}
              alt="post"
              layout="fill"
              objectFit="cover"
            />
          )}
        </div>
        {/* Post Content */}
        <div className="flex justify-between p-5 bg-white">
          <div>
            <p className="text-lg font-bold">{post.title}</p>
            <p className="text-xs">
              {post.description} by {post.author.name}
            </p>
          </div>
          {/* Author Image */}
          <div className="relative h-12 w-12">
            {post.author.image && (
              <Image
                src={urlFor(post.author.image).url()!}
                alt="author"
                layout="fill"
                objectFit="contain"
                className="rounded-full"
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomePost;
