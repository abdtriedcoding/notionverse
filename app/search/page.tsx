import { getAllPosts } from "@/functions/getAllPosts";
import { PostItem } from "@/types";
import Search from "../components/Search";

const SearchPage = async () => {
  const publishedPosts: PostItem[] = await getAllPosts();

  return (
    <>
      <Search publishedPosts={publishedPosts} />
    </>
  );
};

export default SearchPage;
