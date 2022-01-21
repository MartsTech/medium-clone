import type { FC } from "react";
import type { Post } from "types/post";
import PortableText from "react-portable-text";

interface PostBodyProps {
  post: Post;
}

const PostBody: FC<PostBodyProps> = ({ post }) => {
  return (
    <div className="mt-10">
      {/* @ts-ignore */}
      <PortableText
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        content={post.body as object[]}
        serializers={{
          h1: (props: any) => (
            <h1 className="text-2xl font-bold my-5" {...props} />
          ),
          h2: (props: any) => (
            <h2 className="text-2xl font-bold my-5" {...props} />
          ),
          li: ({ children }: any) => (
            <li className="ml-4 list-disc">{children}</li>
          ),
          link: ({ href, children }: any) => (
            <a href={href} className="text-blue-500 hover:underline">
              {children}
            </a>
          ),
        }}
      />
    </div>
  );
};

export default PostBody;
