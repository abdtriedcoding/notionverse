import Search from "@/app/components/Search";
import { getAllPosts } from "@/functions/getAllPosts";
import { calculateTagFrequency } from "@/functions/getAllTags";
import { getTagFilteredPosts } from "@/functions/tagFilteredPosts";
import { PostItem } from "@/types";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const tagFilteredPosts = await getTagFilteredPosts({ slug });
  const publishedPosts: PostItem[] = await getAllPosts();
  const tagFrequencyMap = await calculateTagFrequency({ publishedPosts });

  return (
    <>
      <Search
        publishedPosts={tagFilteredPosts}
        tagFrequencyMap={tagFrequencyMap}
      />
    </>
  );
}
