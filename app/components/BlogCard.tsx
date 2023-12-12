import Link from "next/link";
import { PostItem } from "@/types";
import { FormatDate } from "@/functions/DateFormatter";
import { Badge } from "@/components/ui/badge";

const BlogCard = ({ post }: { post: PostItem }) => {
  const { id, date, title, tags, summary, slug } = post;

  return (
    <Link href={`/${slug}?id=${id}`}>
      <div className="rounded-xl bg-slate-100 p-4 sm:p-6 shadow-sm h-full">
        <time className="block text-xs text-gray-500">{FormatDate(date)}</time>

        <h1 className="text-base font-medium mt-1">{title}</h1>

        <p className="mt-2 line-clamp-2 text-sm font-medium">{summary}</p>

        <div className="mt-4 flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <Badge key={index}>{tag}</Badge>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
