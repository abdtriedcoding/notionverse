import { PaginationProps } from "@/types";
import Link from "next/link";
import React from "react";

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  return (
    <div className="max-w-2xl m-auto px-4 items-center flex flex-row justify-between">
      {currentPage > 1 && (
        <Link href={`/?page=${currentPage - 1}`} passHref>
          Previous
        </Link>
      )}

      {currentPage < totalPages && (
        <Link href={`/?page=${currentPage + 1}`} passHref>
          Next
        </Link>
      )}
    </div>
  );
};

export default Pagination;
