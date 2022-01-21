import Banner from "components/banner";
import Header from "components/header";
import { FC } from "react";
import { Post } from "types/post";

interface HomeProps {
  posts: Post[];
}

const Home: FC<HomeProps> = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Banner />
    </div>
  );
};

export default Home;
