"use client";

import { Input } from "@/components/ui/input";
import { PostItem } from "@/types";
import { useState } from "react";
import BlogCard from "./BlogCard";

const Search = ({ publishedPosts }: { publishedPosts: PostItem[] }) => {
  const [searchValue, setSearchValue] = useState("");

  const filteredBlogPosts = publishedPosts.filter((post) => {
    const tagContent = post.tags ? post.tags.join(" ") : "";
    const searchContent = post.title + post.summary + tagContent;
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <>
      <div className="px-4 max-w-2xl mx-auto mb-5">
        <Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      {!filteredBlogPosts.length && (
        <p className="text-gray-500 text-center">No posts found.</p>
      )}

      <div className="max-w-2xl m-auto px-4 min-h-full">
        {filteredBlogPosts.map((post: PostItem) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default Search;
