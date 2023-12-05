import { getAllPosts } from "@/functions/getAllPosts";
import { PostItem } from "@/types";
import Search from "../components/Search";
import { calculateTagFrequency } from "@/functions/getAllTags";

const SearchPage = async () => {
  const publishedPosts: PostItem[] = await getAllPosts();
  const tagFrequencyMap = await calculateTagFrequency({ publishedPosts });

  return (
    <>
      <Search
        publishedPosts={publishedPosts}
        tagFrequencyMap={tagFrequencyMap}
      />
    </>
  );
};

export default SearchPage;
