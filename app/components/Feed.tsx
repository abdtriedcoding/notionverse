import { PostItem } from "@/types";
import BlogCard from "./BlogCard";

export default function Feed({ postsToShow }: { postsToShow: PostItem[] }) {
  return (
    <div className="py-6 grid gap-4 sm:grid-cols-2">
      {postsToShow.map((post: PostItem) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
