import Link from "next/link";
import { PostItem } from "@/types";
import { FormatDate } from "@/functions/DateFormatter";

const BlogCard = ({ post }: { post: PostItem }) => {
  const { id, date, title, tags, summary } = post;

  return (
    <Link href="/">
      <article
        key={id}
        className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:[animation-duration:_4s] mb-4"
      >
        <div className="rounded-[10px] bg-white p-4 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-gray-500">
            {FormatDate(date)}
          </time>

          <h3 className="mt-0.5 text-lg font-medium text-gray-900">{title}</h3>

          <p className="mt-2 line-clamp-2">{summary}</p>

          <div className="mt-4 space-x-1">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
