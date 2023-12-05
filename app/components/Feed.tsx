import { PostItem } from "@/types";
import BlogCard from "./BlogCard";

export default function Feed({
  postsToShow,
}: {
  postsToShow: PostItem[];
}) {
  return (
    <div className="max-w-2xl m-auto px-4 min-h-full">
      {postsToShow.map((post:PostItem) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
