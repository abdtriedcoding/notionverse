import { Button } from "@/components/ui/button";
import { calculateTagFrequency } from "@/functions/getAllTags";
import { PostItem } from "@/types";
import Link from "next/link";

const Tags = async ({ publishedPosts }: { publishedPosts: PostItem[] }) => {
  const tagFrequencyMap = await calculateTagFrequency({ publishedPosts });

  return (
    <div className="max-w-2xl space-x-3 overflow-x-auto whitespace-nowrap">
      {Object.entries(tagFrequencyMap).map(([tag, value], index) => (
        <Link href={`/tag/${tag}`}>
          <Button key={index}>
            {tag} <span className="ml-2">({value})</span>
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Tags;
