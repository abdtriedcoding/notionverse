import { getAllPosts } from "@/functions/getAllPosts";
import Feed from "./components/Feed";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { PostItem } from "@/types";

const HomePage = async () => {
  const publishedPosts: PostItem[] = await getAllPosts();
  return (
    <>
      <Header />
      <Feed publishedPosts={publishedPosts} />
      <Footer />
    </>
  );
};

export default HomePage;
