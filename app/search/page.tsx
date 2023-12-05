import { getAllPosts } from "@/functions/getAllPosts";
import { PostItem } from "@/types";
import Feed from "../components/Feed";
import { Input } from "@/components/ui/input";

const SearchPage = async () => {
  const publishedPosts: PostItem[] = await getAllPosts();

  return (
    <div>
      <div className="px-4 max-w-2xl mx-auto">
        <Input className="mb-5" />
      </div>

      <Feed postsToShow={publishedPosts} />
    </div>
  );
};

export default SearchPage;
