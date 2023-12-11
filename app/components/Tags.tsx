import { Button } from "@/components/ui/button";
import { TagFrequencyMap } from "@/types";
import Link from "next/link";
import { useParams } from "next/navigation";

const Tags = ({ tagFrequencyMap }: { tagFrequencyMap: TagFrequencyMap }) => {
  const params = useParams();
  const { slug } = params;

  return (
    <div className="max-w-2xl space-x-3 overflow-x-auto whitespace-nowrap">
      {Object.entries(tagFrequencyMap).map(([tag, value], index) => {
        const selected = tag === slug;

        return (
          <Link href={selected ? "/search" : `/tag/${tag}`} key={index}>
            <Button className={selected ? "bg-gray-500" : ""}>
              {tag} <span className="ml-2">({value})</span>
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default Tags;
