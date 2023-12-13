import { Button } from "@/components/ui/button";
import { PaginationProps } from "@/types";
import Link from "next/link";

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  return (
    <div className="flex flex-row space-x-5 items-center justify-center">
      {currentPage > 1 && (
        <Link href={`/blogs?page=${currentPage - 1}`}>
          <Button>
            <span>&larr; Previous</span>
          </Button>
        </Link>
      )}

      {currentPage < totalPages && (
        <Link href={`/blogs?page=${currentPage + 1}`}>
          <Button>
            <span>Next &rarr;</span>
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
