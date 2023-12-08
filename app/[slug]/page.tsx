import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";
import notion from "@/lib";
import { convertToPost } from "@/functions/convertToPost";
import { FormatDate } from "@/functions/DateFormatter";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TopScrollButton from "../components/TopScrollButton";
import md5 from "md5";
import { email } from "@/constants";

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

  // Gravator use for accessing profile Information
  const emailHash = md5(email.trim().toLowerCase());
  const profileUrl = `https://www.gravatar.com/${emailHash}.json`;
  const responsee = await fetch(profileUrl);
  const data = await responsee.json();

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-4xl font-bold">{postDetails.title}</h1>
        <div className="flex items-center mt-4 space-x-4">
          <Link href="/about">
            <Avatar>
              <AvatarImage src={data.entry[0].thumbnailUrl} alt="@shadcn" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
          </Link>
          <div>
            <Link
              href="/about"
              className="text-blue-500 hover:underline taiwlnd"
            >
              {data.entry[0].displayName}
            </Link>{" "}
            / {FormatDate(postDetails.date)}
            <p className="text-xs text-gray-500">Read: 4 minutes</p>
          </div>
          <div className="flex space-x-2">
            {postDetails.tags.map((tag, index) => (
              <Link href={`/tag/${tag}`} key={index}>
                <Badge key={index}>{tag}</Badge>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <NotionRenderer blockMap={blockMap} />
      <div>
        <Link href="/blogs">
          <Button>
            <span>&larr; Back</span>
          </Button>
        </Link>
      </div>
      <TopScrollButton />
    </div>
  );
}
