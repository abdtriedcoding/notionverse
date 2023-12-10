import BlogCard from "@/app/components/BlogCard";
import { getTagFilteredPosts } from "@/functions/tagFilteredPosts";
import { PostItem } from "@/types";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const tagFilteredPosts = await getTagFilteredPosts({ slug });
  return (
    <>
      <div className="max-w-2xl m-auto px-4 min-h-full">
        {tagFilteredPosts.map((post: PostItem) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
