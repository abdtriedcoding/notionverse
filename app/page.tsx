import { getAllPosts } from "@/functions/getAllPosts";
import Feed from "./components/Feed";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { PostItem } from "@/types";

const HomePage = async () => {
  const publishedItems: PostItem[] = await getAllPosts();
  return (
    <>
      <Header />
      <Feed publishedItems={publishedItems} />
      <Footer />
    </>
  );
};

export default HomePage;
