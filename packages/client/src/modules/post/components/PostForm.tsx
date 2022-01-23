import type { FC } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { Post } from "types/post";

interface IFormInput {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

interface PostFormProps {
  post: Post;
  setSubmitted: (state: boolean) => void;
}

const PostForm: FC<PostFormProps> = ({ post, setSubmitted }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    fetch("/api/createComment", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        setSubmitted(true);
      })
      .catch((error) => {
        console.error(error);
        setSubmitted(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-5 max-w-2xl mx-auto mb-10"
    >
      <h3 className="text-sm text-yellow-500">Enjoyed this article?</h3>
      <h4 className="text-3xl font-bold">Leave a comment below!</h4>
      <hr className="py-3 mt-2" />
      <input
        {...register("_id")}
        type="hidden"
        name="_id"
        value={post["_id"]}
      />
      <label className="block mb-5">
        <span className="text-gray-700">Name</span>
        <input
          {...register("name", { required: true })}
          className="shadow border rounded py-2 px-3 form-input mt-1
          block w-full ring-yellow-500 outline-none focus:ring-2"
          placeholder="Martin Velkov"
          type="text"
        />
      </label>
      <label className="block mb-5">
        <span className="text-gray-700">Email</span>
        <input
          {...register("email", { required: true })}
          className="shadow border rounded py-2 px-3 form-input mt-1
          block w-full ring-yellow-500 outline-none focus:ring-2"
          placeholder="your@email.com"
          type="text"
        />
      </label>
      <label className="block mb-5">
        <span className="text-gray-700">Comment</span>
        <textarea
          {...register("comment", { required: true })}
          className="shadow border rounded py-2 px-3 form-textarea mt-1
          block w-full ring-yellow-500 outline-none focus:ring-2"
          placeholder="Enter some long comment"
          rows={8}
        />
      </label>
      <div className="flex flex-col p-5">
        {errors.name && (
          <span className="text-red-500">- The Name Field is required</span>
        )}
        {errors.email && (
          <span className="text-red-500">- The Email Field is required</span>
        )}
        {errors.comment && (
          <span className="text-red-500">- The Comment Field is required</span>
        )}
      </div>
      <input
        type="submit"
        className="shadow bg-yellow-500 hover:bg-yellow-400
        focus:shadow-outline focus:outline-none text-white font-bold
        py-2 px-4 rounded cursor-pointer"
      />
    </form>
  );
};

export default PostForm;
