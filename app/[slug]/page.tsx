import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";

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

  return (
    <div className="max-w-2xl m-auto">
      <NotionRenderer blockMap={blockMap} />
    </div>
  );
}
