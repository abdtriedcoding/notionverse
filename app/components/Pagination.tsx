import { Button } from "@/components/ui/button";
import { PaginationProps } from "@/types";
import Link from "next/link";

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  return (
    <div
      className={`max-w-2xl m-auto px-4 items-center flex flex-row ${
        currentPage > 1 ? "justify-between" : "justify-end"
      }`}
    >
      {currentPage > 1 && (
        <Link href={`/?page=${currentPage - 1}`}>
          <Button>
            <span>&larr; Previous</span>
          </Button>
        </Link>
      )}

      {currentPage < totalPages && (
        <Link href={`/?page=${currentPage + 1}`}>
          <Button>
            <span>Next &rarr;</span>
          </Button>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
