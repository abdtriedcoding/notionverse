import { PostItem } from "@/types";
import BlogCard from "./BlogCard";

export default function Feed({
  publishedItems,
}: {
  publishedItems: PostItem[];
}) {
  return (
    <div className="max-w-2xl m-auto px-4 min-h-full">
      {publishedItems.map((post:PostItem) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
