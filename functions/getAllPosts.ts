import notion from "@/lib";
import { PostItem } from "@/types";
import { convertToPost } from "./convertToPost";

export const getAllPosts = async (): Promise<PostItem[]> => {
  const databaseId = process.env.NOTION_DATABASE_ID!;
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: 'date',
        direction: 'ascending',
      },
    ],
  });

  const publishedItems: PostItem[] = response.results.map((e) =>
    convertToPost(e)
  );
  const filteredPosts: PostItem[] = publishedItems.filter(
    (item) => item.status === "Published"
  );

  return filteredPosts;
};
