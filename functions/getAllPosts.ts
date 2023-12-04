import notion from "@/lib";

export const getAllPosts = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID!;
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  const publishedItems = response?.results
    ?.map((item: any) => ({
      id: item.id,
      title: item.properties.title.title[0].text.content,
      date: item.properties.date.date.start,
      type: item.properties.type.select.name,
      slug: item.properties.slug.rich_text[0].text.content,
      status: item.properties.status.select.name,
      tags: item.properties.tags.multi_select.map(
        (tag: { name: any }) => tag.name
      ),
      summary: item.properties.summary.rich_text.map(
        (textObj: any) => textObj.text.content
      ),
      // Add more properties if needed
    }))
    .filter((item: any) => item.status === "Published");
  return publishedItems;
};
