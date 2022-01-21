import Banner from "components/banner";
import Header from "components/header";
import { FC } from "react";
import { Post } from "types/post";
import HomePost from "./components/HomePost";

interface HomeProps {
  posts: Post[];
}

const Home: FC<HomeProps> = ({ posts }) => {
  return (
    <main className="max-w-7xl mx-auto">
      <Header />
      <Banner />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        gap-3 md:gap-6 p-2 md:p-6"
      >
        {posts.map((post) => (
          <HomePost key={post["_id"]} post={post} />
        ))}
      </div>
    </main>
  );
};

export default Home;
