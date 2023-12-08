import { getAllPosts } from "@/functions/getAllPosts";
import { PostItem } from "@/types";
import { postsPerPage } from "@/constants";
import Pagination from "../components/Pagination";
import Feed from "../components/Feed";

const HomePage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const page = Number(searchParams.page) || 1;

  const publishedPosts: PostItem[] = await getAllPosts();
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const postsToShow = publishedPosts.slice(startIndex, endIndex);
  const totalPosts = publishedPosts.length;

  return (
    <>
      <Feed postsToShow={postsToShow} />
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(totalPosts / postsPerPage)}
      />
    </>
  );
};

export default HomePage;
