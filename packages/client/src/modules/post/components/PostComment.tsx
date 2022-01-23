import type { FC } from "react";
import type { Comment } from "types/post";

interface PostCommentProps {
  comment: Comment;
}

const PostComment: FC<PostCommentProps> = ({ comment }) => {
  return (
    <p>
      <span className="text-yellow-500">{comment.name}: </span>
      {comment.comment}
    </p>
  );
};

export default PostComment;
