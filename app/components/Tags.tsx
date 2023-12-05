import { Button } from "@/components/ui/button";
import { TagFrequencyMap } from "@/types";
import Link from "next/link";

const Tags = ({ tagFrequencyMap }: { tagFrequencyMap: TagFrequencyMap }) => {
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
