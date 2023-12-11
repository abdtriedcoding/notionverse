import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";
import notion from "@/lib";
import { convertToPost } from "@/functions/convertToPost";
import { FormatDate } from "@/functions/DateFormatter";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const { id } = searchParams;

  const response = await fetch(`https://notion-api.splitbee.io/v1/page/${id}`, {
    next: { revalidate: 60 },
  });
  const blockMap = await response.json();

  const pageProperties = await notion.pages.retrieve({ page_id: id });
  const postDetails = convertToPost(pageProperties);

  return (
    <div className="max-w-2xl m-auto px-4">
      <div>
        <h1 className="text-2xl font-semibold">{postDetails.title}</h1>
        <div className="py-4 flex items-center space-x-5">
          <h1 className="font-semibold text-sm">
            <span className="text-blue-500 text-lg">Craig Hart</span> /{" "}
            {FormatDate(postDetails.date)}
          </h1>{" "}
          <div className="flex flex-wrap gap-1">
            {postDetails.tags.map((tag, index) => (
              <span
                key={index}
                className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <NotionRenderer blockMap={blockMap} />
    </div>
  );
}
