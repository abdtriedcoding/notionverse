import { PostItem } from "@/types";
import BlogCard from "./BlogCard";

export default function Feed({
  publishedPosts,
}: {
  publishedPosts: PostItem[];
}) {
  return (
    <div className="max-w-2xl m-auto px-4 min-h-full">
      {publishedPosts.map((post:PostItem) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
